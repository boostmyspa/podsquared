(function(e){function t(t){for(var i,r,s=t[0],o=t[1],d=t[2],m=0,h=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(t);while(h.length)h.shift()();return g.push.apply(g,d||[]),a()}function a(){for(var e,t=0;t<g.length;t++){for(var a=g[t],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(g.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},g=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=o;g.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=a("2f62");i["default"].use(n["a"]);var g=new n["a"].Store({state:{designImage:{imageOrigin:null,image:null,src:"",x:0,y:0,width:0,height:0,rotation:0,scaleX:1,scaleY:1},designImagePadSize:{width:500,height:500},designImageSizeWarning:"",backgroundImage:{id:1,src:"/img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg"},printArea:{width:4200,height:4800},designCropArea:{width:168,height:192},designCropCorrection:{x:0,y:0}},getters:{},mutations:{setDesignImageOrigin:function(e,t){e.designImage.imageOrigin=t,t&&(e.designImage.src=t.src)},setDesignImage:function(e,t){e.designImage.image=t},setDesignImagePosition:function(e,t){e.designImage.x=Math.round(t.x),e.designImage.y=Math.round(t.y)},setDesignImageSize:function(e,t){e.designImage.width=Math.round(t.width),e.designImage.height=Math.round(t.height)},setDesignImageRotation:function(e,t){e.designImage.rotation=t},setBackgroundImageId:function(e,t){e.backgroundImage.id=t},setBackgroundImageSrc:function(e,t){e.backgroundImage.src=t},flipDesignImageHorizontal:function(e){e.designImage.scaleX*=-1},flipDesignImageVertical:function(e){e.designImage.scaleY*=-1},resetDesignImageFlip:function(e){e.designImage.scaleX=1,e.designImage.scaleY=1},setDesignImageSizeWarning:function(e,t){e.designImageSizeWarning=t}},actions:{setDesignImageOrigin:function(e,t){var a=e.commit,i=e.dispatch;a("setDesignImageOrigin",t),i("setDesignImageSizeWarning",t)},setDesignImage:function(e,t){var a=e.commit;a("setDesignImage",t)},setDesignImagePosition:function(e,t){var a=e.commit;a("setDesignImagePosition",t)},setDesignImageSize:function(e,t){var a=e.commit;a("setDesignImageSize",t)},setDesignImageRotation:function(e,t){var a=e.commit;a("setDesignImageRotation",t)},setBackgroundImage:function(e,t){var a=e.commit,i=t.id,n=t.src;a("setBackgroundImageId",i),a("setBackgroundImageSrc",n)},flipDesignImageHorizontal:function(e){var t=e.commit;t("flipDesignImageHorizontal")},flipDesignImageVertical:function(e){var t=e.commit;t("flipDesignImageVertical")},resetDesignImageFlip:function(e){var t=e.commit;t("resetDesignImageFlip")},setDesignImageSizeWarning:function(e,t){var a=e.state,i=e.commit,n=a.printArea.width,g=a.printArea.height,r=t.width,s=t.height,o=Math.max(r/n,s/g),d="";o<1&&o>=.5?d="medium":o<.5&&(d="small"),i("setDesignImageSizeWarning",d)}}}),r=a("bc3a"),s=a.n(r),o=a("a7fe"),d=a.n(o),c=a("7591"),m=a.n(c),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"side-bar"},[a("p",[a("upload-image",{on:{uploadedImage:e.uploadedDesignImage}},[e._v(" Upload your design ")]),e.designImageSizeWarning?[a("br"),"medium"==e.designImageSizeWarning?a("span",{staticClass:"alert-warning"},[e._v("Image have Medium quality size")]):e._e(),"small"==e.designImageSizeWarning?a("span",{staticClass:"alert-danger"},[e._v("Image have Small quality size")]):e._e()]:e._e()],2),a("p",[a("button",{on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.flipDesignImageHorizontal(t)}}},[a("i",{staticClass:"icon-flip-horizontal",attrs:{title:"Flip horizontal"}})]),e._v(" "),a("button",{on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.flipDesignImageVertical(t)}}},[a("i",{staticClass:"icon-flip-vertical",attrs:{title:"Flip vertical"}})])]),a("button",{on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.getDesignImageData(t)}}},[e._v("Get Data")]),a("p",[e._v(" x: "+e._s(e.designImage.x)+" "),a("br"),e._v(" y: "+e._s(e.designImage.y)+" "),a("br"),e._v(" width: "+e._s(e.designImage.width)+" "),a("br"),e._v(" height: "+e._s(e.designImage.height)+" "),a("br"),e._v(" rotation: "+e._s(e.designImage.rotation)+" ")])]),a("div",{staticClass:"canvas-container"},[a("canvas-main"),a("canvas-design-image-pad")],1),a("products-list")],1)},u=[],f=a("5530"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dragUploadEnable?a("div",{staticClass:"upload-image-drag-zone",class:e.isHovered?"hovered":"",attrs:{multiple:e.multiple},on:{dragover:function(t){t.preventDefault(),e.isHovered=!0},dragenter:function(e){e.preventDefault()},dragleave:function(t){e.isHovered=!1},drop:function(t){return t.preventDefault(),e.handleImage(t)}}},[e._t("default")],2):a("label",{staticClass:"upload-image"},[e._t("default"),a("input",{attrs:{type:"file",name:"imageLoader",multiple:e.multiple,accept:e.acceptFileTypes.join(",")},domProps:{value:e.value},on:{change:e.handleImage}})],2)},p=[],I=(a("4160"),a("caad"),a("2532"),a("159b"),function(e,t){var a=new Image;a.onload=function(a){var i=a.path[0];e(i,t)},a.src=t}),b={name:"UploadImage",props:{label:{type:String},dragUploadEnable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},data:function(){return{value:"",isHovered:!1,acceptFileTypes:["image/bmp","image/jpg","image/jpeg","image/png","image/svg+xml","image/tiff"]}},methods:{clearInput:function(){this.value=null},acceptImagesOnly:function(e){var t=e["type"];return this.acceptFileTypes.includes(t)?e:null},imageLoaded:function(e){var t=this;I((function(e){t.$emit("uploadedImage",e)}),e)},imageReader:function(e){var t=this,a=this.acceptImagesOnly(e);if(a){var i=new FileReader;i.onload=function(e){t.imageLoaded(e.target.result)},i.readAsDataURL(a)}else console.warn("Uploaded file is not image type: "+e)},handleImage:function(e){this.isHovered=!1,this.value="";var t=null;t=e.dataTransfer?e.dataTransfer.files:e.target.files,this.multiple||(t=[t[0]]),t.forEach(this.imageReader),this.clearInput()}},computed:{}},v=b,D=a("2877"),C=Object(D["a"])(v,l,p,!1,null,"95cffd32",null),w=C.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"products-list"},e._l(e.images,(function(t){return a("img",{key:t.id,class:e.backgroundImageId==t.id?"active":"",attrs:{src:t.src,alt:""},on:{click:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"left",37,a.key,["Left","ArrowLeft"])||"button"in a&&0!==a.button?null:e.setImage(t)}}})})),0)},S=[],k={name:"ProductsList",data:function(){return{images:[{id:1,src:"/img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg"},{id:2,src:"/img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg"}]}},methods:Object(f["a"])(Object(f["a"])({},Object(n["b"])(["setBackgroundImage"])),{},{setImage:function(e){this.setBackgroundImage(e)}}),computed:Object(f["a"])(Object(f["a"])({},Object(n["c"])(["backgroundImage"])),{},{backgroundImageId:function(){return this.backgroundImage.id},backgroundImageSrc:function(){return this.backgroundImage.src}})},x=k,O=Object(D["a"])(x,y,S,!1,null,"4e75196c",null),_=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-stage",{ref:"stage",attrs:{config:e.stageConfig},on:{mousedown:e.handleStageMouseDown,touchstart:e.handleStageMouseDown,mouseover:function(t){e.isHovered=!0},mouseout:function(t){e.isHovered=!1}}},[a("background-product",{attrs:{boxContainer:e.stageConfig}}),a("v-layer",[a("v-group",{attrs:{config:e.designCropConfig}},[a("v-group",{attrs:{note:"main draggable image (the design)",config:{name:"designImage",x:e.designImageConfig.x,y:e.designImageConfig.y,width:e.designImageConfig.width,height:e.designImageConfig.height,image:e.designImageData.image,scaleX:e.designImageScaleX,scaleY:e.designImageScaleY,rotation:e.designImageRotation,draggable:!0,dragBoundFunc:e.designImageDragBoundFunc}},on:{dragstart:e.designImageDragStart,dragmove:e.designImageDrag,dragend:e.designImageDragEnd,transformstart:e.designImageTransformStart,transform:e.designImageTransform,transformend:e.designImageTransformEnd}},[a("v-image",{attrs:{note:"main draggable image (the design)",config:{x:e.designImageConfig.width/2,y:e.designImageConfig.height/2,width:e.designImageConfig.width,height:e.designImageConfig.height,offsetX:e.designImageConfig.width/2,offsetY:e.designImageConfig.height/2,scaleX:e.designImageData.scaleX,scaleY:e.designImageData.scaleY,image:e.designImageData.image,opacity:.5}}})],1),a("v-group",{attrs:{note:"crop image area (printable area)",config:{clip:{x:0,y:0,width:e.designCropConfig.width,height:e.designCropConfig.height},listening:!1}}},[a("v-group",{attrs:{note:"cropped image (would be printed)",config:{x:e.designImageData.x,y:e.designImageData.y,width:e.designImageData.width,height:e.designImageData.height,rotation:e.designImageData.rotation,listening:!1}}},[a("v-image",{attrs:{note:"cropped image (would be printed)",config:{x:e.designImageData.width/2,y:e.designImageData.height/2,width:e.designImageData.width,height:e.designImageData.height,offsetX:e.designImageData.width/2,offsetY:e.designImageData.height/2,scaleX:e.designImageData.scaleX,scaleY:e.designImageData.scaleY,image:e.designImageData.image,listening:!1}}})],1)],1),a("v-rect",{attrs:{note:"border of the printable area",config:{x:0,y:0,width:e.designCropConfig.width,height:e.designCropConfig.height,stroke:e.isHovered?"#fff":"transparent",strokeWidth:1,dash:[3,2],strokeScaleEnabled:!1,listening:!1}}}),a("v-text",{attrs:{note:"text under the printable area",config:{x:-e.stageConfig.width/2,y:e.designCropConfig.height+2,width:e.stageConfig.width,offsetX:-e.designCropConfig.width/2,text:"PRINTABLE AREA",fill:e.isHovered?"#fff":"transparent",fontFamily:"Calibri",fontSize:12,fontStyle:"normal 900",align:"center",letterSpacing:1.5,listening:!1}}}),a("v-line",{attrs:{note:"the 'help' line for show the area center. Also image is stick to it on dragging",config:{points:[e.designCropConfig.width/2,0,e.designCropConfig.width/2,e.designCropConfig.height],stroke:e.showHelpLineCenterX?"#6C60FF":"transparent",strokeWidth:1,dash:[3,2],strokeScaleEnabled:!1,listening:!1}}})],1),a("v-transformer",{ref:"transformer",attrs:{config:{borderStroke:"#6C60FF",anchorStroke:"#6C60FF",anchorSize:8,rotateAnchorOffset:0,rotationSnaps:[0,45,90,135,180,225,270,315],enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}}})],1)],1)},z=[],T=(a("cb29"),a("362d")),P=a.n(T),B=function(e,t){var a,i,n=e.width,g=e.height,r=t.width,s=t.height,o=Math.min(r/n,s/g);return o>=1?(a=n,i=g):(a=n*o,i=g*o),{width:a,height:i}},M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layer",[a("v-image",{attrs:{config:e.backgroundImageConfig}})],1)},R=[],X={name:"backgroundProduct",props:["boxContainer"],data:function(){return{backgroundImage:null}},computed:Object(f["a"])(Object(f["a"])({},Object(n["c"])({backgroundImageData:"backgroundImage"})),{},{backgroundImageSrc:function(){return this.backgroundImageData.src},backgroundImageConfig:function(){if(!this.backgroundImage)return{width:0,height:0};var e=this.backgroundImage,t=this.boxContainer,a=t.width,i=t.height,n=B(e,t),g=n.width,r=n.height;return{image:this.backgroundImage,x:-g/2,y:-r/2,width:g,height:r,offsetX:-a/2,offsetY:-i/2}}}),watch:{backgroundImageSrc:function(){var e=this;I((function(t){e.backgroundImage=t}),this.backgroundImageData.src)}},beforeMount:function(){var e=this,t=this.backgroundImageData.src;t&&I((function(t){e.backgroundImage=t}),t)}},A=X,F=Object(D["a"])(A,M,R,!1,null,"5b2b144c",null),H=F.exports,L={name:"CanvasMain",components:{"background-product":H},data:function(){return{stageConfig:{width:500,height:500,offsetX:-.5,offsetY:-.5},dragBoundStep:5,selectedShapeName:"",transformerRotaterImage:null,designImageScaleX:1,designImageScaleY:1,designImageRotation:0,designImageConfigNormal:{x:0,y:0,width:0,height:0},designImageConfigDragTransform:{x:0,y:0,width:0,height:0},isHovered:!1,showHelpLineCenterX:!1,isDragTransform:!1}},methods:Object(f["a"])(Object(f["a"])({},Object(n["b"])(["setDesignImage","setDesignImagePosition","setDesignImageSize","setDesignImageRotation","resetDesignImageFlip"])),{},{designImageDragStart:function(){this.designImageConfigDragTransform=Object.assign({},this.designImageConfigNormal),this.isDragTransform=!0},designImageDrag:function(e){var t=e.target,a=t.x(),i=t.y();this.setDesignImagePosition({x:a,y:i})},designImageDragEnd:function(e){var t=e.target,a=t.x(),i=t.y();this.designImageConfigNormal.x=a,this.designImageConfigNormal.y=i,this.isDragTransform=!1},designImageTransformStart:function(){this.designImageDragStart()},designImageTransform:function(e){var t=e.target,a=t.scaleX(),i=t.x(),n=t.y(),g=t.width()*a,r=t.height()*a,s=t.rotation();this.designImageScaleX=a,this.designImageScaleY=a,this.designImageRotation=s,this.setDesignImagePosition({x:i,y:n}),this.setDesignImageSize({width:g,height:r}),this.setDesignImageRotation(s)},designImageTransformEnd:function(e){var t=e.target,a=t.x(),i=t.y(),n=t.width(),g=t.height();this.designImageConfigNormal={x:a,y:i,width:n,height:g},this.isDragTransform=!1},handleStageMouseDown:function(e){if(e.target===e.target.getStage())return this.selectedShapeName="",void this.updateTransformer();var t="Transformer"===e.target.getParent().className;if(!t){var a=e.target.findAncestor(".designImage",!0);this.selectedShapeName=a?"designImage":"",this.updateTransformer()}},updateTransformer:function(){var e=this.$refs.transformer.getNode(),t=e.getStage(),a=this.selectedShapeName,i=t.findOne("."+a);i!==e.node()&&(i?e.nodes([i]):e.nodes([]),e.getLayer().batchDraw())},updateTransformerRotater:function(){var e=this,t=this.$refs.transformer.getNode();t.update=function(){P.a.Transformer.prototype.update.call(t);var a=this.findOne(".rotater");a.y(-25),a.width(24),a.height(24),a.offsetX(12),a.offsetY(12),a.strokeWidth(0),a.fill(null),a.fillPriority("pattern"),a.fillPatternRepeat("no-repeat"),a.fillPatternImage(e.transformerRotaterImage)},t.forceUpdate()},designImageUpdate:function(){var e=this.designImageData.image,t=this.designCropConfig,a=t.height,i=t.width,n=B(e,t),g=(i-n.width)/2,r=(a-n.height)/2,s=n.width,o=n.height,d=0;return this.setDesignImagePosition({x:g,y:r}),this.setDesignImageSize({width:s,height:o}),this.setDesignImageRotation(d),{x:g,y:r,width:s,height:o}},designImageDragBoundFunc:function(e){var t=e.x,a=e.y,i=this.designCropConfig,n=i.width,g=this.designImageData.width,r=this.designImageData.height,s=this.designImageData.rotation*(Math.PI/180),o=i.x+n/2,d=t+(t+g/2-t)*Math.cos(s)-(a+r/2-a)*Math.sin(s);return d>o-this.dragBoundStep&&d<o+this.dragBoundStep&&(t=o+(r*Math.sin(s)-g*Math.cos(s))/2),this.showHelpLineCenterX=d>o-2*this.dragBoundStep&&d<o+2*this.dragBoundStep,{x:t,y:a}}}),computed:Object(f["a"])(Object(f["a"])({},Object(n["c"])({designImageData:"designImage",designCropArea:"designCropArea",designCropCorrection:"designCropCorrection"})),{},{designCropConfig:function(){var e=this.designCropArea.width,t=this.designCropArea.height,a=this.designCropCorrection.x,i=this.designCropCorrection.y,n=this.stageConfig.width,g=this.stageConfig.height;return{x:(n-e)/2+a,y:(g-t)/2+i,width:e,height:t}},designImageConfig:function(){return this.isDragTransform?this.designImageConfigDragTransform:this.designImageConfigNormal},designImage_image:function(){return this.designImageData.image}}),watch:{designImage_image:function(){this.selectedShapeName="",this.updateTransformer(),this.designImageScaleX=1,this.designImageScaleY=1,this.designImageRotation=0,this.designImageConfigNormal=this.designImageUpdate(),this.resetDesignImageFlip()}},beforeMount:function(){var e=this,t=this.designImageData.src;t&&I((function(t){e.setDesignImage(t)}),t)},updated:function(){this.$nextTick((function(){this.updateTransformerRotater()}))},mounted:function(){var e=this;I((function(t){e.transformerRotaterImage=t}),"img/icons/rotate.png")}},E=L,N=Object(D["a"])(E,j,z,!1,null,"28b98988",null),Y=N.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-image-pag"},[a("v-stage",{ref:"stage",attrs:{config:e.config}},[a("v-layer",[a("v-image",{attrs:{config:e.config}})],1)],1)],1)},$=[],U={name:"designImagePad",data:function(){return{config:{width:500,height:500}}},methods:Object(f["a"])(Object(f["a"])({},Object(n["b"])(["setDesignImage"])),{},{setImageSize:function(e){var t,a,i=this,n=e.width,g=e.height,r=this.maxSize.width,s=this.maxSize.height,o=Math.min(r/n,s/g);o>=1?(t=n,a=g):(t=n*o,a=g*o),this.config.width=t,this.config.height=a,this.config.image=e;var d=setTimeout((function(){i.saveImage(),clearTimeout(d)}))},saveImage:function(){var e=this,t=this.$refs.stage.getNode();t.toImage({callback:function(t){e.setDesignImage(t)}})}}),computed:Object(f["a"])(Object(f["a"])({},Object(n["c"])({designImageData:"designImage",maxSize:"designImagePadSize"})),{},{imageSrc:function(){return this.designImageData.src}}),watch:{imageSrc:function(){var e=this;I((function(t){e.setImageSize(t)}),this.imageSrc)}}},V=U,G=Object(D["a"])(V,W,$,!1,null,"1bb19983",null),q=G.exports,J={name:"App",components:{"upload-image":w,"products-list":_,"canvas-main":Y,"canvas-design-image-pad":q},methods:Object(f["a"])(Object(f["a"])({},Object(n["b"])(["setDesignImageOrigin","flipDesignImageHorizontal","flipDesignImageVertical"])),{},{getDesignImageData:function(){console.log(this.designImage)},uploadedDesignImage:function(e){this.setDesignImageOrigin(e)}}),computed:Object(f["a"])({},Object(n["c"])(["designImage","designImageSizeWarning"]))},K=J,Q=Object(D["a"])(K,h,u,!1,null,"d3b00936",null),Z=Q.exports;i["default"].config.productionTip=!1,i["default"].use(d.a,s.a),i["default"].use(m.a),new i["default"]({render:function(e){return e(Z)},store:g}).$mount("#app")}});
//# sourceMappingURL=app.js.map