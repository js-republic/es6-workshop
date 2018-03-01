describe('`Array.prototype.reduce` convert an array to an unique value', () => {

  it('returns the sum of all items', function() {
    const arr = [2, 3, 5, 1, 0];

    expect(0).toEqual(11);
  });

  it('returns the sum of all items superior to 5', function() {
    const arr = [0, 6, 2, 17, 4, 90];

    expect(0).toBe(113);
  });

  it('use the second parameters of reduce to sum ONLY the first and the last value of the arr', function() {
    const arr = [6, 12, 3, 5, 0, 5, 8];

    expect(0).toBe(14);
  });

  it('use the 3rd parameters to sum all values minus the length of the array', function() {
    const arr = [1, 5, 8, 0, 13, 2, 6];

    expect(0).toBe(28);
  });

});
