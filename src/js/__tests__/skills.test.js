import { getSkills } from '../skills.js';

test('should be special', () => {
    const character = Object.defineProperty(
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        },
        "special",
        { enumerable: false },
    )

    expect(getSkills(character)).toEqual(
            [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    description: 'Description is unavailable'
                }
            ]
        )

    const newCharacter = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            }

    expect(getSkills(newCharacter)).toStrictEqual("Hero have not attacks")

})