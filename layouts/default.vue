<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
<template>
  <div>
    <Topbar />
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>