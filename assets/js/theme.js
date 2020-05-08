var lastKnownScrollY = 0;
var currentScrollY = 0;
var delta = 70;
var ticking = false;
var idOfHeader = 'navbar';
var eleHeader = null;
const classes = {
  pinned: 'navbar-pin',
  unpinned: 'navbar-unpin',
};
function onScroll() {
  currentScrollY = window.pageYOffset;
  if (Math.abs(lastKnownScrollY - currentScrollY) <= delta) return;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}

function pin() {
  if (eleHeader.classList.contains(classes.unpinned)) {
    eleHeader.classList.remove(classes.unpinned);
    eleHeader.classList.add(classes.pinned);
  }
}

function unpin() {
  if (
    eleHeader.classList.contains(classes.pinned) ||
    !eleHeader.classList.contains(classes.unpinned)
  ) {
    eleHeader.classList.remove(classes.pinned);
    eleHeader.classList.add(classes.unpinned);
  }
}
eleHeader = document.getElementById(idOfHeader);
document.addEventListener('scroll', onScroll, false);

var supportsWebP = (function () {
  'use strict';

  var index = new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () {
      return resolve(false);
    };
    image.onload = function () {
      return resolve(image.width === 1);
    };
    image.src =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  }).catch(function () {
    return false;
  });

  return index;
})();

window.supportsWebP.then((supported) => {
  if (!supported) {
    document.getElementById('highlight').classList.remove('webp');
    document.getElementById('categories').classList.remove('webp');
    document.getElementById('firstimage').classList.remove('webp');
  }
});
