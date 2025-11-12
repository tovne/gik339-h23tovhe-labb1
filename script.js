//
//Uppgift 2
//

try{
    console.log("Före blocket:", x)
} catch(e){
    console.log("x är inte definieerad innan blocket(let)")
}

try{
    console.log("Före blocket:", y)
} catch(e){
    console.log("x är inte definierad innan blocket(let)")
}

console.log("Före blocket z (var hoistad):", typeof z, z); //var är hoistad och definierad som undefined

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

console.log("z finns kvar utanför blocket(var): ", typeof z);

/*
Reflektion uppgift 2:
    1. Beskriver hur var, let och const skiljer sig gällande block.

    var är funktionsscoped, vilket betyder att den är tillgänglig inom hela funktionen
    där den är deklarerad. Om den deklareras utanför en funktion så är den globalt
    tillgänglig. let och const är blockscoped, vilket betyder att de endast är
    tillgängliga inom det block (inom klamrar {}) där de är deklarerade.

    2. Reflekterar över vad som händer vid olika placering av console.log() (före
    blocket, i blocket, efter blocket).

    När console.log() placeras inom blocket så kan den komma åt variabler
    deklarerade med let och const inom samma block. När console.log() placeras
    utanför blocket så kan den inte komma åt variabler deklarerade med let och const
    inom blocket, vilket leder till ett felmeddelande. Variabler deklarerade med var
    är dock tillgängliga både inom och utanför blocket.


*/


//
//Uppgift 3
//

console.log("'3' == 3:", '3'== 3);      //True (Typkonvertering)
console.log("'3' === 3:", '3'=== 3);    //false (Ingen typkonvertering)

console.log("'NaN' === NaN:", 'NaN'=== NaN);    //false, NaN är aldrig lika med sig själv

console.log("'null' == undefined:", 'null'== undefined);    //true
console.log("'null' === undefined:", 'null'=== undefined);  //false

//Ternary operatior:
let check = undefined ? "truthy": "falsy";
console.log("undefined är:", check);



/*
Reflektion uppgift 3:
    1. Förklarar output för de olika värdena som du testade med == och === och på
    vilket sätt de skiljer sig åt.

    Vid användning av == så görs en typomvandling innan jämförelsen sker,
    vilket kan leda till oväntade resultat. Vid användning av === så jämförs både
    värde och typ, vilket ger mer förutsägbara resultat I den här uppgiften så
    var '3' == 3 true eftersom strängen '3' omvandlas till numret 3 innan jämförelsen.
    Däremot är '3' === 3 false eftersom de är av olika typer (sträng och nummer).

    2. Förklarar vad som händer när ett uttryck står för sig självt i exempelvis en
    tenerary operator eller inom parenteserna hos en if-sats.

    Det som händer är att uttrycket evalueras till ett truthy eller falsy värde,
    och beroende på det så körs antingen den första eller andra delen av
    ternary operatorn.

    3. Förklarar vad NaN, undefined och null representerar.

    NaN står för Not a Number och representerar ett värde som inte är ett giltigt nummer.
    Undefined representerar ett värde som inte har tilldelats något värde.
    Null representerar avsaknaden av något värde eller objekt.



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


//nytt block som skuggar global 'name'
{
    let name = "Erik";
    console.log("Inuti blocket:", name)
    console.log("Greet med lokalt name", greet(name));

}

console.log("Globalt name igen: ", name);


/*
Reflektion uppgift 4:

    1. Beskriver skillnaden mellan de olika sätten att skapa en funktion
    (funktionsdeklaration, funktionsuttryck och arrowfunktion), samt varför du valde
    den varianten som du valde.

    Skillnaden är att funktionsdeklarationer är hoistade, vilket betyder att de kan anropas
    innan de är definierade i koden. Funktionsuttryck och arrowfunktioner är inte hoistade,
    så de måste definieras innan de kan anropas. Jag valde att använda funktionsdeklaration
    för greet eftersom det är en enkel funktion som jag ville kunna anropa var som helst i koden.
    Jag valde att använda arrowfunktion för greetArrow eftersom det är en kortare syntax och
    jag inte behövde använda "this" i funktionen.


    2. Reflekterar över vad du behöver tänka på gällande varifrån du kan anropa dina
    funktioner (innan/efter funktionerna har skapats).

    Det man kan tänka på är att funktionsdeklarationer kan anropas innan de är definierade i koden,
    medan funktionsuttryck och arrowfunktioner måste definieras innan de kan anropas.

    3. Förklararar vad som händer om du ändrar variabeln/parametern name i de olika
    situationerna och hur det påverkar utskrifterna på de olika ställena i koden.

    Det som händer är att den letar efter den närmsta variabeln med namnet "name",
    och använder den. Inuti blocket används den lokala variabeln "name" som är satt till "Erik",
    medan utanför blocket används den globala variabeln "name" som är satt till "Lisa".

    4. Förklarar skillnaden mellan parameter, variabel och argument.

    Skillnaden är att en parameter är en platsinnehavare i en funktionsdefinition,
    en variabel är en namngiven plats i minnet som kan lagra ett värde,
    och ett argument är det faktiska värdet som skickas till en funktion när den anropas.


*/