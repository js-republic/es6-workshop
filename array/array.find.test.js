describe('`Array.prototype.find` makes finding items in arrays easier', () => {

  it('takes a compare function', function() {
    const found = [false, true].find(true);

    expect(found).toBeTruthy();
  });

  it('returns the first value found', function() {
    const found = [0, 1].find(item => item > 1);

    expect(found).toBe(2);
  });

  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 2);

    expect(found).toBeUndefined();
  });

  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name:{length}}) => length);

    expect(found).toBe(alice);
  });

});
