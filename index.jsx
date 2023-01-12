import urlBuilder, {imageFormats} from "lh3-googleusercontent-url-builder";

const Source = ({imageFormat, defaultWidth, otherWidths, url}) => {
  const srcSets = [];
  const sizes = [];
  // order otherWidths lowest to highest

  for (const [screenWidth, width] of Object.entries(otherWidths)) {
    srcSets.push(`${urlBuilder(url, {
      imageFormat: imageFormat,
      width: width
    })} ${width}w`);
    srcSets.push(`${urlBuilder(url, {
      imageFormat: imageFormat,
      width: width * 2
    })} ${width * 2}w`);
    sizes.push(`(max-width: ${screenWidth}px) ${width}px`);
  };

  srcSets.push(`${urlBuilder(url, {
    imageFormat: imageFormat,
    width: defaultWidth
  })} ${defaultWidth}w`);
  srcSets.push(`${urlBuilder(url, {
    imageFormat: imageFormat,
    width: defaultWidth * 2
  })} ${defaultWidth * 2}w`);
  sizes.push(`${defaultWidth}px`);

  //unique the srcSet array

  return (
    <source srcSet={srcSets.join(', ')} sizes={sizes.join(', ')} type={`image/${imageFormat}`}/>
  )
};
const GooglePicture = ({alt, imageFormat, widths: {defaultWidth, ...otherWidths}, url}) => (
  <picture>
    <Source url={url} imageFormat={imageFormats.WEBP} defaultWidth={defaultWidth} otherWidths={otherWidths}/>
    <Source url={url} imageFormat={imageFormat} defaultWidth={defaultWidth} otherWidths={otherWidths}/>
    <img src={urlBuilder(url, {imageFormat: imageFormat, width: defaultWidth})} alt={alt}/>
  </picture>
);

export default GooglePicture;
