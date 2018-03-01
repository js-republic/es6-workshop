desribe('Array final tests. You must use only array functions', () => {
  it('return the values in string', () => {
    const arr = ["Red", "Green", "White", "Black"];

    expect(0).toBe("Red,Green,White,Black");
  });

  it('should sum all value that is not precedeed by an even number', () => {
    const arr = [1, 2, 5, 4, 7, 8];

    expect(0).toBe(14);
  });

  it('must sort the array', () => {
    const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

    expect(arr).toEqual([-4, -3, 1, 2, 3, 5, 6, 7, 8]);
  });

  it('should return the most frequent item in an array', () => {
    const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    expect(arr).toBe('a');
  });

  it('should count the number of fruits contain in the array', () => {
    const arr = [
      null,
      {
        item: "fruit",
        value: 5
      },
      {
        item: "fruit",
        value: 2
      },
      5,
      [2],
      {
        item: "noob",
        value: 19
      }
    ]
  });

  expect(arr).toEqual({
    item: "fruit",
    value: 7
  });

  it('should return a string with the name of users connected sorted by the id and with an uppercase first letter', () => {
    const arr = [
      {
        id: 12345,
        name: "toto",
        connected: false,
      },
      {
        id: 2335,
        name: "pluck",
        connected: true,
      },
      {
        id: 553,
        name: "fick",
        connected: false,
      },
      {
        id: 32,
        name: "human",
        connected: true,
      },
      {
        id: 12311,
        name: "toti",
        connected: true,
      },
      {
        id: 93558,
        name: "titi",
        connected: false,
      },
    ];

    expect(arr).toBe("Human, Pluck, Toti, Toto are connected.");
  });
});
