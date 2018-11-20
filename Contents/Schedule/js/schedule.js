//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
   // window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,180000);
});
//-----------------------------------------------------
var desc=new Array();
desc[1]="<p>When: Monday, Nov 26 10AM - 12:15PM AND Monday, Nov 26 7PM - 9:15PM</p><p>Where: Venetian, Level 2, Venetian H AND Venetian, Level 2, Veronese 2404</p><p>Speaker: Gavin Adams, Sr. IoT Specialist Solution Architect</p><p>Support: Matt Bollinger, Chris McPeek, Wayne Davis, Tristin Li, Ross Desmond, Gaurav Ghare, Ray Zhu, Doug Fulop, Andrew Lafranchise, Gourav Roy</p><p>Abstract: AWS RoboMaker enables you to easily develop complex robot applications. In this workshop, we introduce the capabilities of RoboMaker to develop ROS robot and simulation applications, natively integrate with other AWS services such as Amazon CloudWatch and Amazon Kinesis video streams, and build and compile these applications. Upon completion, you will launch a simulated TurtleBot3 wheeled robot to look at different images within an enclosed space utilizing Amazon Rekognition’s object detection features, and track down that pesky pooch’s photo! After the workshop, you will have a fundamental understanding of the development process for robotic applications using AWS RoboMaker.</p>";
desc[2]="<p>Monday, Nov 26 10:45 – 11:45 AM</p><p>Venetian – Titian 2205</p><p>Speakers: Roger Barga, General Manager, AWS Robotics, Ray Zhu, Sr. Product Manager, AWS Robotics, Aswin Chandarr, Cofounder & Robotics Integration Manager, Robot Care Systems, Gabriel Lopes, Principal Scientist, Robot Care Systems.</p><p>Abstract: Robots are no longer just the subject of sci-fi movies. They’re now prevalent in our lives, helping us carry out tedious housework, distribute warehouse inventory, automate manufacturing, and research lunar landscapes. Until now, developing, testing, and deploying intelligent robotics applications was difficult and time consuming. We announced AWS RoboMaker, a new service that makes it easy for developers to develop, test, and deploy robotics applications, as well as build intelligent robotics functions using cloud services. We’ll invite our launch customer up for a demonstration – Robot Care Systems, a company that is enabling elderly and disabled people to live independently.</p><p> Rehearsal: Monday, 8am Venetian – Titian 2205</p>";
desc[3]="<p>Monday Nov 26 2 – 3 PM</p><p>http://reddit.com/r/aws</p><p>SMEs: Roger Barga, Ray Zhu, Doug Fulop, Maggie Tallman, Gourav Ghare, Gourav Roy, Ross Desmond, and Andrew Lafranchise</p><p>Details: Ask the Experts is a live and interactive virtual Q&A session that takes place on Reddit, a social platform for intimate and honest conversations, with over a million existing developers sharing content and engaging with each other. This session is between AWS RoboMaker experts and developers who are also redditors.</p>";
desc[4]="<p>Open Hours are Monday 4 PM - 7 PM, Tuesday 8 AM - 6 PM</p><p>Venetian Expo Hall</p><p>Abstract: The new and improved Waiterbot from re:Invent 2017 is back, using SLAM (Simultaneous Location And Mapping) to discover the world around it. With its new SLAM features, Waiterbot is able navigate to specific and arbitrary locations in its space and avoid new obstacles as they are introduced. This allows us to better represent an actual customer environment such as a restaurant or warehouse. Waiterbot connects to AWS to receive commands/jobs, send metrics, and interact with customers.</p>";
desc[5]="<p>Open Hours are Monday 4 PM - 7 PM, Tuesday 8 AM - 6 PM, Wednesday 10 AM - 6 PM, Thusday 10 AM - 4 PM<p>Where: AWS Village at the Expo Hall</p><p>Details: Come hang out in the AWS Village for all things AWS related! Get your questions answered by AWS engineers and product leaders, relax in the Cloud Café, or go behind the scenes of the AWS Launchpad live stream production. The AWS Robotics kiosk will feature more information on AWS RoboMaker and live demonstrations of robots running on AWS RoboMaker, like Lea - a walker robot for the elderly and disabled from Robot Care Systems, FURo-D – a wayfinding robot from Future Robot and provided by Advance Robot Solutions, and the TurtleBot – a developer platform.</p>";
desc[6]="<p>When: Monday, Nov 26 10AM - 12:15PM AND Monday, Nov 26 7PM - 9:15PM</p><p>Where: Venetian, Level 2, Venetian H AND Venetian, Level 2, Veronese 2404</p><p>Speaker: Gavin Adams, Sr. IoT Specialist Solution Architect</p><p>Support: Matt Bollinger, Chris McPeek, Wayne Davis, Tristin Li, Ross Desmond, Gaurav Ghare, Ray Zhu, Doug Fulop, Andrew Lafranchise, Gourav Roy</p><p>Abstract: AWS RoboMaker enables you to easily develop complex robot applications. In this workshop, we introduce the capabilities of RoboMaker to develop ROS robot and simulation applications, natively integrate with other AWS services such as Amazon CloudWatch and Amazon Kinesis video streams, and build and compile these applications. Upon completion, you will launch a simulated TurtleBot3 wheeled robot to look at different images within an enclosed space utilizing Amazon Rekognition’s object detection features, and track down that pesky pooch’s photo! After the workshop, you will have a fundamental understanding of the development process for robotic applications using AWS RoboMaker.</p>";

$(document).ready(function(){
  

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });

  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));

    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));

    //$("$list1").show();

  });
  $(".right-col img").click(function(){
    var t=$(this).attr('dir');
    ShowPopup(desc[t]);
  });

});


function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

  //document.getElementById('dialog-box').innerHTML = '<p style="width:  70%;display:  block;float:  left;font-size: 29px;padding: 20px;">Take Picture and Show merchant</p><a href="#" class="button" style="float: left;position:  relative;top: 20px;">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
    $("#dialog-box").html('<div class="dialog-content"><a href="#" class="button">Close</a><div id="dialog-message">'+ src +'</div><a href="#" class="button">Map</a></div>');

}

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}