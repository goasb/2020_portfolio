(function(){

    const product = $('.product');
    const proUl = product.find('ul');
    const proLi = proUl.children('li');
    const proDl = proLi.children('dl');
    const proDt = proDl.children('dt');
    const proDd = proDl.children('dd');
    const proA = proLi.children('a');

    proA.on('mouseenter focus',function(){
        $(this).addClass('active');
    })
    .on('mouseleave blur',function(){
        $(this).removeClass('active');
    });

    console.log(proA);
})(jQuery);