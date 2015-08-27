window.updoot = function (id) {
  var loader, dot, downdoot,
      updoot, innerIcon, unlock;

  loader = document.getElementById('loader');
  dot = document.getElementById('middle-dot');
  updoot = document.getElementById('updoot');
  downdoot = document.getElementById('downdoot');

  loader.setAttribute('style', 'opacity: 1;');
  dot.setAttribute('style', 'opacity: 0');
  updoot.setAttribute('style', 'color: #8e44ad; pointer-events: none;');
  downdoot.setAttribute('style', 'opacity: 0.5; pointer-events: none;');

  unlock = [
    loader.setAttribute.bind(loader, 'style', ''),
    dot.setAttribute.bind(dot, 'style', ''),
    updoot.setAttribute.bind(updoot, 'style', ''),
    downdoot.setAttribute.bind(downdoot, 'style', '')
  ];

  unlock.forEach(function(func){setTimeout(func, 5000);});
};

window.downdoot = function (id) {
  var loader, dot, downdoot,
      updoot, innerIcon, unlock;

  loader = document.getElementById('loader');
  dot = document.getElementById('middle-dot');
  updoot = document.getElementById('updoot');
  downdoot = document.getElementById('downdoot');

  loader.setAttribute('style', 'opacity: 1;');
  dot.setAttribute('style', 'opacity: 0');
  updoot.setAttribute('style', 'opacity: 0.5; pointer-events: none;');
  downdoot.setAttribute('style', 'color: #e85445; pointer-events: none;');

  unlock = [
    loader.setAttribute.bind(loader, 'style', ''),
    dot.setAttribute.bind(dot, 'style', ''),
    updoot.setAttribute.bind(updoot, 'style', ''),
    downdoot.setAttribute.bind(downdoot, 'style', '')
  ];

  unlock.forEach(function(func){setTimeout(func, 5000);});
};
