;(function(window,document,$,undefined){

    var imsi = null;
    var slide3d = [0,1,2,3,4,5,6];

    //imsi = slide3d.shift(); 
    //console.log(slide3d); //결과 [2,3,4,3,2,1];로 length:6;/맨 앞의 배열값 삭제됨/삭제된거임시에보관
    //slide3d.push(imsi);
    //console.log(slide3d);


    $(".slide-container").swipe({
        swipeLeft : function(){

            imsi = slide3d.shift();
            slide3d.push(imsi);
            console.log(slide3d)
            main3dslideFn();
        },
        swipeRight : function(){

            imsi = slide3d.pop();
            slide3d.unshift(imsi);
            console.log(slide3d)
            main3dslideFn();
        }
    })

    function main3dslideFn(){

        $(".slide").eq(slide3d[0]).css({left:-650}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective(2000px) rotateX(-80deg) skewY(70deg)  translateZ(-100px) scale(.6)" })
            $(this).css({filter: "blur(7px)"})
        });
        $(".slide").eq(slide3d[1]).css({left:-500}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective(2000px) rotateX(-75deg) skewY(-70deg)  translateZ(-70px) scale(.8)" })
            $(this).css({filter: "blur(4px)"})
        });
        $(".slide").eq(slide3d[2]).css({left:-300}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective(3000px) rotateX(-65deg) skewY(70deg)  translateZ(-30px) scale(1)" })
            $(this).css({filter: "blur(2px)"})
        });

        $(".slide").eq(slide3d[3]).css({left:0}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:4, transform:"perspective(4000px) rotate(0) skew(0) translateZ(1000px) scale(1.2)" })
            $(this).css({filter: "blur(0px)"})
        });

        $(".slide").eq(slide3d[4]).css({left:300}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective(3000px) rotateX(65deg)  skewY(-70deg) translateZ(30px) scale(1)" })
            $(this).css({filter: "blur(2px)"})
        });
        $(".slide").eq(slide3d[5]).css({left:500}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective(2000px) rotateX(75deg)  skewY(70deg) translateZ(70px) scale(.8)" })
            $(this).css({filter: "blur(4px)"})
        });
        $(".slide").eq(slide3d[6]).css({left:650}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective(2000px) rotateX(80deg)  skewY(-70deg) translateZ(100px) scale(.6)" })
            $(this).css({filter: "blur(7px)"})
        });
    }

    function resizeFn(){
        /* var winW = $(window).innerWidth(); */
        var swipeWrap = $(".swipe-wrap");
        var fontH2H = swipeWrap.innerHeight();
        var fontH2 = swipeWrap.find("h2");
        var fontH2W = swipeWrap.innerWidth();
        var h2Rate = 0.04
        
        fontH2.css({ fontSize: fontH2W*h2Rate });
        fontH2.css({ lineHeight: fontH2H + "px" });

    }

    $(window).resize(function(){
        resizeFn();
    })
})(window,document,jQuery);