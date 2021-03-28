import ErrorRepository from '../app';

describe('translate method:', () => {
  const newErr = new ErrorRepository();

  test.each([
    [2100, 'Access to the file is closed'],
    [2300, 'File upload error'],
    ['2300', 'Unknown error'],
    [2700, 'Unknown error'],
  ])('should return for \'%d\' error description \'%s\'', (err, expected) => {
    expect(newErr.translate(err)).toBe(expected);
  });
});
