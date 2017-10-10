$(function(){
  for(i=0;i<$("a").length;i++){
  	if($("a")[i].innerText=="立 即 查 看"){
  		$("a").parent("span").parent().parent().css('display','none');
      $("#outlink").css('display','none');
  	}
  }
});
