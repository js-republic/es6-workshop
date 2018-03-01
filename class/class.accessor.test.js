describe('class accessors (getter and setter)', () => {

  it('only a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      get money() { }
    }

    expect((new MyAccount()).balance).toBe(Infinity);
  });

  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { }
      set balance(amount) { }
    }

    const account = new MyAccount();

    expect(account.balance).toBe(23);
  });

});
