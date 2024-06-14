import { Triangle, Circle, Square, Pentagon } from './shapes.js';

test('Triangle renders correctly', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle renders correctly', () => {
  const shape = new Circle();
  shape.setColor('red');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square renders correctly', () => {
  const shape = new Square();
  shape.setColor('green');
  expect(shape.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});

test('Pentagon renders correctly', () => {
  const shape = new Pentagon();
  shape.setColor('purple');
  expect(shape.render()).toBe('<polygon points="150, 0 200, 70 175, 150 125, 150 100, 70" fill="purple" />');
});