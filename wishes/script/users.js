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

var url = $urlParam('d');
var modifiedUrl = url.replace('&m=1','').replace('','');
console.log(modifiedUrl);

$(document).ready(function(){
var name = modifiedUrl;
$("#username").html(name);
})
	
