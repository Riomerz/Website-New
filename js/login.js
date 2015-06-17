var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
   browserName = "Opera";
  
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
   browserName = "Microsoft Internet Explorer";
  
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
   browserName = "Chrome";
  
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
   browserName = "Safari";
  
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
    
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
    browserName = nAgt.substring(nameOffset,verOffset);
   
    if (browserName.toLowerCase()==browserName.toUpperCase()) {
       browserName = navigator.appName;
    }
}

var session_token;
var ph_number;
var code;
var fname;
var gender;
function hide_alert(e){
    var id = event.target.id;
    if(id!="alerts"){
		return;
	}
else
 $("#alerts").fadeOut(100);
}
function start_login(){
	
										toggleSlider();
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										sel_number.style.display="block";
										sel_email.style.display="block";
										sel_email.innerHTML ="Email";
										sel_number.innerHTML ="Mobile No.";
										input1.style.display ="none";
									    input2.style.display ="none";
										prefix.style.display ="none";
										back.style.display = "none";
									    next.innerHTML = "DISMISS";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="SELECT";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Select a login option<br><br>If you have registered using mobile number choose Mobile number option<br>(mobile number verification will be required).<br><br><br>else choose Email option <br>(enter your Email Id	and Password to log in).<br><br><br><br><br><br>";
										next.setAttribute("onclick","toggleSlider()");
										sel_email.setAttribute("onclick","check_login_email()");
										sel_number.setAttribute("onclick","check_login_number()");
	
}
function check_login_number(){

										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										img.style.display="block";
										input1.style.display ="block";
										input1.placeholder = "Mobile No.";
										prefix.style.display = "block";
										input1.value = "";
										input2.value = "";
										input2.style.display ="none";
										back.style.display = "block";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="LOGIN";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");


}
function check_login_email(){
	


										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										img.style.display="block";
										input1.style.display ="block";
										input1.placeholder = "Email";
										next.style.display = "block";
										prefix.style.display = "none";
										input1.value = "";
										input2.value = "";
										input2.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="EMAIL LOGIN";
										document.getElementById("alert_title").style.background = "#039be5";
									     msg.innerHTML = "";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","login_verify()");
										back.setAttribute("onclick","toggleSlider()");


}
function verify_number(){
	var  x1 = document.getElementById("enter_email").value;

	ph_number = x1;
	if(x1==""){
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										prefix.style.display = "none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="EMPTY FIELD";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Some field are empty.";
										next.innerHTML ="LOGIN";
										next.style.display = "block";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");
	
}
else if(x1.length==10){
	
	
		
	if(Number(x1)==NaN)
	{
				
				var modal_class=  document.getElementById("alerts");
				modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										back.style.display = "block";
										prefix.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please check your number again";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");
	}
	else{
		generate_code_login(x1);

		
	}



}
else{
		var modal_class=  document.getElementById("alerts");
		modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										input1.style.display ="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										prefix.style.display = "none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please check your number again";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","verify_number()");
										back.setAttribute("onclick","toggleSlider()");
	
}
	
}
function login_verify(){

var  x1 = document.getElementById("enter_email").value;
var  x2 =document.getElementById("enter_password").value;
if(x1==""||x2==""){
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
									
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
											sel_number.style.display ="none";
									    sel_email.style.display ="none";
										img.style.display="block";
										next.style.display = "block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="EMPTY FIELD";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Some field are empty.";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","login_verify()");
										back.setAttribute("onclick","toggleSlider()");
	
}
else if(checkemail(x1)){
	
	

Parse.User.logIn(x1, x2, {
  success: function(user) {
			var currentUser = Parse.User.current();
			if (currentUser) {
				var role = currentUser.get("role");
				
				if(role=="teacher"){
					window.location = "dashboard.html";
					
				}
				else{
										
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										input2.style.display ="none";
										prefix.style.display = "none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="TEACHER LOGIN ONLY";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Login facility is available for teachers only. <br> Please use our app to login as parent or student";
										next.innerHTML ="DISMISS";
										back.innerHTML ="BACK";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","");
					
				}
			}
			
  },
  error: function(user, error) {
   
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										prefix.style.display = "none";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Your email/number or password was incorrect.";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
  }
});
}

else
{
	
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="block";
										input2.style.display ="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
											input2.value = "";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please check your email id again";
										next.innerHTML ="LOGIN";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","login_verify()");
										back.setAttribute("onclick","toggleSlider()");
	
}
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
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
function checkemail(str){

var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(str))
return true;
else{

return false;
}

}
function generate_code_login(num){
	
	
	Parse.Cloud.run('genCode ',{number:num},{
	    success:function(results){ 
			if(results){				
			
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="block";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										input1.value = "";
										input1.placeholder = "Code";
										input2.style.display ="none";
										prefix.style.display = "none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="VERIFY YOURSELF";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Enter the verification code sent to your number.";
										next.innerHTML ="NEXT";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","logged_in_login()");
										back.setAttribute("onclick","toggleSlider()");
			}
			
		},
		error: function(error){alert(error.code);
		
			
			var modal_class=  document.getElementById("alerts");
			modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Server not available please try later...";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}
});
}
function generate_code(num){
	
	

	Parse.Cloud.run('genCode',{number:num},{
	    success:function(results){
			if(results){				toggleSlider();
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="block";
										input1.value = "";
										input1.placeholder = "Code";
										prefix.style.display = "none";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="VERIFY YOURSELF";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Enter the verification code sent to your number.";
										next.innerHTML ="NEXT";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","logged_in()");
										back.setAttribute("onclick","toggleSlider()");
			}
			
		},
		error: function(error){
			
		toggleSlider();
			var modal_class=  document.getElementById("alerts");
			modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
										next.style.display = "block";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Server not available please try later...";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
		}
});
}
function logged_in_login(){
code = document.getElementById("enter_email").value;
code=parseInt(code);

Parse.Cloud.run('verifyCode ',{number:ph_number,code:code},{
  success: function(results) {
			if(results){
				session_token = results.sessionToken;
				load_logged_in();
			}
			else{
				
				
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="CONNECTION LOST";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try again later";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
			}
			
  },
  error: function(error) {
	
   
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										next.style.display = "block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Code you entered was incorrect";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
  }
});
	
}
function load_logged_in(){
					Parse.User.become(session_token).then(function (user) {
								var currentUser = Parse.User.current();
								//console.log(currentUser.get('username'));
								var currentSession = Parse.Session.current();
								
								
							var query = new Parse.Query(Parse.Session)
/*								
query.equalTo("ACL", currentUser.id);
query.first({
  success: function(results) {
    alert("Successfully retrieved ");
	results.set("os", "web");
	results.set("model", browserName);
    
    results.save(null, {
  success: function(data) 
  {  
    alert('New object created with objectId: ' + data.id);
  },
  error: function(data, error) 
  {
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
    
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
*/
/*
								user.set("os","web");
								user.set("model","browserName");
								
								user.save(null, {
  success: function(user_data) 
  {  
    alert('New object created with objectId: ' + user.id);
  },
  error: function(user, error) 
  {
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
*/	

	
if (currentUser) {
	window.location = "dashboard.html";	
	
}
			}, function (error) {
				var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
				});

	}
function logged_in(){
code = document.getElementById("enter_email").value;
code=parseInt(code);
if(Number(code))

Parse.Cloud.run('verifyCod',{number:ph_number, code:code, name:fname, role:"teacher"},{
  success: function(results) {
			if(results){
				
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "You have Successfully Signed Up.<br>Click Next to start using knit.";
										next.innerHTML ="NEXT";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","load_logged_in()");
										back.setAttribute("onclick","toggleSlider()");
										

				
			}
			
			
  },
  error: function(error) {
	 
   
									var modal_class=  document.getElementById("alerts");
									modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										next.style.display = "block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.style.display ="none";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="INVALID";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Code verification failed. This can be due to<br>1).User may already exist.<br>2).Code you enter is incorrect.<br>3).Server may not be responding.<br> If this Problem persists please contact us at 8080809449.";
										next.innerHTML ="DISMISS";
										back.innerHTML ="CANCEL";
										next.setAttribute("onclick","toggleSlider()");
										back.setAttribute("onclick","toggleSlider()");
  }
});
	
}
function signup(){
	var salt = document.getElementsByClassName("select-option")[0].value;

	if(salt=="Mr.")
		gender = "male";
	else gender = "female";
	var name = document.getElementsByClassName("name-input")[0].value;
	var number = document.getElementsByClassName("mobile-input")[0].value;
	ph_number=number;
	fname = salt+name;
	
	if(name==""){
		 document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter your name";
	}
	else if(number.length<10 && number.lenghth>10){
	  	  document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter a proper phone number";
	}
	else if(Number(number)==NaN){
		 document.getElementsByClassName("number-alerts")[0].innerHTML="*Enter a proper phone number";
		 
		}
		
		else{
			generate_code(number);
			
		}
}
function signup_to_class(){

code = document.getElementById("class_code").value;
code = code.toUpperCase();
var class_name ;

	if (code.length!=7)
	{
		 document.getElementsByClassName("number-alerts")[1].innerHTML = "*Enter a proper Class Code";
	}
	else{
		
Parse.Cloud.run('findClass ',{code:code},{
  success: function(results) {
	  if(results.length==0){toggleSlider();
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										input1.placeholder = "";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.type="text";
										input2.value = "";
										back.style.display = "none";
										next.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="CLASS NOT FOUND";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "No class with this class code exists";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	 
		
		 }
		 else{
			
	  class_name = results[0].get("name");
	   toggleSlider();	
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var prefix =document.getElementById("fixed");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="block";
										next.style.display = "block";
										input1.value = "";
										input1.placeholder = "Enter Your Name";
										input2.style.display ="block";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input2.type="text";
										input2.value = "";
										input2.placeholder = "Enter Your Mobile Number to subscribe";
										prefix.style.display ="block";
										back.style.display = "block";
										document.getElementById("alert_title_text").innerHTML ="Subscribe";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "<center><strong>"+class_name+"</strong></center><br>Once you subscribe you will start receiving messages from the teacher";
										next.innerHTML ="DONE";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","smssubscribe()");
                                    	back.setAttribute("onclick","toggleSlider()");
	 
		 }
	  
  },
  
error: function(error){
	 toggleSlider();
	var modal_class=  document.getElementById("alerts");
	modal_class.addEventListener("click", function(){hide_alert()}, false);
										var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										input1.placeholder = "";
										input2.style.display ="none";
										input2.type="text";
										next.style.display = "block";
										input2.value = "";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later..";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	
	
}

});

	
	 
                                       

}
}

function smssubscribe(){
ph_number = document.getElementById("enter_email").value;
fname = document.getElementById("enter_password").value;
Parse.Cloud.run('smsSubscribe ',{number:fname,classcode:code ,subscriber:ph_number},{
  success: function(results) {
	  if(results)
	  {
										var modal_class=  document.getElementById("alerts");
										modal_class.addEventListener("click", function(){hide_alert()}, false);
									    var next =  document.getElementById("next");									 
										var msg =  document.getElementById("alert_details");
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/info.png";
										img.style.display="block";
										input1.style.display ="none";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="SUCCESS";
										document.getElementById("alert_title").style.background = "#039be5";
									    msg.innerHTML = "Subscribed successfully";
										next.innerHTML ="DISMISS";
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
										var input1 =document.getElementById("enter_email");
										var input2 =document.getElementById("enter_password");
										var img =document.getElementById("add_alert_info");
										var back = document.getElementById("back");
										var sel_number = document.getElementById("select_number");
										var sel_email = document.getElementById("select_email");
										img.src="icons/error.png";
										img.style.display="block";
										input1.style.display ="none";
										input1.value = "";
										input1.placeholder = "";
										input2.style.display ="none";
										sel_number.style.display ="none";
									    sel_email.style.display ="none";
										next.style.display = "block";
										input2.type="text";
										input2.value = "";
										back.style.display = "none";
										document.getElementById("alert_title_text").innerHTML ="ERROR";
										document.getElementById("alert_title").style.background = "#ffc107";
									    msg.innerHTML = "Please try later..";
										next.innerHTML ="DISMISS";
										back.innerHTML ="DISMISS";
										next.setAttribute("onclick","toggleSlider()");
                                    	back.setAttribute("onclick","toggleSlider()");
	
}

});
	
}