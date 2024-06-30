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
      <a :class="{ active: activeMenu === 'AboutMe' }" href="#AboutMe" @click="setActiveMenu('AboutMe')">Présentation</a>
      <a :class="{ active: activeMenu === 'Contact' }" href="#form" @click="setActiveMenu('Contact')">Contact</a>
      <a :class="{ active: activeMenu === 'Projets' }" href="#projets" @click="setActiveMenu('Projets')">Projets</a>
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
  transition: transform 0.3s ease;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 25px;
}

.active {
  text-decoration: underline dotted red;
}

</style>
