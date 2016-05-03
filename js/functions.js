$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


  if (wScroll != 0){
    $('.navbar').css({
      'margin-top' : '0px',
      'background': 'rgba(0, 0, 0, 0.75)'
    });
  }

  else {
    $('.navbar').css({
      'margin-top' : '30px',
      'background': 'transparent'
    });
  }

  if(wScroll > $('.skill-list').offset().top - ($(window).height() / 1.2)) {

    $('.skill-list .Skillboxes').each(function(i){
      setTimeout(function(){
      $('.skill-list .Skillboxes').eq(i).addClass('is-showing')
    }, 150 * (i+1));

    });

  }

  if(wScroll > $('.Language-list').offset().top - ($(window).height() / 1.2)) {

    $('.Language-list .Skillboxes').each(function(i){
      setTimeout(function(){
      $('.Language-list .Skillboxes').eq(i).addClass('is-showing')
    }, 150 * (i+1));

    });

  }
});

$(document).ready(function(){
  $('.mobile-nav-toggle').click(function(){
    console.log('hi');
    $('.mobile-nav-toggle').toggleClass('is-open');
    $('.mobmenu').toggleClass('is-open');
  });
});
