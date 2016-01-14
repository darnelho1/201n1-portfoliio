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

BlogCreator.prototype.toHTML = function () {

  $sectionWrapper = $('.sectionWrapper');

  $sectionWrapper.append('Some text');
};


articleProtos.forEach(function(article){
  blog = new BlogCreator(article);
});

articleStore.forEach(function(article){
  article.toHTML();
});

$(document).ready(function() {
  $('.blogArticleFooter').click(function(){
    console.log('Footer Click');
    // $(this).parent().animate({
    //   height: "100%"
    // },1000);
    $x = parseInt($(this).parent().css('height'));
    $(this).parent().toggleClass('blogArticleGrowA');
    $y = parseInt($(this).parent().css('height'));
    $z = $y-$x;
    $(this).parent().parent().scrollTop(0);

    console.log($z);
    $(this).hide();

    // console.log($(this).scrollTop());
  //   setTimeout(function(){
  //     console.log('hi');
  // }, 2000);

  });
  $('.navList li').click(function(){
    console.log($(this).text());
  });
  $('.bannerNav li').click(function(){
    console.log($(this));
  });
  $('.blogArticle').click(function(){
    console.log('Article Click');
  });
});
