const MutRef = require('./');

describe('MutRef', () => {

  it('should hold the value it was initialised with', () => {
    const value = 1;
    const ref = MutRef(value);

    expect(ref.inspect).toBe(value);
  });

  it('should mutate the reference via callback passed to modify', () => {
    const ref = MutRef(1);

    ref.modify(value => value + 1);
    expect(ref.inspect).toBe(2);
  });

});