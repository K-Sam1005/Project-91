var number1 = "0";
var number2 = "0";
var question_number = "";
var input_box = "";
var check_button = "";
var row = "";


function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);


    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br><input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}