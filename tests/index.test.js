const { formatDate, generateId } = require('../src/utils');

describe('utils', () => {
  test('formatDate returns ISO date string', () => {
    const date = new Date('2026-01-16');
    expect(formatDate(date)).toBe('2026-01-16');
  });

  test('generateId returns a string', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });
});
