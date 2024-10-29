

var i = document.getElementById("boton").value;

i++

function contador() {
    let parrafo1 = document.getElementById("p");
    
    let foto1 = document.getElementById("foto1");
    let foto2 = document.getElementById("foto2");
    let foto3 = document.getElementById("foto3");
    let foto4 = document.getElementById("foto4");
    let foto5 = document.getElementById("foto5");
    

     foto1.style.transition = "opacity 2s ease";
     foto2.style.transition = "opacity 2s ease";
     foto3.style.transition = "opacity 2s ease";
     foto4.style.transition = "opacity 2s ease";
     foto5.style.transition = "opacity 2s ease";

    if (i < 5) {
        switch (i) {
            case 1:
                foto5.style.opacity = "0";
                break;
            case 2:
                foto4.style.opacity = "0";
                break;
            case 3:
                foto3.style.opacity = "0";
                break;
            case 4:
                foto2.style.opacity = "0";
                break;
            case 5:
                foto1.style.opacity = "0";
                break;
        }
        i++
    }else {
        parrafo1.innerText = "Gracias por todo <3"
        parrafo1.href = "https://www.youtube.com/watch?v=YkacA4RhgWQ"
        alert("Hay algo escondido en esta pagina")
        foto5.style.opacity = "1";
        foto4.style.opacity = "1";
        foto3.style.opacity = "1";
        foto2.style.opacity = "1";
        foto1.style.opacity = "1";
        
        i = 1;
        
    }


}
