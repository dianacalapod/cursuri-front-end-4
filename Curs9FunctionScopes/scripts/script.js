var a = 2; // variabila globala;

function displayVariables () {
  var b = 3;
  
  c = 4; // window.c =4;
  window.d = 5
  
  console.log ('a inside function', a); //trb sa afiseze 2
  console.log ('b inside function', b); //trb sa afiseze 3
  console.log ('c inside function', c); // trb sa afiseze 4 
}

displayVariables();
console.log ('a outside function', a); // 2;
console.log ('b outside function', typeof b); //uncaught reference
console.log ('c outside function', c); //4

//-----------------------------------------------------------

var x = 1; // global scope

function firstFunction() {
  var y = 2; // variabila locala pt firstfunction ''local into firstfunction''
  
  function secondFunction () {
    var z = 3;
    
    console.log ('Second x = ', x); //valoare 1 pt ca e globala
    console.log ('Second y = ' , y); // val 2 pt ca din second funct avem acces la parinte , la tot ce are acces first function
    console.log ('Second z = ' , z); // 3 pt ca e declarat ''var z=3''
    
    function thirdFunction(z) {
      z = 5 // not global
      
    console.log ('Third x = ' , x); //1
    console.log ('Third y = ' , y); //2
    console.log ('Third z = ' , z); //5
      } 
    
      thirdFunction(z);
      
  }
  secondFunction();
  
    console.log  ('First x = ' , x); //1
    console.log ('First y = ' , y); // 2, e acelasi nivel
    console.log ('First z = ' , typeof z); // undefined
}

firstFunction();

//-----------------------------------------------------------

(function demoHoisting(){
  var a = 1000;
  console.log (a + " " + b);
  var b = 2000;
})();  //IIFE


// this is identical with :

(function demoHoisting(){
  var a = 1000;
  var b ;
  console.log (a + " " + b);
  var b = 2000;
})();  //IIFE



