var widths = [200,403],
    heights = [250,330,370,418,440,470,500,530,550,600],
    images = [],
    image,
    container = $("#container"),
    pck = container.packery();

function loadImages(n){

  var urlParam = $(location).attr('search').slice(1);
  n = $.isNumeric(urlParam)? urlParam : n;
  images = [];
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
  pck.packery('appended',img);
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



loadImages(50);

$("#load-more").click(function(){loadImages(15);});
$("#top").click(animateScroll);
$( window ).scroll(showScrollToTop);
