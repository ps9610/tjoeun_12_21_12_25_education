;(function(window,document,$,undefined){

    var slideW = $(".slide").eq(3).innerWidth();

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

        $(".slide").eq(slide3d[0]).css({left:-325 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective("+(slideW*10)+"px) rotateX(-80deg) skewY(70deg)  translateZ(-"+(slideW*0.5)+"px) scale(.6)" })//perspective(2000px) translateZ(-100px)
            $(this).css({filter: "blur(7px)"})
        });
        $(".slide").eq(slide3d[1]).css({left:-250 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective("+(slideW*10)+"px) rotateX(-75deg) skewY(-70deg)  translateZ(-"+(slideW*0.35)+"px) scale(.8)" })//perspective(2000px) translateZ(-70px)
            $(this).css({filter: "blur(4px)"})
        });
        $(".slide").eq(slide3d[2]).css({left:-150 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective("+(slideW*15)+"px) rotateX(-65deg) skewY(70deg)  translateZ(-"+(slideW*0.15)+"px) scale(1)" })//perspective(3000px) translateZ(-30px)
            $(this).css({filter: "blur(2px)"})
        });

        $(".slide").eq(slide3d[3]).css({left:0}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:4, transform:"perspective("+(slideW*20)+"px) rotate(0) skew(0) translateZ("+(slideW*5)+"px) scale(1.2)" })//perspective(4000px) translateZ(1000px)
            $(this).css({filter: "blur(0px)"})
        });

        $(".slide").eq(slide3d[4]).css({left:150 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective("+(slideW*15)+"px) rotateX(65deg)  skewY(-70deg) translateZ("+(slideW*0.15)+"px) scale(1)" })//perspective(3000px) translateZ(30px)
            $(this).css({filter: "blur(2px)"})
        });
        $(".slide").eq(slide3d[5]).css({left:250 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective("+(slideW*10)+"px) rotateX(75deg)  skewY(70deg) translateZ("+(slideW*0.35)+"px) scale(.8)" })//perspective(2000px) translateZ(70px)
            $(this).css({filter: "blur(4px)"})
        });
        $(".slide").eq(slide3d[6]).css({left:325 +"%"}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective("+(slideW*10)+"px) rotateX(80deg)  skewY(-70deg) translateZ("+(slideW*0.5)+"px) scale(.6)" })//perspective(2000px) translateZ(100px)
            $(this).css({filter: "blur(7px)"})
        });
    }

})(window,document,jQuery);