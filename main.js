noseX=0;
nosey=0;
diff=0;
lefthand=0;
righthand=0;
function setup(){
    
    video=createCapture(VIDEO);
    video.size(550,500);
    Canvas=createCanvas(500,500);
    Canvas.position(580,110);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}
function modelLoaded(){
    console.log("Model has been loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        righthand=results[0].pose.rightWrist.x;
        lefthand=results[0].pose.leftWrist.x;
        diff=floor(lefthand-righthand);
        console.log(noseX,noseY,lefthand,righthand,diff);

    }
}
function draw(){
    background("#1ad8ed");
    document.getElementById("side").innerHTML="Size of the font will be:"+diff+"px";
    fill("#FFFFFF");
    text("Good",50,400);
    textSize(diff);
}