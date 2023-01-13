import {render} from '@testing-library/react';
import GooglePicture from "./index";

it('renders a webp source with a 1x and a 2x pixel density, a jpeg source with a 1x and a 2x pixel density and an img inside a picture tag', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="jpeg" widths={{defaultWidth: 200}}
                   url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('renders a webp source with a 1x and a 2x pixel density, a png source with a 1x and a 2x pixel density and an img inside a picture tag', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" widths={{defaultWidth: 300}}
                   url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('renders a 480px wide image on screens 600px and smaller and renders a 600px image on any device larger', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" widths={{defaultWidth: 600, 600: 480}}
                   url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('de-dupes repeated src-sets', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" widths={{defaultWidth: 600, 600: 480, 1200: 960}}
                   url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('orders width lowest to highest, with default at the end', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" widths={{defaultWidth: 600, 1200: 960, 600: 480}}
                   url="https://lh3.googleusercontent.com/ABC123etc"/>
  );
  expect(container).toMatchSnapshot();
});

it('adds value of "lazy" to loading attribute of img tag', () => {
  const {container} = render(
    <GooglePicture alt="The alt" imageFormat="png" widths={{defaultWidth: 600, 1200: 960, 600: 480}}
                   url="https://lh3.googleusercontent.com/ABC123etc" lazy/>
  );
  expect(container).toMatchSnapshot();
});
