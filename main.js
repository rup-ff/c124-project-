function setup()
{
video=createCapture(VIDEO);
video.size(800,800);

canvas = createCanvas(700,700);
canvas.position(900,300);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#FF7538');
}
function modelLoaded()
{
console.log('Postnet Is Intialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
