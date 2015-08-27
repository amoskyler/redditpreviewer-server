// Use jquery or some other solution to handle more browsers
window.addEventListener('DOMContentLoaded', albumController);

function albumController() {
  'use strict';
  var _domtags, media, mediaArray, mediaViewer;

  _domtags = {
    media: 'media',
    mediaViewer: 'media-viewer'
  };

  window.test = document;
  media = document.getElementById(_domtags.media);
  mediaArray = media.getElementsByClassName(_domtags.mediaViewer);
  // set initial state for displayed images in galleries
  window.mediaViewer = new MediaViewer(mediaArray);
}
