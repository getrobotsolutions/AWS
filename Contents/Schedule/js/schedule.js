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
desc[7]="<p>Open Hours are Monday 4 PM - 7 PM, Tuesday 8 AM - 6 PM, Wednesday 10 AM - 6 PM, Thusday 10 AM - 4 PM<p>Where: AWS Village at the Expo Hall</p><p>Details: Come hang out in the AWS Village for all things AWS related! Get your questions answered by AWS engineers and product leaders, relax in the Cloud Café, or go behind the scenes of the AWS Launchpad live stream production. The AWS Robotics kiosk will feature more information on AWS RoboMaker and live demonstrations of robots running on AWS RoboMaker, like Lea - a walker robot for the elderly and disabled from Robot Care Systems, FURo-D – a wayfinding robot from Future Robot and provided by Advance Robot Solutions, and the TurtleBot – a developer platform.</p>";
desc[8]="<p>Open Hours are Tuesday 8 AM - 6 PM, and Wednesday 10 AM - 6 PM</p><p>Where: Venetian Expo Hall</p><p>Abstract: At the NASA Jet Propulsion Laboratory, we are always trying to push the limits of what’s possible in exploring and understanding our solar system.  To do that, we first have to push the limits of what’s possible in how we do our work on the ground.  JPL and AWS have a long history of prototyping together, and this year JPL is excited to be an early tester of another new technology: AWS RoboMaker.  Come see how JPL is testing RoboMaker on our Open Source Rover and explore how we and you might build robots faster and more simply by using the cloud and open source software.</p>";
desc[9]="";
desc[10]="<p>When: Tuesday, Nov 27, 9:05 – 9:25 AM</p> <p>Where: LaunchPad Stage at the Expo Hall</p><p>Details: Bill Vass, VP at AWS, and Roger Barga, General Manager for AWS Robotics will deliver a recap of the launch of AWS RoboMaker. This will be live streamed on www.twitch.tv/aws and delivered on the Launchpad Stage in the Expo Hall.</p>";
desc[11]="<p>When: Tuesday, Nov 27, 6 PM - 8 PM</p><p>Where: Heritage Steak at the Mirage</p><p>SMEs: Maggie Tallman, Doug Fulop, Gavin Adams, other SAs if interested</p><p>Details: The Pub Crawl provides you with the opportunity to network and connect with fellow re:Invent attendees and AWS sponsors. This year, each Pub Crawl location highlights a specific topic, giving you the chance to meet peers in your specific fields of interest and talk with sponsors and AWS experts on those topics. Robotics will be featured in the Machine Learning track at the Heritage Steak, complete with Robot Trivia and a chance to win prizes.</p>";
desc[12]="<p>When: Wednesday, November 28 11:30AM - 12:30PM</p><p>Where: MGM, Level 1, South Concourse 104</p><p>Speaker: Ross Desmond</p><p>Abstract: AWS RoboMaker has released open source Robot Operating System nodes for community use. These nodes are called Cloud Service Extensions, allowing developers to utilize Amazon Web Services from a ROS API. A high-level architecture design on how to use these to create an “intelligent” robot is presented as well as an in-depth look into a few of the nodes. On the board, we journey from ROS best practices to discussing ROS task-based programming and optimization as a developer. At this point, the group understands how to use AWS and the RoboMaker Cloud Service Extensions for ROS to power their robots. The next release of ROS (ROS2) is around the corner, and developers looking forward to secure transport, DDS, and better API’s need to understand how to move forward. The internals of ROS and ROS2 are generalized to highlight the differences between the two systems, comparing ROS concepts and how to use them.</p>";
desc[13]="<p>When: Friday, Nov 30 8:30AM - 9:30AM</p><p>Where: Venetian, Level 3, Murano 3202</p><p>Speaker: Gourav Roy</p><p>Abstract: AWS RoboMaker offers sample applications that use reinforcement learning. In this talk, we’ll dive deep into the architecture of those applications – a self-driving toy car and a tracker and follower robot. We’ll discuss how to use AWS RoboMaker and Amazon SageMaker together to build scalable reinforcement learning applications that can train robust machine learning models. Domain randomization is a key technique for building robot reinforcement learning models and tuning hyper parameters for these algorithms are challenging, so we’ll explore different ways in which we can use AWS for performing domain randomization and automated hyper parameter optimization.</p>";
desc[14]="<p>When: Friday, Nov 30 10:45AM - 11:45AM</p><p>Where: Mirage, Antigua B</p><p>Speaker: Andrew Lafranchise</p><p>Abstract: An introduction to simulation with AWS RoboMaker and open source tools like Gazebo, RViz, RQT, and ROS. In this chalk talk, we cover AWS RoboMaker's features like different types of simulation modes, pre-integrated tools, pre-built simulation worlds, monitoring and logging. We will then demonstrate how to get started with a simple simulation from scratch.</p>";
desc[15]="<p>When: Thursday, Nov 29 11:30AM - 12:30PM</p><p>Where: Aria East, Plaza Level, Orovada 3</p><p>Speaker: Gaurav Ghare</p><p>Abstract: We’ll use an object detection robot as an example to show how AWS RoboMaker can help you build the robot of your dreams. We’ll do a deep dive into the architecture of our robot application. You’ll learn how it uses various AWS services to detect and react to objects. Along the way, we’ll show you how AWS RoboMaker makes it easy to develop and test such applications. Finally, we’ll dive into how AWS RoboMaker deploys your application to a fleet of robots.</p>";
desc[16]="<p>When: Thursday, Nov 29, 2:40 PM - 3:00 PM</p><p>Where: Pilvi Theater in the Expo Hall</p><p>Speaker: Gourav Roy, Vineet Khare</p><p>Abstract: Your robot can be programmed to perform tasks but it can also be 'taught' to navigate or perform actions with high accuracy using reinforcement learning (RL). We demonstrate how we used AWS RoboMaker and Amazon SageMaker to teach a TurtleBot to follow an object in simulation. We dive deep into the architecture of this application and talk about different techniques like hyperparameter optimization and domain randomization that is used for building robust RL applications. We also demonstrate the scalability of the RL application where you could use several RoboMaker simulations to train an RL model in SageMaker.</p>";
desc[17]="<p>When: Thursday, Nov 29 3:10PM-3:30PM</p><p>Where: Kumo Theater in the Expo Hall</p><p>Speakers: Mr. Ryohei Morimoto and Mr. Himanshu Shekhar, Software Engineer, Sony Corporation</p><p>Abstract: Aibo (coming soon in US) is an autonomous pet robot series by Sony. Aibo’s cloud is built on AWS and uses various services like Lambda, API Gateway and IoT Core. We have joined the AWS RoboMaker beta for verifying how Sony can leverage RoboMaker as a part of our commercial products. In this session, we will introduce how we use AWS services for Aibo, show various kinds of Serverless practices, and share our experiences with AWS RoboMaker.</p>";


$(document).ready(function(){
  

   $('a.btn-ok').click(function () {   
      $('#dialog-overlay1, #dialog-box1').hide();   
      return false;
    });


  $(".map-btn").click(function () {
    location.href="../../Contents/Maps/index.html";

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
var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();

  //document.getElementById('dialog-box').innerHTML = '<p style="width:  70%;display:  block;float:  left;font-size: 29px;padding: 20px;">Take Picture and Show merchant</p><a href="#" class="button" style="float: left;position:  relative;top: 20px;">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
    $("#dialog-message1").html(''+ src +'');

}

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box1').innerHTML = '<a href="#" class="button btn-ok">Close</a><div class="dialog-content1"><div id="dialog-message1"><img width="800" src="'+ src +'"/></div></div>';
}