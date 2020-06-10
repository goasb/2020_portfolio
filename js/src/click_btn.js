(function(){
    // const profile = $('#profile');
// open
    const skill = $('.skill');
    const skillLink = skill.find ('a');

// close
    const skillPop = $('.skill_pop');
    const closeBtn = skillPop.children ('.closeBtn');


// 작동
    skillLink.on('click',function(e){
        e.preventDefault();
        skillPop.fadeIn(500);
    });

    closeBtn.on('click',function(e){
        e.preventDefault();
        skillPop.fadeOut(500);
    });

})(jQuery);