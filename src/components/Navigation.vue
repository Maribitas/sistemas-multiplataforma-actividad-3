<template>
  <nav class="navbar navbar-expand navbar-dark bg-secondary">
    <div class="container-fluid">
      <ul class="navbar-nav d-flex w-100">
        <li class="nav-item flex-fill text-center">
          <router-link class="nav-link text-white" :to="`/`">Inicio</router-link>
        </li>
        <li class="nav-item flex-fill text-center" v-for="articulo in articulos" :key="articulo.id">
          <router-link class="nav-link text-white" :to="`/blog/${articulo.id}`">{{ articulo.titulo }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const articulos = [
  { id: 1, titulo: 'Herramientas' },
  { id: 2, titulo: 'Lienzos' },
  { id: 3, titulo: 'Figuras' }
]
</script>
