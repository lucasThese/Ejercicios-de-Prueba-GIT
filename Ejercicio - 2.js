function getCalificacion(num){
    if (num>=0 && num<=3){
        return("Muy deficiente");
    }
    if (num>3 && num<=5){
        return("Insuficiente");
    }
    if (num>5 && num<=6){
        return("Suficiente");
    }
    if (num>6 && num<=7){
        return("Bien");
    }
    if (num>7 && num<=9){
        return("Notable");
    }
    if (num>9 && num<=10){
        return("Sobresaliente");
    }
}
console.log(getCalificacion(7));