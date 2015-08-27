var MediaViewer = function (options, media) {
  this.options = media ? options : {};
  media = media || options;
  this.loop = this.options.loop || true;
  this.current = options.initial || 0;
  this.last = 0;
  this.media = media || [];
  this.mediaLength = media.length || 0;
  this.media[this.current].classList.add('displayed');
};

MediaViewer.prototype.next = function () {
  if(this.current + 1 < this.mediaLength) {
    this.last = this.current;
    this.current += 1;
  } else {
    this.last = this.current;
    this.current = 0;
  }

  this.media[this.last].classList.remove('displayed');
  this.media[this.current].classList.add('displayed');
};

MediaViewer.prototype.prev = function () {
  if(this.current - 1 > -1) {
    this.last = this.current;
    this.current -= 1;
  } else {
      this.last = this.current;
      this.current = this.mediaLength -1;
  }

  this.media[this.last].classList.remove('displayed');
  this.media[this.current].classList.add('displayed');
};
