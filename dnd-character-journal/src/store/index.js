import { createStore as _createStore } from '../../node_modules/vuex';

export function createStore() {
    return _createStore({
        state: {
            classes: [
                { name: "Artificer" },
                { name: "Barbarian" },
                { name: "Bard" },
                { name: "Blood Hunter" },
                { name: "Cleric" },
                { name: "Druid" },
                { name: "Fighter" },
                { name: "Monk" },
                { name: "Paladin" },
                { name: "Ranger" },
                { name: "Rogue" },
                { name: "Sorcerer" },
                { name: "Warlock" },
                { name: "Wizard" },
            ],
            characters: {}
        },
        mutations: {
            ADD_CHARACTER(state, payload) {
                state.characters.push(payload);
            }
        }
    })
}