function primer (numero) { /*defnició de la funció que enllaçarà la pagina principal*/
    var i = 2; /*donada una variable, mentre el numero que s'introdueixi sigui menor a la variable inicial, si el residu */
    while (i<numero) {
        if (numero%i==0){
            return false;
        }
        i++; //anirà afgint un cada vegada fins arribar a la variable inicial (2) //
    }
    return true;
}