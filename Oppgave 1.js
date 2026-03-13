//Oppgave 1 a)
function TexttoArray(text){
    let result = text.trim().split("\n")
    return result;
}

console.log(TexttoArray("A\nB\nC\n"))

//Oppgave 1 b)
function texttoNumber(list){
    const res=[]
    for (let i=0; i<list.length; i++){
    res.push(Number(list[i]));}
    return res;
}
console.log(texttoNumber(["1.2", "-3.4", "5.6"]))