var jokes = new Array( );
        jokes[1]="Why do I get so angry? Because people keep pushing my buttons!";
        jokes[2]="What is my favorite type of music? Heavy metal";
        jokes[3]="Why was I feeling bad? I had a virus";
        jokes[4]="Why did I go to the mall? Because I had hardware and software but needed underwear";
        jokes[5]="Why was I so tired when I got here? I had a hard drive";
        jokes[6]="Why did I cross the road? I was programmed by a chicken";
        jokes[7]="Why can’t bad programmers drive well? They can’t C sharp";
        jokes[8]="Want to know my favorite drink? It’s a screwdriver";
        jokes[9]="Want to know my favorite dance? It’s the robot";
var speak = new Array( );


        speak[0] = "Be one of the first to tap into the power of AWS RowboMaker, click on the SlideShow and Video icons to learn more.";
        speak[1] = "Here is the RowboMaker schedule. Click on the info button for complete event details.";
        speak[2] = "The buildings in pink are the RowboMaker venues, I recommend you go to as many events as possible.";
        speak[3] = "Let’s have some robot fun.";
        speak[4] = "Press on an icon to see me in my many customized use cases. What use case can we do together?";
        speak[5] = "I think it would be neat if you rent or buy me. I’m customizable in many awesome ways. Contact us after the show to learn more.";
        speak[6] = "All fruit prizes are digital. Ha, ha. Good luck!";
        speak[7] = "Pick a song, press the play button, and let’s boogie.";
        speak[8] = "Smile, you’re about to become a cool robot like me.";
        speak[9] = "Smile! You are about to become a robot.";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
   
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("welcome, please press any button to begin");
            break;
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "LearnMore":
            PlaySpeech(speak[0]);
            location.href = "Contents/LearnMore/index.html";
            break;
        case "Schedule":
            PlaySpeech(speak[1]);
            location.href = "Contents/Schedule/index.html";
            break;
        case "Maps":
            PlaySpeech(speak[2]);
            location.href = "Contents/Maps/index.html";
            break;
        case "Entertainment":
            PlaySpeech(speak[3]);
            location.href = "Contents/Entertainment/index.html";
            break;
        case "Videos":
            PlaySpeech(speak[4]);
            location.href = "Contents/Videos/index.html";
            break;
        case "Videos-inner":
            PlaySpeech(speak[4]);
            location.href = "../../Contents/Videos/index.html";
            break;
        
        case "RentAndBuy":
            PlaySpeech(speak[5]);
            location.href = "Contents/RentAndBuy/index.html";
            break;
        case "RentAndBuy_inner":
            PlaySpeech(speak[5]);
            location.href = "../../Contents/RentAndBuy/index.html";
            break;
        

        case "Selfie":
            //PlaySpeech(speak[6]);
            location.href = "../../Contents/Selfie/index.html";
            break;
        case "TakePhotos":
            //PlaySpeech(speak[]);
            location.href = "Contents/TakePhotos/index.html";
            break;
        case "Slot-machine":
            PlaySpeech(speak[6]);
            location.href = "../../Contents/SlotMachine/index.html";
            break;
        case "Dance":
            PlaySpeech(speak[7]);
            location.href = "../../Contents/Dance/index.html";
            break;
        case "Avatar":
            PlaySpeech(speak[8]);
            location.href = "../../Contents/RobotAvatar/index.htm";
            break;
        case "Config":
            location.href = "Config/Config.htm";
            break;
        case "maincontents":
            location.href = "maincontents.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the event. Please press a button on my screen to begin.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowImgPopup(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+src+'"/></div></div>';
}

$(document).ready(function(){

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


 /*setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Fairfield, CT";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

   $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });

}, 2000);*/



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}
function GetJoke(){
    var temp=Math.floor((Math.random() * 9) + 1);
    PlaySpeech(jokes[temp]);
    //alert(jokes[temp]);
  }
function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hello, my name is Tracey. Press a button on my screen to learn about AWS RowboMaker.");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("I like you, press the Entertainment button and let’s have some fun.");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi, press my Entertainment button and I’ll tell you a joke.");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Bye, bye.");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Home');
    }
}