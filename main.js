status = "";
objects = [];
function preload() {
    img = loadImage("image.jpg");
}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.center();
    objectDetect = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects.."
}

function modelLoaded() {
    console.log("ML");
    status = true;
    objectDetect.detect(img, function (error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
        }
    });
}
function draw() {
    image(img, 0, 0, 800, 500);

    if(status != ""){
        for (i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + " " + objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
        }
    }
}

function gotResults() {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}