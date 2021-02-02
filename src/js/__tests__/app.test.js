import ErrorRepository from '../app';

const t = new ErrorRepository();

test('test with err 1', () => {
  expect(t.translate(1)).toBe('descriptionErr1');
});

test('test with not exist err', () => {
  expect(t.translate(10)).toBe('Unknown error');
});
