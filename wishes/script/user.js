$urlParam = function(name){
    var results = new RegExp('[\?]' + name + '=([^#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
	
}
console.log($urlParam('d')); 
alert($urlParam('d')); 

$(document).ready(function(){
var name = $urlParam('d');
$("#username").html(name);
})
