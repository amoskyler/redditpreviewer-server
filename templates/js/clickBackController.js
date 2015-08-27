// Use jquery or some other solution to handle more browsers
window.addEventListener('DOMContentLoaded', app);

function app (){
  console.log('welcome to my new site. I hope you stay for a bit source:https://github.com/amoskyler/redditpreviewer');
  window.mouseLocation = document.createElement('div');
  window.mouseLocation.appendChild(document.createTextNode('<'));
  document.body.insertBefore(mouseLocation, document.body.firstChild);

  window.displayNavigation = function () {
    var _x, _y;
    if(screen.width/event.x > 3.8) {
      _x = event.x - 40; // not sure how this pans out overall
      _y = event.y - 36; // transform(_x, _y)
      mouseLocation.setAttribute('style', 'position: absolute; top:'+_y+ 'px; left:'+_x+'px; font-size: 5em; cursor:default; color:#2ECC71');
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
