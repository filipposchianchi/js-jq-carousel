$(document).ready(function () {
   
    $(".next").click(function() {
        var posizioneImg = $(".slider-wrapper .images img.active");
        var posizionePall = $(".nav i.active")
        posizioneImg.removeClass("active");
        posizionePall.removeClass("active");
        if(posizioneImg.hasClass("last")) {
           $(".slider-wrapper .images img.first").addClass("active");
           $(".nav i.first").addClass("active");
        } else { 
            posizioneImg.next("img").addClass("active");
            posizionePall.next("i").addClass("active");
        }
    });

    $(".prev").click(function() { 
        var posizioneImg = $(".slider-wrapper .images img.active");
        var posizionePall = $(".nav i.active")
        posizioneImg.removeClass("active");
        posizionePall.removeClass("active");
        if(posizioneImg.hasClass("first")) {
           $(".slider-wrapper .images img.last").addClass("active");
           $(".nav i.last").addClass("active");
        } else { 
            posizioneImg.prev("img").addClass("active");
            posizionePall.prev("i").addClass("active");

        }
    });

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                var posizioneImg = $(".slider-wrapper .images img.active");
                var posizionePall = $(".nav i.active")
                posizioneImg.removeClass("active");
                posizionePall.removeClass("active");
                if(posizioneImg.hasClass("first")) {
                $(".slider-wrapper .images img.last").addClass("active");
                $(".nav i.last").addClass("active");
                } else { 
                    posizioneImg.prev("img").addClass("active");
                    posizionePall.prev("i").addClass("active");
                }
            break;
    
            case 39: // right
                var posizioneImg = $(".slider-wrapper .images img.active");
                var posizionePall = $(".nav i.active")
                posizioneImg.removeClass("active");
                posizionePall.removeClass("active");
                if(posizioneImg.hasClass("last")) {
                $(".slider-wrapper .images img.first").addClass("active");
                $(".nav i.first").addClass("active");
                } else { 
                    posizioneImg.next("img").addClass("active");
                    posizionePall.next("i").addClass("active");
                }
            break;
        }
    });


});
    