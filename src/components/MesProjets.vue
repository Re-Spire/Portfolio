<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '../stores/data.js'

const dataTable = ref(projects)

const visibleProjects = ref([])
const startIndex = ref(0)
const endIndex = ref(1)

onMounted(() => {
  visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1)
})

// ouverture et fermeture du modal

import ModalComponent from '@/components/TheModal.vue'

const isModalOpened = ref(false)
const currentProject = ref(dataTable.value[0])

const openModal = (project) => {
  currentProject.value = project
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}


</script>

<template>
  <div id="project">
    <section id="myProject">
      <h2>Mon CV</h2>

      <article>
       
        <ul ref="projectList">

            <button @click="openModal">
              <img id="CV" src="../assets/img/cv.png" alt="CV" />
            </button>
            <ModalComponent :isOpen="isModalOpened">
              <template #header>
                <div id="closebtn">
                  {{ currentProject.title }}
                  <button id="btn" @click="closeModal(project)">X</button>
                </div>
              </template>

              <template #content>
                <p><a href="https://github.com/Re-Spire/CV" target="_blank" ref="CV">Lien vers mon CV</a></p>
                <ul>
            <li id="HTML">HTML
              <img src="../assets/img/html.png" alt="logo du language html" />
              <span class="etoile">★</span>
              <span class="etoile">★</span>
            </li>
            <li id="JS">JS
              <img src="../assets/img/js.png" alt="logo du language js" />
              <span class="etoile">★</span>
            </li>            
            <li id="CSS">CSS
              <img src="../assets/img/css.png" alt="logo du language css" />
              <span class="etoile">★</span>
              <span class="etoile">★</span>
            </li>

          </ul>
              </template>
              <template #footer>
                <div id="timeGit">
                  <p>{{ currentProject.createdAt }}</p>
                  <p>{{ currentProject.techno }}</p>
                </div>
                <div id="btnnext">
                  <a href="https://github.com/Re-Spire" target="_blank" ref="GitHub"><img src="/src/assets/img/GitHub.png" alt="logo GitHub"></a>
                  <a href="https://www.facebook.com/bunelgeoffrey/?viewas=100000686899395" target="_blank" ref="Facebook"><img src="/src/assets/img/Facebook.png" alt="Logo Facebook"></a>
                </div>                
              </template>
            </ModalComponent>
        </ul>
      </article>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #034e7c;
  box-shadow: 5px 5px 10px #ccb403;
  width: 85%;
  border-radius: 50%;
  
}

section h2,
section p {
  display: flex;
  justify-content: center;
  padding: 5px;
  color:  #ccb403;
  letter-spacing: 2px;
}

section h2 {
  text-decoration: underline;
}

#myProject {
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 50px;
  margin-block-end: 20%;
}

#project {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: -50px;
}

#content{
  display: block;
  flex-direction: column;
  color:  #ccb403;
  background-color: #034e7c;
}

article {
  width: 100%;
  color:  #ccb403;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 10px;
  color: #ccb403;
}

img {
  width: 80px;
  height: 80px;
  border-radius: 30px;
}

#CV {
  width: 130px;
  height: 140px;
}

#git {
  width: 40px;
  height: 40px;
}

#timeGit {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
}

#timeGit a:hover {
  background-color:  #ccb403;
  border-radius: 10px;
}

#pictureProject {
  transition: box-shadow 0.3s ease-in-out;
}

#pictureProject:hover {
  box-shadow: 50px 50px 50px  #034e7c;
}

button {
  width: 150px;
  height: 150px;
  border-radius: 20px;
}

#imgproject {
  width: 800px;
  height: 500px;
}

#btn {
  float: right;
   border: none;
   background: none;
   color:#ccb403;
   font-size: 20px;
   border: 2px solid #ccb403;
   border-radius: 50%;
   width: 50px;
   height: 30px;
   cursor: pointer;
   outline: none;
   -webkit-transition: -webkit-transform 0.8s ease-in-out;
   transition: transform 0.8s ease-in-out;
}

#btn:hover {
   -webkit-transform: rotate(360deg);
   transform: rotate(360deg);
}

#btnchange {
  background-color:  #ccb403;
  color:  #ccb403;
  border: none;
  margin-left: 10px;
  margin-right: 50px;
  width: 0;
  height: 40px;
  font-size: 40px;
}

#btnnext {
  display: flex;
  justify-content: space-around;
}

#closebtn {
  display: flex;
  font-weight: bold;
  color:  #ccb403;
  text-transform: capitalize;
  font-size: 20px;
  width: 700px;
  letter-spacing: 2px;
  align-items: center;
  justify-content: space-between;
}
</style>