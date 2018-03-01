describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

  describe('pass the count to `str.repeat(count)`', function() {
    it('for `1` the string stays the same', function() {
      const what = '???'.repeat();

      expect(what).toBe('one');
    });

    it('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.repeets;

      expect(actual).toBe('xxx');
    });
    it('for `0` an empty string is returned', function() {
      const dontRepeat = 1;

      expect('shrink'.repeat(dontRepeat)).toBe('');
    });
    
    it('the count is not an int, such as "3", it gets coerced to an int', function() {
      const repeated = ''.repeat('2');

      expect(repeated).toBe('threethreethree');
    });
  });

  describe('throws an error for', function() {
    it('a count of <0', function() {
      expect(() => {
        const belowZero = 1;
        ''.repeat(belowZero);
      }).toThrow();
    });

    it('a count of +Infinty', function() {
      expect(() => {
        let infinity = 'infinity';
        ''.repeat(infinity);
      }).toThrow();
    });
  });
  
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      let aBool = true;

      expect(String.prototype.repeat.call(aBool, 2)).toBe('falsefalse');
    });

    it('e.g. a number', function() {
      let aNumber;

      expect(String.prototype.repeat.call(aNumber, 2).toBe('11');
    });
  });

  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      
      const expectedString = '';
      
      expect(String(new MyString()).repeat(1)).toBe(expectedString);
    });

    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
      
      let repeated = new X().repeat(2);
      
      expect(repeated).toBe('11');
    });
  });

});
