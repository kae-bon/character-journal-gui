import { createStore as _createStore } from '../../node_modules/vuex';

export function createStore() {
    return _createStore({
        state: {
            classes: [
                {
                    name: "Artificer",
                    subclasses: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"]
                },
                {
                    name: "Barbarian",
                    subclasses: ["Path of the Ancestral Guardian", "Path of the Beast", "Path of the Giant ",
                        "Path of the Berserker", "Path of the Storm Herald", "Path of the Totem Warrior",
                        "Path of the Zealot", "Path of Wild Magic"]

                },
                {
                    name: "Bard",
                    subclasses: ["College of Creation", "College of Eloquence", "College of Glamour",
                        "College of Lore", "College of Spirits", "College of Swords", "College of Valor",
                        "College of Whispers"]
                },
                {
                    name: "Cleric",
                    subclasses: ["Arcana Domain", "Forge Domain", "Grave Domain", "Knowledge Domain",
                        "Life Domain", "Light Domain", "Order Domain", "Peace Domain", "Tempest Domain",
                        "Trickery Domain", "War Domain"]
                },
                {
                    name: "Druid",
                    subclasses: ["Circle of Dreams", "Circle of Spores", "Circle of Stars",
                        "Circle of Wildfire", "Circle of the Land", "Circle of the Moon", "Circle of the Shepherd"]
                },
                {
                    name: "Fighter",
                    subclasses: ["Arcane Archer", "Battle Master", "Cavalier", "Champion",
                        "Echo Knight", "Psi Warrior", "Purple Dragon Knight", "Rune Knight", "Samurai"]
                },
                {
                    name: "Monk",
                    subclasses: ["Way of Mercy", "Way of Shadow", "Way of the Ascendant Dragon",
                        "Way of the Astral Self", "Way of the Drunken Master", "Way of the Four Elements",
                        "Way of the Kensei", "Way of the Long Death", "Way of the Open Hand", "Way of the Sun Soul"]
                },
                {
                    name: "Paladin",
                    subclasses: ["Oath of Conquest", "Oath of Devotion", "Oath of Glory", "Oath of Redemption",
                        "Oath of the Ancients", "Oath of the Crown", "Oath of the Watchers", "Oath of Vengeance", "Oathbreaker"]
                },
                {
                    name: "Ranger",
                    subclasses: ["Beast Master", "Drakewarden", "Fey Wanderer", "Gloom Stalker", "Horizon Walker",
                        "Hunter", "Monster Slayer", "Swarmkeeper"]
                },
                {
                    name: "Rogue",
                    subclasses: ["Aracne Trickster", "Assassin", "Inquisitive", "Mastermind",
                        "Phantom", "Scout", "Soulknife", "Swashbuckler", "Thief"]
                },
                {
                    name: "Sorcerer",
                    subclasses: ["Aberrant Mind", "Clockwork Soul", "Divine Soul", "Draconic Bloodline", "Lunar Sorcery", "Shadow Magic",
                        "Storm Sorcery", "Wild Magic"]
                },
                {
                    name: "Warlock",
                    subclasses: ["Archfey", "Celestial", "Fathomless", "Fiend", "Genie",
                        "Great Old One", "Hexblade", "Undead", "Undying"]
                },
                {
                    name: "Wizard",
                    subclasses: ["Bladesinging", "Chronurgy", "Graviturgy", "Order of Scribes",
                        "School of Abjuration", "School of Divination", "School of Enchantment",
                        "School of Evocation", "School of Illusion", "School of Necromancy", "School of Transmutation",
                        "War Magic"]
                },
            ],
            characters: [],
        },
        mutations: {
            ADD_CHARACTER(state, payload) {
                state.characters.unshift(payload);
            }
        }
    })
}