import {render} from '@testing-library/react';
import GooglePicture from "./index";

it('renders a webp source with a 1x and a 2x pixel density, a jpeg source with a 1x and a 2x pixel density and an img inside a picture tag', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="jpeg" imageWidth={600} url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('renders a webp source with a 1x and a 2x pixel density, a png source with a 1x and a 2x pixel density and an img inside a picture tag', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" imageWidth={600} url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});
