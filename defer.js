function swapSrcAttributes(source) {
  return function(element) {
    element.setAttribute('src', element.getAttribute(source));
  }
}

function forEach(collection, partial) {
  for (var i = 0; i < collection.length; i++) {
     partial(collection[i]);
  }
}

function initDeferImages() {
  // for images
  var deferImages = document.querySelectorAll('img[data-src]');

  // or you could be less specific and remove the `img`
  deferImages = document.querySelectorAll('[data-src]');

  forEach(deferImages, swapSrcAttributes('data-src'));
}

window.onload = function() {
  initDeferImages();
}


