<template>
    <v-stage
            ref="stage"
            :config="stageConfig"
            @mousedown="handleStageMouseDown"
            @touchstart="handleStageMouseDown"
            @mouseover="isHovered = true"
            @mouseout="isHovered = false"
    >
        <background-product :boxContainer="stageConfig"></background-product>

        <v-layer>
            <v-group :config="designCropConfig">
                <v-group
                        note="main draggable image (the design)"
                        :config="{
                                name: 'designImage',
                                x: designImageConfig.x,
                                y: designImageConfig.y,
                                width: designImageConfig.width,
                                height: designImageConfig.height,
                                scaleX: designImageScaleX,
                                scaleY: designImageScaleY,
                                rotation: designImageConfig.rotation,
                                draggable: true,
                                dragBoundFunc: designImageDragBoundFunc,
                            }"
                        @dragstart="designImageDragStart"
                        @dragmove="designImageDrag"
                        @dragend="designImageDragEnd"
                        @transformstart="designImageTransformStart"
                        @transform="designImageTransform"
                        @transformend="designImageTransformEnd"
                >
                    <v-image
                            note="main draggable image (the design)"
                            :config="{
                                x: designImageConfig.width / 2,
                                y: designImageConfig.height / 2,
                                width: designImageConfig.width,
                                height: designImageConfig.height,
                                offsetX: designImageConfig.width / 2,
                                offsetY: designImageConfig.height / 2,
                                scaleX: designImageData.scaleX,
                                scaleY: designImageData.scaleY,
                                image: designImageData.image,
                                opacity: 0.5,
                            }"
                    ></v-image>
                </v-group>


                <v-group
                        note="crop image area (printable area)"
                        :config="{
                            clip: {
                                x: 0,
                                y: 0,
                                width: designCropConfig.width,
                                height: designCropConfig.height,
                            },
                            listening: false,
                        }"
                >
                    <v-group
                            note="cropped image (would be printed)"
                            :config="{
                                x: designImageData.x,
                                y: designImageData.y,
                                width: designImageData.width,
                                height: designImageData.height,
                                rotation: designImageData.rotation,
                                listening: false,
                            }"
                    >
                        <v-image
                                note="cropped image (would be printed)"
                                :config="{
                                x: designImageData.width / 2,
                                y: designImageData.height / 2,
                                width: designImageData.width,
                                height: designImageData.height,
                                offsetX: designImageData.width / 2,
                                offsetY: designImageData.height / 2,
                                scaleX: designImageData.scaleX,
                                scaleY: designImageData.scaleY,
                                image: designImageData.image,
                                listening: false,
                            }"

                        ></v-image>
                    </v-group>

                </v-group>

                <v-rect
                        note="border of the printable area"
                        :config="{
                            x: 0,
                            y: 0,
                            width: designCropConfig.width,
                            height: designCropConfig.height,
                            stroke: isHovered ? '#fff' : 'transparent',
                            strokeWidth: 1,
                            dash: [3, 2],
                            strokeScaleEnabled: false,
                            listening: false,
                        }"
                ></v-rect>
                <v-text
                        note="text under the printable area"
                        :config="{
                            x: -stageConfig.width / 2,
                            y: designCropConfig.height + 2,
                            width: stageConfig.width,
                            offsetX: -designCropConfig.width / 2,
                            text: 'PRINTABLE AREA',
                            fill: isHovered ? '#fff' : 'transparent',
                            fontFamily: 'Calibri',
                            fontSize: 12,
                            fontStyle: 'normal 900',
                            align: 'center',
                            letterSpacing: 1.5,
                            listening: false,
                        }"
                ></v-text>

                <v-line
                        note="the 'help' line for show the area center. Also image is stick to it on dragging"
                        :config="{
                            points: [
                                designCropConfig.width / 2,
                                0,
                                designCropConfig.width / 2,
                                designCropConfig.height,
                            ],
                            stroke: showHelpLineCenterX ? '#6C60FF' : 'transparent',
                            strokeWidth: 1,
                            dash: [3, 2],
                            strokeScaleEnabled: false,
                            listening: false,
                        }"
                ></v-line>
            </v-group>

            <v-transformer
                    ref="transformer"
                    :config="{
                        borderStroke: '#6C60FF',
                        anchorStroke: '#6C60FF',
                        // anchorCornerRadius: 10,
                        anchorSize: 8,
                        rotateAnchorOffset: 0,
                        rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
                        enabledAnchors: [ 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
                    }"
            ></v-transformer>
        </v-layer>
    </v-stage>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Konva from 'konva';
    import LoadImage from '../../util/loadImage';
    import ContainImageInBox from '../../util/ContainImageInBox';
    import BackgroundProduct from './BackgroundProduct';

    export default {
        name: "CanvasMain",

        components: {
            'background-product': BackgroundProduct,
        },

        data: () => {
            return {
                publicPath: process.env.BASE_URL,
                isTouchDevice: false,

                stageInitSize: {
                    width: 500,
                    height: 500,
                },

                stageConfig: {
                    width: 500,
                    height: 500,
                    offsetX: -0.5,
                    offsetY: -0.5,
                    scaleX: 1,
                    scaleY: 1,
                },

                // settings
                dragBoundStep: 5,

                // variables
                selectedShapeName: '',
                transformerRotaterImage: null,

                designImageScaleX: 1,
                designImageScaleY: 1,

                designImageConfigNormal: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    rotation: 0,
                },

                designImageConfigDragTransform: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    rotation: 0,
                },

                // states
                isHovered: false,
                showHelpLineCenterX: false,
                isDragTransform: false,
            }
        },

        methods: {
            ...mapActions([
                'setDesignImage',
                'setDesignImagePosition',
                'setDesignImageSize',
                'setDesignImageRotation',
                'resetDesignImageFlip',
            ]),

            designImageDragStart () {
                this.designImageConfigDragTransform = Object.assign({}, this.designImageConfigNormal);
                this.isDragTransform = true;
            },

            designImageDrag (e) {
                const target = e.target;
                const x = target.x();
                const y = target.y();

                this.setDesignImagePosition({ x, y });
            },

            designImageDragEnd (e) {
                const target = e.target;
                const x = target.x();
                const y = target.y();

                this.designImageConfigNormal.x = x;
                this.designImageConfigNormal.y = y;

                this.isDragTransform = false;
                this.showHelpLineCenterX = false;
            },

            designImageTransformStart () {
                // the same function
                this.designImageDragStart();
            },

            designImageTransform (e) {
                const target = e.target;
                const scale = target.scaleX();

                const x = target.x();
                const y = target.y();
                const width = target.width() * scale;
                const height = target.height() * scale;
                const rotation = target.rotation();

                this.setTransformerScale(scale);

                this.setDesignImagePosition({ x, y });
                this.setDesignImageSize({ width, height });
                this.setDesignImageRotation(rotation);
            },

            designImageTransformEnd (e) {
                const target = e.target;

                const x = target.x();
                const y = target.y();
                const width = target.width();
                const height = target.height();
                const rotation = target.rotation();

                this.designImageConfigNormal = {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    rotation: rotation,
                };

                this.isDragTransform = false;
            },

            handleStageMouseDown (e) {
                // clicked on stage - clear selection
                if (e.target === e.target.getStage()) {
                    this.selectedShapeName = '';
                    this.updateTransformer();
                    return;
                }

                // clicked on transformer - do nothing
                const clickedOnTransformer =
                    e.target.getParent().className === 'Transformer';
                if (clickedOnTransformer) {
                    return;
                }

                // const name = e.target.name();
                let designImageNode = e.target.findAncestor('.designImage', true);

                if (designImageNode) {
                    this.selectedShapeName = 'designImage';
                } else {
                    this.selectedShapeName = '';
                }
                this.updateTransformer();
            },

            updateTransformer () {
                // here we need to manually attach or detach Transformer node
                const transformerNode = this.$refs.transformer.getNode();
                const stage = transformerNode.getStage();
                const { selectedShapeName } = this;

                const selectedNode = stage.findOne('.' + selectedShapeName);
                // do nothing if selected node is already attached
                if (selectedNode === transformerNode.node()) {
                    return;
                }

                if (selectedNode) {
                    // attach to another node
                    transformerNode.nodes([selectedNode]);
                } else {
                    // remove transformer
                    transformerNode.nodes([]);
                }
                transformerNode.getLayer().batchDraw();
            },

            setTransformerScale (scale) {
                this.designImageScaleX = scale;
                this.designImageScaleY = scale;
            },

            updateTransformerRotater () {
                const self = this;
                const transformer = this.$refs.transformer.getNode();

                transformer.update = function () {
                    Konva.Transformer.prototype.update.call(transformer);
                    let rotater = this.findOne('.rotater');

                    rotater.y(-25);
                    rotater.width(24);
                    rotater.height(24);
                    rotater.offsetX(12);
                    rotater.offsetY(12);
                    rotater.strokeWidth(0);

                    rotater.fill(null);
                    rotater.fillPriority('pattern');
                    rotater.fillPatternRepeat('no-repeat');
                    rotater.fillPatternImage(self.transformerRotaterImage);
                };

                transformer.forceUpdate();
            },

            designImageUpdate () {
                const image = this.designImageData.image;

                if (!image) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    rotation: 0,
                };

                // check if image was created before
                if (this.designImageData.width) {
                    return {
                        x: this.designImageData.x,
                        y: this.designImageData.y,
                        width: this.designImageData.width,
                        height: this.designImageData.height,
                        rotation: this.designImageData.rotation,
                    }
                }

                // if it's new image
                const
                    box = this.designCropConfig,
                    boxHeight = box.height,
                    boxWidth = box.width;

                const imageSize = ContainImageInBox(image, box);

                let
                    x = (boxWidth - imageSize.width) / 2,
                    y = (boxHeight - imageSize.height) / 2,
                    width = imageSize.width,
                    height = imageSize.height,
                    rotation = 0;

                // save/init params to the storage
                this.setDesignImagePosition({ x, y });
                this.setDesignImageSize({ width, height });
                this.setDesignImageRotation(rotation);

                return {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    rotation: rotation,
                }
            },

            designImageDragBoundFunc: function  (pos) {
                // important pos - is absolute position of the node
                // you should return absolute position too

                // use scale on small devices
                const scale = this.stageConfig.scaleX;

                let
                    x = pos.x / scale,
                    y = pos.y / scale;

                const
                    box = this.designCropConfig,
                    // boxHeight = box.height,
                    boxWidth = box.width;

                const width = this.designImageData.width;
                const height = this.designImageData.height;
                const angle = this.designImageData.rotation * (Math.PI / 180);

                // center 'help' line position (absolute)
                const boxCenterX = box.x + boxWidth / 2;
                // const boxCenterY = box.y + boxHeight / 2;

                let imageCenterX =
                    x + ((x + width / 2) - x) * Math.cos(angle)
                    - ((y + height / 2) - y) * Math.sin(angle);

                // let imageCenterY =
                //     y + ((y + height / 2) - y) * Math.cos(angle)
                //     + ((x + width / 2) - x) * Math.sin(angle);

                // x position
                if (imageCenterX > boxCenterX - this.dragBoundStep && imageCenterX < boxCenterX + this.dragBoundStep) {

                    // new X absolute position for align canter of the image to the Help line
                    // its calc from boxCenterX and image center(diagonal center) position
                    x = boxCenterX + (height * Math.sin(angle) - width * Math.cos(angle)) / 2;
                }

                // showHelpLineCenterX (by boxCenterX)
                this.showHelpLineCenterX =
                    imageCenterX > boxCenterX - this.dragBoundStep * 2
                    &&
                    imageCenterX < boxCenterX + this.dragBoundStep * 2;

                x = x * scale;
                y = y * scale;

                return { x, y }
            },

            checkIsTouchDevice () {
                return (('ontouchstart' in window) ||
                    (navigator.maxTouchPoints > 0) ||
                    (navigator.msMaxTouchPoints > 0));
            },

            updateCanvasSize () {
                const container = document.getElementById('canvas-container');
                const containerWidth = container.offsetWidth;
                const stageWidth = this.stageConfig.width;
                let scale = 1;

                if (stageWidth >= containerWidth) {
                    scale = containerWidth / stageWidth;
                }

                this.stageConfig.scaleX = scale;
                this.stageConfig.scaleY = scale;
            },
        },

        computed: {
            ...mapState({
                designImageData: 'designImage',
                designCropArea: 'designCropArea',
                designCropCorrection: 'designCropCorrection',
            }),

            designCropConfig () {
                let width = this.designCropArea.width;
                let height = this.designCropArea.height;
                let xCorrection = this.designCropCorrection.x;
                let yCorrection = this.designCropCorrection.y;

                const
                    boxWidth = this.stageConfig.width,
                    boxHeight = this.stageConfig.height;

                return {
                    x: (boxWidth - width) / 2 + xCorrection,
                    y: (boxHeight - height) / 2 + yCorrection,
                    width: width,
                    height: height,
                }
            },

            designImageConfig () {
                return this.isDragTransform ? this.designImageConfigDragTransform : this.designImageConfigNormal;
            },

            designImage_image () {
                return this.designImageData.image;
            },

        },

        watch: {
            designImage_image () {
                // clear transformer
                this.selectedShapeName = '';
                this.updateTransformer();

                // reset transformer changes
                this.setTransformerScale(1);

                this.designImageConfigNormal = this.designImageUpdate();
            }
        },

        beforeMount () {
            const designImageSrc = this.designImageData.src;

            if (designImageSrc) {
                LoadImage(
                    (image) => {
                        this.setDesignImage(image);
                    },
                    designImageSrc
                );
            }
        },

        updated () {
            this.$nextTick( () => {
                this.updateTransformerRotater();
            })
        },

        mounted () {

            LoadImage(
                (image) => {
                    // transformer rotater icon
                    this.transformerRotaterImage = image;
                },
                `${this.publicPath}img/icons/rotate.png`
            );

            // init canvas size sets
            window.addEventListener('resize', this.updateCanvasSize, false);

            this.updateCanvasSize();

            // check if it's a TouchDevice
            this.isTouchDevice = this.checkIsTouchDevice();

            // show "printable area" on touch devices
            if (this.isTouchDevice) {
                this.isHovered = true;
            }
        }
    }
</script>

<style scoped>

</style>