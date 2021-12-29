Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = " ' + data_uri + '"/>';
    })
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tgBKjZUxQ/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function Speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + data_speak_2);
    synth.speak(utterThis);
}

function Check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name_2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        Speak()
        
        if(results[0].label == "peace")
        {
        document.getElementById("update_gesture").innerHTML = "&#9996; - Well that was easy";
        }
        if(results[0].label == "thumbs up")
        {
        document.getElementById("update_gesture").innerHTML = "&#128077; - That's good";
        }
        if(results[0].label == "thumbs down")
        {
        document.getElementById("update_gesture").innerHTML = "&#128078; - That's bad";
        }
        if(results[0].label == "peace")
        {
        document.getElementById("update_gesture_2").innerHTML = "&#9996; - Well that was easy";
        }
        if(results[0].label == "thumbs up")
        {
        document.getElementById("update_gesture_2").innerHTML = "&#128077; - That's good";
        }
        if(results[0].label == "thumbs down")
        {
        document.getElementById("update_gesture_2").innerHTML = "&#128078; - That's bad";
        }
    }
}