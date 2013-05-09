/*! Copyright (c) 2013 Nancle from CAU CS101
 * Licensed under the MIT License.
 *
 * copyright: Nancle from CAU CS 101
 *	 version: 1.0
 *
 *思路 	css ：利用slides的margin-left属性变化来实现动画效果
 *      js	： 核心是解决超过margin-left范围的问题。margin-left应当只在0,-940px,-1880px三个值中，
 *      	  恩别对应三张图片。当margin-left等于0（第一张图片）而点击往左时，把margin-left值置为-1880px,
 *            即跳转到最后一个图片。当margin-right等于-1880（最后一张图片）而点击往右时，把margin-left的值
 *			  置为0，即跳转到第一张图片。
 *
 */
;(function($){
	$.fn.gallary = function(options){
		var default_options = {
			"pic_nums" : 5,
			"hide_text" : true,
			"auto" : true,
			"auto_interval": 3000,
			"mouse" : true,
			"mouse_id" : this.attr("id")
		}
		options = $.extend(default_options, options);
		var id = this.attr("id");
		var $gallary = $("#" + id);
		var $slides = $("#" + id + "_slides");
		var $slide = $("." + id + "_slide");
		var $text = $("#" + id + "_text");
		var $text_block = $("." + id + "_text_block");
		var $mouse = $("#" + options.mouse_id);
		
		var $nav_left = $("#" + id + "_nav_left");
		var $nav_right = $("#" + id + "_nav_right");
		
		var text_index = 0;
		var slide_width = $slide.outerWidth();
		var last_slide_margin = - (options.pic_nums - 1) * slide_width;
		var last_text_index =  options.pic_nums - 1;
		var text_width = $text.outerWidth();
		var nav_left_pos = $nav_left.position().left;
		var nav_right_pos = $nav_right.position().left;
		var text_pos = $text.position().left;
		var slides_margin_left = 0; 
		
		$slides.width(slide_width * options.pic_nums);
		$text.html( $text_block.eq(0).html() );
		$text.css("top", "0px");
		
		//自动隐藏文字栏
		if(options.hide_text){
			$nav_left.css("left",slide_width )
	  		$nav_right.css("left",slide_width);
			$text.css("left", -text_width);
		
		
			$gallary.hover(function(){
				$nav_left.stop().animate({"left":nav_left_pos })
				$nav_right.stop().animate({"left":nav_right_pos});
				$text.stop().animate({"left":text_pos});	
			}, function(){
				$nav_left.stop().animate({"left":slide_width});
				$nav_right.stop().animate({"left":slide_width});
				$text.stop().animate({"left":-text_width});	
			})
		}
		
		//自动播放
		if(options.auto){
			
			var stop = setInterval(function(){
				$nav_right.trigger("click");
			}, options.auto_interval);
			
			$gallary.hover(function(){
				clearInterval(stop);
			}, function(){
				stop = setInterval(function(){
					$nav_right.trigger("click");
				},  options.auto_interval)
			})
		}
	
		
		$nav_left.click(function(){
			//当停留在第一张图片，而点击向左按钮，将margin-left置为-1880px，即跳转到第三张图片
			if(slides_margin_left == 0){
				slides_margin_left = last_slide_margin;
			}else{
				//否则，将margin-left增加940,即跳转到上一个张
				slides_margin_left += slide_width;
			}
			$slides.stop().animate({ marginLeft: slides_margin_left + "px"}, "1");
			
			if(text_index == 0){
				
				text_index = last_text_index;
			}else{
				text_index -= 1;
			}
			$text.html( $text_block.eq(text_index).html() );
		});
		
		$nav_right.click(function(){
			//当停留在第三张图片，而点击向右按钮，将margin-left置为0px，将跳转到第一张图片
			if(slides_margin_left == last_slide_margin){
				slides_margin_left = 0;
			}else{
				//否则，将margin-lef减小940,即跳转到下一个张图
				slides_margin_left -= slide_width;
			}
			$slides.stop(false, true).animate({ marginLeft: slides_margin_left + "px"}, "1");
			
			if(text_index ==  last_text_index){
				text_index = 0;
			}else{
				text_index += 1;
			}
			$text.html( $text_block.eq(text_index).html() );
		});
		
		$mouse.bind("mousewheel", function(e, delta){
			if(delta < 0){
				$nav_right.trigger("click");
			}else{
				$nav_left.trigger("click");
			}
			e.preventDefault();
		})
		
		if(!options.mouse){
			$mouse.unmousewheel();
		}
	}
})(jQuery);
