  <script setup>
  import { ref, computed } from 'vue'
  
  const name = ref('')
  const subject = ref('')
  const message = ref('')

  const mail = import.meta.env.VITE_MAIL_ADRESS

  /* Défini messageSent en false au départ */
  const messageSent = ref(false)
  
  /* Vérifie si les champs sont remplis */
  const isFormValid = computed(() => {
    return name.value && subject.value && message.value
  })
  
  
  const onSubmit = () => {
    if (isFormValid.value) {
  
      messageSent.value = true
      document.querySelector('form').reset()
      setTimeout(() => {
        messageSent.value = ''
      }, 1500)
    }
  }

  // script formulaire d'envoie //

  import emailjs from '@emailjs/browser'

var templateParams = {
  name: 'Geoffrey',
  notes: 'subject',
};

emailjs.send('Re-Spire', 'template_8c4csdr', templateParams, {
    publicKey: 'kXJyTIOITrPJNE1YA',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );

  </script>

  <template>
    <form @submit.prevent="onSubmit" id="form" ref="form">
      <h2>Contactez-moi pour vos projets!</h2>
      <div>
        <label for="name">Nom</label>
        <input id="name" ref="name" type="text" placeholder="" required />
      </div>
      <div>
        <label for="subject">Sujet</label>
        <input id="subject" ref="subject" type="text" placeholder="" required />
      </div>
      <div>
        <label for="message">Votre message ici</label>
        <textarea
          id="message"
          ref="message"
          rows="15"
          cols="80"
          placeholder="Merci d'écrire votre message ici."
          required
        />
      </div>
      <button type="submit" value="send" @click="showMessage">Envoyer</button>
      <p class="message_sent" v-show="messageSent">Message envoyé {{ mail }}</p>
    </form>
  </template>
  
  
  <style scoped>
  h2 {
    padding-top: 0;
    text-decoration: underline;
    color: #ccb403;
    padding: 10px 50px 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 20%;
    padding-bottom: 100px;
    margin-top: 10%;
    margin-left: 65px;
    background-color: #034e7c;
    box-shadow: 4px 5px 1px #ccb403;
    width: 95%;
    color: #ccb403;
    
  }
  
  label {
    background-color: var(--primary-color);
    
  }
  
  button {
    margin-top: 10px;
    width: 100px;
    height: 50px;
    border-radius: 20px;
    background-color: #ccb403;
  }
  
  textarea {
    border-radius: 10px;
    
  }
  
  div {
    display: flex;
    flex-direction: column;
    
  }
  
  #form {
    scroll-margin-top: 130px;
    
  }
  </style>