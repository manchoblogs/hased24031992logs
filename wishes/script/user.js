$urlParam = function(name){
    var results = new RegExp(&#39;[\?]&#39; + name + &#39;=([^#]*)&#39;).exec(window.location.href);
    if (results==null){
       return null;
    }else{
	return decodeURI(results[1]) || 0;
    }}
console.log($urlParam(&#39;d&#39;)); 
	jQuery(document).ready(function($){
	var name = $urlParam(&#39;d&#39;);
	$(&quot;#result&quot;).html(name);
	});
	
var url = $urlParam(&#39;d&#39;);
url = url.split('&')[0];
alert(url);
