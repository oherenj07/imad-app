
var button = document.getElementById('counter');

button.onclick = function(){
 //Make a request tothe counter end point
 var request = new XMLHttpRequest();
 
//Capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.Done){
            //Take some action
            if(request.status ==200){
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();    
            }
        }
        //Not done yet
        
    };


};
