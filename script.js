//
//Uppgift 2
//

{
    let x = 10;
    const y = 20;
    var z = 30;
    console.log("Inuti blocket:", x, y, z);
}

try{
    console.log("Utanför blocket:", x)
} catch(e){
    console.log("x är inte definierad utanför blocket(let)")
}

try{
    console.log("Utanför blocket:", y)
} catch(e){
    console.log("y är inte definierad utanför blocket(const)")
}

console.log("y finns kvar utanförblocket(var):")

/*
Reflektion uppgift 2:


*/


//
//Uppgift 3
//

console.log("'3' == 3:", '3'== 3);      //True
console.log("'3' === 3:", '3'=== 3);    //false

console.log("'NaN' === NaN:", 'NaN'=== NaN);    //false

console.log("'null' == undefined:", 'null'== undefined);    //true
console.log("'null' === undefined:", 'null'=== undefined);  //false

//Ternary operatior:
let check = undefined ? "truthy": "falsy";
console.log("undefined är:", check);



/*
Reflektion uppgift 3:
    Skillnaden mellan == och === är ifall om man vill att det ska vara sant eller falskt, där == är sant och === är falskt.
    

*/





//
//Uppgift 4
//

function greet(name){
    return "Hej" + name;
}

console.log(greet("Tove"));

//variabel i global scope
let name = "Lisa";
console.log("Global variabel name:", name);


//arrow-function
const greetArrow = (name) => "Hej" + name;
console.log(greetArrow("Mikaela"));


//nytt block
{
    let name = "Erik";
    console.log("Inuti blocket:", name)
    console.log(greet(name));

}

console.log("Globalt name igen: ", name);

/*
Reflektion uppgift 4:


*/