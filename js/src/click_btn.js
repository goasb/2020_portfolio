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
        skillPop.addClass('active');
    });

    closeBtn.on('click',function(e){
        e.preventDefault();
        skillPop.removeClass('active');
    });

})(jQuery);