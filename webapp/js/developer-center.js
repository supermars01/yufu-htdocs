$(function(){
	// 流星每隔十秒显示一次
    $('.flowstar').css('animation','flowstar 2s 1 linear');
    setInterval(function(){
        $('.flowstar').css('animation','');
        $('.flowstar').hide();
    },2000);
    setInterval(function(){
        $('.flowstar').show();
        $('.flowstar').css('animation','flowstar 2s 1 linear');
    },10000);
    // 流星每隔十秒显示一次 end
    
    // 为代码添加高亮
    hljs.initHighlightingOnLoad();
    $('.developer-main pre code').each(function(){
        var lines = $(this).text().split('\n').length;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for(i=1;i<=lines;i++){
            $numbering.append($('<li/>').text(i));
        }
    });

    // 文档切换
    $('.developer-menu li').click(function() {
    	var index=$(this).index();
    	$(this).addClass('active').siblings('li').removeClass('active');
    	$('.developer-l').eq(index).show().siblings('.developer-l').hide();
    });
    
});