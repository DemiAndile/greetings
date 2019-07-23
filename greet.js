function FactoryGreetings(nameList) {
    var greetedNames = nameList || {};
    // var str = "";
    var count = 0;
    

    function greetNameEntered(fname, lang) {

        if(!lang){
             return "Please enter a name and choose a language";   
          } 
        
        else if(!fname) {
            return "Please enter a name";
          }

        var upperCaseName = fname.charAt(0).toUpperCase() + fname.slice(1); 

        var lowerCaseName = fname.toLowerCase();
       
        if (greetedNames[lowerCaseName] === undefined) {
            greetedNames[lowerCaseName] = 0;
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