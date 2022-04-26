export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);

    } else {
      throw new Error('Данный персонаж уже был добавлен в команду');
    }
  }

  addAll(...characters) {
    for (let character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}


