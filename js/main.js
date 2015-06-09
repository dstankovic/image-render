var widths = [200,400];
var heights = [400,250,400,450,500,550,600];

var images = [];
var imageMeta = {height: 0};

var image;
for(var i=0;i<50;i++){
    image = {
      height: heights[ Math.floor(Math.random()*heights.length) ],
      width: widths[ Math.floor(Math.random()*widths.length) ]
    }
    imageMeta.height += ( image.height + 10 );
    images.push(image);
}


var coords,
    packer = new NETXUS.RectanglePacker( 840, imageMeta.height );

_.each(images,function(image){
    coords = packer.findCoords( image.width+10, image.height+10 );


    var img = $("<img />");
    img.attr({
      src: "http://placekitten.com/g/"+image.width+"/"+image.height,
      height: image.height,
      width: image.width
    });

    img.css({
      top: coords.y,
      left: coords.x
    })

    $("#container").append(img);
});


$("#top").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$( window ).scroll(function() {
  var scrollHeight = $(window).scrollTop();
    if( scrollHeight > window.innerHeight){
      $( "#top" ).css( "display", "block" );
    }
    else{
      $( "#top" ).css( "display", "none" );
    }
});
