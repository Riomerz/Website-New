

var currentUser = Parse.User.current();
if (currentUser) {
    
    var teacher_id = currentUser.get("username");
	
	var display_name = teacher_id;
	display_name = display_name.split(" ");
	//var pic  = currentUser.get("pid").url();
	
	//var class_names_exits = [];
    var teachername = currentUser.get("name");
	if(typeof currentUser.get("email") != 'undefined'){
	var user_email = currentUser.get("email");
	}
	var class_id;
	var count_msg =0;
	var d2 = new Date("March 02, 2000");
	var timei;
    var colors = ["#388E8E","#668B8B","#B4CDCD","#2F4F4F","#5F9F9F","#C0D9D9","#528B8B","#96CDCD","#79CDCD","#8FD8D8","#66CCCC","#70DBDB","#008080","#00CDCD","#00CED1","#5F9EA0","#00868B","#00C5CD","#39B7CD","#05B8CC","#00688B","#009ACD","#33A1C9"];
	var dateObj ;
	var datei;
	var del_obj;
	var l = c = s = 1;
	var feed_id = 0;
	var new_class_token;
	var new_class_name;
	var focused = "";
	var messageObj;
	var new_email;
	var pro_pic;
	var pic;
	var my_class_names = [];
	var theId;
	




	
		
	$(document).ready(function()
{

    
    });
	window.onload = function(){
		
	currentUser.fetch();
	
	document.getElementById("Sach").innerHTML = teachername;
	document.getElementById("phn").innerHTML = display_name[0];
	document.getElementById("eml").innerHTML = user_email;
	document.getElementById("profile_name").innerHTML = teachername+"<br>"+display_name[0];
	document.getElementById("teacher_name").innerHTML = teachername;
	
    $(".sending").hide();
	generate_new_message();    								
	separate_date();
	dateObj = new separate_date();	
    messageObj = new generate_new_message();
    showmyclasses();	
	giveClassesDetails();
	$('#page-container').on('click',function(){
		 if ($("#dropdown").is(":visible")) {
		  $("#dropdown").animate(
		 
            {
                opacity: "0"
				
            },
            0,
			function(){
				
				 $("#dropdown").animate({"left": "+=50px"},0);
				$("#dropdown").slideUp(0);
				 
				
            }

           
           
    
		 );
		
		 }
	});

function showmyclasses(){
 //var currentUser = Parse.User.current();
var array=currentUser.get("Created_groups");
if(array){
for (var i = 0 ; i < array.length ; i++) { 
var cod=array[i][0];
var cnam= array[i][1];

//cname to something ..
if(cnam.length>13)
{
cnam=cnam.substr(0,10)+"...";
}
//if>say 10 str length
var aa= document.createElement('div');
aa.id=cod;
aa.href="dashboard.html?"+encodeURIComponent(cod);
//aa.className="class-list-name";

if(cod==new_class_token){
aa.className="class-list-name";
aa.style = "background: rgb(28, 135, 160)"
}
else{
aa.className="class-list-name";
}

cnam=document.createTextNode(cnam);
aa.appendChild(cnam);

var dd= document.getElementById("class-list");

aa.setAttribute("onclick", "new_class_token = this.id; start()");
aa.addEventListener("click", function(){select_class(this.id)}, false);

dd.appendChild(aa);

$("#cod").insertAfter($("#class_room"));
}
}
new_class_token = cod;
}
	
	
	}
		

function invite_parent(){
	toggleSlider();
var modal_class=  document.getElementById("alerts");

var img_back=  document.getElementById("inner_alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
var title = document.getElementById("alert_title_text");
next.style.display = "none";
back.style.display = "none";
msg.style.display = "none"
title.innerHTML = "INVITE PARENTS";
document.getElementById("alert_title").style.background = "#039be5";
img.src="icons/parents.png";
img.style.width = "35px";
input.style.display = "none";

input.value = "";
img_back.style.display = "block";
img_back.style.marginTop ="50px";


var parent_container = document.createElement("div");
parent_container.setAttribute("id","parent_contain");

var img_pop_1 = document.createElement("img");
img_pop_1.setAttribute("id","pic1_invite");
img_pop_1.src = "icons/website1.png";
var img_pop_2 = document.createElement("img");
img_pop_2.setAttribute("id","pic2_invite");
img_pop_2.src = "icons/website2.png";
var img_pop_3 = document.createElement("img");
img_pop_3.setAttribute("id","pic3_invite");
img_pop_3.src = "icons/website3.png";

var msgs =  document.createElement("div");
msgs.setAttribute("id","msgs_invite");
msgs.innerHTML = "Recommended";

var download = document.createElement("div");
download.innerHTML = "Download Instructions";
download.setAttribute("id","download_button");

var msgs2 =  document.createElement("div");
msgs2.setAttribute("id","msgs_invite_2");
msgs2.innerHTML = "<center>OR<br> Recieve instructions on Email</center>";

var input_2 = document.createElement("input");
input_2.placeholder = "Enter your Email Address";
input_2.setAttribute("id","input_2");

var button = document.createElement("button");
button.innerHTML = "SEND";
button.setAttribute("id","send_intsruction_button");

var button2 = document.createElement("button");
button2.innerHTML = "CANCEL";
button2.setAttribute("id","send_intsruction_button_2");
button2.setAttribute("onclick","close_invite()");



parent_container.appendChild(img_pop_1);parent_container.appendChild(img_pop_2);parent_container.appendChild(img_pop_3);parent_container.appendChild(msgs);
parent_container.appendChild(download);parent_container.appendChild(msgs2);parent_container.appendChild(input_2);parent_container.appendChild(button);
parent_container.appendChild(button2);
img_back.appendChild(parent_container);
}	
function close_invite(){
	$('#parent_contain').remove();
	var img_back=  document.getElementById("inner_alerts");
	img_back.style.marginTop ="10%";
	var msg =  document.getElementById("alert_details");
	msg.style.display = "block"
	var next =  document.getElementById("next");
	next.style.display = "block";
	var img =document.getElementById("add_alert_info");
	img.style.width = "";
	toggleSlider();
	
	
}
function show_img(ele){
var url_img = ele.src;
toggleSlider();
var modal_class=  document.getElementById("alerts");
modal_class.style.opacity="1";
var img_back=  document.getElementById("inner_alerts");

modal_class.addEventListener("click", function(){hide_img()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
img_back.style.display = "none";
var img_container = document.createElement("div");
img_container.setAttribute("id","img_contain");
img_container.style.width="50%";
img_container.style.height="50%";
var img_pop = document.createElement("img");
img_pop.src = url_img;
img_pop.setAttribute("id","pop_img");
var img_pop_close = document.createElement("div");
img_pop_close.innerHTML = "X";
img_pop_close.setAttribute("onclick","hide_img()");
img_pop_close.setAttribute("id","close_img");

img_pop.style.marginTop = "2%";
if(img_pop.width>750){
	if(img_pop.height>800)
{
	img_pop.setAttribute("width", "550px");
	img_pop.style.marginLeft = "55%";
}


else{
	img_pop.setAttribute("width", "750px");
	img_pop.style.marginLeft = "40%";
}
}
else  if(img_pop.height>800){
	img_pop.setAttribute("height", "550px");
	img_pop.style.marginLeft = "66%";
	
	}
	else{
		
		img_pop.style.marginLeft = "66%";
	
	}



img_container.appendChild(img_pop_close);
img_container.appendChild(img_pop);

modal_class.appendChild(img_container);

										img.src="icons/info.png";
										img.style.display="none";
										input.style.display ="none";
										back.style.display = "none";
										
										
									   
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","hide_img()");
										
		
	}
	function hide_img(){
		var img_back=  document.getElementById("inner_alerts");
		img_back.style.display = "block";
		$('#img_contain').remove();
		$('#img_pop').remove();
		$('#img_pop_close').remove();
		toggleSlider();
		
	}
function settings(){
	
	toggleSlider();
	var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
input.placeholder = "Enter your registered Email address";


										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="SETTINGS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Reset your Password";
										next.innerHTML ="NEXT";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","check_password()");
										back.setAttribute("onclick","toggleSlider()");
										
	
}
function check_password(){
	new_email = document.getElementById("enter_class_name").value;
	Parse.User.requestPasswordReset(new_email, {
  success: function() {
	  	var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
input.placeholder = "";


										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="EMAIL SENT";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Please check your mail"+new_email+"for resetting your password";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","logout()");
										back.setAttribute("onclick","toggleSlider()");
										
  
  },
  error: function(error) {
	  	  	var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
input.placeholder = "";


										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="FAILED";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Sorry Your request cannot be completed at the moment";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
    
  }
});
	
}
 


function hide_alert(e){
    var id = event.target.id;
    if(id!="alerts"){
		return;
	}
else
 $("#alerts").fadeOut(100);
$('#parent_contain').remove();
	var img_back=  document.getElementById("inner_alerts");
	img_back.style.marginTop ="10%";
	var msg =  document.getElementById("alert_details");
	msg.style.display = "block"
	var next =  document.getElementById("next");
	next.style.display = "block";
		var img =document.getElementById("add_alert_info");
	img.style.width = "";
}
				
function toggleSlider() {
	
    if ($("#alerts").is(":visible")) {
        $("#inner_alerts").animate(
		 
            {
                opacity: "0"
            },
            10,
			function(){
				$("#alert_title").slideUp(0);
                $("#alerts").fadeOut(100);
				
            }

           
           
        );
    }
    else {
      $("#alerts").fadeIn(10, function(){
			
            $("#inner_alerts").animate(
                {
                    opacity: "1"
                },
                100
            );
			$("#alert_title").slideDown(200);
        });
	
	
	
    }   
}

function dates(){
	var lastdate = new Date(datei);
	
	return(lastdate);
	}			
/*To Generate classes created by teacher */
function giveClassesDetails(){
var ele = document.getElementById("showmore");
ele.style.display = "none";
Parse.Cloud.run('giveClassesDetails ',{},{
	    success:function(results){
		
		 for(var i =0;i < results.length;i++)
		{
					
					if(results[i].get('classExist')==true)
					
		 {
		       if(results[i].get('senderId')==teacher_id){
		            class_names_exits.push(results[i].get('name'));
					console.log(class_names_exits);
			      
				    var has_class = document.getElementById('class-list');
							
							if(true)
									{
								
								var ele = document.createElement("div");
								ele.setAttribute("id",results[i].get('code'));
								ele.setAttribute("class","class-list-name");
								ele.innerHTML=results[i].get('name');
								ele.addEventListener("click", function(){select_class(this.id)}, false);
								has_class.appendChild(ele);
						
                                
								
									}
				
				
				}
				}
				}
				
				
				
				},
		error: function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="WELCOME TO KNIT";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Seems like you are new here. <br> Start creating classes. <br> Enter the Classname you want to create.";
										next.innerHTML ="NEXT";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","check_name()");
										back.setAttribute("onclick","toggleSlider()");
										
									   
						
		}
});	
showlatestfeed();
}		
function separate_date(){

this.get_date = function(timestamp){
  
  var str = timestamp.toString();<!--converting-to-string-->
  var res = str.split(" ");
  var rdate = [res[1]," ",res[2]," ",res[3]," ",res[4]];
 
  return rdate;
}
this.get_time = function(timestamp){
 var str = timestamp.toString();<!--converting-to-string-->
  var res = str.split(" ");
  var rtime = res[4];
   return rtime;

}
}
function load_again(){
window.location = "dashboard.html";
}
/*Modify Time*/
function modify_time(time){
var t = time.toString();
var str = t.split(":");
if(str[0]>12){
str[0] = str[0]-12 ;
 t = str[0]+":"+str[1]+" PM";
}
else if(str[0]==12){
 t = str[0]+":"+str[1]+" PM";
}
else  t = str[0]+":"+str[1]+" AM";

return t;
}
/*check color_count*/
function get_color_index(name){

for(var i=0;i<my_class_names.length;i++){
	if(my_class_names[i]==name)
	{
	  return i;
	}
}
return 16;
}

/*to get latest feed*/
function showlatestfeed(){
  if ($("#alerts").is(":visible")) {
  $("#alerts").fadeOut(100);
  
  }
  
  	pro_pic = 	document.getElementById("profile_pic")
	pic = pro_pic.getElementsByTagName("img")[0];
	if(typeof currentUser.get("pid") != 'undefined'){
	pic.src = currentUser.get("pid").url();
	}
	pro_pic = 	document.getElementsByClassName("profile-photo")[0];
	pic = pro_pic.getElementsByTagName("img")[0];
	if(typeof currentUser.get("pid") != 'undefined'){
	pic.src = currentUser.get("pid").url();
	}
	
	pro_pic = 	document.getElementsByClassName("profile-photo-modal")[0];
	pic = pro_pic.getElementsByTagName("img")[0];
	if(typeof currentUser.get("pid") != 'undefined'){
	pic.src = currentUser.get("pid").url();
	}
	

Parse.Cloud.run('showLatestMessagesWithLimit',{limit: "10",classtype:"c"},{
	    success:function(results){
			if(results.length==0){
				var ele = document.getElementById("showmore");
				
		ele.style.display = "none";
			
		}
		else if(results.length<10){
		var ele = document.getElementById("showmore");
		
		ele.style.display = "block";
		ele.innerHTML= "End of Post";
		ele.style.background="#B0BEC5";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
		}
	
		else{
		var ele = document.getElementById("showmore");
		
		ele.style.display = "block";
		ele.innerHTML= "Show More";
		ele.style.background="#263238";
		ele.style.border="0px";
		ele.disabled=false;
		ele.style.width="120px";
		}
		for(var i=0;i<results.length;i++){
	    datei =dateObj.get_date(results[i].createdAt);
		timei =dateObj.get_time(results[i].createdAt);
		timei = modify_time(timei);
		var p = document.getElementById("class-feed-container");
		var child = document.getElementsByClassName("class-feed")[0];
		var cln = child.cloneNode(true);
		cln.id= "feed"+feed_id;
		feed_id++;
		var msg_date = cln.getElementsByClassName("feed-date color-gray")[0];
		msg_date.innerHTML = datei[0]+" "+datei[2]+", "+datei[4]; 
		var msg_classname = cln.getElementsByClassName("class-name")[0];
		var color_count = get_color_index(results[i].get("name"));
		msg_classname.style.background = colors[color_count];
		msg_classname.innerHTML = results[i].get("name"); 
		class_name =  results[i].get("name");
		
		var msg_text = cln.getElementsByClassName("feed-content")[0];
			/*if(results[i].get("title").split(' ').length>20){
			var word_count = results[i].get("title").split(' ').length;
			msg_text.innerHTML = "";
			while(word_count!=0){
			for(var k =0;k<20;k++)
			msg_text.innerHTML  =msg_text.innerHTML+results[i].get("title").split(' ')+" ";
			msg_text.innerHTML  += "<br>";
		    if(word_count<40){
				for(var k =0;k<word_count;k++)
					msg_text.innerHTML  =msg_text.innerHTML+results[i].get("title").split(' ')+" ";
				msg_text.innerHTML  += "<br>";
			 word_count = 0;
			}
			else word_count -= 40;
			}
		}
		else */
		msg_text.innerHTML = results[i].get("title");
		if(isNaN(results[i].get("like_count")))	{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = "0";}
		else{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = results[i].get("like_count");}
		
		
		 if(isNaN(results[i].get("seen_count")))	{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = "0";}
		else{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = results[i].get("seen_count");
		}
		 if(isNaN(results[i].get("confused_count")))	{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = "0";}
		else{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = results[i].get("confused_count");
		}
		var msg_time= cln.getElementsByClassName("feed-time")[0];
		msg_time.innerHTML = timei;
	    cln.style.display="block";
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		else {
		attachment.getElementsByTagName("a")[0].style.display="block";
		var link = attachment.getElementsByTagName("a")[0];
	
		var img = link.getElementsByTagName("img")[0];
		//if(typeof results[i].get("pid").url() != 'undefined'))
	    img.src = results[i].get('attachment').url();
	
		
	
		if(img.width > 450)
		img.setAttribute("width", "450px");
		
		else 
		img.setAttribute("width", "150px");
		}
		
	    p.appendChild(cln); 
       
		
		}
		document.getElementById("subscriber-count-container1").style.display = "block";
		

		
		},
		error:function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0001)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
}
/*To load previous feed of a particular class*/
function show_each_old(){
var ele = document.getElementById("showmore");
		ele.innerHTML= "Proccessing";
		ele.style.background="#263238";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
var class_code = messageObj.get_code();
Parse.Cloud.run('showOldMessages',{date: dates(), limit: "5",classtype:"c"},{
	    success:function(results){
		
		if(results.length<5 && results.length==0){
		var ele = document.getElementById("showmore");
		ele.innerHTML= "End of Post";
		ele.style.background="#B0BEC5";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
		}	
		else{
		var ele = document.getElementById("showmore");
		ele.innerHTML= "Show More";
		ele.style.background="#263238";
		ele.style.border="0px";
		ele.disabled=false;
		ele.style.width="120px";
		}
		for(var i=0;i<results.length;i++){
		
		
        datei =dateObj.get_date(results[i].createdAt);
		timei =dateObj.get_time(results[i].createdAt);
		timei = modify_time(timei);
		if(results[i].get("code")==class_code){
		var p = document.getElementById("class-feed-container");
		var child = document.getElementsByClassName("class-feed")[0];
		var cln = child.cloneNode(true);
			cln.id= "feed"+feed_id;
		feed_id++;
		var msg_date = cln.getElementsByClassName("feed-date color-gray")[0];
		msg_date.innerHTML = datei[0]+" "+datei[2]+", "+datei[4]; 
		var msg_classname = cln.getElementsByClassName("class-name")[0];
		var color_count = get_color_index(results[i].get("name"));
		msg_classname.style.background = colors[color_count];
		msg_classname.innerHTML = results[i].get("name"); 
		var msg_text = cln.getElementsByClassName("feed-content")[0];
		/*	if(results[i].get("title").length>200){
			var word_count = results[i].get("title").length;
			msg_text.innerHTML = "";
			while(word_count!=0){
			for(var k =0;k<100;k++)
			msg_text.innerHTML  += results[i].get("title")[k];
			msg_text.innerHTML  += "<br>";
		    if(word_count<100){
				for(var k =0;k<word_count;k++)
					msg_text.innerHTML  += results[i].get("title")[k];
				msg_text.innerHTML  += "<br>";
			 word_count = 0;
			}
			else word_count -= 100;
			}
		}
		else*/ msg_text.innerHTML = results[i].get("title");
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		if(isNaN(results[i].get("like_count")))	{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = "0";}
		else{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = results[i].get("like_count");}
		
		
		 if(isNaN(results[i].get("seen_count")))	{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = "0";}
		else{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = results[i].get("seen_count");
		}
		 if(isNaN(results[i].get("confused_count")))	{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = "0";}
		else{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = results[i].get("confused_count");
		}
		var msg_time= cln.getElementsByClassName("feed-time")[0];
		msg_time.innerHTML = timei;
	    cln.style.display="block";
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		else {
		attachment.getElementsByTagName("a")[0].style.display="block";
		var link = attachment.getElementsByTagName("a")[0];
		
		var img = link.getElementsByTagName("img")[0];
		
		img.src = results[i].get('attachment').url();
		
		if(img.width > 450)
		img.setAttribute("width", "450px");
		
		else 
		img.setAttribute("width", "150px");
		}
	    p.appendChild(cln); 
       
		}
		}
		
	



},
		
				
		
		error:function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0011)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
}
/*To get previous feed */
function showold(){
var ele = document.getElementById("showmore");
		ele.innerHTML= "Proccessing...";
		ele.style.background="#263238";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
Parse.Cloud.run('showOldMessages',{date: dates(), limit: "5",classtype:"c"},{
	    success:function(results){
		if(results.length<5){
		var ele = document.getElementById("showmore");
		ele.innerHTML= "End of Post";
		ele.style.background="#B0BEC5";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
		}
		else{
		var ele = document.getElementById("showmore");
		ele.innerHTML= "Show More";
		ele.style.background=":#263238";
		ele.style.border="0px";
		ele.disabled=false;
		ele.style.width="120px";
		}
		for(var i=0;i<results.length;i++){
		
        datei =dateObj.get_date(results[i].createdAt);
		timei =dateObj.get_time(results[i].createdAt);
		timei = modify_time(timei);
		var p = document.getElementById("class-feed-container");
		var child = document.getElementsByClassName("class-feed")[0];
		var cln = child.cloneNode(true);
		cln.id= "feed"+feed_id;
		feed_id++;
		var msg_date = cln.getElementsByClassName("feed-date color-gray")[0];
		msg_date.innerHTML = datei[0]+" "+datei[2]+", "+datei[4]; 
		var msg_classname = cln.getElementsByClassName("class-name")[0];
		var color_count = get_color_index(results[i].get("name"));
		msg_classname.style.background = colors[color_count];
		msg_classname.innerHTML = results[i].get("name"); 
		var msg_text = cln.getElementsByClassName("feed-content")[0];
		/*	if(results[i].get("title").length>200){
			var word_count = results[i].get("title").length;
			msg_text.innerHTML = "";
			while(word_count!=0){
			for(var k =0;k<100;k++)
			msg_text.innerHTML  += results[i].get("title")[k];
			msg_text.innerHTML  += "<br>";
		    if(word_count<100){
				for(var k =0;k<word_count;k++)
					msg_text.innerHTML  += results[i].get("title")[k];
				msg_text.innerHTML  += "<br>";
			 word_count = 0;
			}
			else word_count -= 100;
			}
		}
		else */msg_text.innerHTML = results[i].get("title");
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		if(isNaN(results[i].get("like_count")))	{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = "0";}
		else{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = results[i].get("like_count");}
		if(isNaN(results[i].get("seen_count")))	{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = "0";}
		else{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = results[i].get("seen_count");
		}
		 if(isNaN(results[i].get("confused_count")))	{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = "0";}
		else{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = results[i].get("confused_count");
		}
		var msg_time= cln.getElementsByClassName("feed-time")[0];
		msg_time.innerHTML = timei;
	    cln.style.display="block";
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		else {
		attachment.getElementsByTagName("a")[0].style.display="block";
		var link = attachment.getElementsByTagName("a")[0];
	
		var img = link.getElementsByTagName("img")[0];
	
		img.src = results[i].get('attachment').url();
		
		if(img.width > 450)
		img.setAttribute("width", "450px");
	
		else 
		img.setAttribute("width", "150px");
		}
	    p.appendChild(cln); 
       
		}
		document.getElementById("subscriber-count-container1").style.display = "block";
},
		error:function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0100)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
}
/* To destroy Subscriber list entirely*/
function destroy_suscriber(ele){

if(!ele){
$(".subscriber-name").remove();
document.getElementById("box-content").innerHTML="";
document.getElementsByClassName('copy-tag')[0].innerHTML="";
document.getElementById("display_code").innerHTML="";
document.getElementById("form-wrapper").style.display="none";
}
else{
$("#"+ele).remove();
}
}
/*To destroy Class deleted by user entirely*/
function destroy_class(class_code){

$("#"+class_code).remove();
document.getElementById("box-content").innerHTML="";
document.getElementsByClassName('copy-tag')[0].innerHTML="";
document.getElementById("display_code").innerHTML="";
document.getElementById("form-wrapper").style.display="none";
}
/*To clear spaces*/
function trim11(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}
/*To create a new Class*/
function check_name(){
	
 var name ="";
 var classname =  document.getElementById("enter_class_name").value;

 classname = classname.toString();
 classname=classname.toUpperCase();

 name = trim11(classname);
 new_class_name = name;

 create();
 
}
/*To create a new Class*/
function create_class(){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/add_class.png";
										img.style.display="block";
										input.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="CREATE CLASS";
										document.getElementById("alert_title").style.background = "#039BE5";
									    msg.innerHTML = "Enter the class name you want to create";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","check_name()");
										back.setAttribute("onclick","toggleSlider()");
		
		
		}
function create(){		
if(!new_class_name){
										
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0101)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
	}
		else{
/*to check if class with such a name already exist*/



currentUser.fetch();
if((typeof currentUser.get("Created_groups")) != 'undefined'){
	 var my_class = currentUser.get("Created_groups");
      for (var i = 0; i < my_class.length; i++){
        my_class_names[i]= my_class[i][1];
      }
	  if((typeof currentUser.get("Created_groups")) != 'undefined'){
		for (var c = 0;c < my_class.length ; c++)
		{ 
			if(new_class_name==my_class_names[c])
			break;
		}
}
	  
}


if((typeof currentUser.get("Created_groups") == 'undefined') || c == my_class_names.length){

			Parse.Cloud.run('createClass', {classname: new_class_name},{
				
		        success:function(codegroup){
						
						var class_token= codegroup.get("code");
						new_class_token = class_token;
						
						var class_name = codegroup.get("name");
						              var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039BE5";
									    msg.innerHTML = "<center>Your class "+class_name+" has been created with code<br><strong><h3> "+class_token+"</h3></strong><br> Share the above code with your students to start sending mesage to them</center>";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","on_create_load()");
										back.setAttribute("onclick","toggleSlider()");
						
				
				},
				error:function(codegroup,error){
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0110)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
				
		}
				
});

}
else{
							        	
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="CLASS ALREADY EXISTS";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "You already have a class with the same name<br> please try another name ";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","create_again()");
										back.setAttribute("onclick","toggleSlider()");
										
}
}		
}
function create_again(){

										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/add_class.png";
										img.style.display="block";
										input.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="CREATE CLASS";
										document.getElementById("alert_title").style.background = "#039BE5";
									    msg.innerHTML = "Enter the class name you want to create";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","check_name()");
										back.setAttribute("onclick","toggleSlider()");
		

}
/*to show all subscriber*//*
function showallsubscriber(){
Parse.Cloud.run('showAllSubscribers ',{date:d2},{

	   success:function(result){
	  
	     var subscriber_count = result.app.length+result.sms.length;
		
	    	if(subscriber_count==0)
			{
			  document.getElementById("subscriber-count").innerHTML="0"
			  
			}
			else{
			subscriber_count=0;
	 
		 
			  for(var i=0;i<result.app.length;i++){
				  if(result.app[i].get("status")=="REMOVED"||result.app[i].get("children_names")=="LEAVE"){
					  
					  continue;
				  }
				  else{
					  subscriber_count++;
					var x = result.app[i].get("children_names");
					x = x.toString();
					
					var str = x.split("");
					var ln = str.length;
					if(ln>8)
					str = [str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+"..."];
					
				 	
					 var contain = document.getElementById('subscriber-list');
					   
					 if(!document.getElementById('app'+i))
                            {
								var p_ele = document.createElement("div");
								p_ele.setAttribute("class","subscriber-name app "+result.app[i].get("emailId")+" "+result.app[i].get("code"));
								p_ele.setAttribute("id",'app'+i);
								contain.appendChild(p_ele);
								var ele = document.createElement("span");
								ele.setAttribute("id",x);
								
								if(ln>8)
								
								
							    ele.innerHTML=str;
								else
								ele.innerHTML=x;
								p_ele.appendChild(ele);
								
								var img0 = document.createElement('img');
								img0.src = "icons/and_icon.png";
								img0.setAttribute("width","21px");
								img0.setAttribute("height","21px");
								p_ele.appendChild(img0);
							
                               
                            }
				}
			  }
				  for(var i=0;i<result.sms.length;i++){
					 if(result.sms[i].get("status")=="REMOVED"||result.sms[i].get("children_names")=="LEAVE"){
					  
					  continue;
				  }
				  else{  
				   subscriber_count++;
					var x = result.sms[i].get("subscriber");
					x = x.toString();
					
					var str = x.split("");
					var ln = str.length;
					if(ln>8)
					str = [str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+"..."];
						
					 var contain = document.getElementById('subscriber-list');
					   
					 if(!document.getElementById('sms'+i))
                            {
								var p_ele = document.createElement("div");
								p_ele.setAttribute("class","subscriber-name sms "+result.sms[i].get("number")+" "+result.sms[i].get("cod"));
								p_ele.setAttribute("id",'sms'+i);
								contain.appendChild(p_ele);
								var ele = document.createElement("span");
								ele.setAttribute("id",x);
								
								
								if(ln>8)
								
								
							    ele.innerHTML=str;
								else
								  ele.innerHTML=x;
								p_ele.appendChild(ele);
								
								var img0 = document.createElement('img');
								img0.src = "icons/ad_icon.png";
								img0.setAttribute("width","21px");
								img0.setAttribute("height","21px");
								p_ele.appendChild(img0);
								
								
                               
                            }
				}
				  }
		 document.getElementById("subscriber-count").style.display="block";
	  document.getElementById("subscriber-count").innerHTML=subscriber_count;
	   
			}
	   
	   
	   },
	   error:function(error){
								toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference:(0111)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
	   
	   
	   }
});
}*/
function del_class(){
		
		var id = class_id;
		Parse.Cloud.run('deleteClass', {classcode: id},{
				
					    success:function(flag){
									
									if(flag==true){
									  var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
									   input.value = "";
										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Your class has been deleted";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","showlatestfeed()");
										back.setAttribute("onclick","toggleSlider()");
									   destroy_class(id);
									   destroy_message();
									   
									 
										
									  
								    	
									}
			
							},
		error:function(error){
					                  var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1000)"+error.code;
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
							}
			
			
			
			});
}
/*To Delete a class Created by teacher using delete icon*/
function delete_class(){
	/*Prototype to delete class by icon*/
	/*  this.delete_specific_class = function(ele){
							 
		var obj = ele;
		obj= obj.parentNode;
		class_id = obj.id;
	  
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input =document.getElementById("enter_class_name");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="ARE YOU SURE?";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Your class with <b> CODE: "+class_id+" </b> will be <b>Deleted Permanently</b>.<br> This action cannot be reversed.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","del_class()");
										back.setAttribute("onclick","toggleSlider()");
	  

						
	
			
			}*/
/*Prototype to delete class by delete icon*/
	/*	this.delete_class_button = function(){*/
						
				var id = document.getElementById("box-content").innerHTML;
				if(!id){               
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SELECT A CLASS";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "You need to select a class to delete it.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
						}
				else{
				class_id = id;
				/*alert(class_code);*/
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="ARE YOU SURE?";
										document.getElementById("alert_title").style.background = "#ffc107";
									     msg.innerHTML = "Your class with <b> CODE: "+class_id+" </b> will be <b>Deleted Permanently</b>.<br> This action cannot be reversed.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","del_class()");
										back.setAttribute("onclick","toggleSlider()");
										
										
			}
			
			
	   }
function delete_user(ele){
var c_name = messageObj.get_name();
var c_code = messageObj.get_code();

obj = ele;
obj = obj.parentNode;
var type = $(obj).attr('class');
type =type.toString();
type = type.split(" ");

                                       
				if(!c_name||!c_code)
					{
						c_code = type[3];
						query_code_name(c_code);
						c_name = messageObj.get_name();
						
					}

var child_name = obj.getElementsByTagName("span")[0].innerHTML;

										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="ARE YOU SURE?";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML ="<b>"+child_name+"</b> will be <b>Removed Permanently</b> from your class<b> "+c_name+"</b> with code: <b>"+c_code+".</b><br> This action cannot be reversed.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","remove_user()");
										back.setAttribute("onclick","toggleSlider()");
										del_obj = ele;

}	  
/*To Remove a subscriber */	   
function remove_user(){
var ele = del_obj;
var c_name = messageObj.get_name();
var c_code = messageObj.get_code();

obj = ele;
obj = obj.parentNode;
var id =  $(obj).attr('id');

var child_name = obj.getElementsByTagName("span")[0].innerHTML;

var type = $(obj).attr('class');
type =type.toString();
type = type.split(" ");
var c_email = type[2];
                                       
				if(!c_name||!c_code)
					{
						c_code = type[3];
						query_code_name(c_code);
						c_name = messageObj.get_name();
						
					}
																
if(type[1]=="app"){


					
															
						Parse.Cloud.run('removeMember ',{classname: c_name , classcode: c_code, emailId: c_email, usertype:"app"},{
						success:function(results){
								if(results==true){
										destroy_suscriber(id);
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039BE5";
									    msg.innerHTML ="User Deleted.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
										}
						},
						error: function(error){
									
										
									var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1001)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
						}
						});
		
		
	
}
else if(type[1]=="sms")
{
Parse.Cloud.run('removeMember ',{classname: c_name , classcode: c_code, number: c_email, usertype:"sms"},{
						success:function(results){
								if(results==true)
								{
								      		destroy_suscriber(id);
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/info.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039BE5";
									    msg.innerHTML ="User Deleted.";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
								
								}
								
						},
						error: function(error){
									
								       
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1010)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
									
									
						}
						});
}
}	
/*code group query*/
function query_code_name(class_code){
var Codegroup  = Parse.Object.extend("Codegroup");
var query = new Parse.Query(Codegroup);
query.equalTo("code",class_code);
query.find({
		success:function(results){
			if(typeof results[0] != 'undefined'){
					messageObj.return_name(results[0].get('name'));
			}
		
		
		
		
		},
		error:function(error){
										toggleSlider();
									var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1011)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		
		}
		});
}
/*To Generate subscriber of a particular class and the message section */
function select_class(class_code){
document.getElementById('send_button').disabled=false;
$(".sending").hide();
document.getElementById('attachment_name').style.display="none";
document.getElementById("profile_name").style.display = "none";	
document.getElementById("profile_pic").style.display = "none";		
document.getElementById("right_header").style.display = "block";	
document.getElementById("display_class_code").style.display = "block";	
document.getElementById("subscriber-list").style.display = "block";
document.getElementById("delete-class-btn").style.display = "block";	
if(messageObj.return_code(class_code))
var p_class_code = messageObj.get_code(class_code);	
destroy_class(p_class_code);
document.getElementById("subscriber-count-container1").style.display = "block";
for (var k = 0 ;k<document.getElementsByClassName("class-list-name").length; k++)
document.getElementsByClassName("class-list-name")[k].style.background = "";
document.getElementById(class_code).style.background = "#1C87A0";
destroy_suscriber();
query_code_name(class_code);
document.getElementById("attachment").value = "";
		
Parse.Cloud.run('showSubscribers', {classcode: class_code, date: d2},{
				
		    success:function(result){
			document.getElementById("display_code").innerHTML="Class-code";	
			document.getElementById("box-content").innerHTML=class_code;
		/*var textOutput = document.getElementById("copy");
			
			var scripts = document.getElementsByTagName("script")[10];
			
			 textOutput.text( scripts.text() );*/
		    document.getElementsByClassName('copy-tag')[0].innerHTML  ="";
			document.getElementsByClassName('copy-tag')[0].style.cursor = "pointer";
			var subscriber_count = result.app.length+result.sms.length;
			if(subscriber_count==0)
			{
			  document.getElementById("subscriber-count").innerHTML="0"
			  
			}
			else{
				subscriber_count=0;
	   
	    
			  for(var i=0;i<result.app.length;i++){
				   if(result.app[i].get("status")=="REMOVED"||result.app[i].get("children_names")=="LEAVE"){
					  
					  continue;
				  }
				  else{
					 subscriber_count++;
					var x = result.app[i].get("children_names");
					x = x.toString();
					
					var str = x.split("");
					var ln = str.length;
					if(ln>10)
					str = [str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]+"..."];
					
					/*var y = result.app[i].get("objectId");
				    console.log(x);*/
				 	
					 var contain = document.getElementById('subscriber-list');
					   
					 if(!document.getElementById('app'+i))
                            {
								var p_ele = document.createElement("div");
								p_ele.setAttribute("class","subscriber-name app "+result.app[i].get("emailId")+" "+result.app[i].get("code"));
								p_ele.setAttribute("id",'app'+i);
								contain.appendChild(p_ele);
								var ele = document.createElement("span");
								ele.setAttribute("id",x);
								
								if(ln>8)
								ele.innerHTML=str;
								else
								ele.innerHTML=x;
								p_ele.appendChild(ele);
								var img1 = document.createElement('img');
								img1.src = "icons/delete.png";
								
								img1.addEventListener("click", function(){delete_user(this)}, false);
                                p_ele.appendChild(img1);
								
								var img0 = document.createElement('img');
								img0.src = "icons/and_icon.png";
								
								img0.setAttribute("width","21px");
								img0.setAttribute("height","21px");
								p_ele.appendChild(img0);
								
								
                               
                            }
				}
			  }
				  for(var i=0;i<result.sms.length;i++){
					   if(result.sms[i].get("status")=="REMOVED"||result.sms[i].get("children_names")=="LEAVE"){
					  
					  continue;
				  }
				  else{
					subscriber_count++;
					var x = result.sms[i].get("subscriber");
					x = x.toString();
					var str = x.split("");
					var ln = str.length;
					if(ln>10)
					str = [str[0]+str[1]+str[2]+str[3]+str[4]+str[5]+str[6]+str[7]+str[8]+str[9]+"..."];
				
					/*var y = result.app[i].get("objectId");
				    console.log(x);*/
				 	
					 var contain = document.getElementById('subscriber-list');
					   
					 if(!document.getElementById('sms'+i))
                            {
								var p_ele = document.createElement("div");
								p_ele.setAttribute("class","subscriber-name sms "+result.sms[i].get("number")+" "+result.sms[i].get("cod"));
								p_ele.setAttribute("id",'sms'+i);
								contain.appendChild(p_ele);
								var ele = document.createElement("span");
								ele.setAttribute("id",x);
								if(ln>8)
								ele.innerHTML=str;
								else
								ele.innerHTML=x;
								p_ele.appendChild(ele);
								var img1 = document.createElement('img');
								img1.src = "icons/delete.png";
								img1.addEventListener("click", function(){delete_user(this)}, false);
                                p_ele.appendChild(img1);
								var img0 = document.createElement('img');
								img0.src = "icons/ad_icon.png";
								
								img0.setAttribute("width","21px");
								img0.setAttribute("height","21px");
								p_ele.appendChild(img0);
								
								
								
                               
                            }
				  }}
			 document.getElementById("subscriber-count").innerHTML=subscriber_count;
			}
		},
		error:function(error){
			toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1100)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
		document.getElementById( "showmore" ).setAttribute( "onclick", "show_each_old()" );
        destroy_message();
		class_message(class_code);
		messageObj.return_code(class_code);	
	
		
						
	}
/*To destroy Message feed entirely*/
function destroy_message(){
var classlength = $(".class-feed").length;

for (var k=0; k<(classlength-1) ; k++){

$("#feed"+k).remove();

}
feed_id=0;


}				
/* To show class Message feed entirely*/	
function class_message(class_code){

  
	Parse.Cloud.run('showClassMessages', {classcode: class_code,limit: "10"},{
				
		success:function(results){
		if(results.length==0){
		var ele = document.getElementById("showmore");
		ele.innerHTML= "No previous feed available.";
		ele.style.background="#B0BEC5";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="200px";
		
		}
		else if(results.length<10){
		var ele = document.getElementById("showmore");
		ele.innerHTML= "End of Post";
		ele.style.background="#B0BEC5";
		ele.style.border="0px";
		ele.disabled=true;
		ele.style.width="120px";
		}
		else{
		var ele = document.getElementById("showmore");
		ele.innerHTML= "Show More";
		ele.style.background="#263238";
		ele.style.border="0px";
		ele.disabled=false;
		ele.style.width="120px";
		}
		for(var i=0;i<results.length;i++){
		
        datei =dateObj.get_date(results[i].createdAt);
		timei =dateObj.get_time(results[i].createdAt);
		timei = modify_time(timei);
		var p = document.getElementById("class-feed-container");
		var child = document.getElementsByClassName("class-feed")[0];
		var cln = child.cloneNode(true);
		cln.id= "feed"+feed_id;
		feed_id++;
		var msg_date = cln.getElementsByClassName("feed-date color-gray")[0];
		msg_date.innerHTML = datei[0]+" "+datei[2]+", "+datei[4]; 
		var msg_classname = cln.getElementsByClassName("class-name")[0];
		var color_count = get_color_index(results[i].get("name"));
		msg_classname.style.background = colors[color_count];
		msg_classname.innerHTML = results[i].get("name"); 
		var msg_text = cln.getElementsByClassName("feed-content")[0];
		/*if(results[i].get("title").length>200){
			var word_count = results[i].get("title").length;
			msg_text.innerHTML = "";
			while(word_count!=0){
			for(var k =0;k<100;k++)
			msg_text.innerHTML  += results[i].get("title")[k];
			msg_text.innerHTML  += "<br>";
		    if(word_count<100){
				for(var k =0;k<word_count;k++)
					msg_text.innerHTML  += results[i].get("title")[k];
				msg_text.innerHTML  += "<br>";
			 word_count = 0;
			}
			else word_count -= 100;
			}
		}
		else*/ msg_text.innerHTML = results[i].get("title");
		var attachment = cln.getElementsByClassName("feed-image")[0];
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		if(isNaN(results[i].get("like_count")))	{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = "0";}
		else{
		var msg_like = cln.getElementsByClassName("like-btn-count")[0];
		msg_like.innerHTML = results[i].get("like_count");}
		 
		 if(isNaN(results[i].get("seen_count")))	{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = "0";}
		else{
		var msg_seen = cln.getElementsByClassName("seen-by-count")[0];
		msg_seen.innerHTML = results[i].get("seen_count");
		}
		 
		 if(isNaN(results[i].get("confused_count")))	{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = "0";}
		else{
		var msg_confused= cln.getElementsByClassName("question-btn-count ")[0];
		msg_confused.innerHTML = results[i].get("confused_count");
		}
		
		var msg_time= cln.getElementsByClassName("feed-time")[0];
		msg_time.innerHTML = timei;
	    cln.style.display="block";
		var attachment = cln.getElementsByClassName("feed-image")[0];
		
		if(!results[i].get("attachment"))
		attachment.getElementsByTagName("a")[0].style.display="none";
		else {
		attachment.getElementsByTagName("a")[0].style.display="block";
		var link = attachment.getElementsByTagName("a")[0];
		var img = link.getElementsByTagName("img")[0];
		img.src = results[i].get('attachment').url();
		
		if(img.width > 450)
		img.setAttribute("width", "450px");
		else if(img.height > 450)
		img.setAttribute("height", "450px");
		else 
		img.setAttribute("height", "200px");
		}
	    p.appendChild(cln); 
       
		}
			
			
			},
			error: function(error){
			
			toggleSlider();
			var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1101)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
			
			}
			});
			
		
		}
		
		
		
function generate_new_message(){
		var code;
		var cname;
	
		this.return_code = function(class_code){
		document.getElementById("form-wrapper").style.display="block";
		document.getElementById("send_message").value = "";
		document.getElementById("send_message").placeholder = "Enter Your Message Here...";
		
		code = class_code;
	
		
		}
		this.return_name = function(name){
			cname= name;
			
		}
		this.get_name = function(){
		
			return cname;
		}
	    this.get_code = function(){
			     return code;
		}
    
}	
	
	
function on_create_load()
{
toggleSlider();

//console.log(messageObj.return_code(new_class_token));
//generate_new_message();

if(messageObj.return_code(new_class_token)){
var p_class_code = messageObj.get_code(new_class_token);	
destroy_class(p_class_code);}
document.getElementById("subscriber-count-container1").style.display = "block";
for (var k = 0 ;k<document.getElementsByClassName("class-list-name").length; k++)
document.getElementsByClassName("class-list-name")[k].style.background = "";

	        my_class_names.push(new_class_name);
			
				var has_class = document.getElementById('class-list');
							
							if(!document.getElementById(new_class_token))
									{
								
								var ele = document.createElement("div");
								ele.setAttribute("id",new_class_token);
								ele.setAttribute("class","class-list-name");
								ele.innerHTML=new_class_name;
								ele.addEventListener("click", function(){select_class(this.id)}, false);
								has_class.appendChild(ele);
							
								
                                
								
									}


document.getElementById(new_class_token).style.background = "#1C87A0";
destroy_suscriber();
query_code_name(new_class_token);
document.getElementById("display_code").innerHTML="Class-code";	
			document.getElementById("box-content").innerHTML=new_class_token;
			document.getElementsByClassName('copy-tag')[0].innerHTML="Click to copy";
		  document.getElementById("subscriber-count").innerHTML="0";

		document.getElementById( "showmore" ).setAttribute( "onclick", "show_each_old()" );
        destroy_message();
		class_message(new_class_token);
		messageObj.return_code(new_class_token);	
	
						
	}
	
	
	
function start()
{

if(messageObj.return_code(new_class_token)){
var p_class_code = messageObj.get_code(new_class_token);	
destroy_class(p_class_code);}
document.getElementById("subscriber-count-container1").style.display = "block";

document.getElementById(new_class_token).style.background = "#1C87A0";


query_code_name(new_class_token);
document.getElementById("display_code").innerHTML="Class-code";	
			document.getElementById("box-content").innerHTML=new_class_token;
			document.getElementsByClassName('copy-tag')[0].innerHTML="Click to copy";
		  document.getElementById("subscriber-count").innerHTML="0";

		//document.getElementById( "showmore" ).setAttribute( "onclick", "show_each_old()" );
        destroy_message();
		//class_message(new_class_token);
		messageObj.return_code(new_class_token);	
	
}
	
function send(){
		
		

		var msg = document.getElementById("send_message").value;
		
		if (msg.length==0) {					
										toggleSlider();
									var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="EMPTY MESSAGE";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please type a message you want to send<br>(else insert an attachment)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
										$(".sending").hide();
									    document.getElementById('send_button').disabled=false;
										
										
        }  
  else {
		var class_code = messageObj.get_code();
		var name = messageObj.get_name();
	    Parse.Cloud.run('sendTextMessage', {classcode: class_code, classname: name, message: msg},{
	    success: function(results){
		              
						select_class(class_code);
					    document.getElementById('send_button').disabled=false;
						$(".sending").hide();
		},
		error:function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1110)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
		
		
		}
}
		
		
		
function send_with_picture(){
 document.getElementById('send_button').disabled=true;
  $(".sending").show();
 

var fileName  = [];
var fileSize = [];	
var file = [];	

var x = document.getElementById("attachment");
if ('files' in x) {
	 var filePath=$('#attachment').val();
	 
        if (x.files.length == 0) {
            send();
			
        } else {
            for (var i = 0; i < x.files.length; i++) {
               
                file.push(x.files[i]);
				var c_file = x.files[i];
                if ('name' in c_file) {
                     fileName.push(c_file.name) ;
					
                }
                if ('size' in c_file) {
                   fileSize.push(c_file.size);
                }
				
            }
        }
	
		var class_code = messageObj.get_code();
		var msg = document.getElementById("send_message").value; 

		var name = messageObj.get_name();
		
		 
		var parseFile = new Parse.File(fileName[0], file[0]);
		parseFile.save().then(function() {
		
		Parse.Cloud.run('sendPhotoTextMessage', {classcode: class_code, classname: name, parsefile: parseFile ,filename: fileName[0], message: msg},{
	    success: function(results){
					   
						
						 document.getElementById('send_button').disabled=false;
						  $(".sending").hide();
						 select_class(class_code);
	
		},
		error:function(error){
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1111)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}

});
  
}, function(error) {
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
modal_class.addEventListener("click", function(){hide_alert()}, false);
var next =  document.getElementById("next");									 
var msg =  document.getElementById("alert_details");
var input =document.getElementById("enter_class_name");
var img =document.getElementById("add_alert_info");
var back = document.getElementById("back");	
input.value = "";
										img.src="icons/error.png";
										img.style.display="block";
										input.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="OOPS!";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Connection Lost<br>Please try later....<br>reference: (1000)";
										next.innerHTML ="OK";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
  
});
		
		
		}
			
}

	
function show_profile(){
	
	 if ($("#dropdown").is(":visible")) {
			
	   $("#dropdown").animate(
		 
            {
                opacity: "0"
				
            },
            0,
			function(){
				
				 $("#dropdown").animate({"left": "+=50px"},0);
				$("#dropdown").slideUp(0);
				 
				
            }

           
           
    
		 );
		
		
					
 }
else{
$('#dd').removeAttr('onclick');
	$("#dropdown").animate(
		 
            {
                opacity: "1"
				
            },
           0,
			function(){
				$("#dropdown").slideDown(1);
				
				  $("#dropdown").animate({"left": "-=50px"}, "fast");
				  $('#dd').attr("onclick","show_profile()");
				
            }

           
           
    
		 );
	
	
	
}
}
function hide_profile(){
		
}
function logout(){
		Parse.User.logOut();
		var currentUser = Parse.User.current(); 
		window.location="index.html";
	}
function highlight_send(){

document.getElementsByClassName("knit-btn2")[0].style.background = " #2eb9f6";
document.getElementsByClassName("knit-btn2")[0].style.border= "none";
document.getElementsByClassName("knit-btn2")[0].style.color= "white";
focused = "in";
}	
function highlight_back(){
document.getElementsByClassName("knit-btn2")[0].style.border= " 2px solid #999999";
document.getElementsByClassName("knit-btn2")[0].style.background = "white";
document.getElementsByClassName("knit-btn2")[0].style.color= "black";
focused = "out";
}	
function highlight_attach(){

document.getElementsByClassName("upload")[0].style.border = "1px solid #2eb9f6";

}
function back_attach(){

document.getElementsByClassName("upload")[0].style.border = "0px  ";

}	

function border_hover(){
document.getElementsByClassName("knit-btn2")[0].style.border= " 2px solid #2eb9f6";

}
function border_back(){
	if(focused == "in")
document.getElementsByClassName("knit-btn2")[0].style.border= " 2px solid #2eb9f6";
else document.getElementsByClassName("knit-btn2")[0].style.border= " 2px solid #999999";
}


function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
				document.getElementById('attachment_name').style.display="block";
                $('#attachment_name').attr('src', e.target.result);
                $('#attachment_name').height('35px');
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
function load_image(id,ext,ele)
{
   if(validateExtension(ext) == false)
   {
     alert("Upload only JPEG or JPG or PNG or BMP format IMAGES");
     document.getElementById("attachment_name").style.display ="none";
     
   }
   else
   readURL(ele);
}

function validateExtension(v)
{
      var allowedExtensions = new Array("jpg","JPG","jpeg","JPEG","png","PNG","BMP","bmp");
      for(var ct=0;ct<allowedExtensions.length;ct++)
      {
          sample = v.lastIndexOf(allowedExtensions[ct]);
          if(sample != -1){return true;}
      }
      return false;
}


function trych(){
picat=0;
$("#att2").val("");
$("#pickr").show();
$("#pickr1").show();
$("#myModal2").modal('hide');
$("#upperr").hide();
if(typeof parseFile2 !== 'undefined'){
var idd=parseFile2.url();
if(document.getElementById(idd)){
document.getElementById(idd).style.display="none";
}
}
$("#modalpic").modal('show');
}

	
function pp(){
if(typeof parseFile2 !== 'undefined'){
var idd=parseFile2.url();
document.getElementById(idd).style.display="none";
 };
//$("#uplerr").text("");
var fileUploadControl = $("#att2")[0];
if (fileUploadControl.files.length > 0) {
  var file = fileUploadControl.files[0];
var name = $("#att2").val();
name=name.toLowerCase();
var name2=name;
if(name.indexOf('fakepath')>-1){
name2=name.split('fakepath\\')[1];
}
if((name2.indexOf("jpg") > -1)||(name2.indexOf("png") > -1)||(name2.indexOf("jpeg") > -1)||(name2.indexOf("gif") > -1)||(name2.indexOf("bpm") > -1))
{
var fors=document.getElementById('forupl');
fors.disabled=true;
document.getElementById('att2').disabled=true;
fors.innerHTML="uploading image";
name2=name2.replace(/[^a-z0-9\_\.\-]/ig,"");
 parseFile2 = new Parse.File(name2, file);
parseFile2.save().then(function() {
var iurl=parseFile2.url();
var cc=document.createElement('centre');
var ll=document.createElement('img');
ll.id=iurl;
ll.src=iurl;
ll.style.hieght="200px";
ll.style.width="150px";
cc.appendChild(ll);
var x=document.getElementById("uplme");
x.appendChild(cc);
picat=1;
$("#pickr").hide();
$("#pickr1").hide();
fors.disabled=false;
document.getElementById('att2').disabled=false;
fors.innerHTML="Confirm";
}, function(error) {
$("#alertmess").text(" successfully attached");
}
);
}
else{
picat=0;
$("#att2").val("");
 $("#uplerr").text("*You can only attach images of format .jpg,.jpeg,.png or.bpm");
$("#upperr").show();
window.setTimeout('$("#upperr").hide();', 5000);

}
}
}	
	
	function cancelit(){
if(typeof parseFile2 !== 'undefined'){
var idd=parseFile2.url();
if(document.getElementById(idd)){
document.getElementById(idd).style.display="none";
}
 };
picat=0;
$("#att2").val("");
$("#pickr").show();
$("#pickr1").show();
$('#modalpic').modal('hide');
}
function changp(){
 var currentUser = Parse.User.current();
if(picat==1){
$("#loading").show();
currentUser.set("pid", parseFile2); 

currentUser.save(null, {
  success: function(currentUser) {

$("#pickr").show();
$("#pickr1").show();
$("#att2").val("");
document.getElementById('profile_pic_img').src=parseFile2.url();
document.getElementById('profile_pic_img_dd').src=parseFile2.url();
document.getElementById('profile_pic_img_pp').src=parseFile2.url();
$("#loading").hide();
var nameofcreator=currentUser.get('name');
Parse.Cloud.run('cloudpic', { pfile: parseFile2 ,name:nameofcreator}, {
  success: function(rat) {
alert(rat);
  },
  error: function(error) {
alert(error.code+'no'+error.message);
  }
});
$("#modalpic").modal('hide');
 $("#alertmess").text("Your Profile pic changed");
$("#sentnotif").show();

window.setTimeout('$("#sentnotif").hide();', 5000);
  },
  error: function(currentUser, error) {
alert(error.code);
  }
});
}
else{
 $("#uplerr").text("please Attach image");
$("#upperr").show();
window.setTimeout('$("#upperr").hide();', 5000);

}
}


function edit(){
if(document.getElementById('myModal2').className=="modal fade in"){
if(z==1){
$("#EditSach").click();
}
}
}

		
} 



else {
window.location ="index.html";
}
					
	

