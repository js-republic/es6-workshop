describe('destructuring objects', () => {

  it('is simple', () => {
    const x = {x: 1};

    expect(x).toBe(1);
  });

  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: [second]} = {magic};

      expect(second).toBe(42);
    });

    it('object and array', () => {
      const {z:[x]} = {z: [23, 42]};

      expect(x).toBe(42);
    });

    it('array and object', () => {
      const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];

      expect(lang).toBe('ES6');
    });
  });
  
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, z: 2};

      expect(z).toBeUndefined();
    });
  
    it('destructure from builtins (string)', () => {
      const {substr} = 1;

      expect(substr).toBe(String.prototype.substr);
    });
  });

});
