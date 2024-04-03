<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show alert-danger" role="alert" v-show="err">
            <strong>Uh oh, Adventurer!</strong> {{ err }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h2 class="mb-5 mt-5 col">Register Your New Character!</h2>
        <form class="container-md w-50 p-3" @submit.prevent="checkAtLeastOneClassSelected">
            <h3 class="mb-4">General Information</h3>
            <div class="form-floating mb-3">
                <input type="text" class="form-control focus-ring" id="floatingName" placeholder="Rinn Thiatora"
                    v-model="newCharacter.name" required>
                <label for="floatingName">Character Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control focus-ring" id="floatingRace" placeholder="Wood Elf"
                    v-model="newCharacter.race" required>
                <label for="floatingRace">Character Race</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" min="1" max="20" class="form-control focus-ring" id="floatingLevel" placeholder="12"
                    v-model.number="newCharacter.level">
                <label for="floatingName">Current Level</label>
            </div>
            <div class="classes mb-3">
                <h4>Select at least One Class</h4>
                <div class="container-sm">
                    <div class="form-check mb-1 d-inline-block w-50" v-for="pclass in classes" v-bind:key="pclass">
                        <input class="form-check-input" type="checkbox" :id="pclass.name" name="classes"
                            v-model="newCharacter.classes" :value="pclass.name">
                        <label :for="pclass.name">{{ pclass.name }}</label>
                    </div>
                </div>

                <div v-if="newCharacter.classes.length > 0">
                    <div for="subclass" v-for="c in newCharacter.classes" v-bind:key="c">
                        <label>Choose a {{ c }}
                            Subclass:</label>
                        <select class="form-select" aria-label="Default select example" id="subclass">
                            <option selected>""</option>
                            <option v-for="subclassArray in subclasses" v-bind:key="subclassArray" value="">
                                {{ subclass }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary text-light">register character</button>
                <button class="btn btn-danger text-light" @click.stop.prevent="resetForm">cancel</button>
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
                level: 1,
                classes: []
            },
            err: "",
        }
    },
    computed: {
        classes() {
            return this.$store.state.classes;
        },
        subclasses() {
            let subclasses = [];
            for (let i = 0; i < this.newCharacter.classes.length; i++) {
                const cl = this.$store.state.classes.find((c) => c.name === this.newCharacter.classes[i]);
                subclasses.push(cl.subclasses);
            }
            return subclasses;
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
            this.$store.commit('ADD_CHARACTER', this.newCharacter);
            this.resetForm();
        },
        resetForm() {
            this.newCharacter = {};
        },
        checkAtLeastOneClassSelected() {
            if (this.newCharacter.classes.length === 0) {
                this.err = "You must select at least one class for your character.";
            } else {
                this.registerCharacter();
                this.err = "";
            }
        }
    }
}
</script>

<style scoped>
form {
    background-color: #f1f1f1;
    border-radius: 2px;
}
</style>