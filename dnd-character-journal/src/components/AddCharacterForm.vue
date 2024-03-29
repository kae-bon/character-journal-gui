<template>
    <div>
        <form>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingName" placeholder="Rinn Thiatora"
                    v-model="newCharacter.name">
                <label for="floatingName">Character Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingRace" placeholder="Wood Elf"
                    v-model="newCharacter.race">
                <label for="floatingRace">Character Race</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" min="1" max="20" class="form-control" id="floatingLevel" placeholder="12"
                    v-model.number="newCharacter.level">
                <label for="floatingName">Current Level</label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select mb-1" id="floatingSelect" aria-label="Choose Class" v-for="n in numClasses"
                    v-bind:key="n" v-model="newCharacter.class">
                    <option disabled value="">---</option>
                    <option v-for="pclass in classes" v-bind:key="pclass">{{ pclass.name }}</option>
                </select>
                <label for="floatingSelect">Character Class</label>
                <button type="button" class="btn btn-primary btn-sm mt-1" @click="addClass" v-if="numClasses <= 12">add
                    another class</button>
                <button type="button" class="btn btn-danger btn-sm mt-1" @click="removeClass" v-if="numClasses > 1">remove
                    class</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newCharacter: {
                name: "",
                race: "",
                level: 0,
                classes: []
            },
            numClasses: 1,
        }
    },
    computed: {
        classes() {
            return this.$store.state.classes;
        }
    },
    methods: {
        addClass() {
            if (this.numClasses + 1 <= 12) {
                this.numClasses++;
            }
        },
        removeClass() {
            if (this.numClasses - 1 >= 1) {
                this.numClasses--;
            }
        },
        registerCharacter() {

        },
        resetForm() {
            this.newCharacter = {};
        }
    }
}
</script>

<style scoped></style>