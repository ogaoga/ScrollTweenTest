if (Meteor.is_client) {
  Meteor.startup(function(){
    $(window).scroll(function(e){
      //console.log(e.clientY());
      var y = $('body').scrollTop();
      $('#display').html('y:'+y);
    });
    $(document).ready(function(){
      $(window).trigger('scroll', function(){});
      var container = ScrollTween.container($('#container'));
/*
      container.add('#hello1', function(tween){
        tween
          .range(0, 600, tween.styles().middle())
          .to(1200, tween.styles().rightOut());
      });
      container.add('#hello2', function(tween){
        tween
          .range(600, 1200, tween.styles().middle())
          .to(1800, tween.styles().rightOut());
      });
*/
      container.add('#bird', function(tween){
        tween
          .range(0, 500, tween.styles().middle())
          .to(1000, tween.styles().rightOut());
      });
      container.play();
    });
  });
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}