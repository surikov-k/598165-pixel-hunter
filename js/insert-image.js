import imageResize from './image-resize';


export default (elem, url, i) => {

  const image = document.createElement(`img`);
  image.src = url;
  image.addEventListener(`load`, () =>{
    const imageSize = {
      width: image.width,
      height: image.height
    };
    const frame = {
      width: elem.clientWidth,
      height: elem.clientHeight
    };

    const newSize = imageResize(frame, imageSize);
    image.width = newSize.width;
    image.height = newSize.height;
    image.alt = `Option ${i + 1}`;

    elem.insertAdjacentElement(`afterbegin`, image);
  });
};
