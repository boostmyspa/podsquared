(function(e){function t(t){for(var i,r,o=t[0],c=t[1],d=t[2],l=0,u=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);g&&g(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={index:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/design/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var g=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=a("2f62"),s=(a("c740"),a("4160"),a("a434"),a("159b"),"/static/design/"),r={namespaced:!0,state:{products:[{id:1,title:"T-Shirt Gildan HeatherBerry",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg",description:"T-Shirt Description text goes here",colors:[{title:"brown",color:"#CBA876",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg",selected:!1},{title:"d-brown",color:"#956743",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg",selected:!1},{title:"orange",color:"#FABB98",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg",selected:!1}],selected:!1},{id:2,title:"T-Shirt Gildan HeatherBronze",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg",description:"T-Shirt Description text goes here",colors:[{title:"gray",color:"#BCBBC1",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg",selected:!1},{title:"l-brown",color:"#E9D8C4",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg",selected:!1},{title:"brown",color:"#CBA876",src:s+"img/t-shirt/Gildan64000_WhiteBackground_HeatherBerry.jpg",selected:!1}],selected:!1}],selectedProducts:[]},getters:{getSelectedProductIndexById:function(e){return function(t){return e.selectedProducts.findIndex((function(e){return e.id==t}))}}},mutations:{add:function(e,t){e.selectedProducts.push(t)},remove:function(e,t){e.selectedProducts.splice(t,1)},setProductSelect:function(e,t){var a=t.product,n=t.selected;i["default"].set(a,"selected",n)},setProductColor:function(e,t){var a=t.colorItem,n=t.selected;i["default"].set(a,"selected",n)}},actions:{addProduct:function(e,t){var a=e.commit;a("add",t),a("setProductSelect",{product:t,selected:!0})},removeProduct:function(e,t){var a=e.getters,i=e.commit,n=a.getSelectedProductIndexById(t.id);i("remove",n),i("setProductSelect",{product:t,selected:!1}),t.colors.forEach((function(e){i("setProductColor",{colorItem:e,selected:!1})}))},setFirstProduct:function(e){var t=e.state,a=e.dispatch;a("addProduct",t.products[0])},toggleProductColor:function(e,t){var a=e.commit,i=!t.selected;a("setProductColor",{colorItem:t,selected:i})}}};i["default"].use(n["a"]);var o=new n["a"].Store({modules:{products:r},state:{designImage:{imageOrigin:null,image:null,src:"",x:0,y:0,width:0,height:0,rotation:0,scaleX:1,scaleY:1},designImagePadSize:{width:500,height:500},designImageSizeWarning:"",backgroundImage:{id:1,src:"/img/t-shirt/Gildan64000_WhiteBackground_HeatherBronze.jpg"},printArea:{width:4200,height:4800},designCropArea:{width:168,height:192},designCropCorrection:{x:0,y:0}},getters:{},mutations:{setDesignImageOrigin:function(e,t){e.designImage.imageOrigin=t,t&&(e.designImage.src=t.src)},setDesignImage:function(e,t){e.designImage.image=t},setDesignImagePosition:function(e,t){e.designImage.x=Math.round(t.x),e.designImage.y=Math.round(t.y)},setDesignImageSize:function(e,t){e.designImage.width=Math.round(t.width),e.designImage.height=Math.round(t.height)},setDesignImageRotation:function(e,t){e.designImage.rotation=t},setBackgroundImageId:function(e,t){e.backgroundImage.id=t},setBackgroundImageSrc:function(e,t){e.backgroundImage.src=t},flipDesignImageHorizontal:function(e){e.designImage.scaleX*=-1},flipDesignImageVertical:function(e){e.designImage.scaleY*=-1},resetDesignImageFlip:function(e){e.designImage.scaleX=1,e.designImage.scaleY=1},setDesignImageSizeWarning:function(e,t){e.designImageSizeWarning=t}},actions:{setDesignImageOrigin:function(e,t){var a=e.commit,i=e.dispatch;a("setDesignImageOrigin",t),i("setDesignImageSizeWarning",t)},setDesignImage:function(e,t){var a=e.commit;a("setDesignImage",t)},setDesignImagePosition:function(e,t){var a=e.commit;a("setDesignImagePosition",t)},setDesignImageSize:function(e,t){var a=e.commit;a("setDesignImageSize",t)},setDesignImageRotation:function(e,t){var a=e.commit;a("setDesignImageRotation",t)},setBackgroundImage:function(e,t){var a=e.commit,i=t.id,n=t.src;a("setBackgroundImageId",i),a("setBackgroundImageSrc",n)},flipDesignImageHorizontal:function(e){var t=e.commit;t("flipDesignImageHorizontal")},flipDesignImageVertical:function(e){var t=e.commit;t("flipDesignImageVertical")},resetDesignImageFlip:function(e){var t=e.commit;t("resetDesignImageFlip")},setDesignImageSizeWarning:function(e,t){var a=e.state,i=e.commit,n=a.printArea.width,s=a.printArea.height,r=t.width,o=t.height,c=Math.max(r/n,o/s),d="";c<1&&c>=.5?d="medium":c<.5&&(d="small"),i("setDesignImageSizeWarning",d)}}}),c=a("bc3a"),d=a.n(c),g=a("a7fe"),l=a.n(g),u=a("7591"),m=a.n(u),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("glamour-container")],1)},f=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"glamour"},[a("div",{staticClass:"glamour__wrapper w-100"},[e._m(0),a("div",{staticClass:"content_glamour"},[a("div",{staticClass:"row no-gutters w-100 h-100"},[a("div",{staticClass:"col-xl-8 col-md-7"},[a("div",{staticClass:"img__glamour"},[a("div",{staticClass:"canvas-container"},[a("canvas-main"),a("canvas-design-image-pad")],1)])]),a("div",{staticClass:"col-xl-4 col-md-5"},[a("sidebar")],1)])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"step_small d-block d-md-none"},[a("span",[e._v("Step 3")]),a("p",[e._v("Change")])])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-stage",{ref:"stage",attrs:{config:e.stageConfig},on:{mousedown:e.handleStageMouseDown,touchstart:e.handleStageMouseDown,mouseover:function(t){e.isHovered=!0},mouseout:function(t){e.isHovered=!1}}},[a("background-product",{attrs:{boxContainer:e.stageConfig}}),a("v-layer",[a("v-group",{attrs:{config:e.designCropConfig}},[a("v-group",{attrs:{note:"main draggable image (the design)",config:{name:"designImage",x:e.designImageConfig.x,y:e.designImageConfig.y,width:e.designImageConfig.width,height:e.designImageConfig.height,image:e.designImageData.image,scaleX:e.designImageScaleX,scaleY:e.designImageScaleY,rotation:e.designImageRotation,draggable:!0,dragBoundFunc:e.designImageDragBoundFunc}},on:{dragstart:e.designImageDragStart,dragmove:e.designImageDrag,dragend:e.designImageDragEnd,transformstart:e.designImageTransformStart,transform:e.designImageTransform,transformend:e.designImageTransformEnd}},[a("v-image",{attrs:{note:"main draggable image (the design)",config:{x:e.designImageConfig.width/2,y:e.designImageConfig.height/2,width:e.designImageConfig.width,height:e.designImageConfig.height,offsetX:e.designImageConfig.width/2,offsetY:e.designImageConfig.height/2,scaleX:e.designImageData.scaleX,scaleY:e.designImageData.scaleY,image:e.designImageData.image,opacity:.5}}})],1),a("v-group",{attrs:{note:"crop image area (printable area)",config:{clip:{x:0,y:0,width:e.designCropConfig.width,height:e.designCropConfig.height},listening:!1}}},[a("v-group",{attrs:{note:"cropped image (would be printed)",config:{x:e.designImageData.x,y:e.designImageData.y,width:e.designImageData.width,height:e.designImageData.height,rotation:e.designImageData.rotation,listening:!1}}},[a("v-image",{attrs:{note:"cropped image (would be printed)",config:{x:e.designImageData.width/2,y:e.designImageData.height/2,width:e.designImageData.width,height:e.designImageData.height,offsetX:e.designImageData.width/2,offsetY:e.designImageData.height/2,scaleX:e.designImageData.scaleX,scaleY:e.designImageData.scaleY,image:e.designImageData.image,listening:!1}}})],1)],1),a("v-rect",{attrs:{note:"border of the printable area",config:{x:0,y:0,width:e.designCropConfig.width,height:e.designCropConfig.height,stroke:e.isHovered?"#fff":"transparent",strokeWidth:1,dash:[3,2],strokeScaleEnabled:!1,listening:!1}}}),a("v-text",{attrs:{note:"text under the printable area",config:{x:-e.stageConfig.width/2,y:e.designCropConfig.height+2,width:e.stageConfig.width,offsetX:-e.designCropConfig.width/2,text:"PRINTABLE AREA",fill:e.isHovered?"#fff":"transparent",fontFamily:"Calibri",fontSize:12,fontStyle:"normal 900",align:"center",letterSpacing:1.5,listening:!1}}}),a("v-line",{attrs:{note:"the 'help' line for show the area center. Also image is stick to it on dragging",config:{points:[e.designCropConfig.width/2,0,e.designCropConfig.width/2,e.designCropConfig.height],stroke:e.showHelpLineCenterX?"#6C60FF":"transparent",strokeWidth:1,dash:[3,2],strokeScaleEnabled:!1,listening:!1}}})],1),a("v-transformer",{ref:"transformer",attrs:{config:{borderStroke:"#6C60FF",anchorStroke:"#6C60FF",anchorSize:8,rotateAnchorOffset:0,rotationSnaps:[0,45,90,135,180,225,270,315],enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}}})],1)],1)},I=[],C=(a("cb29"),a("5530")),_=a("362d"),y=a.n(_),w=function(e,t){var a=new Image;a.onload=function(a){var i=a.path[0];e(i,t)},a.src=t},D=function(e,t){var a,i,n=e.width,s=e.height,r=t.width,o=t.height,c=Math.min(r/n,o/s);return c>=1?(a=n,i=s):(a=n*c,i=s*c),{width:a,height:i}},k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layer",[a("v-image",{attrs:{config:e.backgroundImageConfig}})],1)},P=[],S={name:"backgroundProduct",props:["boxContainer"],data:function(){return{backgroundImage:null}},computed:Object(C["a"])(Object(C["a"])({},Object(n["c"])({backgroundImageData:"backgroundImage"})),{},{backgroundImageSrc:function(){return this.backgroundImageData.src},backgroundImageConfig:function(){if(!this.backgroundImage)return{width:0,height:0};var e=this.backgroundImage,t=this.boxContainer,a=t.width,i=t.height,n=D(e,t),s=n.width,r=n.height;return{image:this.backgroundImage,x:-s/2,y:-r/2,width:s,height:r,offsetX:-a/2,offsetY:-i/2}}}),watch:{backgroundImageSrc:function(){var e=this;w((function(t){e.backgroundImage=t}),this.backgroundImageData.src)}},beforeMount:function(){var e=this,t=this.backgroundImageData.src;t&&w((function(t){e.backgroundImage=t}),t)}},O=S,x=a("2877"),j=Object(x["a"])(O,k,P,!1,null,"5b2b144c",null),B=j.exports,T={name:"CanvasMain",components:{"background-product":B},data:function(){return{stageConfig:{width:500,height:500,offsetX:-.5,offsetY:-.5},dragBoundStep:5,selectedShapeName:"",transformerRotaterImage:null,designImageScaleX:1,designImageScaleY:1,designImageRotation:0,designImageConfigNormal:{x:0,y:0,width:0,height:0},designImageConfigDragTransform:{x:0,y:0,width:0,height:0},isHovered:!1,showHelpLineCenterX:!1,isDragTransform:!1}},methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])(["setDesignImage","setDesignImagePosition","setDesignImageSize","setDesignImageRotation","resetDesignImageFlip"])),{},{designImageDragStart:function(){this.designImageConfigDragTransform=Object.assign({},this.designImageConfigNormal),this.isDragTransform=!0},designImageDrag:function(e){var t=e.target,a=t.x(),i=t.y();this.setDesignImagePosition({x:a,y:i})},designImageDragEnd:function(e){var t=e.target,a=t.x(),i=t.y();this.designImageConfigNormal.x=a,this.designImageConfigNormal.y=i,this.isDragTransform=!1},designImageTransformStart:function(){this.designImageDragStart()},designImageTransform:function(e){var t=e.target,a=t.scaleX(),i=t.x(),n=t.y(),s=t.width()*a,r=t.height()*a,o=t.rotation();this.designImageScaleX=a,this.designImageScaleY=a,this.designImageRotation=o,this.setDesignImagePosition({x:i,y:n}),this.setDesignImageSize({width:s,height:r}),this.setDesignImageRotation(o)},designImageTransformEnd:function(e){var t=e.target,a=t.x(),i=t.y(),n=t.width(),s=t.height();this.designImageConfigNormal={x:a,y:i,width:n,height:s},this.isDragTransform=!1},handleStageMouseDown:function(e){if(e.target===e.target.getStage())return this.selectedShapeName="",void this.updateTransformer();var t="Transformer"===e.target.getParent().className;if(!t){var a=e.target.findAncestor(".designImage",!0);this.selectedShapeName=a?"designImage":"",this.updateTransformer()}},updateTransformer:function(){var e=this.$refs.transformer.getNode(),t=e.getStage(),a=this.selectedShapeName,i=t.findOne("."+a);i!==e.node()&&(i?e.nodes([i]):e.nodes([]),e.getLayer().batchDraw())},updateTransformerRotater:function(){var e=this,t=this.$refs.transformer.getNode();t.update=function(){y.a.Transformer.prototype.update.call(t);var a=this.findOne(".rotater");a.y(-25),a.width(24),a.height(24),a.offsetX(12),a.offsetY(12),a.strokeWidth(0),a.fill(null),a.fillPriority("pattern"),a.fillPatternRepeat("no-repeat"),a.fillPatternImage(e.transformerRotaterImage)},t.forceUpdate()},designImageUpdate:function(){var e=this.designImageData.image,t=this.designCropConfig,a=t.height,i=t.width,n=D(e,t),s=(i-n.width)/2,r=(a-n.height)/2,o=n.width,c=n.height,d=0;return this.setDesignImagePosition({x:s,y:r}),this.setDesignImageSize({width:o,height:c}),this.setDesignImageRotation(d),{x:s,y:r,width:o,height:c}},designImageDragBoundFunc:function(e){var t=e.x,a=e.y,i=this.designCropConfig,n=i.width,s=this.designImageData.width,r=this.designImageData.height,o=this.designImageData.rotation*(Math.PI/180),c=i.x+n/2,d=t+(t+s/2-t)*Math.cos(o)-(a+r/2-a)*Math.sin(o);return d>c-this.dragBoundStep&&d<c+this.dragBoundStep&&(t=c+(r*Math.sin(o)-s*Math.cos(o))/2),this.showHelpLineCenterX=d>c-2*this.dragBoundStep&&d<c+2*this.dragBoundStep,{x:t,y:a}}}),computed:Object(C["a"])(Object(C["a"])({},Object(n["c"])({designImageData:"designImage",designCropArea:"designCropArea",designCropCorrection:"designCropCorrection"})),{},{designCropConfig:function(){var e=this.designCropArea.width,t=this.designCropArea.height,a=this.designCropCorrection.x,i=this.designCropCorrection.y,n=this.stageConfig.width,s=this.stageConfig.height;return{x:(n-e)/2+a,y:(s-t)/2+i,width:e,height:t}},designImageConfig:function(){return this.isDragTransform?this.designImageConfigDragTransform:this.designImageConfigNormal},designImage_image:function(){return this.designImageData.image}}),watch:{designImage_image:function(){this.selectedShapeName="",this.updateTransformer(),this.designImageScaleX=1,this.designImageScaleY=1,this.designImageRotation=0,this.designImageConfigNormal=this.designImageUpdate(),this.resetDesignImageFlip()}},beforeMount:function(){var e=this,t=this.designImageData.src;t&&w((function(t){e.setDesignImage(t)}),t)},updated:function(){this.$nextTick((function(){this.updateTransformerRotater()}))},mounted:function(){var e=this;w((function(t){e.transformerRotaterImage=t}),"img/icons/rotate.png")}},z=T,M=Object(x["a"])(z,v,I,!1,null,"28b98988",null),E=M.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-image-pag"},[a("v-stage",{ref:"stage",attrs:{config:e.config}},[a("v-layer",[a("v-image",{attrs:{config:e.config}})],1)],1)],1)},F=[],H={name:"designImagePad",data:function(){return{config:{width:500,height:500}}},methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])(["setDesignImage"])),{},{setImageSize:function(e){var t,a,i=this,n=e.width,s=e.height,r=this.maxSize.width,o=this.maxSize.height,c=Math.min(r/n,o/s);c>=1?(t=n,a=s):(t=n*c,a=s*c),this.config.width=t,this.config.height=a,this.config.image=e;var d=setTimeout((function(){i.saveImage(),clearTimeout(d)}))},saveImage:function(){var e=this,t=this.$refs.stage.getNode();t.toImage({callback:function(t){e.setDesignImage(t)}})}}),computed:Object(C["a"])(Object(C["a"])({},Object(n["c"])({designImageData:"designImage",maxSize:"designImagePadSize"})),{},{imageSrc:function(){return this.designImageData.src}}),watch:{imageSrc:function(){var e=this;w((function(t){e.setImageSize(t)}),this.imageSrc)}}},L=H,R=Object(x["a"])(L,A,F,!1,null,"1bb19983",null),W=R.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar__glamour"},[a("h3",{staticClass:"title__glamour mt-3 p-2"},[e._v("First, Let's Start by Uploading Your Design")]),a("upload-image",{class:"mt-3 mb-2",attrs:{dragUploadEnable:!0},on:{uploadedImage:e.uploadedDesignImage}},[a("div",{staticClass:"custom-file-boxed"},[a("div",{staticClass:"dz-message custom-file-boxed-label"},[a("img",{staticClass:"avatar avatar-xl avatar-4by3 mb-3",attrs:{src:e.publicPath+"img/frontdash/svg/illustrations/browse.svg",alt:"Image Description"}}),a("h5",{staticClass:"mb-1"},[e._v("Choose files to upload")]),a("p",{staticClass:"mb-2"},[e._v("or")]),a("upload-image",{on:{uploadedImage:e.uploadedDesignImage}},[a("span",{staticClass:"btn btn-sm btn-primary"},[e._v("Browse files")])])],1)])]),e.designImageSizeWarning?["medium"==e.designImageSizeWarning?a("div",{staticClass:"alert alert-warning"},[e._v("Image have Medium quality size")]):e._e(),"small"==e.designImageSizeWarning?a("div",{staticClass:"alert alert-danger"},[e._v("Image have Small quality size")]):e._e()]:e._e(),a("div",{},[a("div",{staticClass:"title__glamour mt-3 mb-2"},[e._v("Flip Your Design")]),a("button",{staticClass:"btn btn-sm btn-ghost-primary",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.flipDesignImageHorizontal(t)}}},[a("i",{staticClass:"icon-flip-horizontal",attrs:{title:"Flip horizontal"}})]),e._v(" "),a("button",{staticClass:"btn btn-sm btn-ghost-primary",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.flipDesignImageVertical(t)}}},[a("i",{staticClass:"icon-flip-vertical",attrs:{title:"Flip vertical"}})])]),a("div",{staticClass:"glamour__body__content"},[a("h3",{staticClass:"title__glamour"},[e._v("Select Your Products")]),a("div",{staticClass:"product-card-list"},e._l(e.selectedProducts,(function(e){return a("product-card",{key:"id-product-card-"+e.id,attrs:{item:e}})})),1),a("product-modal",{attrs:{showModal:e.showProductModal},on:{closeProductModal:e.closeProductModal}}),a("div",{staticClass:"btn__holder"},[a("button",{staticClass:"btn btn-outline-dark w-100",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.openProductModal(t)}}},[a("img",{attrs:{src:e.publicPath+"img/mstore/img/more.svg",alt:""}}),e._v(" Add More Product ")]),a("a",{staticClass:"btn btn-primary w-100 cta-pink",attrs:{href:"#"}},[e._v("Create an Order")]),a("p",{staticClass:"note_deleivery"},[e._v(" Guaranteed Delivery before Father's Day! ")])]),a("div",{staticClass:"help__card__content"},[a("h3",[e._v("Need Help?")]),a("div",{attrs:{id:"accordion"}},[a("div",{staticClass:"card__help"},[a("div",{staticClass:"card__help__header",attrs:{id:"headingOne"}},[a("a",{staticClass:"collapsed",attrs:{href:"#","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"}},[a("span",[a("img",{attrs:{src:e.publicPath+"img/tshirt__icon.svg",alt:""}}),e._v(" Sizing Chart")]),a("img",{staticClass:"next__a ml-auto",attrs:{src:e.publicPath+"img/next.svg",alt:""}})])]),e._m(0)]),a("div",{staticClass:"card__help"},[a("div",{staticClass:"card__help__header",attrs:{id:"headingTwo"}},[a("a",{staticClass:"collapsed",attrs:{href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[a("span",[a("img",{attrs:{src:e.publicPath+"img/tshirt__icon.svg",alt:""}}),e._v("Product Information")]),a("img",{staticClass:"next__a ml-auto",attrs:{src:e.publicPath+"img/next.svg",alt:""}})])]),e._m(1)])])])],1)],2)},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[a("div",{staticClass:"card__help__body"},[e._v(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[a("div",{staticClass:"card__help__body"},[e._v(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ")])])}],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dragUploadEnable?a("div",{staticClass:"upload-image-drag-zone",class:e.isHovered?"hovered":"",attrs:{multiple:e.multiple},on:{dragover:function(t){t.preventDefault(),e.isHovered=!0},dragenter:function(e){e.preventDefault()},dragleave:function(t){e.isHovered=!1},drop:function(t){return t.preventDefault(),e.handleImage(t)}}},[e._t("default")],2):a("label",{staticClass:"upload-image"},[e._t("default"),a("input",{attrs:{type:"file",name:"imageLoader",multiple:e.multiple,accept:e.acceptFileTypes.join(",")},domProps:{value:e.value},on:{change:e.handleImage}})],2)},Y=[],G=(a("caad"),a("2532"),{name:"UploadImage",props:{label:{type:String},dragUploadEnable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},data:function(){return{value:"",isHovered:!1,acceptFileTypes:["image/bmp","image/jpg","image/jpeg","image/png","image/svg+xml","image/tiff"]}},methods:{clearInput:function(){this.value=null},acceptImagesOnly:function(e){var t=e["type"];return this.acceptFileTypes.includes(t)?e:null},imageLoaded:function(e){var t=this;w((function(e){t.$emit("uploadedImage",e)}),e)},imageReader:function(e){var t=this,a=this.acceptImagesOnly(e);if(a){var i=new FileReader;i.onload=function(e){t.imageLoaded(e.target.result)},i.readAsDataURL(a)}else console.warn("Uploaded file is not image type: "+e)},handleImage:function(e){this.isHovered=!1,this.value="";var t=null;t=e.dataTransfer?e.dataTransfer.files:e.target.files,this.multiple||(t=[t[0]]),t.forEach(this.imageReader),this.clearInput()}},computed:{}}),U=G,q=Object(x["a"])(U,N,Y,!1,null,"95cffd32",null),V=q.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card__product product-card"},[a("div",{staticClass:"media"},[a("div",{staticClass:"product__img"},[a("img",{staticClass:"product-card--img",attrs:{src:e.item.src,alt:""}})]),a("div",{staticClass:"media-body"},[a("div",{staticClass:"title--product"},[a("h3",[e._v(e._s(e.item.title))]),a("a",{staticClass:"action__pro",attrs:{href:"#"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:(t.preventDefault(),e.remove(t))}}},[e._v("Remove")])]),a("div",{staticClass:"select__size"},[a("div",{staticClass:"color__box",staticStyle:{"margin-top":"0px"}},[a("h4",[e._v("Select Your Colors")]),a("ul",{staticClass:"color__list"},e._l(e.item.colors,(function(e){return a("color-item",{key:e.color,attrs:{item:e}})})),1)])])])])])},K=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("label",{staticClass:"checkbox-style-3-label",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.selectColor(t)}}},[a("span",{staticClass:"product-item--color",style:"background: "+e.item.color+";"},[e.item.selected?a("i",{staticClass:"fas fa-check"}):e._e()])])])},Z=[],ee={name:"ColorItem",props:["item"],methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])("products",["toggleProductColor"])),{},{selectColor:function(){this.toggleProductColor(this.item)}})},te=ee,ae=Object(x["a"])(te,Q,Z,!1,null,"74ef2ccb",null),ie=ae.exports,ne={name:"ProductCard",components:{"color-item":ie},props:["item"],methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])("products",["removeProduct"])),{},{remove:function(){this.removeProduct(this.item)}}),computed:Object(C["a"])({},Object(n["c"])("products",["colorsList"]))},se=ne,re=Object(x["a"])(se,J,K,!1,null,"a47b43d4",null),oe=re.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"product-modal"},[a("button",{staticClass:"product-modal--btn-close btn-close close",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.closeProductModal(t)}}}),a("div",{staticClass:"product-modal-catalog"},[a("h2",{staticClass:"mb-4"},[e._v("Products Catalog")]),a("div",{staticClass:"product-modal-catalog--products"},e._l(e.products,(function(e){return a("product-item",{key:"id-product-"+e.id,attrs:{item:e}})})),1)]),a("div",{staticClass:"product-modal-selected"},[a("h5",{staticClass:"mb-5"},[e._v("SELECTED PRODUCTS")]),a("div",{staticClass:"products-selected mb-4"},[e._l(e.selectedProducts,(function(e){return a("products-selected-item",{key:"id-product-selected-"+e.id,attrs:{item:e}})})),e.selectedProductsEmpty?a("p",[e._v("Please select at least one product to sell.")]):e._e()],2),a("button",{staticClass:"product-modal--btn-save btn btn-primary text-uppercase",attrs:{disabled:e.selectedProductsEmpty},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.closeProductModal(t)}}},[e._v("Save products")])])])},de=[],ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"product-item",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.selectProduct(t)}}},[a("figure",{staticClass:"product-item--figure"},[a("img",{staticClass:"product-item--img",attrs:{src:e.item.src,alt:""}})]),a("div",{staticClass:"product-item--info"},[a("h4",{staticClass:"product-item--title"},[e._v(e._s(e.item.title))]),a("div",{staticClass:"product-item--description"},[e._v(" "+e._s(e.item.description)+" ")])]),a("div",{staticClass:"product-item--icon-select",class:e.item.selected?"selected":""},[a("i",{staticClass:"fas",class:e.item.selected?"fa-check":"fa-plus"})])])},le=[],ue={name:"ProductItem",props:["item"],methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])("products",["addProduct","removeProduct"])),{},{selectProduct:function(){this.item.selected?this.removeProduct(this.item):this.addProduct(this.item)}})},me=ue,he=Object(x["a"])(me,ge,le,!1,null,"1208c16e",null),fe=he.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"products-selected-item"},[a("img",{staticClass:"products-selected-item--img",attrs:{src:e.item.src,alt:""}}),a("div",{staticClass:"products-selected-item--title"},[e._v(e._s(e.item.title))]),a("button",{staticClass:"products-selected-item--remove btn btn-close",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.unSelectProduct(t)}}})])},be=[],ve={name:"ProductsSelectedItem",props:["item"],methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])("products",["removeProduct"])),{},{unSelectProduct:function(){this.removeProduct(this.item)}})},Ie=ve,Ce=Object(x["a"])(Ie,pe,be,!1,null,"929d0f3a",null),_e=Ce.exports,ye={name:"ProductModal",components:{"product-item":fe,"products-selected-item":_e},props:["showModal"],methods:Object(C["a"])(Object(C["a"])({},Object(n["b"])("products",["setFirstProduct"])),{},{closeProductModal:function(){this.$emit("closeProductModal"),this.selectedProductsEmpty&&this.setFirstProduct()}}),computed:Object(C["a"])(Object(C["a"])({},Object(n["c"])("products",["products","selectedProducts"])),{},{selectedProductsEmpty:function(){return!this.selectedProducts.length}})},we=ye,De=Object(x["a"])(we,ce,de,!1,null,"c20facb8",null),ke=De.exports,Pe={name:"Sidebar",components:{"upload-image":V,"product-card":oe,"product-modal":ke},data:function(){return{showProductModal:!1,publicPath:"/static/design/"}},methods:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(n["b"])(["setDesignImageOrigin","flipDesignImageHorizontal","flipDesignImageVertical"])),Object(n["b"])("products",["setFirstProduct"])),{},{openProductModal:function(){this.showProductModal=!0},closeProductModal:function(){this.showProductModal=!1},uploadedDesignImage:function(e){this.setDesignImageOrigin(e)}}),computed:Object(C["a"])(Object(C["a"])({},Object(n["c"])(["designImage","designImageSizeWarning"])),Object(n["c"])("products",["selectedProducts"])),beforeMount:function(){this.setFirstProduct()}},Se=Pe,Oe=Object(x["a"])(Se,X,$,!1,null,"646c3d80",null),xe=Oe.exports,je={name:"GlamourContainer",components:{"canvas-main":E,"canvas-design-image-pad":W,sidebar:xe}},Be=je,Te=Object(x["a"])(Be,p,b,!1,null,"ee57bdb2",null),ze=Te.exports,Me={name:"App",components:{"glamour-container":ze},methods:{},computed:{}},Ee=Me,Ae=Object(x["a"])(Ee,h,f,!1,null,"ac93e33a",null),Fe=Ae.exports;i["default"].config.productionTip=!1,i["default"].use(l.a,d.a),i["default"].use(m.a),new i["default"]({render:function(e){return e(Fe)},store:o}).$mount("#app")}});
//# sourceMappingURL=index.js.map