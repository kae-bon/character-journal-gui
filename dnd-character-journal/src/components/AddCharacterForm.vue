<template>
    <div class="container">
        <div class="alert alert-warning alert-dismissible fade show alert-danger" role="alert" v-show="err">
            <strong>Holy guacamole!</strong> {{ err }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h2 class="mb-3 col">Register Your New Character!</h2>
        <form class="w-50 container p-3" @submit.prevent="checkAtLeastOneClassSelected">
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
                <div class="d-flex flex-md-wrap">
                    <div class="form-check mb-1 d-inline-block w-50" v-for="pclass in classes" v-bind:key="pclass">
                        <input class="form-check-input" type="checkbox" :id="pclass.name" name="classes"
                            v-model="newCharacter.classes" :value="pclass.name">
                        <label :for="pclass.name">{{ pclass.name }}</label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <input class="btn btn-primary text-light" type="submit" value="register character">
                <button class="btn btn-danger text-light" @click="resetForm">cancel</button>
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
                this.err = "At least one checkbox must be selected.";
            } else {
                this.registerCharacter();
                this.err = "";
            }
        }
    }
}
</script>

<style scoped>
p {
    background-color: red;
}

form {
    background-color: #f1f1f1;
    border-radius: 2px;
}
</style>


<!-- 
$primary: #6494AA;
$secondary: #636940;
$ternary: #F28F3B;
$light: #EEF4ED;
$dark: #151515; -->