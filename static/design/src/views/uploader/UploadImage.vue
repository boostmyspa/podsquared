<template>
    <div v-if="dragUploadEnable"
         class="upload-image-drag-zone"
         :class="isHovered ? 'hovered' : ''"
         :multiple="multiple"
         @dragover.prevent="isHovered = true"
         @dragenter.prevent
         @dragleave="isHovered = false"
         @drop.prevent="handleImage"
    >
        <slot></slot>
    </div>
    <label v-else class="upload-image">
        <slot></slot>
        <input type="file" name="imageLoader"
               :value="value"
               :multiple="multiple"
               :accept="acceptFileTypes.join(',')"
               @change="handleImage"
        >
    </label>
</template>

<script>
    import LoadImage from '../../util/loadImage';
    // import { mapState, /*mapActions*/ } from 'vuex';

    export default {
        name: "UploadImage",

        props: {
            label: {
                type: String
            },
            dragUploadEnable: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
        },

        data: () => {
            return {
                value: '',
                isHovered: false,
                acceptFileTypes: [
                    'image/bmp',
                    'image/jpg',
                    'image/jpeg',
                    'image/png',
                    'image/svg+xml',
                    'image/tiff'
                ]
            }
        },

        methods: {
            clearInput () {
               this.value = null
            },

            acceptImagesOnly (file) {
                const  fileType = file['type'];

                if (!this.acceptFileTypes.includes(fileType)) {
                    return null;
                }

                return file;
            },

            imageLoaded (imageSrc) {
                LoadImage(
                    (image) => {
                        this.$emit('uploadedImage', image);
                    },
                    imageSrc
                );
            },

            imageReader (file) {
                // upload only images
                let correctImageSrc = this.acceptImagesOnly(file);

                if (!correctImageSrc) {
                    console.warn('Uploaded file is not image type: ' + file);
                    return;
                }

                let reader = new FileReader();

                reader.onload = (event) => {
                    const imageSrc = event.target.result;

                    this.imageLoaded(imageSrc);
                };

                reader.readAsDataURL(correctImageSrc);
            },

            handleImage (e) {
                this.isHovered = false;

                // change value property before clear for trigger the reactivity
                this.value = '';

                let filesSrcArray = null;

                if (e.dataTransfer) {
                    // drop upload
                    filesSrcArray = e.dataTransfer.files;
                }
                else {
                    // input upload
                    filesSrcArray = e.target.files;
                }

                // if not multiple then select only first file
                if (!this.multiple) {
                    filesSrcArray = [filesSrcArray[0]];
                }

                filesSrcArray.forEach(this.imageReader);

                // clear the input[type="file"] value for load the same file few times
                this.clearInput();
            },

        },

        computed: {

        }
    }
</script>

<style scoped>

</style>