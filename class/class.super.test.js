describe('inside a class use `super` to access parent methods', () => {

  it('use of `super` without `extends` fails (already when transpiling)', () => {
    class A {hasSuper() { return super; }}
    const a = new A();

    expect(a.hasSuper()).toBeFalsy();
  });
  
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return super.hasSuper; }}

    const b = new B();

    expect(b.hasSuper()).toBeTruthy();
  });
  
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    class B extends A {hasSuper() { return 'nothing'; }}

    const b = new B();

    expect(b.hasSuper()).toBeFalsy();
  });
  
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return this.youAreSuper; }}
    class B extends A {constructor() { super(); this.youAreSuper = true; } }
    class C extends B {
      iAmSuper() { 
        return this.iAmSuper(); 
      }
    }

    const c = new C();

    expect(c.iAmSuper()).toBeTruthy();
  });
  
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    class B extends A {getMethod() { return super.constructor; }}

    const b = new B();

    expect(b.getMethod()).toBeUndefined();
  });


  describe('class', () => {

    it('if you `extend` a class, use `super()` to call the parent constructor', () => {
      class A {constructor() { this.levels = 1; }}
      class B {
        constructor() {
          this.levels++; 
        }
      }

      const b = new B();

      expect(b.levels).toBe(2);
    });

    it('`super()` may also take params', () => {
      class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
      class B extends A {
        constructor(...args) { 
          super();
          this.counter++; 
        }
      }
      
      const b = new B(42, 2);

      expect(b.counter).toBe(45);
    });
    
    it('it is important where you place your `super()` call!', () => {
      class A {inc() { this.countUp = 1; }}
      class B extends A {
        inc() { 
          super.inc();
          this.countUp = 2; 
          return this.countUp;
        }
      }
      
      const b = new B();

      expect(b.inc()).toBe(1);
    });

    it('use `super.constructor` to find out if there is a parent constructor', () => {
      class A extends null {
        constructor() {
          super();
          this.isTop = !!super.constructor;
        }
      }

      const a = new A();

      expect(a.isTop()).toBeFalsy();
    });
    
  });

});