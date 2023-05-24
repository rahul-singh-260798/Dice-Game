function random()
{
    var value = Math.random()*6 + 1;
    value = Math.floor(value);
    return value;
}

var dice1 = random();
var dice2  =random();


if(dice1==1)
{
    document.querySelector(".one>img").setAttribute("src", "./images/one.png");
}
else if(dice1==2)
{
    document.querySelector(".one>img").setAttribute("src", "./images/two.png");
}
else if(dice1==3)
{
    document.querySelector(".one>img").setAttribute("src", "./images/three.png");
}else if(dice1==4)
{
    document.querySelector(".one>img").setAttribute("src", "./images/four.png");
}else if(dice1==5)
{
    document.querySelector(".one>img").setAttribute("src", "./images/five.png");
}else
{
    document.querySelector(".one>img").setAttribute("src", "./images/six.png");
}

if(dice2==1)
{
    document.querySelector(".two>img").setAttribute("src", "./images/one.png");
}
else if(dice2==2)
{
    document.querySelector(".two>img").setAttribute("src", "./images/two.png");
}
else if(dice2==3)
{
    document.querySelector(".two>img").setAttribute("src", "./images/three.png");
}else if(dice2==4)
{
    document.querySelector(".two>img").setAttribute("src", "./images/four.png");
}else if(dice2==5)
{
    document.querySelector(".two>img").setAttribute("src", "./images/five.png");
}else
{
    document.querySelector(".two>img").setAttribute("src", "./images/six.png");
}

if(dice1>dice2)
{
    document.querySelector("h1").innerHTML="Player one is winner"
}
else if(dice1<dice2)
{
    document.querySelector("h1").innerHTML="Player two is winner"
}
else{
        document.querySelector("h1").innerHTML="Draw match.!! Try again"
    
}
