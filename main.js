var SpeechRecognition = window.webkitSpeechRecognition;
var recognition_blueprint = new SpeechRecognition();

function startspeaking() {
    document.getElementById("textbox").innerHTML = "";
    recognition_blueprint.start();
}

recognition_blueprint.onresult = function(event) {
    var result = event.results[0][0].transcript;
    console.log(result);
    document.getElementById("textbox").innerHTML = result;
    Speaking();
}

function Speaking() {
    var synthesis = window.speechSynthesis;

    speechdata = document.getElementById("textbox").innerHTML;

    utterthis = new SpeechSynthesisUtterance(speechdata);

    synthesis.speak(utterthis);

    if(speechdata == "take my selfie") {
        Webcam.attach(camera);
        
        setTimeout(function(){
            putimage();
            saveimg();
        },10000);

    }
    
}

Webcam.set({
    width: 360,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
})
camera = document.getElementById("camera");

function putimage() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="webcamimg" src="'+data_uri+'">';
    });
}

function saveimg() {
    link = document.getElementById("link");
    image = document.getElementById("webcamimg").src;
    link.href = image;
    link.click();
}