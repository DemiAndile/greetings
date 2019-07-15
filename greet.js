function FactoryGreetings(nameList) {
    var greetedNames = {} || nameList;
    var str = "";
    function peopleGreeted(fname) {
        var namesOnly = fname.replace(/\d/,fname); 
        var namesOnly = namesOnly.charAt(0).toUpperCase() + namesOnly.slice(1); 
        if (greetedNames['name'] === undefined) {
            greetedNames['name'] = namesOnly;
        }
        else {
            greetedNames['name'] = namesOnly;
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
            str =  "Hallo " + fname;
        }
    }

    function getName() {
        return greetedNames;
    }

    function countDisplay() {
        var c = Object.keys(greetedNames);
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