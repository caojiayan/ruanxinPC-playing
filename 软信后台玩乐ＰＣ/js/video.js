
//con3
//视频文件上传新增
$(document).ready(function() {
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
$(document).ready(function() {
    $(".c3Videoedit").click(function() {
        if( $(".c3VideoBoxall").hasClass("show") ){ 
            // 执行隐藏,hasClass() 是否存在某个class
             $(".c3VideoBoxall").hide().removeClass("show");
            // 其他,removeClass() 移除一个class
        }else{
            // 显示,addClass() 添加一个class
            $(".c3VideoBoxall").show().addClass("show");
        }
        $(".c3VideoeditImg").attr("src","img/writeRed.png")
    });
});

c3VideoBox1close
$(document).ready(function(){
	$(".c3VideoBox1close").click(function(){
		$(".c3VideoeditImg").attr("src","img/writeSiliver.png")
	});
});

//con2中删除项
$(document).ready(function(){
	$(".c4Videodel1").click(function(){
		$(".c4Videodel1").hide();
	});
});