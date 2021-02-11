
var holding = [],
    disksNum = 3,
    minMoves = 127,
    holder = document.getElementById("holder"),
    // select first tower as there will be puted disks
    tower = document.getElementById("tower-1");

function initTower() {        
    var element;

    for (var i = 1; i <= disksNum; i++) {
        // cretae and add element to first tower
        element = createElem("li", {class: "disk disk-"+i, "data-value": i});
        tower.prepend(element);
    }
}

// create and add disks (li elements)
var createElem = function(elem, obj){


    console.log(elem);
    var newElem = document.createElement(elem);

    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newElem.setAttribute(key, obj[key]);
        }
    }
    return newElem;
};

// full the first tower
initTower();

var towers = document.getElementsByClassName('tower');

for(var i = 0; i < towers.length; i++) {
  (function(index) {
    towers[index].addEventListener("click", function() {
       towerMove(this);
     })
  })(i);
}


function towerMove(tower) {


    var disks = tower.children,
    topDisk = disks[disks.length -1],
    // help to return or move disk
    topDiskValue = topDisk ? topDisk.getAttribute("data-value") : undefined;
    // hold is doing all logic
    var isHold = holder.getElementsByClassName("hold");

    if(isHold.length !== 0){
        if (topDiskValue === holding[0]) {
        topDisk.classList.remove("hold");
        } else if (topDiskValue === undefined || topDiskValue > holding[0]) {
            isHold[0].remove();
            console.log("ura 1");
            var element = createElem("li", {class: "disk disk-"+holding[0], "data-value": holding[0]});
             tower.append(element);

        }
    }
    else if (topDisk && topDisk.length !== 0){
        topDisk.classList.add("hold");
        holding[0] = topDiskValue;
    }

}