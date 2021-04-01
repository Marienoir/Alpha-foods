// FUNCTION TO DISPLAY VALUES 
function dis(val){
    document.getElementById('result').value += val
}

// FUNCTION TO SOLVE OPERATIONS
function solve(){
    let a = document.getElementById('result').value;
    let b = eval(a)
    document.getElementById('result').value = b;
}

// FUNCTION TO CLEAR VALUES FROM THE DISPLAY
function clearDisplay(){
    document.getElementById('result').value = "";
}