var articleStore = [];




function BlogCreator(articleProto){
  this.id = articleStore.length + 1;
  this.title = articleProto.title;
  this.author = articleProto.author;
  this.date = articleProto.date;
  this.category = articleProto.category;
  this.image = articleProto.image;
  this.body = articleProto.body;
  this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    articleStore.push(this);

}

BlogCreator.prototype.toHTML = function () {

  var $contentWrapper = $('.contentWrapper');

  $contentWrapper.append("<div class='blogArticle'> <div class='blogHeader'> <h1>" + this.title + "</h1> <time class=blogPublishedDate datetime='"+ this.date +"'> about " + this.daysAgo + " days ago.</time> </div> <div class= 'blogBody'>" + this.body + "</div> <div class='blogArticleFooter'> READ ON...... </div> </div>");
};


articleProtos.forEach(function(article){
  blog = new BlogCreator(article);
});

articleStore.sort(function(a,b){
  return a.daysAgo - b.daysAgo;
});

articleStore.forEach(function(article){
  article.toHTML();
});

moblieReady=function(){
  $('.pageNav').hide();
  $('#pageTitle').click(function() {
  $('.pageNav').toggle();
  });
};


$(document).ready(function() {

//READ ON.... Listner
  $('.blogArticleFooter').click(function(){
    // console.log('Footer Click');

    $(this).parent().animate({
        "height": "92%",
        // "margin-top": "3.5%"
      },2000);

    $('.navButton').animate({
      'margin-top': '-75px',
      'margin-bottom': '25px'
    },1000);

    $('.pageNav').delay(500).slideUp('slow');

    $('.contentWrapper').width('100%');

    $(this).siblings('.blogBody').css({
      'overflow-y': 'scroll',
      'overflow-x': 'hidden',
    });

    $(this).hide();

    $container = $('.contentWrapper');
    $blogArticle = $(this).parent();

    $container.delay(1600).animate({
        scrollTop: $blogArticle.offset().top - $container.offset().top + ($container.scrollTop() - 25)
    },'fast');

    $(this).parent().parent().css({
      'overflow-y': 'hidden',
    });
  });


//Article exit Listner
  $('.blogArticle').mouseleave(function() {

    $('.pageNav').slideDown(500);
    $(this).animate({
      height: "50%",
      "margin-top": "2.0%"
    },1000);

    $('.navButton').animate({
      'margin-top': '-50px',
      'margin-bottom': '0px'
    },700);

    $(this).children('.blogBody').css({
      'overflow':'hidden',
    });

    $(this).children().show();

        $(this).parent().css({
          'overflow-y': 'scroll',
        });
  });


  cleanpage = function(){
    $(document).ready(function() {
      $('.contentWrapper').children().fadeOut();

      setTimeout(function () {
        $('.pageNav').slideUp('slow');
        $('.contentWrapper').width('100%');
      }, 250);

    });
  };

  $('.bannerNav li:contains("Info")').click(function(event) {
    /* Act on the event */
    cleanpage();
    $('.infoWrapper').show('slow');

    $('.navButton').animate({
      'margin-top': '-75px',
      'margin-bottom': '25px'
    },1000);


    console.log("clicked");
  });

  $('.bannerNav li:contains("Contact")').click(function(event) {
    /* Act on the event */
    cleanpage();

    console.log("clicked");
  });

  $('.bannerNav li:contains("Connect")').click(function(event) {
    /* Act on the event */
    cleanpage();

    console.log("clicked");
  });


  $('.navButton').click(function(event) {
    /* Act on the event */
    console.log('button clicked');
    $('.infoWrapper').hide('slow');
    $('.pageNav').slideDown(1000);
    $('.blogArticle').fadeIn(1000);
  });


  $('.bannerNav li').click(function(){
    console.log($(this));
  });
  $('.blogArticle').click(function(){
    console.log('Article Click');
  });

  $('.flip').click(function(){
    $(this).find('.card').toggleClass('flipped');
    $(this).toggleClass('overflow');
    return false;
  });


  ($(window).width()<650)? $('.blogArticle').off():
   $('blogArticle').on();

   ($(window).width()<650)? moblieReady(): $('#pageTitle').off();

   $(window).resize(function() {
     console.log($(window).width());
     ($(window).width()>650)? $('#pageTitle').off(): moblieReady();
   });

  // console.log($(window).width());
});
