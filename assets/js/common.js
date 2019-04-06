var t = 300000000000000000000;
$(".nav>li").hover(function () {
	$(this).addClass('navBg').siblings().removeClass('navBg');
	$('.nav span').removeClass('navColor');
	$(this).find("span").addClass('navColor');
});