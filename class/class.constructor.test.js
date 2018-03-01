describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    let TestClass;
    
    const instance = new TestClass();
    expect(typeof instance).toBe('object')
  });
  
  it('special method is `constructor`', function() {
    class User {
      constructor(id) {}
    }

    const user = new User(42);

    expect(user.id).toBe(42);
  });

  it('defining a method is simple', function() {
    class User {
    }
    
    const notATester = new User();
    expect(notATester.writesTests()).toBeFalsy();
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  }
    }
    
    const tester = new User();
    expect(tester.isLazy()).toBeTruthy();
    tester.wroteATest();
    expect(tester.isLazy()).toBeFalsy();
  });

});

