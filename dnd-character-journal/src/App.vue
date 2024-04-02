<template>
  <HeaderContainer />
  <AddCharacterForm />
  <CharacterCard />
  <RouterView />
</template>

<script>
import AddCharacterForm from './components/AddCharacterForm.vue';
import HeaderContainer from '@/components/HeaderContainer.vue';
import CharacterCard from './components/CharacterCard.vue';

export default {
  components: {
    AddCharacterForm,
    HeaderContainer,
    CharacterCard
  }
}
</script>

<style scoped></style>
