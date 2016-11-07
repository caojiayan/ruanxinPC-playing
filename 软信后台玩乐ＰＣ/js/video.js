
//con3
//视频文件上传新增
$(function() {
    $(".c3VideoupInput").click(function() {
        if( $(".c3Videoup").hasClass("show") ){ 
            // 执行隐藏,hasClass() 是否存在某个class
             $(".c3Videoup").hide().removeClass("show");
            // 其他,removeClass() 移除一个class
        }else{
            // 显示,addClass() 添加一个class
            $(".c3Videoup").show().addClass("show");
        }
    });
});

//视频编辑新增 c3Videoedit
function writeCheck(Vdit){
	var box=$(".c3VideoBoxall");
	var img=$(Vdit+" img")
    $(Vdit).click(function() {
    	img.toggle();
    	box.toggle();
    });
	$("#c3Vclose").click(function(){
		box.hide();
	});
	$("#c3Vsure").click(function(){
		box.hide();
	});
}
//con2中删除项
$(function(){
	$(".c4Videodel1").click(function(){
		$(".c4Videodel1").hide();
	});
});