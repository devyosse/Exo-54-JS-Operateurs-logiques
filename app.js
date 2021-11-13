let x = 2;
let y = 4;
let z = 0;

if(x < 2) {
    alert('x est plus petit que 2')
}

if(y > 3) {
    alert('y est plus grand que 3')
}

if(z <= 0) {
    alert('z est inférieur ou égal à 0')
}

if(x < 2 && y > 3 && z <= 0){
    console.log("x est plus petit que 2 et y est plus grand que 3 et z est inférieur ou égal à 0")
}

if(x < 2 && y > 3 || z <= -1){
    console.log("x est plus petit que 2 et y est plus grand que 3 OU z est strictement égal à -1")
}