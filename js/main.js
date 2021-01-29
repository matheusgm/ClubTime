console.log("Hello")

console.log(infoMembres)

var gridTromb = document.getElementById("columnTromb").getElementsByClassName("col")[0];
for (var el in infoMembres) {
    let row = gridTromb.appendChild(document.createElement("div"))
    row.className = "row row-section";
    let col = row.appendChild(document.createElement("div"))
    col.className = "col";
    createGrid(infoMembres[el]["membres"], infoMembres[el]["numCol"], col)
}


function createGrid(tab, numCol, pos) {
    for (let i = 0; i < Math.ceil(tab.length / numCol) * numCol; i++) {
        if (i % numCol == 0) {
            pos.appendChild(document.createElement("div")).className = "row";
        }
        let line = pos.getElementsByClassName("row")[Math.floor(i / numCol)]
        line.appendChild(document.createElement("div")).className = "col-sm";
        if (i < tab.length) {
            imgFlag = ""
            if(tab[i]["flag"]!=""){
                imgFlag = '<img src="./img/drapeaux/'+tab[i]["flag"]+'.png" alt="Flag" class="flag">';
            }
            
            line.getElementsByClassName("col-sm")[i % numCol].innerHTML = 
            '<div class="avatar-img">'+
            '<img src="./img/photos/photo1.jpg" alt="Avatar" class="avatar">'+
            imgFlag+
            '</div>'+
            '<div class="avatar-text">'+
            '<p class="nom-text">'+tab[i]["nom"]+'</p>'+
            '<p class="nom-pos">'+tab[i]["occupation"]+'</p>'+
            '</div>'
        }
    }
}




