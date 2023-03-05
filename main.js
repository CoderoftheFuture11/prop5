function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    viedo=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    rect(30, 20, 55, 55);
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
createCanvas(width, height)
