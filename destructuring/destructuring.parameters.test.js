describe('destructuring function parameters', () => {

  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      const fn = ({id}, {name}) => {
        expect(id).toBe(42);
        expect(name).toBe('Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });
    
    it('multiple params from array/object', () => {
      const fn = ([{name}]) => {
        expect(name).toBe('Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });

  describe('default values', () => {
    it('for simple values', () => {
      const fn = (id, name='Bobby') => {
        expect(id).toBe(23);
        expect(name).toBe('Bob');
      };
      fn(23);
    });
    
    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user]) => {
        expect(user).toBe(defaultUser);
      };
      fn([]);
    });
    
    it('mix of parameter types', () => {
      const fn = (id, [arr], {obj}) => {
        expect(id).toBe(1);
        expect(arr).toBe(2);
        expect(obj).toBe(3);
      };
      fn(undefined, [], {});
    });
  });

});
