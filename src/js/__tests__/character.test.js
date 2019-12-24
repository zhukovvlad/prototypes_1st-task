import Character from '../character';

test.each([
  ['good case', 'Willie', 'Swordsman', {
    name: 'Willie', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  }],
  ['bad name', 'Willie!!!!!!!!!!', 'Swordsman', {}],
  ['bad type', 'Willie', 'Snowman', {}],
])(
  ('should calculate %s'),
  (userCase, name, type, expected) => {
    const result = new Character(name, type);

    expect(result).toEqual(expected);
  },
);
