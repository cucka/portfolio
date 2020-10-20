function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var partOfDay = "AM";
    
    if(hours > 12){
       partOfDay = "PM";
    }
    
    if(hours == 0){
        hours = 12;
    }

    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours   = hours   < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    var time = hours + ":" + minutes + ":" + seconds + " " + partOfDay;
    document.getElementById("clock").innerHTML = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();