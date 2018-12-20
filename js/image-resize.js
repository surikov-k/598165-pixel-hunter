export default (frame, image) => {
  const result = {};
  const imageProportion = image.width / image.height;

  if (imageProportion > 1) {
    result.width = frame.width;
    result.height = image.height * frame.width / image.width;
    if (result.height > frame.height) {
      result.width = image.width * frame.height / image.height;
      result.height = frame.height;
    }
  } else {
    result.width = image.width * frame.height / image.height;
    result.height = frame.height;
    if (result.width > frame.width) {
      result.height = image.height * frame.width / image.width;
      result.width = frame.width;
    }
  }

  return result;
};
