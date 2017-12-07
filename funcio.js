function primer (numero) {
    var i = 2;
    while (i<numero) {
        if (numero%i==0){
            return false;
        }
        i++;
    }
    return true;
}