$urlParam = function(name){
    var results = new RegExp('[\?]' + name + '=([^#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
	
<<<<<<< HEAD
var url = $urlParam(&#39;d&#39;);
var modifiedUrl = url.replace('&m=1','').replace('','');
console.log(modifiedUrl);
=======
}
console.log($urlParam('d')); 
alert($urlParam('d')); 

$(document).ready(function(){
var name = $urlParam('d');
$("#username").html(name);
})
>>>>>>> e565111ee2c217e53f5d4e6630e926b6a2f17e6e
