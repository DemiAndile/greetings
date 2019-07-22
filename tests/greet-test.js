describe('Greetings' , function(){
   

    it('should not take an empty string ' , function(){
        let greetings = FactoryGreetings();  //  creating an instance so that you have access to closures that are defined inside the factory function 
    
        assert.deepEqual("Please enter a name and choose a language", greetings.greetNameEntered());
    });
    

    it('should return the name and the language that is entered ' , function(){
        let nameEntered = FactoryGreetings();

        assert.equal('Hello, Demi ', nameEntered.greetNameEntered('Demi ', 'English'));
    });

    it('should return the Language IsiXhosa and the name ' , function(){
        let nameEntered2 = FactoryGreetings();

        assert.equal('Molo, Iviwe ', nameEntered2.greetNameEntered('Iviwe ', 'IsiXhosa'));
    });

    it('should return name and the greeted language Afrikaans ' , function(){
        let nameEntered3 = FactoryGreetings();

        assert.equal('Hallo, Plaatjie ', nameEntered3.greetNameEntered('Plaatjie ', 'Afrikaans')); 
        
    });

    it('should return first letter upperCase ' , function(){
        let nameEntered1 = FactoryGreetings();

        assert.equal('Hello, Demi ', nameEntered1.greetNameEntered('demi ', 'English'));
    });
     
    it('should count the number of times a names were greeted ' , function(){
        let greetings = FactoryGreetings();  

        greetings.greetNameEntered('Jason', 'English' );
        greetings.greetNameEntered('Jesse', 'English' );
        greetings.greetNameEntered('Demi', 'English' );
        greetings.greetNameEntered('Thando', 'English' );
        greetings.greetNameEntered('Siwe', 'English' );

        assert.equal(5,greetings.countDisplay());
    });
    
    
}); 