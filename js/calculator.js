console.log("try");

function addResult(){
    var add1 = document.getElementById("add1").value;
    var add2 = document.getElementById("add2").value;
    var result = parseInt(add1) + parseInt(add2);
    
    document.getElementById("addResult").innerHTML = result;
    
}

function subResult(){
    var sub1 = document.getElementById("sub1").value;
    var sub2 = document.getElementById("sub2").value;
    var result = parseInt(sub1) - parseInt(sub2);
    
    document.getElementById("subResult").innerHTML = result;
    
}

function divResult(){
    var div1 = document.getElementById("div1").value;
    var div2 = document.getElementById("div2").value;
    var result = parseInt(div1) / parseInt(div2);
    
    document.getElementById("divResult").innerHTML = result;
    
}