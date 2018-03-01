describe('`Array.prototype.map` manipulate each item of the array', () => {

  it('edit all entries of the array to the value 1', function() {
    const arr = [0, 1, 2, 3, 4, 5, 6];

    expect(arr).toEqual([1, 1, 1, 1, 1, 1, 1]);
  });

  it('returns true or false to each items (true if the value is superior to 5', function() {
    const arr = [0, 2, 4, 6, 3, 1, 9, 10];

    expect(arr).toEqual([false, false, false, true, false, false, true, true]);
  });

  it('use the second parameters of map to edit all entries and set the current index of each entries', function() {
    const arr = ["a", "tut", 3, 5, 0, "-", 8]

    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('use the 3rd parameters to edit each item add sum with the next entries', function() {
    const arr = [1, 5, 8, 0, 13, 2, 6];

    expect(arr).toEqual([6, 13, 8, 13, 15, 8, 6]);
  });

});
