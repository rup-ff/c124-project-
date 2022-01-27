function setup()
{
video=createCapture(VIDEO);
video.size(800,800);

canvas = createCanvas(700,700);
canvas.position(800,200);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#FFDF00');
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
