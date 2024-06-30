const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

// lecture/pause de l'audio
playBtn.addEventListener("click", function () {
    // vérifier si le contexte est en état de suspension (politique de lecture automatique)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  
    // si la piste est arrêtée, la lire
    if (this.getAttribute("class") === "paused") {
      audioElement.play();
      this.setAttribute("class", "playing");
      this.textContent = "Pause";
      // si une piste est en cours de lecture, l'arrêter
    } else if (this.getAttribute("class") === "playing") {
      audioElement.pause();
      this.setAttribute("class", "paused");
      this.textContent = "Lire";
    }
  });
  
  // si la piste se termine
  audioElement.addEventListener("ended", function () {
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Lire";
  });

  const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", function () {
  gainNode.gain.value = this.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);
