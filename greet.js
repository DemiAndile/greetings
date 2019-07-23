function FactoryGreetings(nameList) {
    var greetedNames = nameList || {};
    // var str = "";
    var count = 0;
    

    function greetNameEntered(fname, lang) {

        if(!lang){
                
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
        else {
            return "Please enter a name and choose a language";
        }
        
    }

    function getName() {
        return greetedNames;
    }

    function countDisplay() {
      var  c = Object.keys(greetedNames);
      count = c.length;
      return count;
    }

    return {
        // peopleGreeted,
        greetNameEntered,
        getName,
        countDisplay
       

    }
}