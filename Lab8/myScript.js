/**
 * @file: Lab 8 Övningar i JavaScript och form validation
 * @author: Lars-Erik Jemt
 * @version: 1.0
 *
 */

 function validateForm() {
    
    if (document.getElementById("text").value.length == 0) {
        alert("Skriv in en text!");
        document.getElementById("text").focus();
        return false;
    }
    
    if (document.getElementById("email").value.length == 0) {
        alert("Skriv in en giltig emejladress!");
        document.getElementById("email").focus();
        return false;
    }		
    
    /*apos=document.getElementById("email").indexOf("@");
    dotpos=document.getElementById("email").lastIndexOf(".");
    if (apos<1||dotpos-apos<2) {
        alert("Skriv in en giltig emejladress.");
        document.getElementById("email").focus();
        return false;
    }
    */
   
    if (document.getElementById("select").value == "value0") {
        alert("Välj ett av select alternativen!");
        document.getElementById("select").focus();
        return false;
    } 

    if (!document.getElementById("checkbox").checked) {
        alert("Checkboxen måste vara ifylld!");
        document.getElementById("checkbox").focus();
        return false;
    }
    
    let clicked = false;
    document.getElementsByName ("radio").forEach(element => {
        if (element.checked) {
            clicked = true;
        }
    });

    if (!clicked) {
        alert("En av radio buttons alternativen måste vara vald!");
        document.getElementsByName("radio")[0].focus();
        return false;
    }

    return true;
}




