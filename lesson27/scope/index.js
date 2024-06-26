export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'Fhoto');
  imgElem.src = imgSrc;

  const pageElement = document.querySelector('.page');
  pageElement.append(imgElem);

  const onImageLoaded = () => callback(null, imgElem);

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  '1https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  // 'https://server.com/image.png',
  onImageLoaded,
);

export const asyncCalculator = numb => new Promise((resolve) => {
  setTimeout(() => {
    console.log('Initial value: ' + numb);
    resolve(numb);
  }, 500);
})
  .then(number => new Promise((resolve) => {
    setTimeout(() => {
      const result = number * number;
      console.log('Squared value: ' + result);
      resolve(result);
    }, 500);
  }))
  .then(number => {
    const result = number * 2;
    console.log('Squared value: ' + result);
    return result;
  });

asyncCalculator(5);
