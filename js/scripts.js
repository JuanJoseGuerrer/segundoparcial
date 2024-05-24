
function validar(){
    var value1 = document.getElementById("nOne").value;
    var value2 = document.getElementById("nTwo").value;
    var value3 = document.getElementById("nThree").value;
    var value4 = document.getElementById("nFour").value;


    if(value1.length < 5 || value2.length < 5 || value3.length < 5 || value4.length < 5){
        document.getElementById("nOne").style.borderColor = "red";
        document.getElementById("nTwo").style.borderColor = "red";
        document.getElementById("nThree").style.borderColor = "red";
        document.getElementById("nFour").style.borderColor = "red";

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes colocar minimos 5 caracteres",
            footer: 'vuelve a intentarlo'
          });

        
        

    }
    else{
        document.getElementById("texto").innerText = value1 + " " + value2 + " " + value3 + " " + value4;
        Swal.fire({
            position: "top-end",
            icon: "completado",
            title: value1 + " " + value2 + " " + value3 + " " + value4,
            showConfirmButton: false,
            timer: 1500
          });

    }
}

function limpiar(){
    document.getElementById("nOne").value = "";
    document.getElementById("nTwo").value = "";
    document.getElementById("nThree").value = "";
    document.getElementById("nFour").value = "";


}
