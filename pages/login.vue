<script setup lang="ts">
async function submit(e) {
  const body = new FormData(e.target)
  await $fetch('/api/login', { method: 'POST', body })
}
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">
      Login
    </button>
  </form>
</template>
