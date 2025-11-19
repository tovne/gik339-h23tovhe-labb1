//
//Uppgift 2
//

//Testar blockets åtkomst.
try{
    console.log("Före blocket:", x)
} catch(e){
    console.log("x är inte definieerad innan blocket(let)")
}

try{
    console.log("Före blocket:", y)
} catch(e){
    console.log("x är inte definierad innan blocket(const)")
}

//var är hoistad och definierad som undefined
console.log("Före blocket z (var hoistad):", typeof z, z); 

{
    let x = 10;
    const y = 20;
    var z = 30;
    console.log("Inuti blocket:", x, y, z);
}

try{
    console.log("Utanför blocket x:", x)
} catch(e){
    console.log("x är inte definierad utanför blocket(let)")
}

try{
    console.log("Utanför blocket y:", y)
} catch(e){
    console.log("y är inte definierad utanför blocket(const)")
}

console.log("z finns kvar utanför blocket(var): ", typeof z);

/*
Reflektion uppgift 2:
    1. Beskriver hur var, let och const skiljer sig gällande block.

    let och const är blockscope, vilket betyder att de bara finns inuti det block {}
    där de deklareras. var är däremot inte blockscope utan funktionsscope eller 
    globalt om de ligger utanför en funktion. Därför går det att komma åt en var-variabel
    även fast de är utanför blocket.

    2. Reflekterar över vad som händer vid olika placering av console.log() (före
    blocket, i blocket, efter blocket).

    Inne i blocket fungerar det att logga alla variabler som deklarerats där. För let och
    const fungerar det inte att logga de innan blocket eller efteråt. Efter som de inte 
    finns utanför blocket. För att var fungerar det däremot både före och efter blocket eftersom
    var inte är blockscope. 
*/


//
//Uppgift 3
//

console.log("'3' == 3:", '3'== 3);      //True (Typkonvertering)
console.log("'3' === 3:", '3'=== 3);    //false (Ingen typkonvertering)

console.log("NaN === NaN:", NaN=== NaN);    //false, NaN är aldrig lika med sig själv

console.log("null == undefined:", null== undefined);    //true
console.log("null === undefined:", null=== undefined);  //false

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

    Det som händer är att uttrycket evalueras till ett truthy eller falsy värde
    och beroende på det så körs antingen den första eller andra delen av
    ternary operatorn.

    3. Förklarar vad NaN, undefined och null representerar.

    NaN står för "Not a Number" och representerar ett värde som inte är ett giltigt nummer.
    Undefined representerar ett värde som inte har tilldelats något värde.
    Null representerar avsaknaden av något värde eller objekt. Alltså kan de användas för att
    medvetet representera att något saknar värde eller är tomt.

*/


//
//Uppgift 4
//

function greet(name){
    return "Hej " + name;
}

console.log(greet("Tove"));

//variabel i global scope
let name = "Lisa";
console.log("Global variabel name: ", name);


//arrow-function
const greetArrow = (name) => "Hej " + name;
console.log(greetArrow("Mikaela"));


//nytt block som skuggar global 'name'
{
    let name = "Erik";
    console.log("Inuti blocket: ", name)
    console.log("Greet med lokalt namn: ", greet(name));

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

    Det man kan tänka på är att funktionsdeklarationer kan anropas både före och efter de är 
    definierade i koden, medan funktionsuttryck och arrowfunktioner måste definieras innan de kan anropas.

    3. Förklararar vad som händer om du ändrar variabeln/parametern name i de olika
    situationerna och hur det påverkar utskrifterna på de olika ställena i koden.

    Variabler med samma namn påverkar inte varandra om de ligger på olika scope. I blockets
    scope används det lokala name-värdet ("Erik"), medan det globala namnet ("Lisa") gäller
    utanför blocket. Parametern i greet är också ett eget name och skuggar andra variabler. 


    4. Förklarar skillnaden mellan parameter, variabel och argument.

    Skillnaden är att en parameter är en platsinnehavare i en funktionsdefinition,
    en variabel är en namngiven plats i minnet som kan lagra ett värde,
    och ett argument är det faktiska värdet som skickas till en funktion när den anropas.


*/