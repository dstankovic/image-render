var mainLoop = require("main-loop"),
    h = require("virtual-dom/h"),
    $ = require("jquery"),
    packery = require("packery"),
    loop;


var widths = [200,400],
    heights = [250,330,380,450,470,480,500,530,550,600],
    images = [],
    image,
    width,height,
    myPack = new Packery('#container');

function loadImages(){

  var n = $(location).attr('search').slice(1) || 50;
  for(var i=0;i<n;i++){
      width = widths[ Math.floor(Math.random()*widths.length) ];
      height = heights[ Math.floor(Math.random()*heights.length) ];
      image = {
        height: height,
        width: width,
        src: "http://placekitten.com/g/"+width+"/"+height
      }
      images.push(image);
      loop.update(images);
      myPack.reloadItems();
  }
}

function appendImage(image){
  return h('img',{
      src: image.src,
      width: image.width,
      height: image.height
    });
}

function showScrollToTop() {

  var scrollHeight = $(window).scrollTop();
  if( scrollHeight > window.innerHeight){
    $( "#top" ).css( "display", "block" );
  }
  else{
    $( "#top" ).css( "display", "none" );
  }
}

function animateScroll(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
};

function render(state){
  return h('div#container.packery.js-packery', state.map(appendImage));
}

  loop = mainLoop(images, render, require('virtual-dom'));
  document.body.appendChild(loop.target);
  loadImages();




$("#top").click(animateScroll);
$( window ).scroll(showScrollToTop);
