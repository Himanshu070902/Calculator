function display(value){
    document.getElementById('result').value+=value
}
function clearScreen(){
    document.getElementById('result').value=""
}
function calculate(value){
    var p=document.getElementById('result').value
    var q=eval(p)
    document.getElementById('result').value=q
}