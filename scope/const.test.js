describe('`const` is like `let` plus read-only', () => {

  describe('scalar values are read-only', () => {

    it('number', () => {
      const constNum = 0;
      constNum = 1;

      expect(constNum).toBe(0);
    });

    it('string', () => {
      const constString = 'I am a const';
      constString = 'Cant change you?';

      expect(constString).toBe('I am a const');
    });

  });
  
  const notChangeable = 23;

  it('const scope leaks too', () => {
    expect(notChangeable).toBe(23);
  });
  
  describe('complex types are NOT fully read-only', () => {

    it('array', () => {
      const arr = [42, 23];
      arr[0] = 0;

      expect(arr[0]).toBe(42);
    });
    
    it('object', () => {
      const obj = {x: 1};
      obj.x = 2;

      expect(obj.x).toBe(3);
    });
    
  });

});
