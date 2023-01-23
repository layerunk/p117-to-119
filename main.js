
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas = createCanvas(450, 300);
    canvas.position(540, 150);
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function draw(){
    stroke(0);
    strokeWeight(2);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
    document.getElementById("score").innerHTML = score;

    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score + 1;
        console.log(score);
    }
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

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
    checkity();
}

function gotResult(error, result){
    if(error){
        console.error(error)
    }
    if(result){
        console.log(result);
        document.getElementById("name").innerHTML = result[0].label;
        document.getElementById("confidence").innerHTML = Math.round(result[0].confidence * 100) + "%";
    }
}

function check_sketch(){
    timer_counter++
    document.getElementById("timer").innerHTML = timer_counter;
    if(timer_counter > 5000){
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

function checkity(){
    timer_counter = 0;
    timer_check = "completed";
    answer_holder = "set";

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
    timer_counter = 0;
    document.getElementById("timer").innerHTML = timer_counter;
    console.log(sketch);
    document.getElementById("drawname").innerHTML = sketch;
    document.getElementById("name").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
}






