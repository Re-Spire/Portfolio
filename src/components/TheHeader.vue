<script setup>
import image from '../assets/img/DEVReSpire.png'
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)

const mouseMove = (event) => {
  x.value = event.clientX / window.innerWidth
  y.value = event.clientY / window.innerHeight
}

const activeMenu = ref('Accueil')

const setActiveMenu = (menu) => {
  activeMenu.value = menu
}

</script>

<template>
  <header>
    <a href="#"><img
        alt="logo Dev respire"      
        :src="image"
        @mousemove="mouseMove"
        :style="{ transform: 'translate(' + x * 200 + 'px, ' + y * 100 + 'px)' }"></a>
    <nav>
      <a :class="{ active: activeMenu === 'Accueil' }" href="#" @click="setActiveMenu('Accueil')">Accueil</a>
      <a :class="{ active: activeMenu === 'Présentation' }" href="#APropos" @click="setActiveMenu('Présentation')">Présentation</a>
      <a :class="{ active: activeMenu === 'Contact' }" href="#form" @click="setActiveMenu('Contact')">Contact</a>
    </nav>
  </header>
</template>

<style scoped>

header {
  background-color: #034e7c;
  display: flex;
  justify-content: space-between;
  padding-right: 0px;
  width: 100%;
  max-width: 1250px;
  height: 130px;
  align-items: center;
  border-bottom: 0.3rem dashed #ccb403;
  position: fixed;
  overflow: auto;
  top: 0;
}

img {
  width: 200px;
  height: 80px;
  transition: transform 0.5s ease;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 35%;
  font-size: 25px;
}

.active {
  text-decoration: underline dotted red;
}

</style>
