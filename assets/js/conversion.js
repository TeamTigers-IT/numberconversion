
// binary to octal
$(document).ready(function(){
    $(".sum").val("0");
    $(".key").val("");

    function calcbo(){

        var $num1 = ($.trim($(".num1").val()) != "" && !isNaN($(".num1").val())) ? parseInt($(".num1").val()) : 0;
        $(".sum").val(parseInt($num1,2).toString(8));
    }    
    $(".key").keyup(function() {
        calcbo();

    });
});

// binary to decimal
$(document).ready(function(){
    $(".sum2").val("0");
    $(".key").val("");

    function calcbd(){

        var $num2 = ($.trim($(".num2").val()) != "" && !isNaN($(".num2").val())) ? parseInt($(".num2").val()) : 0;
        $(".sum2").val(parseInt($num2,2).toString(10));
    }    
    $(".key").keyup(function() {
        calcbd();

    });
});

// binary to hexadecimal
$(document).ready(function(){
    $(".sum3").val("0");
    $(".key").val("");

    function calcbh(){

        var $num3 = ($.trim($(".num3").val()) != "" && !isNaN($(".num3").val())) ? parseInt($(".num3").val()) : 0;
        $(".sum3").val(parseInt($num3,2).toString(16));
    }    
    $(".key").keyup(function() {
        calcbh();

    });
});

// octal to binary
$(document).ready(function(){
    $(".sum4").val("0");
    $(".key").val("");

    function calcob(){

        var $num4 = ($.trim($(".num4").val()) != "" && !isNaN($(".num4").val())) ? parseInt($(".num4").val()) : 0;
        $(".sum4").val(parseInt($num4,8).toString(2));
    }    
    $(".key").keyup(function() {
        calcob();

    });
});

// octal to decimal
$(document).ready(function(){
    $(".sum5").val("0");
    $(".key").val("");

    function calcod(){

        var $num5 = ($.trim($(".num5").val()) != "" && !isNaN($(".num5").val())) ? parseInt($(".num5").val()) : 0;
        $(".sum5").val(parseInt($num5,8).toString(10));
    }    
    $(".key").keyup(function() {
        calcod();

    });
});

// octal to hexadecimal
$(document).ready(function(){
    $(".sum6").val("0");
    $(".key").val("");

    function calcoh(){

        var $num6 = ($.trim($(".num6").val()) != "" && !isNaN($(".num6").val())) ? parseInt($(".num6").val()) : 0;
        $(".sum6").val(parseInt($num6,8).toString(16));
    }    
    $(".key").keyup(function() {
        calcoh();

    });
});

// decimal to binary
$(document).ready(function(){
    $(".sum7").val("0");
    $(".key").val("");

    function calcdb(){

        var $num7 = ($.trim($(".num7").val()) != "" && !isNaN($(".num7").val())) ? parseInt($(".num7").val()) : 0;
        $(".sum7").val(parseInt($num7,10).toString(2));
    }    
    $(".key").keyup(function() {
        calcdb();

    });
});

// decimal to octal
$(document).ready(function(){
    $(".sum8").val("0");
    $(".key").val("");

    function calcdo(){

        var $num8 = ($.trim($(".num8").val()) != "" && !isNaN($(".num8").val())) ? parseInt($(".num8").val()) : 0;
        $(".sum8").val(parseInt($num8,10).toString(8));
    }    
    $(".key").keyup(function() {
        calcdo();

    });
});

// decimal to hexadecimal
$(document).ready(function(){
    $(".sum9").val("0");
    $(".key").val("");

    function calcdh(){

        var $num9 = ($.trim($(".num9").val()) != "" && !isNaN($(".num9").val())) ? parseInt($(".num9").val()) : 0;
        $(".sum9").val(parseInt($num9,10).toString(16));
    }    
    $(".key").keyup(function() {
        calcdh();

    });
});

// hexadecimal to binary
$(document).ready(function(){
    $(".sum10").val("0");
    $(".key").val("");

    function calchb(){

        var $num10 = $(".num10").val();

        $(".sum10").val((parseInt($num10, 16).toString(2)).padStart(0, '0'));
    }    
    $(".key").keyup(function() {
        calchb();

    });
});

// hexadecimal to octal

$(document).ready(function(){
    $(".sum11").val("0");
    $(".key").val("");

    function calcho(){

        var $num11 = $(".num11").val();

        $(".sum11").val((parseInt($num11, 16).toString(8)).padStart(0, '0'));
    }    
    $(".key").keyup(function() {
        calcho();

    });
});
// hexadecimal to decimal

$(document).ready(function(){
    $(".sum12").val("0");
    $(".key").val("");

    function calchd(){

        var $num12 = $(".num12").val();

        $(".sum12").val((parseInt($num12, 16).toString(10)).padStart(0, '0'));
    }    
    $(".key").keyup(function() {
        calchd();
    });
});