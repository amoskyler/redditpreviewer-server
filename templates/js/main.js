function main() {
  'use strict';
  console.log('welcome to my new site. I hope you stay for a bit');
  var mouseLocation = document.createElement('div');
  mouseLocation.setAttribute('style', 'position: absolute;');
  mouseLocation.appendChild(document.createTextNode(''));
  document.body.insertBefore(mouseLocation, document.body.firstChild);
  window.displayNavigation = function () {
    var _x, _y;
    if(screen.width/event.x > 3.8) {
      _x = event.x - 40;
      _y = event.y - 36;
      mouseLocation.innerHTML = '<';
      mouseLocation.setAttribute('style', 'position: absolute; top:'+_y+ 'px; left:'+_x+'px; font-size: 5em; color:#2ECC71');
    } else {
      mouseLocation.setAttribute('style', 'display:none;');
    }
  };
  window.clickBack = function () {
    if(screen.width/event.x > 3.8) {
        window.history.back();
    }
  };
}

// Use jquery or some other solution to handle more browsers
window.addEventListener('DOMContentLoaded', main);
