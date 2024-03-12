export const makeSound = (type: string = 'success'): void => {
  if (!['success', 'change', 'danger', 'audio-call', 'video-call'].includes(type)) {
    type = 'change'
  }

  const audio: any = document.querySelector('.audio-player audio')
  audio.src = `/assets/audios/${type}.wav`

  audio.play()
}

// Fonction pour arrêter la lecture audio
export const stopSound = (): void => {
  try {
    const audio: any = document.querySelector('.audio-player audio')
    // Mettez en pause la lecture audio et réinitialisez la position de lecture
    audio.pause()
    audio.currentTime = 0
  } catch (error) {
    console.error("Erreur lors de l'arrêt de la lecture audio :", error)
  }
}
