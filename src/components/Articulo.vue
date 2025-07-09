<template>
  <div class="container my-4">
    <div class="row g-4">
      <!-- Columna 1: Imagen -->
      <div class="col-md-4">
        <img :src="imagen" alt="Imagen del artículo" class="img-fluid rounded shadow" />
      </div>

      <!-- Columnas 2 y 3: Texto -->
      <div class="col-md-8">
        <div class="text-columns">
          <p>{{ texto }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagen: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.text-columns {
  column-count: 2;
  column-gap: 2rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .text-columns {
    column-count: 1;
  }
}
</style>

