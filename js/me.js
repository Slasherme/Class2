'use strict';
var myscore=0;
function getName(){
    var userName = prompt('What is your name?');
    alert('Hello '+ userName);
    alert('please answer these questions with yes or no');
}
getName();

function fQuestion(){
    var Loveprogramming = true;  //string - text
    var ans1 = prompt('Am I Love programming?').toLowerCase();
    if(ans1=='yes' .toLowerCase() || ans1=='y'.toLowerCase()){
        alert(Loveprogramming);
        myscore++;
    }
    else{if(ans1=='no' .toLowerCase() || ans1=='n'.toLowerCase()){
        alert('false');}
    }
    console.log('Am I Love programming?',Loveprogramming);
}
fQuestion();

function sQuestion(){
    var oldest_one_between_brothers = true; 
    var ans2 = prompt('Am I  oldest one between brothers?').toLowerCase();
    if(ans2=='yes' .toLowerCase() || ans2=='y'.toLowerCase()){
        alert(oldest_one_between_brothers);
        myscore++;}
    else{if(ans2=='no' .toLowerCase() || ans2=='n'.toLowerCase()){
        alert('false');}
    }
    console.log('oldest_one_between_brothers ',oldest_one_between_brothers);
}
sQuestion();

function thQuestion(){
    var asmoker = false;  //true / false
    var ans3 = prompt('Am I a smoker?' ).toLowerCase();
    if(ans3=='yes' .toLowerCase() || ans3=='y'.toLowerCase()){
        alert(asmoker);
        myscore++;
    }
    else{if(ans3=='no' .toLowerCase() || ans3=='n'.toLowerCase()){
        alert('true');}
    }
    console.log('asmoker ',asmoker);
}
thQuestion();

function foQuestion(){
    var Mansaflover = true;
    var ans4 = prompt('Am I Mansaflover?' ).toLowerCase();
    if(ans4=='yes' .toLowerCase() || ans4=='y'.toLowerCase()){
        alert(Mansaflover);
        myscore++;
    }
    else{ 
        if(ans4=='no' .toLowerCase() || ans4=='n'.toLowerCase()){
            alert('false');
    }}
    console.log('Mansaflover',Mansaflover);
}
foQuestion();

function fiQuestion(){
    var Love_to_work_out = true;
    var ans5 = prompt('Am I Love_to_work_out?' ).toLowerCase();
    if(ans5=='yes'.toLowerCase()){
        alert(Love_to_work_out);
        myscore++;
    }
    else{
        if(ans5=='no' .toLowerCase() || ans5=='n'.toLowerCase())
        alert('false');
    }
    console.log('Love_to_work_out ',Love_to_work_out);
}
fiQuestion();

function siQuestion(){
    for (var i=0 ; i <=3 ;i++){
        var ans6 = prompt('guess the number that in my mind' ).toLowerCase();
        console.log('user entered',ans6);


        if(ans6==1){
            alert('Thats it');
            myscore++;
            break;
        }
        else if(ans6 > 7 ){
            alert('opps too far');
        }
        else if(ans6 < 7 && ans6 !=0)
        {alert ('nearly true')}
        else {
            alert('Not a number')
        }
    }
    if(i>3)
    {    alert('The answer is 1');
    }
}
siQuestion();

function seQuestion(){
    var Meal = ["kabab","Mansaf","Upsidedown","falafel","shawerma" .toLowerCase()] 
    for (var k=0;k <=5 ;k++)
    {var ans7 = prompt('What is my best meal that I love' .toLowerCase());
    console.log('user entered',ans7);
    if (ans7 =="kabab" .toLowerCase()|| ans7=="Mansaf" .toLowerCase() ||ans7=="Upsidedown" .toLowerCase()|| ans7=="falafel" .toLowerCase() ||ans7=="shawerma" .toLowerCase()){
        alert ('yes you are great')
        myscore++;
        break;
    }else{alert ('no not that')}
    }
    alert (Meal);
}
seQuestion();

function finalScore(){
    alert (myscore + '/7');
    alert('Welcome,please keep intersted '+userName);
}
finalScore();
