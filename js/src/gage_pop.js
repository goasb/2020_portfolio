// 게이지바

(function($){

    const win = $(window);
    const abBox=$('.abBox');
    
    let winH = win.outerHeight(); 
    let abBox_offset = abBox.offset().top;
    let myAbBox_offset = abBox_offset - (winH/2);
       
    const count = $('.count');
    const countRel = [];
        for(let i=0; i<count.length; i++){
        countRel[i] = parseInt( $('.count').eq(i).text() );
        $('.count').eq(i).text(0);
       }
       
       const countFn = function(){
       
       }
       
    win.on('scroll', function(){
        let winScroll = win.scrollTop();
       
        if(winScroll > myAbBox_offset){
        abBox.addClass('active');
       
        count.each(function(i,data){
            let rel =  countRel[i], k=0, go;
            const countStop = function(){ clearInterval(go); }
            const countGo = function(){ go = setInterval(function(){
                ( k < rel) ?  $('.count').eq(i).text(++k) :  countStop(); 
            } ,10);   
        };
                  countGo();
               });
           }else{
               abBox.removeClass('active');
           };
        });
    })(jQuery);