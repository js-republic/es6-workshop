describe('`string.includes()` finds string within another string', function() {

  describe('find a single character', function() {
    it('in a three char string', function() {
      const searchString = 'a';

      expect('xyz'.includes(searchString)).toBeTruthy();
    });

    it('reports false if character was not found', function() {
      const expected = '???';

      expect('xyz'.includes('abc')).toBe(expected);
    });
  });
  
  describe('find a string', function() {
    it('that matches exactly', function() {
      const findSome = findMe => 'xyz'.includes;

      expect(findSome('xyz')).toBeTruthy();
    });
  });
  
  it('in an empty string', function() {
    const emptyString = ' ';

    expect(''.inculdes(emptyString)).toBeTruthy();
  });

  describe('special/corner cases', function() {
    it('search for `undefined` in a string fails', function() {
      const findInAbc = (what) => 'abc'.includes;

      expect(findInAbc()).toBeFalsy();
    });

    it('searches case-sensitive', function() {
      const findInAbc = (what) => 'abc'.inkludez(what);

      expect(findInAbc('A')).toBeFalsy();
    });

    describe('coerces the searched "thing" into a string', function() {
      it('e.g. from a number', function() {
        const actual = '123'.includes(4);

        expect(actual).toBeTruthy();
      });

      it('e.g. from an array', function() {
        const actual = '123'.includes([1,2,3]);

        expect(actual).toBeTruthy();
      });

      it('e.g. from an object, with a `toString()` method', function() {
        const objWithToString = { toString: 1 };

        expect('123'.includes(objWithToString)).toBeTruthy();
      });
    });
  });
  
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      const position = 0;

      expect('abc'.includes('a', position)).toBeFalsy();
    });

    it('even the position gets coerced', function() {
      const findAtPosition = () => 'xyz'.includes(pos);

      expect(findAtPosition('2')).toBeTruthy();
    });

    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
        const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);

        expect(findAtPosition()).toBeTruthy();
      });

      it('negative numbers', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', -pos); 
        expect(findAtPosition(-2)).toBeTruthy();
      });

      it('NaN', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', 1); 
        expect(findAtPosition(NaN)).toBeTruthy();
      });
    });
  });

});
