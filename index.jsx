import urlBuilder from "lh3-googleusercontent-url-builder";

const Source = (imageType, imageWidth, url) => (
  <source srcSet={`${urlBuilder(url, {
    imageType: imageType,
    width: imageWidth * 2
  })} 2x, ${urlBuilder(url, {imageType: imageType, width: imageWidth * 2})} 1x`} type={`image/${imageType}`}/>
);
const GooglePicture = (alt, imageType, imageWidth, url) => (
  <picture>
    <Source url={url} imageType="webp" imageWidth={imageWidth}/>
    <Source url={url} imageType={imageType} imageWidth={imageWidth}/>
    <img src={urlBuilder(url, {imageType: imageType, width: imageWidth})} alt={alt}/>
  </picture>
);

export default GooglePicture;
