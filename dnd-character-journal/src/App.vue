<template>
  <HeaderContainer />
  <AddCharacterForm />
  <RouterView />
</template>

<script>
import AddCharacterForm from './components/AddCharacterForm.vue';
import HeaderContainer from '@/components/HeaderContainer.vue';

export default {
  components: {
    AddCharacterForm,
    HeaderContainer
  }
}
</script>

<style scoped></style>
