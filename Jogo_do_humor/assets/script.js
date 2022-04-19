let text = document.querySelector("#text");
let textD = document.querySelector("#textD");
let img = document.querySelector("#img");

let x = 0

function alteratexto(){
if(x == 0){
text.innerText = "Multiverso: Academia"
textD.innerText = "Nome: Shiba Bombado"
img.setAttribute("src", "assets/img/shiba_bombado-removebg-preview.png")
x = 1
}else if(x == 1){
text.innerText = "Multiverso: Esparta"
textD.innerText = "Nome: Shiba Espartano"
img.setAttribute("src", "assets/img/shiba_espartano_-removebg-preview.png")
x = 2
}else if(x == 2){
    text.innerText = "Multiverso: Terra"
    textD.innerText = "Nome: Shiba Triste"
    img.setAttribute("src", "./assets/img/shiba__triste-removebg-preview.png")
    x = 0
}
}