let  navH  =  $('#nav').offset().top;    
$(window).on('scroll',  function()  {        
    let  scroH  =  $(this).scrollTop();        
    if  (scroH  >=  navH)  {             $('#nav').css({  "position":   "fixed",   "top":  0,   "z-index":  110  })         } 
    else  {             $("#nav").css({  "position":   "static"  });         }    
})