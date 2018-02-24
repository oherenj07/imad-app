
var button = document.getElementById('counter');

button.onclick = function(){
 //Create a request object
 var request = new XMLHttpRequest();
 
//Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done){
            //Take some action
            if(request.status === 500){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();    
            }
        }
        //Not done yet
        
    };
//Make a request
request.open('GET', 'http://oherenj.imad.hasura-app.io/counter',true);
request.send(null);
};
