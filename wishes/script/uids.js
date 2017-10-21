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
$modifiedUrl = url.replace('&m=1','').replace('&m=0','');
console.log($modifiedUrl);

jQuery(document).ready(function($){
var name = $modifiedUrl;
$("#username").html(name);
})
	
