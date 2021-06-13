function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
   //canvas.position(575,315);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4WWxV6nGL/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("name_object").innerHTML = results[0].label;
        document.getElementById("accuracy_number").innerHTML = results[0].confidence.toFixed(2)*100+"%";
    }
}