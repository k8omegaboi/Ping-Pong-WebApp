rwristx = "";
rwristy = "";
rwristscore = "";

function setup()
{
    canvas = createCanvas(600,300);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide()
    parent(canvas,"canvas");
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results)
{
    if(length.results > 0)
    {
        rwristx = result[0].pose.rightWrist.x;
        rwristy = result[0].pose.rightWrist.y;
        rwristscore = results[0].pose.keypoints[10].score        
    }
}

function draw()
{
    image(video, 0, 0, 600, 300);

    if(rwristscore > 0.2)
    {
        fill("#ff0000");
        stroke("#ff0000");
        circle(rwristx, rwristy, 20)
    }
}