>Copyright (c) 2013 Nancle from CAU CS101
>
>Licensed under the MIT License.
>
>version: 1.0
>
>经过IE6&IE6+，chrome，firefox测试兼容


*使用方法：{yourId}替换成你的id

	1. [ HTML ] 
        <div id="{your_id}">
		    <div id="{your_id}_slides">
		        <div class="{your_id}_slide"><img src="{src}" /></div>
		        <div class="{your_id}_slide"><img src="{src}" /></div>
		        ...
		    </div>
		    <div id="{your_id}_text"></div>
		        <div class="{your_id}_text_block"></code>
		            <h1 class="{your_id}_text_title">标题</h1>
		            <p class="{your_id}_text_detail">内容</p>
		        </div>
		        ...
		    </div>
		    <div id="{your_id}_nav_left"></div>
		    <div id="{your_id}_nav_right"></div>
		</div>
         
    2.[ CSS ]  以下这些参数可以根据需要自行调整
        #{your_id}_wrapper{ width:100%; height:289px; background:#fff}
		#{your_id}{ width:800px; height:289px; margin:0 auto; position:relative; overflow:hidden}
		.{your_id}_slide{ width:800px; height:289px; float:left; overflow:hidden }
		#{your_id}_nav_left, #{your_id}_nav_right{ width:61px; height:61px; position:absolute }
		#{your_id}_nav_left{ background-image:url(lib/gallary_nav_left.png); left:700px; top:170px }
		#{your_id}_nav_right{ background-image:url(lib/gallary_nav_right.png); left:700px; top:60px }
		#{your_id}_text{height:289px; width:200px; background:url(lib/gallary_text_bg.png) repeat; position:absolute; left:0px; top:0px; color:#ccc; padding:20px; overflow:hidden;}
		#{your_id}_slides{ height:289px; position:absolute; top:0; left:0}
		#{your_id}_text h1{ font-size:17px; margin-bottom:8px; text-align:left; font-weight:bold; width:200px; height:27px; overflow:hidden }
		#{your_id}_text p{ font-size:14px; line-height:27px; text-indent:30px}
		.{your_id}_text_block{display:none}
        
    3.[ JS ]
        <script type="text/javascript" src="lib/jquery-1.9.1.js"></script>
		<script type="text/javascript" src="lib/jquery.mousewheel.js"></script>
		<script type="text/javascript" src="jquery.gallary.js"></script>
        
    4.调用
        $("#{yourId}").gallary({
        "pic_nums" : 5, // 图片个数,对应上述html里IMG标签个数；默认3个
        "hide_text" : false, //是否自动隐藏文字；默认是true，即自动隐藏
        "auto" : true, //是否自动播放；默认是false
        "auto_interval": 3000, //自动播放的间隔，单位毫秒；默认3000毫秒，即三秒
        "mouse" : true, //是否支持鼠标切换图片；默认是false
        "mouse_id" : this.attr("id") //鼠标切换触发的id；默认是主id即{your_id}
});
*演示地址： [http://quchen.cau.edu.cn/jsDev/jquery-gallary/](http://quchen.cau.edu.cn/jsDev/jquery-gallary/) .
