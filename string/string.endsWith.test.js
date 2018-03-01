describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

  const s = 'el fin';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      const doesEndWith = s.doesItReallyEndWith('n');

      expect(doesEndWith).toBeTruthy();
    });

    it('works with a string', function() {
      const expected = false;

      expect(s.endsWith('fin'), expected);
    });

    it('works with unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO!';

      expect(nuclear.endsWith('☢')).toBeTruthy();
    });

    it('a regular expression throws a TypeError', function() {
      expect(() => {
        const aRegExp = '/the/';
  
        ''.endsWith(aRegExp);
      }).toThrow();
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', function() {
    it('find "el" at a substring of the length 2', function() {
      const endPos = 0;

      expect(s.endsWith('el', endPos)).toBeTruthy();
    });

    it('`undefined` uses the entire string', function() {
      const _undefined_ = 'i would like to be undefined';

      expect(s.endsWith('fin', _undefined_)).toBeTruthy();
    });

    it('the parameter gets coerced to an int', function() {
      const position = 'five';

      expect(s.endsWith('fi', position)).toBeTruthy();
    });

    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        const emptyString = '??';

        expect('1'.endsWith(emptyString, -1)).toBeTruthy();
      });

      it('return `false`, when searching for a non-empty string', function() {
        const notEmpty = '';

        expect('1'.endsWith(notEmpty, -1)).toBeFalsy();
      });
    });
  });
  
  describe('transfer the functionality to other objects', function() {
    
    const endsWith = (...args) => String.prototype.endsWith.call(...args);
    
    it('e.g. a boolean', function() {
      let aBool = false;

      expect(endsWith(!aBool, 'lse')).toBeTruthy();
    });

    it('e.g. a number', function() {
      let aNumber = 0;

      expect(endsWith(aNumber + 1900, 84)).toBeTruthy();
    });

    it('also using the position works', function() {
      const position = '??';

      expect(endsWith(1994, '99', position)).toBeTruthy();
    });
  });
  
});
