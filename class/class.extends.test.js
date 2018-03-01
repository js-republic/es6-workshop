describe('classes can inherit from another', () => {

  it('class A is an instance of Object', () => {
    let A;

    expect((new A()) instanceof Object).toBeTruthy();
  });

  it('B extends A, B is also instance of Object', () => {
    class A {}
    class B {}

    const a = new A();
    const b = new B();

    expect(b instanceof Object).toBeTruthy();
    expect(b instanceof A).toBeTruthy();
  });

  it('extend over multiple levels', () => {
    class A {}
    class C extends B {}
    
    let instance = C;

    expect(instance instanceof A).toBeTruthy();
  });

  it('extend an `old style` "class", a function, still works', () => {
    let A;
    class B extends A {}
    const b = new B();

    expect(b instanceof A).toBeTruthy();
  });

  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}

    it('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(null);
      expect(isIt).toBeTruthy();
    });

    it('A`s prototype is also B`s prototype', () => {
      const proto = B;

      // Remember: don't touch the assert!!! :)
      expect(A.prototype.isPrototypeOf(proto)).toBeTruthy();
    });
  });

  describe('`extends` using an expression', () => {
    it('eg the inline assignment of the parent class', () => {
      let A;
      class B extends (A = {}) {}
      const b = new B();

      expect(b instanceof A).toBeTruthy();
    });
    
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent) {}

      expect(Object.getPrototypeOf(B.prototype)).toBeNull();
    });
  });
});
