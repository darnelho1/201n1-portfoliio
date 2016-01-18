articleStore = [];

function BlogCreator(articleProto){
  this.id = articleStore.length + 1;
  this.title = articleProto.title;
  this.author = articleProto.author;
  this.date = articleProto.date;
  this.category = articleProto.category;
  this.body = articleProto.body;
    articleStore.push(this);
}

// BlogCreator.prototype.toHTML = function () {
//
//   $sectionWrapper = $('.sectionWrapper');
//
//   $sectionWrapper.append('Some text');
// };


articleProtos.forEach(function(article){
  blog = new BlogCreator(article);
});

// articleStore.forEach(function(article){
//   article.toHTML();
// });

$(document).ready(function() {

  $('.blogArticleFooter').click(function(){
    console.log('Footer Click');
    // $(this).parent().toggleClass('blogArticleGrowA');

    $(this).parent().animate({
        "height": "92%",
        "margin-top": "3.5%"
      },2000);

    $('.pageNav').delay(500).slideUp('slow');
    $('.contentWrapper').width('100%');

    $(this).hide();
  });

  $('.blogArticle').mouseleave(function() {

    $('.pageNav').slideDown('slow');
    $(this).animate({
      height: "25%",
      "margin-top": "20px"
    },1000);

    $(this).children().show();
  });


    // $(this).parent().toggleClass('blogArticleGrowA');

    // $(this).parent().parent().scrollTop(0);



  // $('.navList li').click(function(){
  //   console.log($(this).text());
  // });

  cleanpage = function(){
    $(document).ready(function() {
      $('.contentWrapper').children().fadeOut();

      setTimeout(function () {
        $('.pageNav').slideUp('slow');
        $('.contentWrapper').width('100%')
      }, 250);

    });
  };

  $('.bannerNav li:contains("Info")').click(function(event) {
    /* Act on the event */
    cleanpage();


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
    $('.pageNav').slideDown(1000);
    $('.blogArticle').fadeIn(1000);
  });


  $('.bannerNav li').click(function(){
    console.log($(this));
  });
  $('.blogArticle').click(function(){
    console.log('Article Click');
  });
});
