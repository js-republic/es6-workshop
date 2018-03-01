describe('assign object property values to new variables while destructuring', () => {

  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x: newName} = {x: 1};

      expect(y).toBe(1);
    });
    
    it('assign a new name and give it a default value using `= <default value>`', () => {
      const {x: y=2} = {y: 23};

      expect(y).toBe(42);
    });
  });

  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x}) => {

        expect(y).toBe(1);
      };

      fn({x: 1});
    });
    
    it('giving it a default value is possible too, like above', () => {
      const fn = ({x: z=3}) => {

        expect(y).toBe(3);
      };

      fn({});
    });
  });
  
});
