;(function(window,document,$,undefined){

    //svgAnimaFn함수 안에 전체 원의 길이 totLen을 먼저 구하고 
    //1초당 채워지는 piece의 길이를 구하고
    //setInterval로 계속 누적이 되도록 콜백함수를 만들어 준 뒤
    //piece를 누적으로 계속 더해주어서 누적된 값 tot를
    //totLen보다 커지게 되면 숫자가 증가함을 멈춘다는 if조건문을 걸어주고
    //카운트를 멈추게 하기 위해 setInterval에 setId를 생성하여 if 안에 clearInterval해준다.

    //원이 색칠되어야 하기 때문에 obj의 strokeDashoffset값을 원의 전체길이 totLen - 누적합 tot = 0으로 시작점을 잡고
    //html의 h2에 연결되도록 text()를 사용,
    //text()안에 

   
    var circle = $(".circle");
    var totLen = [];
    var s = [3,4,5,6,7];
    var piece = [];
    var tot = [0,0,0,0,0];
    var setId = [];
    var x = [];
    var per = [.1,.2,.3,.4,.5];

    svgAnimaFn();

    function svgAnimaFn(){

        // $.each(배열,객체,콜백함수(인덱스, 그 값)/배열시사용
        $.each(circle, function(idx,obj){
            totLen[idx] = obj.getTotalLength();
            

            obj.style.strokeDasharray = totLen[idx];
            obj.style.strokeDashoffset = totLen[idx];


            piece[idx] = (totLen[idx]/s[idx])/100;
            
            setId[idx] = setInterval(function(){

                tot[idx] += piece[idx];

                if( tot[idx] > totLen[idx]*per[idx] )
                    clearInterval(setId[idx]);
                
                $(obj).css({ strokeDashoffset : totLen[idx]-tot[idx] }); //전체에서 누적합을 빼주면 0부터 시작이니까 그래프가 색채워짐
                x[idx] = Math.round( (tot[idx]/totLen[idx])*100 );
                $(".num").eq(idx).find("h2").text( x[idx] + "%" );

            },1000/100);
            
        })
    }
    
})(window,document,jQuery);