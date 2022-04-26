import Team from "../Team.js";

test('Проверка дабавленик персонажа', () => {
  let result = new Team();
  result.add('ivan');
  let members = result.members.values().next().value;
  expect(members).toBe('ivan');
});

// test('Ошибка 2 одинаковых персонажа', () => {
//   let result1 = new Team();
//   result1.add('petr');
//   result1.add('petr');
//   expect(result1).toThrowError('Данный персонаж уже был добавлен в команду');
// });

test('Добавление несколих персонажей', () => {
      let set = new Team();
      set.addAll('petr', 'anna', 'lika');
      const result = [];
      set.members.forEach(size => result.push(size));

  expect(result).toEqual(['petr', 'anna', 'lika']);
});

test('Проверка возвращения массива', () => {
      let set = new Team();
      set.addAll('petr', 'anna', 'lika');
  expect(set.toArray()).toEqual(['petr', 'anna', 'lika']);
});