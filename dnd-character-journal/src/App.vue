<template>
  <AddCharacterForm />
  <RouterView />
</template>

<script>
import AddCharacterForm from './components/AddCharacterForm.vue';

export default {
  components: {
    AddCharacterForm
  }
}
</script>

<style scoped></style>
