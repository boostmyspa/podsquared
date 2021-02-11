export default (callback, imageSrc) => {
    let imageObj = new Image();

    imageObj.onload = (e) => {
        let image = e.path[0];

        callback(image, imageSrc);
    };

    imageObj.src = imageSrc;
}