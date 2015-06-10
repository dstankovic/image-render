var widths = [200,400],
    heights = [250,330,380,450,470,480,500,530,550,600],
    images = [],
    image,
    container = $("#container");

function loadImages(){

  var n = $(location).attr('search').slice(1) || 50;

  for(var i=0;i<n;i++){
      image = {
        height: heights[ Math.floor(Math.random()*heights.length) ],
        width: widths[ Math.floor(Math.random()*widths.length) ]
      }
      images.push(image);
  }
  _.each(images,appendImage);
}

function appendImage(image){

  var img = $("<img />");
  img.attr({
    src: "http://placekitten.com/g/"+image.width+"/"+image.height,
    height: image.height,
    width: image.width,
    alt: "Image could not be loaded"
  });
  container.append(img);
};

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



loadImages();

$("#top").click(animateScroll);
$( window ).scroll(showScrollToTop);
