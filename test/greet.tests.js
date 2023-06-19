describe('Test my greet function' , function(){
     it("it should return 'Hello Brendeline' when called with 'Ngwenya'" , function(){
        assert.equal("Hello, Brendeline", greet("Brendeline"), "this should not be true");
     });



     it("it should return 'Hello Brenda' when called with 'Ngwenya'" , function(){
         assert.equal("Hello, Brenda", greet("Brenda"), "this should not be true");
     });



    it("it should return 'Hello Lebo' when called with 'Ndlovu'" , function(){
        assert.equal("Hello, Lebo", greet("Lebo"), "this should not be true");
     });
 });