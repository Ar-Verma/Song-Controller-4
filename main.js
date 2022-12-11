butter = "";
dynamite = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
song_status1 = "";


function preload() {
    butter = loadSound("Butter.mp3");
    dynamite = loadSound("Dynamite.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses() {
    if(results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    dynamite.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        butter.stop();
        if(dynamite = "false") {
            dynamite.isPlaying();
            document.getElementById("song_name").innerHTML = "Song Name : Dynamite"; 
        }
    }
}