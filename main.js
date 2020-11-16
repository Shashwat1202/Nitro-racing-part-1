var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1x=100;
var car1y=70;
var car2x=100;
var car2y=180;
var car1_img="https://i.postimg.cc/YqdnnNX1/car1.png";
var car2_img="https://png.pngitem.com/pimgs/s/150-1509028_cars-plan-view-png-top-view-car-png.png"
var car1_width=100;
var car1_height=100;
var car2_width=100;
var car2_height=100;
var background_img="https://www.660citynews.com/wp-content/blogs.dir/sites/8/2020/01/17/iStock-564593230.jpg"

function add(){
    background= new Image()
    background.onload=uploadbackground
    background.src=background_img;

    car1= new Image()
    car2= new Image()
    car1.onload=uploadcar1
    car2.onload=uploadcar2
    car1.src=car1_img;
    car2.src=car2_img
}
function uploadbackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1,car1x,car1y,car1_width,car1_height)
}

function uploadcar2(){
    ctx.drawImage(car2,car2x,car2y,car2_width,car2_height)
}

window.addEventListener("keydown", k)
function k(e){
   code=e.keyCode
   console.log(code);

   if(code == 37){
       car1_left()
       console.log("left is pressed for car1")
   }

   if(code == 38){
       car1_up()
       console.log("up is pressed for car1")
   }
    
   if(code == 39){
       car1_right()
       console.log("right is pressed car1")
   }

   if(code == 40){
       car1_down()
       console.log("down is pressed for car1")
   }
   if(code == 65){
       car2_left()
       console.log("left is pressed for car2")
   }
   if(code == 87){
    car2_up()
    console.log("up is pressed for car2")
}
    if(code == 68){
       car2_right()
       console.log("right is pressed for car2")
   }
   if(code == 83){
    car2_down()
    console.log("down is pressed for car2")
}

}