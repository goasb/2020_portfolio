(function($){

const openBtn = $('.menu');
const categori = $('.categori');
const closeBtn = $('.nav_close');

openBtn.on('click',function(e){
    e.preventDefault();
    categori.addClass('active');
});
closeBtn.on('click',function(e){
    e.preventDefault();
    categori.removeClass('active');
});

})(jQuery);