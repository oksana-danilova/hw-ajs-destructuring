import orderByProps from './sort';
import { getSkills } from './skills.js';

export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
};
console.log(orderByProps(obj, [
    'name', 'level'
]));

export const newObj = {
    health: 10,
    name: 'мечник',
    level: 2,
    defence: 40,
    attack: 80
};
console.log(orderByProps(newObj, [ 'attack' ]));

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
    'special',
    { enumerable: false },
)

console.log(character);
console.log(getSkills(character));