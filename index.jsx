import urlBuilder, {imageFormats} from "lh3-googleusercontent-url-builder";

const Source = ({imageFormat, imageWidth, url}) => (
  <source srcSet={`${urlBuilder(url, {
    imageFormat: imageFormat,
    width: imageWidth * 2
  })} 2x, ${urlBuilder(url, {imageFormat: imageFormat, width: imageWidth})} 1x`} type={`image/${imageFormat}`}/>
);
const GooglePicture = ({alt, imageFormat, imageWidth, url}) => (
  <picture>
    <Source url={url} imageFormat={imageFormats.WEBP} imageWidth={imageWidth}/>
    <Source url={url} imageFormat={imageFormat} imageWidth={imageWidth}/>
    <img src={urlBuilder(url, {imageFormat: imageFormat, width: imageWidth})} alt={alt}/>
  </picture>
);

export default GooglePicture;
