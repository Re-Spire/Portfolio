<template>
      
  <div id="aboutMe">
    <section id="me">
      <img src="/src/assets/img/Me.png" alt="" />
      <h1></h1>
      <p>Développeur Web Junior</p>
      <ul>
        <li>
          <img src="/src/assets/img/HTML.png" alt="logo html" />
          <div class="skills">
            <h2>Html</h2>
          </div>
        </li>
        
        <li>
            <h2>Css</h2>
          <img src="/src/assets/img/CSS.png" alt="logo css" />
          <div class="skills">
          </div>
        </li>
        <li>
          <img src="/src/assets/img/JS.png" alt="logo js" />
          <div class="skills">
            <h2>Js</h2>
          </div>
        </li>
      </ul>
    </section>
    <form @submit.prevent="onSubmit" id="AboutMe" ref="AboutMe"></form>
    <section id="aboutMe">
      <h2>Présentation</h2>
      <p>
        Je me nomme Bunel Geoffrey. Je viens de Normandie, plus précisément de Cherbourg, et j'ai 32 ans. J'ai commencé à travailler dans la couverture a l'âge de 16 ans avec un CAP que j'ai réussi à la fin de c'est 2 années.
      </p>
      <p>Après cela je suis partie de la maison familiale pour aller dans le Calvados (Vire) pour y trouver mon premier CDI en tant que couvreur-zingueur, métier très passionnant et demande beaucoup de savoir-faire vis-à-vis des clients. Le temps passé sur le toit m’a permis de me rendre compte que ce métier très difficile n'étais plus ma passion, donc j'ai décidé de changer en tant que plaquiste dans le Calvados (Caen).
      </p>
      <p>
      Après 2 ans dans cette entreprise de placo j'ai été recruter par un vendeur de poêle à combustion (Caen), maintenant que j'ai vu (plus ou moins) tous les métiers du bâtiment (en parallèle des 2 dernières années j'ai monté ma maison d'A a Z) j'ai décidé de me lancer dans une aventure qui (je l'espère)me plaira, car ma nouvelle vie de famille avec mon fils de 14 mois prend énormément de temps et de fatigue (physique).
      </p>
      <p>  
      Aujourd'hui, j'ai pris la décision de tenter une nouvelle expérience dans le domaine de l'informatique, un domaine qui m'a toujours captivé. L'avenir déterminera si j'ai fait le bon choix en quittant le domaine du bâtiment et en m'épanouissant dans le métier de développeur.
      </p>
    </section>
  </div>
  
</template>

<style scoped>

#aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    line-height: 20px;
    padding: 10% 0;
}

#me {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;
}

#me p {
    width: 10%;
    font-weight: bold;
    text-transform: full-size-kana;
    margin-right: 10px;
}

#me img {
    border-radius: 50%;
    width : 100%;
    height: 100%;
    object-fit: cover;
    border-radius : 50%;
}

h1 { 
    color: #ccb403;
}

section h2,section p {
    display: flex;
    justify-content: center;
    padding: 5px;
    letter-spacing: 3px;
    color: #ccb403;
}

section h2 {
  text-decoration-line: none;
}

section img {
    width: 40px;
    height: 40px;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #034e7c;
    box-shadow: 5px 5px 10px #ccb403;
    width: 100%;
    border-radius: 5%;
    padding-top: 20px;
    margin-top: 50px;
}

#me li img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

#me li {
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    margin-top: 10px;
}

#Apropos {
    margin-top: 200px;
}

.checked {
    color: #6d2908;
}

.skills {
    border-radius: 10%;
}

#myHistory {
    scroll-margin-top: 10px;
}
</style>