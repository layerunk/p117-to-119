
function setup(){
    canvas = createCanvas(450, 300);
    canvas.position(540, 150);
    background("white");
}



timer_counter = 0;
timer_check = "";
score = 0;
drawn_sketch = "";
answer_holder = ""; 

quick_draw_data_set = ["animal migration","ant","anvil","apple","bathtub","beach","bear","beard","bed","bee","belt","bowtie","bracelet","brain","bread","bridge"];
Random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
sketch = quick_draw_data_set[Random_no];
console.log(sketch);
document.getElementById("drawname").innerHTML = sketch;


function check_sketch(){
    timer_counter++
    document.getElementById("timer").innerHTML = timer_counter;
    if(timer_counter > 400){
        timer_counter = 0;
        timer_check = "completed";
        answer_holder = "set";
    }

    if(timer_check == "completed"){
        answer_holder = "";
        timer_check = "";
        updateCanvas();
    }

}

function updateCanvas(){
    background("white");
    Random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    sketch = quick_draw_data_set[Random_no];
    console.log(sketch);
    document.getElementById("drawname").innerHTML = sketch;
}


function draw(){
    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score++
        document.getElementById("score").innerHTML = score;
    }




    stroke(0);
    strokeWeight(2);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}



