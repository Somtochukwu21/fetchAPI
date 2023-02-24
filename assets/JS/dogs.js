// https://dog.ceo/api/breeds/image/random

function getImages() {
  const imageWrap = document.querySelector(".image-wrapper");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      let imageElement = "";
      imageElement = `<img src=${data.message} height='250px' width='250px'>`;
      imageWrap.innerHTML = imageElement;
    });
}
