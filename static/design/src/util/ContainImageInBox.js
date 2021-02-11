export default (image, box) => {
    const
        imgWidth = image.width,
        imgHeight = image.height,
        boxWidth = box.width,
        boxHeight = box.height;

    let
        width,
        height,
        scale = Math.min(boxWidth / imgWidth, boxHeight / imgHeight);

    if (scale >= 1) {
        // image is less than box
        width = imgWidth;
        height = imgHeight;
    }
    else {
        width = imgWidth * scale;
        height = imgHeight * scale;
    }

    return {
        width: width,
        height: height,
    }
}