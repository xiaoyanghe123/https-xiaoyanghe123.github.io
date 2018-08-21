
(function() {
	var cmh2 = $(window).height();
	$(window).bind("scroll.comment", function() {
		var cmh1 = $('#comment_count').offset().top;
		if($(document).scrollTop() + cmh2 >= cmh1) {
			if($('#comment_main').html().toLowerCase().indexOf('<div>')!=-1) $('#comment_main').html('<if'+'rame src="'+EXPath+'comment.php@mid='+module_id+'&itemid='+item_id+'" name="baiyun_comment" id="baiyun_comment" style="width:99%;height:0px;" scrolling="no" frameborder="0"></if'+'rame>');
			$(window).unbind("scroll.comment");
		}
	});
})();

$('#comment_div').mouseover(function() {
	if($('#comment_main').html().toLowerCase().indexOf('<div>')!=-1) $('#comment_main').html('<if'+'rame src="'+EXPath+'comment.php@mid='+module_id+'&itemid='+item_id+'" name="baiyun_comment" id="baiyun_comment" style="width:99%;height:0px;" scrolling="no" frameborder="0"></if'+'rame>');
});