describe('`Array.prototype.filter` remove entries when function passed by parameter return false', () => {

  it('should filter all entries inferior to 5', function() {
    const arr = [0, 1, 2, 7, 3, 4, 5, 6];

    expect(arr).toEqual([7, 5, 6]);
  });

  it('should filter all entries that is not type of number', function() {
    const arr = ["a", "tut", 3, 5, 0, "-", 8]

    expect(arr).toEqual([3, 5, 0, 8]);
  });

  it('use the second parameters of map to filter all entries with an index inferior to 3', function() {
    const arr = [1, 5, 8, 0, 13, 2, 6];

    expect(arr).toEqual([13, 2, 6]);
  });

  it('use the 3rd parameters to filter each item that the last item is superior to 3', function() {
    const arr = [1, 5, 8, 0, 13, 2, 6];

    expect(arr).toEqual([8, 2]);
  });

});
