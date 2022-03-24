import { FILE_API_ENDPOINT } from '@/utils/constants';

const FILE_API_URL = FILE_API_ENDPOINT + '/upload'; // http://localhost:8080/upload

export const uploadImages = (images: any[]) => {
  return new Promise((resolve, reject) => {
    const imageURLS: string[] = [];

    images.forEach((image, idx) => {
      uploadAnImage(image)
        .then((path: any) => {
          imageURLS.push(FILE_API_ENDPOINT + path);

          // return data if all images are uploaded
          if (idx === images.length - 1) {
            resolve(imageURLS);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  });
};

const uploadAnImage = (image: any) => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append('file', image);

    fetch(FILE_API_URL, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        res.json().then(resolve).catch(reject);
      })
      .catch(reject);
  });
};
