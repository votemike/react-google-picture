## react-google-picture
React component for displaying an lh3.googleusercontent image efficiently

## Installation
`npm install react-google-picture`

## Usage
```jsx
import { imageFormats } from 'lh3-googleusercontent-url-builder';
import GooglePicture from 'react-google-picture';

<GooglePicture
  imageType={imageFormats.JPEG}
  imageWidth={600} // Pixels
  url="https://lh3.googleusercontent.com/ABC123etc"
/>
```

## Why
This utility allows you to easily craft a picture element to display the most appropriate image for a device. It will serve an image at the width you specify unless the device has a high definition screen, in which case it will serve an image twice that size in order to make full use of the high definition screen. If the device supports WebP, a WebP image will be served. Otherwise an image in the format specified will be served.  
Older browsers that do no support the picture element will display a standard definition jpeg.
