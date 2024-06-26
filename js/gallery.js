const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const ul = document.querySelector(".gallery");
const imagesHtml = Array.from({ length: images.length }, (_, index) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");
  const a = document.createElement("a");
  a.classList.add("gallery-link");
  a.href = images[index].original;
  const img = document.createElement("img");
  img.classList.add("gallery-image");
  img.src = images[index].preview;
  img.alt = images[index].description;
  img.setAttribute("data-source", images[index].original);
  a.appendChild(img);
  li.appendChild(a);
  return li;
});
ul.append(...imagesHtml);
ul.addEventListener("click", handler);
function handler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigImgDiv = document.createElement("div");
  const bigImg = document.createElement("img");
  bigImg.src = event.target.getAttribute("data-source");
  bigImg.alt = event.target.getAttribute("alt");
  bigImgDiv.appendChild(bigImg);
  const instance = basicLightbox.create(bigImgDiv);
  instance.show();
}



//   const chosenSrc = event.target.getAttribute("data-source");
//   const chosenAlt = event.target.getAttribute("alt");
//   const instance = basicLightbox.create(
//     `<img src="${chosenSrc}" alt="${chosenAlt}">`
//   );
//   instance.show();
// }