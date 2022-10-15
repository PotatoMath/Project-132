img = "";
status = "";

function preload()
{
    img = loadImage("bedroom.jpg");
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
    text("Bed", 45, 180);
    noFill();
    stroke("#3243c2");
    rect(30, 160, 450, 350);
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

function back() 
{
    window.location.replace("index.html");
}