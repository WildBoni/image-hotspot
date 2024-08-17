function createImage(imgURL: string, text: string = 'content image') {
  let image = document.createElement('img');
  image.src = imgURL;
  image.alt = text;
  
  return image;
}

export {createImage};