function FactoryGreetings(nameList) {
    var greetedNames = {} || nameList;
    var str = "";
   var c = 0;
    function peopleGreeted(fname) {
        // var namesOnly = fname.replace(/\d/,fname); 
        var upperCaseName = fname.charAt(0).toUpperCase() + fname.slice(1); 
        if (greetedNames['name'] === undefined) {
            greetedNames['name'] = upperCaseName;
        }
        else {
            greetedNames['name'] = upperCaseName;
        }
    }

    function greetNameEntered(fname, lang) {

        if (lang === "English") {
            str = "Hello, " + fname;
        }
        else if (lang === "IsiXhosa") {
            str = "Molo, " + fname;
        }

        else if (lang === "Afrikaans") {
            str =  "Hallo, " + fname;
        }
    }

    function getName() {
        return greetedNames;
    }

    function countDisplay() {
        c = Object.keys(greetedNames);
        return c.length;
    }

    function getStr(){
        return str.trim();
    }
    
    return {
        peopleGreeted,
        greetNameEntered,
        getName,
        countDisplay,
        getStr
       

    }
}