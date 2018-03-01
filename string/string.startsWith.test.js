describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

  const s = 'the string s';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      const actual = s.starts_with('t');

      expect(actual).toBeTruthy();
    });

    it('works with a string', function() {
      const expected = '???';

      expect(s.startsWith('the')).toBe(expected);
    });
    it('works with unicode characters', function() {
      const nuclear = 'NO ☢ NO';

      expect(nuclear.startsWith('☢')).toBeTruthy();
    });
    it('a regular expression throws a TypeError', function() {
      expect(() => {
        const aRegExp = 'the';
  
        ''.startsWith(aRegExp);
      }).toThrow();
    });
  });

  describe('2nd parameter, the position where to start searching from', function() {
    it('find "str" at position 4', function() {
      const position = 3;

      expect(s.startsWith('str', position)).toBeTruthy();
    });

    it('`undefined` is the same as 0', function() {
      const _undefined_ = '1';

      expect(s.startsWith('the', _undefined_)).toBeTruthy();
    });

    it('the parameter gets coerced to an int', function() {
      const position = 'four';

      expect(s.startsWith('str', position)).toBeTruthy();
    });

    it('a value larger than the string`s length, returns false', function() {
      const expected = true;

      expect(s.startsWith(' ', s.length + 1)).toBe(expected);
    });
  });
  
  describe('transfer the functionality to other objects', function() {
    const startsWith = (...args) => String.prototype.startsWith.call(...args);
    
    it('e.g. a boolean', function() {
      let aBool;

      expect(startsWith(!aBool, 'false')).toBeTruthy();
    });

    it('e.g. a number', function() {
      let aNumber = 19;

      expect(startsWith(aNumber + 84, '1984')).toBeTruthy();
    });

    it('also using the position works', function() {
      const position = 0;

      expect(startsWith(1994, '99', position)).toBeTruthy();
    });
  });
  
});
