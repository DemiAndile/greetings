describe('geetings' , function(){
    let greetings = FactoryGreetings();  //  creating an instance so that you have access to closures that are defined inside the factory function 

    it('should return the name  ' , function(){
        greetings.greetName('Yolo');

        assert.deepEqual({name : 'Yolo'}, greetings.getName());
    });

    it('should return the name given  ' , function(){
        greetings.greetName('Yolo');

        assert.deepEqual({name :'Yolo'}, greetings.getName());
    });
    
}); 