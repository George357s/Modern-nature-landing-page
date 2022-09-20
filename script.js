const aLeft = document.querySelector('.a-left');
const aRight = document.querySelector('.a-right');
const bg1 = document.querySelector('.content');
const bg2 = document.querySelector('.featured-icon');
const bg3 = document.querySelector('.side-img');

/* IMG ID */
let id = 1;
/* Right arrow click event */
aRight.addEventListener('click', () => {
   /* increments */
   id++;
   /* Sets Id to first image if the id is greater than the amount of images available */
   if (id > 3) {
      id = 1;
   }
   /* sets all images to current id */
   bg1.style.backgroundImage = "url(/img/img-lg" + id + ".jpg)";
   bg2.style.backgroundImage = "url(/img/img-lg" + id + ".jpg)";
   bg3.style.backgroundImage = "url(/img/img-sm" + id + ".jpg)";
});

aLeft.addEventListener('click', () => {
   id--;
   /* Sets Id to last image if id goes below the first image */
   if (id < 1) {
      id = 3;
   }
   /* Sets all images to current Id */
   bg1.style.backgroundImage = "url(/img/img-lg" + id + ".jpg)";
   bg2.style.backgroundImage = "url(/img/img-lg" + id + ".jpg)";
   bg3.style.backgroundImage = "url(/img/img-sm" + id + ".jpg)";
});