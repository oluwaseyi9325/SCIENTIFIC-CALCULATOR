function addNum(val){
        quest.innerText +=  val;
        disp.innerText= val;
        
}
function solve(){
    ans.innerText= eval(quest.innerText); 
    disp.innerText= "="; 
    
   
}
function del(){
    quest.innerText= quest.innerText.slice(0,-1);
    ans.innerText= "";
    disp.innerText= "del";
}
function clr(){
    quest.innerText= "";
    ans.innerText= "";
}
function collectAns(){
    quest.innerText=ans.innerText ;
    ans.innerText="";
    disp.innerText= "ans";
}

function root(){
    
    ans.innerText=  Math.sqrt(quest.innerText);
    // quest.innerText= "√" + quest.innerText;
    disp.innerText= "√";
}
function findPi(){
   var pi = quest.innerText;
   var mat = Math.PI * pi;
   ans.innerText=mat;
//    quest.innerText= "π" + quest.innerText;
   disp.innerText= "π";
}
function squareOffTwo(){
    ans.innerText=quest.innerText*quest.innerText;
    disp.innerHTML= "X<sup>2</sup>";
}
function squareOffAny(){
    ans.innerText=Math.pow(quest.innerText,quest.innerText);
    disp.innerHTML= "X<sup>x</sup>";
}
function sin(e){
    
   if(e.target.innerText== "SIN"){
     ans.innerText=  Math.sin(quest.innerText*Math.PI/180);
    e.target.innerText= "asin";
    disp.innerText= e.target.innerText;
   }else if(e.target.innerText== "asin") {
     ans.innerText=  Math.asin(quest.innerText*Math.PI/180);
    e.target.innerText= "SIN";
    disp.innerText= e.target.innerText;
   }
}
function cos(e){
    if(e.target.innerText== "COS"){
        ans.innerText=  Math.cos(quest.innerText*Math.PI/180);
       e.target.innerText= "acos";
       disp.innerText= e.target.innerText;
      }else if(e.target.innerText== "acos") {
        ans.innerText=  Math.acos(quest.innerText*Math.PI/180);
       e.target.innerText= "COS";
       disp.innerText= e.target.innerText;
      }

}
function tan(e){
    if(e.target.innerText== "TAN"){
        ans.innerText=  Math.tan(quest.innerText*Math.PI/180);
       e.target.innerText= "atan";
       disp.innerText= "tan";
      }else if(e.target.innerText== "atan") {
        ans.innerText=  Math.atan(quest.innerText*Math.PI/180);
       e.target.innerText= "TAN";
       disp.innerText= "atan";
      }
}
function ln(){
    ans.innerText=  Math.LN2 * quest.innerText;
    disp.innerText= "ln";
}
 function resArea(e){
     e.target.disabled=true;
}
function exp(){
    ans.innerText=Math.exp(quest.innerText);
    disp.innerText= "exp";
}

 function logBaseTen(){
    ans.innerText=  Math.log10(quest.innerText);
    disp.innerHTML= "log<sub>2</sub>";
 }
 function logBaseTwo(){
    ans.innerText=  Math.log2(quest.innerText);
    disp.innerHTML= "log<sub>2</sub>";
 }

 function round(){
    ans.innerText=  Math.round(quest.innerText);
    disp.innerText= "round to n integer";
 }

 function convertm(e){
    ans.innerText= quest.innerText*1000;
    disp.innerText= "km-m";
 }
 function convertcm(e){
    ans.innerText= quest.innerText*100000;
    disp.innerText= "km-cm";
 }

function offBtn(e){
  
 quest.innerText="";
 ans.innerText="";
 disp.innerText= "off";
   
}
function onBtn(e){
  
   ans.innerText="";
   disp.innerText= "on";
     
  }
//   dat.innerText= Date();

