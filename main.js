narizx=0;
narizy=0;

function preload(){
 freddy=loadImage("https://i.postimg.cc/0NXftdcr/fnaf-Freddy-1.png");
}
function setup(){
canvas=createCanvas(300,301);
canvas.center();
video=createCapture(VIDEO);
video.size(300,301);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("El modelo esta cargado");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nariz x: "+results[0].pose.nose.x);
    console.log("nariz y: "+results[0].pose.nose.y);
narizx=results[0].pose.nose.x-50;
narizy=results[0].pose.nose.y-100;

}
}
function draw(){
image(video,0,0,300,301);
stroke(255,0,0);
fill(255,0,0);

//circle(narizx,narizy,30);
image(freddy,narizx,narizy,100,170);
}function take_snapshot(){
    save("DescargaFiltro.png");
}
