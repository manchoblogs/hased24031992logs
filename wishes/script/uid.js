$urlParam = function(name){
    var results = new RegExp('[\?]' + name + '=([^#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
	
}
console.log($urlParam('u')); 

var url = $urlParam('u');
$modifiedUrl = url.replace('&m=1','&m=0','&').replace('','','');
console.log($modifiedUrl);

$(document).ready(function(){
var name = $modifiedUrl;
$("#username").html(name);
})
	
