status = "";
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
    console.log("ML")
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
    fill("red");
    text("Dog", 100, 45);
    //ref text(str, x, y, x2, y2)
    //ref rect(x, y, w, h, [tl], [tr], [br], [bl])
    noFill();
    stroke("red");
    rect(100, 50, 500, 300);
    //||\\
    fill("red");
    text("Cat", 450, 220);
    //ref text(str, x, y, x2, y2)
    //ref rect(x, y, w, h, [tl], [tr], [br], [bl])
    noFill();
    stroke("red");
    rect(450, 220, 200, 230);

}

function gotResults() {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}