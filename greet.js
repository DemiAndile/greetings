function FactoryGreetings(nameList) {
    var greetedNames = nameList || {};
    // var str = "";
    var c = 0;
    

    function greetNameEntered(fname, lang) {

        if(!lang){
             return "Choose a language";   
          }

        var upperCaseName = fname.charAt(0).toUpperCase() + fname.slice(1); 
       
        if (greetedNames[upperCaseName] === undefined) {
            greetedNames[upperCaseName] = 0;
        }

        if (lang === "English") {
            return  "Hello, " + upperCaseName;
        }
        else if (lang === "IsiXhosa") {
            return  "Molo, " + upperCaseName;
        }

        else if (lang === "Afrikaans") {
            return   "Hallo, " + upperCaseName;
        }
        
    }

    function getName() {
        return greetedNames;
    }

    function countDisplay() {
        c = Object.keys(greetedNames);
        return c.length;
    }

    return {
        // peopleGreeted,
        greetNameEntered,
        getName,
        countDisplay
       

    }
}