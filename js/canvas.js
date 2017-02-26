alert("canvas js running");
//console.log("snakes running");
function snake_pit(obj){

  //console.log("in the pit");
  //properties

  var canvas = document.getElementById('tutorial');
  var context_obj = canvas.getContext('2d');
  var display = (obj != undefined && obj.display != undefined) ? obj.display : "full";
  var obj_els = {};
	var first_run = "true";
  //console.log(display);
  var img_default = ["https://upload.wikimedi",
                             "a.org/wikipedia/pt",
                             "/b/b5/Snake_Eyes_po",
                             "r_Robert_Atkins.jpg"]
                             .join("");
  var img_url = (obj != undefined && obj.url != undefined) ? obj.url : img_default;

	//obj_globals
	var src_x = 0;
	var src_y = 5;
	var img_w = 500;
	var img_h = 500;
	var can_x = 0;
	var can_y = 0;
	var can_w = 500;
	var can_h = 500;

	try{
	if(localStorage != undefined && localStorage.canvas_tutorial != undefined && localStorage.canvas_tutorial != "")
	{
		var local_str = localStorage.canvas_tutorial;
		var local_ary = local_str.split(",");
		img_url = local_ary[0];
		src_x = local_ary[1];
		src_y = local_ary[2];
		img_w = local_ary[3];
		img_h = local_ary[4];
		can_x = local_ary[5];
		can_y = local_ary[6];
		can_w = local_ary[7];
		can_h = local_ary[8];
	}//end if
	}catch(e){
		console.log("nope. reload failed.")
	}

   var image_object=new Image();

      var draw_me = function() {

      //console.log("draw running");

          if (canvas.getContext) {


            image_object.onload=function(){

              //basic
              switch(display){
              case "basic":
                context_obj.drawImage(tester, 0, 0);
              break;

              case "scale":
                context_obj.drawImage(tester, 0, 0,50,50);
              break;

              case "full":
                //canvas data here
                //var imgwidth = image_object.offsetWidth || 600;
									//img_w = imgwidth;
                //var imgheight = image_object.offsetHeight || 600;
									//img_h = imgheight;
                //alert(tester.offsetHeight);
                canvas.width = 500;
                canvas.height = 500;
                context_obj.drawImage(image_object, src_x, src_y, img_w, img_h, can_x, can_y, can_w, can_h);
              break;

              }//end switch

            }//end onload//


            image_object.src=img_url;
          }//end if


      }//end draw

      var ctrl_ary = [
					{
					"label":"THE IMAGE",
					"contents":"IS",
					 "title":"The Image Element",
					 "text":"The first parameter in drawImage().  </br> I created an image object so I wouldn't have to refer to the html element later. </br> <code class='word_wrap'> var image_object=new Image(); \n image_object.onload= </br> image_object.onerror=</br></br>here are some other images to try:</br></br>https://s-media-cache-ak0.pinimg.com/originals/3e/ae/f0/3eaef0526bbb8f4d4bc01429a9548521.png</br></br>https://static.stereogum.com/uploads/2013/08/lauryn-hill.jpg</br></br>https://www.clipartkid.com/images/119/ninjastar-clip-art-at-clker-com-vector-clip-art-online-royalty-free-r0e3O2-clipart.png</br></br>https://s-media-cache-ak0.pinimg.com/originals/3e/ae/f0/3eaef0526bbb8f4d4bc01429a9548521.png</code>"
				 },
					{
					"label":"POINT OF ORIGIN",
					"contents":"POO",
					 "title":"The Starting Point",
					 "text":"Just like in geometry the canvas drawImage() uses a coordinate system.  </br>The 'point of origin' coordinate begins in the top left corner of your source image with (0,0).  You can change the (x,y) coordinates of this point of origin to determine where in your source image to begin drawing the viewable area. </br></br>  <small>In other words:  The  sliders don't actually move the image.  its telling the canvas where on the image to start drawing outward from. </br>( negative numbers are like saying 'start drawing this far off the page')</small>"
				 },
					{
					"label":"DRAW PIXELS",
					"contents":"DP",
					 "title":"One lump or two?",
					 "text":"Although this value appears to zoom in and out (with the zoom numbers going in the wrong direction),  this pair of parameters tells the canvas how many of the source image's pixels, moving outward from your point of origin, it should cram into your canvas drawing area.</br></br>In other words: When you use smaller numbers here you are telling the canvas to fit less pixels into the available space.</br></br><small>(ex. you can fit either 10 huge lumps of sugar into your cup or hundreds of tiny grains.)</small>"
				 },
					{
					"label":"CANVAS ORIGIN",
					"contents":"CO",
					 "title":"Take a second look?",
					 "text":"At first use this appears to do the same thing as the controls in the POINT OF ORIGIN section above but look again, and maybe again (see below).  These controls control the point where the canvas will begin to render an image. And unlike the controls in the P.O.O section these controls work only with the canvas itself not with the actual source image.</br></br><small>In other words: Here's a good way to see this feature in action using this image. Set both sliders in the POINT OF ORIGIN section to 200 and set both sliders in the DRAW PIXELS section to 100. Then move these sliders.</small>"
				 },
					{
					"label":"THE DISPLAY",
					"contents":"TD",
					 "title":"The final frontier.",
					 "text":"Even though this seems to be a repeat of the DRAW PIXELS section these pameters only work on what you see displayed ofter you've set all the rest of the drawImage values.</br></br><small>In other words: I could make up some fancy concept to tell you how its doing this with pixels or that from who knows where yada yada. But all this really seems to do is zoom in and out using what is already visible on the canvas.</small>"
				 },
					{
					"label":"THE SAVE",
					"contents":"TS",
					 "title":"The final final frontier.",
					 "text":"So in theory once you have your image link and your calculations, you could save them both in a db and when you needed to load the image either by way of a 'safe' inexpensive user profile image or some other images you wanted to use, you could call up the url and drawImage data from your friendly neighborhood database or json file etc plug in the data to some fancy site and wala? (I don't know french)</br></br>my localStorage save string looked like this to the computer:</br></br><code class='word_wrap'>localStorage.canvas_tutorial = ' https://static.stereogum.com/uploads/2013/08/lauryn-hill.jpg,65,80,300,300,25,25,450,450';</code></br>If you set each section to each value in the string you should end up with an image that looks just the one i set up.</br></br><small>In other words: If you really wanted to be cheap just get the users to store their data on their own computer so its there when they visit. *(see below).</small>"
				 },
				{
					"label":"RESOURCES",
					"contents":"RR",
					 "title":"Bibliography?",
					 "text":"<h6>Sites I used to get upt to speed:</h6><ul class='word_wrap'><li>https://www.w3schools.com/tags/canvas_drawimage.asp</li></ul><h6>Image sites i requisitioned for this presentation:</h6><code><ul class='word_wrap'><li>https://s-media-cache-ak0.pinimg.com/originals/3e/ae/f0/3eaef0526bbb8f4d4bc01429a9548521.png</li><li>https://static.stereogum.com/uploads/2013/08/lauryn-hill.jpg</li><li>https://www.clipartkid.com/images/119/ninjastar-clip-art-at-clker-com-vector-clip-art-online-royalty-free-r0e3O2-clipart.png</li><li>https://s-media-cache-ak0.pinimg.com/originals/3e/ae/f0/3eaef0526bbb8f4d4bc01429a9548521.png</li></ul></code><h6>This gentlemen's open source diligence knowingly yet unknowingly supplied the slider resources.  Thanxs a lot.</h6><P>http://seiyria.com/bootstrap-slider/</P><h6>An old canvas guru's website</h6><p class='word_wrap'>https://codepo8.github.io/canvas-images-and-pixels/</p></br><h6>And another</h6><p class='word_wrap'>https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage</p><h6>My other 'previous' failed but also promising studies on html5 canvas and image links here on code pen</h6><ul class='word_wrap'><li><a href='https://codepen.io/inspectaTech/pen/YZzjgo'>https://codepen.io/inspectaTech/pen/YZzjgo</a><li></li><a href='https://codepen.io/inspectaTech/pen/xgvGEP?editors=0111'>https://codepen.io/inspectaTech/pen/xgvGEP?editors=0111</a></li></ul><h6>This repo on github:</h6><p><a class='word_wrap'  href='https://github.com/inspectaTech/profile-image-canvas-tutorial'>https://github.com/inspectaTech/profile-image-canvas-tutorial</a></p>"
				 }

			]

    var control_panel = function(){

      //object properties//


      //local variables

      //jqm collapsible
      var home = document.getElementById("info_cont");

      //collapsible set

      var test_nbr = 3;

      for(var x = 0; x < ctrl_ary.length ; x++){

      var bx_Nm = "col_set" + x;
      var ctrl_box = document.createElement("div");
      ctrl_box.id = "ctrl_box" + x;
      ctrl_box.className = "ctrl_box" + x + " ctrl_box";
       obj_els[bx_Nm] = ctrl_box;

        var l_Nm = "ctrl_label" + x;
        var ctrl_label = document.createElement("div");
        ctrl_label.id = "ctrl_label" + x;
        ctrl_label.className = "ctrl_label" + x +" ctrl_label";
        ctrl_label.dataset.nbr = x;
        ctrl_label.innerHTML = "<h5>" + ctrl_ary[x].label + "</h5>";
        obj_els[l_Nm] = ctrl_label;
        obj_els["contents" + x] = ctrl_ary[x].contents;


        var c_Nm = "ctrl_cont" + x;//
        var ctrl_cont = document.createElement("div");
        ctrl_cont.id = "ctrl_cont" + x;
        ctrl_cont.className = "ctrl_cont" + x + " ctrl_cont";//
        obj_els[c_Nm] = ctrl_cont;

        obj_els[l_Nm].addEventListener("click",function(){
          var sNbr = this.dataset.nbr;
          run_contents(obj_els["contents"+sNbr]);

          var targ_el = this.nextSibling;
          var classStr = targ_el.className;
          console.log("classStr",classStr);
           var targ_str = "#" + targ_el.id;//

          if(classStr.indexOf("scroll_out") == -1){
            //go into hibernation mode
            $(".ctrl_cont").removeClass("scroll_out");
            $(".ctrl_cont").addClass("hibernate");
            $(targ_str).addClass("scroll_out");
           $(targ_str).removeClass("hibernate");

          }else{
            $(targ_str).removeClass("scroll_out");
            $(targ_str).addClass("hibernate");

          }
          console.log("classStr", targ_el.className);


        })//end c_Nm

       ctrl_box.appendChild(ctrl_label);
        ctrl_box.appendChild(ctrl_cont);
        home.appendChild(ctrl_box);


      }//end for
      $(".ctrl_cont").addClass("hibernate");
      //$(".col_label").removeClass("hide");

    }//end control_panel



    var run_contents = function(str)
    {
      switch(str)
      {
        case "IS":
          display_sect(0);
					add_image_input()
        break;

        case "POO":
          display_sect(1);
					add_slider_input(1);
        break;

        case "DP":
          display_sect(2);
					add_slider_input(2);
        break;

        case "CO":
          display_sect(3);
					add_slider_input(3);
        break;

        case "TD":
          display_sect(4);
					add_slider_input(4);
        break;

				case "TS":
          display_sect(5);
					add_save_btn(5);
        break;

				case "RR":
          display_sect(6);
        break;

      }//end switch

    }//end run_contents

    var display_sect = function(nbr){

			var add_class = (nbr != 0 && nbr != 5) ? " slider " : "";
        console.log("image section running");
        var home = document.getElementById("ctrl_cont" + nbr);//
      	home.innerHTML = "";//
       //title

				var img_ctrl_text_cont = document.createElement("div");
        img_ctrl_text_cont.id = "img_ctrl_text_cont" + nbr;
        img_ctrl_text_cont.className = "img_ctrl_text_cont" + add_class + " img_ctrl_text_cont" + nbr;

						var img_ctrl_title = document.createElement("div");
						img_ctrl_title.id = "img_ctrl_title" + nbr;
						img_ctrl_title.className = "img_ctrl_title img_ctrl_title" + nbr;//
						img_ctrl_title.innerHTML = "<h6>" + ctrl_ary[nbr].title + "</h6>";

					//text
						var img_ctrl_text = document.createElement("div");
						img_ctrl_text.id = "img_ctrl_text" + nbr;
						img_ctrl_text.className = "img_ctrl_text img_ctrl_text" + nbr;//
						img_ctrl_text.innerHTML = "<p>" + ctrl_ary[nbr].text + "</p>";


				img_ctrl_text_cont.appendChild(img_ctrl_title);
				img_ctrl_text_cont.appendChild(img_ctrl_text);


      //container
        var img_ctrl_cont = document.createElement("div");
        img_ctrl_cont.id = "img_ctrl_cont" + nbr;
        img_ctrl_cont.className = "img_ctrl_cont img_ctrl_cont" + nbr;//


			home.appendChild(img_ctrl_text_cont);
      home.appendChild(img_ctrl_cont);

    }//end display_sect

		var add_image_input = function()
		{
			var home = document.getElementById("img_ctrl_cont0");

			//input
        var img_ctrl_input = document.createElement("input");
        img_ctrl_input.id = "img_ctrl_input";
        img_ctrl_input.className = "form-control img_ctrl_input";//
				img_ctrl_input.setAttribute("placeholder","enter an image url...");
				img_ctrl_input.type = "url";
				img_ctrl_input.onfocus = function(){this.select();}
				img_ctrl_input.onblur = function(){
				img_url = (img_ctrl_input.value != undefined && img_ctrl_input.value != "") ? img_ctrl_input.value : img_default;
					draw_me();
				}//end on blur

				var img_ctrl_reset = document.createElement("button");
        img_ctrl_reset.id = "img_ctrl_reset";
        img_ctrl_reset.className = " img_ctrl_reset pointer ready";//
				img_ctrl_reset.innerText = "reset";
			img_ctrl_reset.onclick = function(){
				img_url = img_default;
				src_x = 0;
				src_y = 0;
				img_w = 500;
				img_h = 500;
				can_x = 0;
				can_y = 0;
				can_w = 500;
				can_h = 500;
				draw_me(); }

			var img_ctrl_example = document.createElement("button");
img_ctrl_example.id = "img_ctrl_example";
img_ctrl_example.className = " img_ctrl_example img_ctrl_reset pointer ready";//
img_ctrl_example.innerText = "see my example";
img_ctrl_example.onclick = function()
{
		img_url = "https://static.stereogum.com/uploads/2013/08/lauryn-hill.jpg";
		src_x = 65;
		src_y = 80;
		img_w = 300;
		img_h = 300;
		can_x = 25;
		can_y = 25;
		can_w = 450;
		can_h = 450;

		draw_me();
}//end example onclick

			home.appendChild(img_ctrl_input);
			home.appendChild(img_ctrl_reset);
			home.appendChild(img_ctrl_example);
		}//end add_image_input

		var add_save_btn = function()
		{

			var home = document.getElementById("img_ctrl_cont5");

			        //btn
        var save_ctrl_btn = document.createElement("button");
        save_ctrl_btn.id = "save_ctrl_btn";
        save_ctrl_btn.className = "save_ctrl_btn ready";//
				save_ctrl_btn.innerText = "save my image setup (localStorage)";
				save_ctrl_btn.onclick = function(){

				//test for local storage
				if(ls_test() === true){
				// available
				draw_string = [img_url,src_x, src_y, img_w, img_h, can_x, can_y, can_w, can_h].join();
				localStorage.canvas_tutorial = draw_string;

				console.info("localStorage.canvas_tutorial");
				console.log(localStorage.canvas_tutorial);
				}else{
					// unavailable
					$('#save_ctrl_btn').removeClass('ready');
					$('#save_ctrl_btn').addClass('not_ready');
					$('#save_ctrl_btn').html("localStorage is not available");
					$('#save_ctrl_btn').disabled();


				}//end else

			}//end on click

			home.appendChild(save_ctrl_btn);
			try{
				if(localStorage != undefined && localStorage.canvas_tutorial != undefined && localStorage.canvas_tutorial != "")
				{
						 var clear_ctrl_btn = document.createElement("button");
						clear_ctrl_btn.id = "save_ctrl_btn";
						clear_ctrl_btn.className = "clear_ctrl_btn save_ctrl_btn ready";//
						clear_ctrl_btn.innerText = "clear localStorage";
						clear_ctrl_btn.onclick = function()
						{
							delete localStorage.canvas_tutorial;
							img_url = img_default;
							src_x = 0;
							src_y = 0;
							img_w = 500;
							img_h = 500;
							can_x = 0;
							can_y = 0;
							can_w = 500;
							can_h = 500;
							draw_me();
						}
					home.appendChild(clear_ctrl_btn);
				}//end if
			}catch(e){
				console.log("nope no clear btn.");
			}//end catch

		}//end add_save_btn

		 var ls_test = function(){
			var test = 'test';
			try {
					localStorage.setItem(test, test);
					localStorage.removeItem(test);
								console.log("localStorage works");
					return true;

			} catch(e) {
					console.log("localStorage fails");
					return false;
			}//end catch
		}//end ls_test


		var add_slider_input = function(nbr)
		{
			var home = document.getElementById("img_ctrl_cont"+nbr);
			home.innerHTML = "";

			//tear down the whole neighborhood
			// @ slider issue
			//sliders with the same id were existing in different dropdowns
			var the_neighborhood = 	document.getElementsByClassName("img_ctrl_cont");
			for(var n = 0; n < the_neighborhood.length; n++)
				{
					the_neighborhood[n].innerHTML = "";
				}

			//SLIDER A
				var sli_ctrl_contA = document.createElement("div");
				sli_ctrl_contA.id = "sli_ctrl_contA";
				sli_ctrl_contA.className = "sli_ctrl_contA";//

					//input
						var sli_ctrl_inputA = document.createElement("input");
						sli_ctrl_inputA.id = "sli_ctrl_inputA";
						sli_ctrl_inputA.className = "sli_ctrl_inputA";//
						sli_ctrl_inputA.setAttribute("data-slider-id","sli_ctrl_inputA");//
						sli_ctrl_inputA.setAttribute("data-slider-min","-500");//
						sli_ctrl_inputA.setAttribute("data-slider-max","500");//
						sli_ctrl_inputA.setAttribute("data-slider-step","1");//
						var set_valA = slide_data("A",nbr);
						sli_ctrl_inputA.setAttribute("data-slider-value", set_valA);//
						//sli_ctrl_inputA.setAttribute("data-slider-handle","custom");//ninja stars section
						sli_ctrl_inputA.type = "text";
						sli_ctrl_inputA.onfocus = function(){this.select();}

						sli_ctrl_inputA.onchange = function(){
						sli_ctrl_boxA.value = sli_ctrl_inputA.value;
						slide_data("A",nbr,{"value" : sli_ctrl_inputA.value, "val_oper":
"add"});
							//sliderA.setValue();
							//src_x = sli_ctrl_inputA.value;
							draw_me();
						}//end on blur

						var sli_ctrl_boxA = document.createElement("input");
						sli_ctrl_boxA.id = "sli_ctrl_boxA";
						sli_ctrl_boxA.className = " sli_ctrl_boxA";//
						sli_ctrl_boxA.value = set_valA;//src_x;
						sli_ctrl_boxA.type = "number";
						sli_ctrl_boxA.onfocus = function(){this.select(); }
						sli_ctrl_boxA.oninput = function(){
						sli_ctrl_inputA.value = sli_ctrl_boxA.value;
							slide_data("A",nbr,{"value" :	sli_ctrl_boxA.value, "val_oper": "add"});
							//src_x = sli_ctrl_inputA.value;
							sliderA.setValue();
							draw_me();
						}//end on oninput


					sli_ctrl_contA.appendChild(sli_ctrl_inputA);
					sli_ctrl_contA.appendChild(sli_ctrl_boxA);

			//END SLIDER A

			//SLIDER B
				var sli_ctrl_contB = document.createElement("div");
				sli_ctrl_contB.id = "sli_ctrl_contB";
				sli_ctrl_contB.className = "sli_ctrl_contB";

					//input
						var sli_ctrl_inputB = document.createElement("input");
						sli_ctrl_inputB.id = "sli_ctrl_inputB";
						sli_ctrl_inputB.className = "sli_ctrl_inputB";//
						sli_ctrl_inputB.setAttribute("data-slider-id","sli_ctrl_inputB");//
						sli_ctrl_inputB.setAttribute("data-slider-min","-500");
						sli_ctrl_inputB.setAttribute("data-slider-max","500");//
						sli_ctrl_inputB.setAttribute("data-slider-step","1");//
						var set_valB = slide_data("B",nbr);
						sli_ctrl_inputB.setAttribute("data-slider-value",set_valB);
						sli_ctrl_inputB.setAttribute("data-slider-orientation","vertical");
						//sli_ctrl_inputB.setAttribute("data-slider-handle","custom");//ninja stars section
						sli_ctrl_inputB.type = "text";
						sli_ctrl_inputB.onfocus = function(){this.select();}
						sli_ctrl_inputB.onchange = function(){
						sli_ctrl_boxB.value = sli_ctrl_inputB.value;//
							slide_data("B",nbr,{"value" :	sli_ctrl_inputB.value, "val_oper": "add"});
							//sliderB.setValue();
							//src_y = sli_ctrl_inputB.value;
							draw_me();
						}//end on blur
	console.info("sli_ctrl_inputB");//
			console.dir(sli_ctrl_inputB);

						var sli_ctrl_boxB = document.createElement("input");
						sli_ctrl_boxB.id = "sli_ctrl_boxB";
						sli_ctrl_boxB.className = "sli_ctrl_boxB";//
						sli_ctrl_boxB.value = set_valB;//src_y;
						sli_ctrl_boxB.type = "number";
						sli_ctrl_boxB.onfocus = function(){this.select(); }
						sli_ctrl_boxB.oninput = function(){
						sli_ctrl_inputB.value = sli_ctrl_boxB.value;
						slide_data("B",nbr,{"value" : 	sli_ctrl_boxB.value, "val_oper": "add"});
							//src_y = sli_ctrl_inputB.value;
							sliderB.setValue();
							draw_me();
						}//end on oninput


					sli_ctrl_contB.appendChild(sli_ctrl_inputB);
					sli_ctrl_contB.appendChild(sli_ctrl_boxB);

			home.appendChild(sli_ctrl_contA);
			home.appendChild(sli_ctrl_contB);

			var sliderA = new Slider('#sli_ctrl_inputA', {
				formatter: function(value) {
					return 'Current value: ' + value;
				}
			});//end new slider script
			console.info("sliderA");
			console.dir(sliderA);
			//http://seiyria.com/bootstrap-slider/

			var sliderB = new Slider('#sli_ctrl_inputB', {
				formatter: function(value) {
					return 'Current value: ' + value;
				}
			});//end new slider script
			//http://seiyria.com/bootstrap-slider/

			//END SLIDER B

		}//end add_slider_input

		var slide_data = function(ltr,nbr,obj)
		{
			//span_set2 view_span span3 view_span3
			var slide_ltr = ltr;
			var nbr = nbr;
			var val = (obj != undefined && obj.value != undefined) ? obj.value : "";
			var val_oper = (obj != undefined && obj.val_oper != undefined) ? obj.val_oper : "get_value";

			var slide_id = ltr+nbr;
			var span_id_str = "span" + slide_id;
			var targetSpan = document.getElementById(span_id_str);

			if(val != "" && val_oper == "add" || val_oper == "both"){
				//A covers x and width
				//B covers y and height
				switch(slide_id)
				{
						case "A1":
								src_x = val;
								targetSpan.innerText = val;
						break;
						case "B1":
								src_y = val;
								targetSpan.innerText = val;
						break;

						case "A2":
								img_w = val;
								targetSpan.innerText = val;
						break;
						case "B2":
								img_h = val;
								targetSpan.innerText = val;
						break;

						case "A3":
								can_x = val;
								targetSpan.innerText = val;
						break;
						case "B3":
								can_y = val;
								targetSpan.innerText = val;
						break;

						case "A4":
								can_w = val;
								targetSpan.innerText = val;
						break;
						case "B4":
								can_h = val;
								targetSpan.innerText = val;
						break;
				}//end switch
			}//end if

			if(val_oper == "get_value" || val_oper == "both"){
				switch(slide_id)
				{
						case "A1":
							return src_x;
						break;
						case "B1":
							return src_y;
						break;
						case "A2":
								return img_w;
						break;
						case "B2":
								return img_h;
						break;
						case "A3":
							return can_x;
						break;
						case "B3":
							return can_y;
						break;

						case "A4":
							return can_w;
						break;
						case "B4":
							return can_h;
						break;
				}//end switch
			}//end if

		}//end slide_dataA


  this.draw_me = function(){ draw_me(); control_panel(); };

}//end snake_pit


function set_dimensions()
{
  //console.log(document.body.clientHeight);
  var c_width = document.body.clientWidth;
  console.log(document.body.clientWidth);

  var canvas_el = document.getElementById("tutorial");
  var ctrl_el = document.getElementById("info_cont");
  //
	var dyn_var = (document.body.clientWidth > 499) ? 2.7 : 1.2;
  var w_calc = parseInt(c_width) / dyn_var;
  //console.log(w_calc/10);//
  canvas_el.style.height = w_calc + "px";

  //ctrl_el.style.height = w_calc + "px";
}//end set_dimensions
