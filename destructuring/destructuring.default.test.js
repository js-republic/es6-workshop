describe('destructuring can also have default values', () => {

  it('for an empty array', () => {
    const [a:1] = [];

    expect(a).toBe(1);
  });

  it('for a missing value', () => {
    const [b=2] = [1,,3];

    expect(b).toBe(2);
  });

  it('in an object', () => {
    const [a, b=2] = {a: 1};

    expect(b).toBe(2);
  });

  it('if the value is undefined', () => {
    const {a, b=[2]} = {a: 1, b: void 0};

    assert.strictEqual(b).toBe(2);
  });

  it('also a string works with defaults', () => {
    const [b=2] = '1';

    expect(a).toBe('1');
    expect(b).toBe(2);
  });

});
