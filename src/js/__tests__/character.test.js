import Character from '../character';

test.each([
  ['good case', 'Willie', 'Swordsman', {
    name: 'Willie', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  }],
])(
  ('should calculate %s'),
  (userCase, name, type, expected) => {
    const result = new Character(name, type);

    expect(result).toEqual(expected);
  },
);

test.each([
  ['bad name', 'Willie!!!!!!!!!!', 'Swordsman', 'Incorrect name length'],
  ['bad type', 'Willie', 'Snowman', 'Incorrect type of character'],
])('trying to test errors', (errorCase, name, type, expected) => {
  console.log(`Case: ${errorCase}`);
  expect(Character.bind(this, name, type)).toThrow(expected);
});
