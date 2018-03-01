describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        let varX = true;
      }
      expect(varX, true);
    });
    
    it('`let` restricts scope to inside the block', () => {
      expect(() => {
        if (true) {
          var letX = true;
        }

        console.log(letX);
      }).toThrow();
    });
    
  });

  describe('`let` usage', () => {
    
    it('`let` use in `for` loops', () => {
      expect(() => {
        let obj = {x: 1};
        for (var key in obj) {}

        console.log(key);
      }).toThrow();
    });
    
    it('create artifical scope, using curly braces', () => {
      expect(() => {
        {
          var letX = true;
        }

        console.log(letX);
      }).toThrow();
    });
    
  });
  
});
