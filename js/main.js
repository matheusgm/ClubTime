// console.log("Hello")

// console.log(infoMembres)

var textPresentation = document.getElementById("containerPres").getElementsByTagName("p")[0];
textPresentation.innerText = "lorem ipsum dolor sit amet consectetur adipiscing elit in purus dapibus senectus penatibus imperdiet commodo maecenas sapien scelerisque eros blandit facilisi nullam pharetra ultrices est etiam erat nisl eget donec aptent sem cursus vehicula luctus dui fermentum nascetur elementum et sed eu interdum himenaeos congue tempus ornare maximus tristique porttitor tortor dignissim fusce neque ex orci laoreet lacus diam ad ullamcorper vivamus ac porta gravida netus magnis sociosqu non mattis tempor quis felis consequat finibus ligula velit natoque eleifend molestie arcu curabitur libero ut vestibulum mi lectus feugiat massa convallis sagittis enim at integer vulputate montes accumsan urna magna pulvinar"

var gridTromb = document.getElementById("containerTromb").getElementsByClassName("col")[0];
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

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#navbarNav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});




