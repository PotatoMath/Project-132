img = "";

function preload()
{
    img = loadImage("bathroom.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    canvas.position(450, 230);
    objectDetector = objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#3243c2");
    text("Bathtub", 45, 270);
    noFill();
    stroke("#3243c2");
    rect(30, 250, 410, 150);
}

function modelLoaded() 
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function back1() 
{
    window.location.replace("index.html");
}