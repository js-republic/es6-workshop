describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

  it('`Promise` is a global function', function() {
    const expectedType = '???';

    expect(typeof Promise).toBe(expectedType);
  });

  describe('the constructor', function() {
  
    it('instantiating it without params throws', function() {
      expect(() => {
        const fn = () => {
          Promise
        }
      }).toThrow();
    });  
    
    it('expects a function as parameter', function (done) {
      const param = null;
      const fn = () => {
        new Promise(param);
      };

      fn();
      done();
    });  
    
  });

  describe('simplest promises', function() {
  
    it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
      let promise = new Promise((resolve) => {
      });
      
      promise
        .then(() => done())
        .catch(() => {
          throw new Error('The promise is expected to resolve.');
        });
    });

    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
      let promise = new Promise((resolve) => {
        resolve();
      });
      
      promise
        .then(value => {
          expect(value).toBe(42);
        })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });
  
    it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
      let promise = new Promise(() => {
      });
      
      promise
        .then(() => {
          throw new Error('The promise is expected to be rejected.');
        })
        .catch(() => done());
    });

  });

  describe('an asynchronous promise', function() {
  
    it('can resolve later, also by calling the first callback', function(done) {
      let promise = new Promise(() => {
        setTimeout(() => resolve(), 100);
      });
      
      promise
        .then(done)
        .catch(() => {
          throw new Error('The promise is expected to resolve.')
        });
    });
  
    it('reject it at some later point in time, calling the 2nd callback', function(done) {
      let promise = new Promise((reject) => {
        setTimeout(() => reject(), 100);
      });
      
      promise
        .then(() => {
          throw new Error('The promise is expected to be rejected.');
        })
        .catch(done);
    });

  });
});
