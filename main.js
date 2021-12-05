status = "";
objects = [];
function preload() {
    img = loadImage("image.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetect = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded() {
    console.log("ML");
    status = true;
    setTimeout(function(){
        objectDetect.detect(video, gotResults);
    }, 2000); 
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != ""){
        r = random(255);
        b = random(255);
        g = random(255);
        for (i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("num_of_objects").innerHTML ="Number of Objects Detected: "+objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
        }
    }
}
