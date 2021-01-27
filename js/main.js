console.log("Hello")

var tab = ["fulano 1","fulano 2","fulano 3","fulano 4"];
var numCol = 3;
var gridTromb = document.getElementById("columnTromb").getElementsByTagName("div")[0];
for(let i = 0; i < Math.ceil(tab.length/numCol)*numCol;i++){
    
    if(i%numCol==0){
        let row = document.createElement("div");
        gridTromb.appendChild(row).className = "row";
    }
    let col = document.createElement("div");
    let line = gridTromb.getElementsByClassName("row")[Math.floor(i/numCol)]
    line.appendChild(col).className = "col-sm";
    if(i<tab.length){
        line.getElementsByClassName("col-sm")[i%numCol].innerHTML = tab[i]
    }
    



}