function FactoryGreetings() {
    var greetedNames = {};


    function greetName(fname, lang) {

        greetedNames['name'] = fname;

        if (lang === "English") {
            return "Hello, " + fname;
        }
        else if (lang === "IsiXhosa") {
            return "Molo, " + fname;
        }

        else if (lang === "Afrikaans") {
            return "Hallo " + fname;
        }
    }

    function getName() {
        return greetedNames;
    }

   function  countDisplay(){
    var c = Object.keys(greetedNames);
    return c.length;
   }

    return {
         greetName,
         getName,
         countDisplay

    }
}