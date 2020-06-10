'use strict';
var myscore=0;
var userName = prompt('What is your name?');
alert('Hello '+ userName);
alert('please answer these questions with yes or no');
var Loveprogramming = true;  //string - text
var ans1 = prompt('Am I Love programming?').toLowerCase();
if(ans1=='yes'.toLowerCase()){
    alert(Loveprogramming);
    myscore++;
}
else{
    alert('false');
}

console.log('Am I Love programming?',Loveprogramming);
var oldest_one_between_brothers = true; 
var ans2 = prompt('Am I  oldest one between brothers?').toLowerCase();
if(ans2=='yes'.toLowerCase()){
    alert(oldest_one_between_brothers);
    myscore++;}
else{
    alert('false');
}
console.log('oldest_one_between_brothers ',oldest_one_between_brothers);
var asmoker = false;  //true / false
var ans3 = prompt('Am I a smoker?' ).toLowerCase();
if(ans3=='yes'.toLowerCase()){
    alert(asmoker);
    myscore++;
}
else{
    alert('true');
}
console.log('asmoker ',asmoker);
var Mansaflover = true;
var ans4 = prompt('Am I Mansaflover?' ).toLowerCase();
if(ans4=='yes'.toLowerCase()){
    alert(Loveprogramming);
    myscore++;
}
else{
    alert('false');
}
console.log('Mansaflover',Mansaflover);
var Love_to_work_out = true;
var ans5 = prompt('Am I Love_to_work_out?' ).toLowerCase();
if(ans5=='yes'.toLowerCase()){
    alert(Loveprogramming);
    myscore++;
}
else{
    alert('false');
}
for (var i=0 ; i <=3 ;i++)
{var ans6 = prompt('guess the number that in my mind' ).toLowerCase();
if(ans6==1){
    alert('Thats it');
    myscore++;
    break;
}
else{
    alert('Opps try again');
}}
if(i>3)
{    alert('The answer is 1');
}
var Meal = ["kabab","Mansaf","Upsidedown","falafel","shawerma" .toLowerCase()] 
for (var k=0;k <=5 ;k++)
{var ans7 = prompt('What is my best meal that I love' .toLowerCase());
if (ans7 =="kabab" .toLowerCase()|| ans7=="Mansaf" .toLowerCase() ||ans7=="Upsidedown" .toLowerCase()|| ans7=="falafel" .toLowerCase() ||ans7=="shawerma" .toLowerCase()){
    alert ('yes you are great')
    myscore++;
    break;
}else{alert ('no not that')}
}

alert (Meal);
alert (myscore + '/7');
console.log('Love_to_work_out ',Love_to_work_out);
alert('Welcome,please keep intersted '+userName)

