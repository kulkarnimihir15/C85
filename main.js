canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
pics_array=["nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
background_img=pics_array[random_number];
console.log("background_image"+background_img);
rover_img="rover.png";
roverx=10;
rovery=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;


}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,roverx,rovery,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=="38"){
    up();
    console.log("up");
}
if (keypressed=="40"){
    down();
    console.log("down");
}
if (keypressed=="37"){
    left();
    console.log("left");
}
if (keypressed=="39"){
    right();
    console.log("right");
}
}
function up(){
    if (rovery>=0){
        rovery=rovery-10;
        console.log("When up arrow is pressed,x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if (rovery<=500){
        rovery=rovery+10;
        console.log("When down arrow is pressed,x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if (roverx>=0){
        roverx=roverx-10;
        console.log("When left arrow is pressed,x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if (roverx<=700){
        roverx=roverx+10;
        console.log("When right arrow is pressed,x="+roverx+"y="+rovery);
        uploadbackground();
        uploadrover();
    }
}