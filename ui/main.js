
var button = document.getElementById('counter');

button.onclick = function(){
 //Create a request object
 var request = new XMLHttpRequest();
 
//Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();    
            }
        }
        //Not done yet
        
    };
    request.open('GET', 'http://oherenj.imad.hasura-app.io/counter',true);
    request.send(null);
    
  };
   
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
        //Create a request object
     var request = new XMLHttpRequest();
 
//Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
              //capture the list of names and render it a list
        var names = request.responseText;
        names = JSON.parse(names);
        var list = '';
        for(var i=0;i<names.length;i++){
            list += '<li>'+ names[i] +'</li>';
        }
        var ul =document.getElementById('namelist');
            ul.innerHTML = list;
            }
        }
        //Not done yet
        
    };
    //Make the Get request 
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET', 'http://oherenj.imad.hasura-app.io/submit-name?name='+ name,true);
request.send(null);
};
    
    
        var submit = document.getElementById('submit_button');
    submit.onclick = function(){
        //Create a request object
     var request = new XMLHttpRequest();
 
//Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
             console.log("user logged in");
        }
        var ul =document.getElementById('namelist');
            ul.innerHTML = list;
            }
        }
        //Not done yet
        


//Make Post request
var username = document.getElementById('username');
var password = document.getElementById('password');
console.log("username");
console.log("password");
request.open('GET', 'http://oherenj.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username: username, password: password}));
};

        
       
  