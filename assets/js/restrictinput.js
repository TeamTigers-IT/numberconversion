// binary starts here

$('.num1').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 50; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});


$('.num2').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 50; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});


$('.num3').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 50; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});

// binary ends here.

// octal starts here
$('.num4').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 56; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});


$('.num5').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 56; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});


$('.num6').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 56; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});
// octal ends here

// decimal starts here
$('.num7').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});

$('.num8').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});

$('.num9').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});
// decimal ends here

// hexadecimal starts here
$('.num10').keypress(function(e) {
    var a = [], b = [], c = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
    {
        a.push(i);
        for(j=97; j<103; j++)
        {
            b.push(j);
            for(l=65; l<71; l++)
            {
                c.push(l);
            }
        }
    }
        

    if (!(a.indexOf(k)>=0) && !(b.indexOf(k)>=0) && !(c.indexOf(k)>=0))
        e.preventDefault();
});


$('.num11').keypress(function(e) {
    var a = [], b = [], c = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
    {
        a.push(i);
        for(j=97; j<103; j++)
        {
            b.push(j);
            for(l=65; l<71; l++)
            {
                c.push(l);
            }
        }
    }
        

    if (!(a.indexOf(k)>=0) && !(b.indexOf(k)>=0) && !(c.indexOf(k)>=0))
        e.preventDefault();
});


$('.num10').keypress(function(e) {
    var a = [], b = [], c = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
    {
        a.push(i);
        for(j=97; j<103; j++)
        {
            b.push(j);
            for(l=65; l<71; l++)
            {
                c.push(l);
            }
        }
    }
        

    if (!(a.indexOf(k)>=0) && !(b.indexOf(k)>=0) && !(c.indexOf(k)>=0))
        e.preventDefault();
});