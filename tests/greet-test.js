describe('Greetings' , function(){
   

    it('should return the name entered ' , function(){
        let greetings = FactoryGreetings();  //  creating an instance so that you have access to closures that are defined inside the factory function 
        greetings.peopleGreeted('yolo');

        assert.deepEqual({name : 'Yolo'}, greetings.getName());
    });
    

    it('should return the name and the language that is entered ' , function(){
        let nameEntered = FactoryGreetings();

        nameEntered.greetNameEntered('Demi ', 'English');

        assert.deepEqual('Hello, Demi', nameEntered.getStr());
    });

    it('should return the Language IsiXhosa and the name ' , function(){
        let nameEntered2 = FactoryGreetings();

        nameEntered2.greetNameEntered('Iviwe ', 'IsiXhosa');

        assert.deepEqual('Molo, Iviwe', nameEntered2.getStr());
    });

    it('should return name and the greeted language Afrikaans ' , function(){
        let nameEntered3 = FactoryGreetings();

        nameEntered3.greetNameEntered('Plaatjie ', 'Afrikaans');

        assert.deepEqual('Hallo, Plaatjie', nameEntered3.getStr()); 
        
    });
     
    it('should return the number that has been created ' , function(){
        let greetings = FactoryGreetings();  

        greetings.peopleGreeted('Yolo');
        assert.deepEqual(1, greetings.countDisplay());
    });
    
    
}); 