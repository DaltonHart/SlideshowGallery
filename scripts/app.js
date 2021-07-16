console.log(
  "%c[app.js] loaded",
  "background-color:pink; padding:10px; color:black;"
);

class Gallery {
  constructor(images, elm) {
    this.images = images;
    this.elm = elm;

    this.currentIndex = 0;
  }

  update(index) {
    this.elm.src = this.images[index].src;
    this.elm.alt = this.images[index].src;

    document.documentElement.style.setProperty(
      "--background-blur",
      `url(${this.images[index].src})`
    );
  }

  nextImage = () => {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }

    this.update(this.currentIndex);
  };

  prevImage = () => {
    if (this.currentIndex === 0) this.currentIndex = this.images.length;
    if (this.currentIndex > 0) this.currentIndex--;
    this.update(this.currentIndex);
  };
}

/* const updateArt = function (img) {
  const artElm = document.getElementById("art");
  artElm.src = img.src;
  artElm.alt = img.alt;

  document.documentElement.style.setProperty(
    "--background-blur",
    `url(${img.src})`
  );
}; */

// updateArt(gallery[currentIndex]);

/* const nextImage = function (event) {
  if (currentIndex === gallery.length - 1) {
    currentIndex = 0;
  } else if (currentIndex < gallery.length - 1) {
    currentIndex++;
  }

  updateArt(gallery[currentIndex]);
  // clearInterval(timer);
  // timer = setInterval(nextImage, 5000);
}; */

const artGallery = new Gallery(
  [
    {
      src: "https://preview.redd.it/erslwgjzl1061.png?width=640&crop=smart&auto=webp&s=5255b9c454dde665d1fdada5b19a1f860387eec5",
      alt: "Spider Gwen",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/578/626/344/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-preview.jpg",
      alt: "Miles Morales",
    },
    {
      src: "https://i.ytimg.com/vi/yMYDRFzCCDw/maxresdefault.jpg",
      alt: "spider pig",
    },
  ],
  document.getElementById("art")
);

document.getElementById("next").addEventListener("click", artGallery.nextImage);

document.getElementById("prev").addEventListener("click", artGallery.prevImage);

artGallery.update(artGallery.currentIndex);

const artGalleryTwo = new Gallery(
  [
    {
      src: "https://preview.redd.it/erslwgjzl1061.png?width=640&crop=smart&auto=webp&s=5255b9c454dde665d1fdada5b19a1f860387eec5",
      alt: "Spider Gwen",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/578/626/344/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-preview.jpg",
      alt: "Miles Morales",
    },
    {
      src: "https://i.ytimg.com/vi/yMYDRFzCCDw/maxresdefault.jpg",
      alt: "spider pig",
    },
  ],
  document.getElementById("art-two")
);

document
  .getElementById("next-two")
  .addEventListener("click", artGalleryTwo.nextImage);

document
  .getElementById("prev-two")
  .addEventListener("click", artGalleryTwo.prevImage);

artGalleryTwo.update(artGalleryTwo.currentIndex);

// let timer = setInterval(nextImage, 5000);
