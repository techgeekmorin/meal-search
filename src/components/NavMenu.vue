<template>
  <nav>
    <RouterLink :to="{name: 'Home'}">Home</RouterLink>
    <RouterLink :to="{name: 'MealsByName'}">Meals By Name</RouterLink>
    <RouterLink :to="{name: 'MealsByLetter'}">Meals By Letter</RouterLink>
    <RouterLink :to="{name: 'MealsByIngridients'}">Meals By Ingridients</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
