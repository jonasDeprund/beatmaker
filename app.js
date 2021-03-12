class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll('.pad')
    this.playBtn = document.querySelector('.play')
    this.kickAudio = document.querySelectorAll('.kick-sound')
    this.snareAudio = document.querySelectorAll('.snare-sound')
    this.hihatAudio = document.querySelectorAll('.hihat-sound')
    this.index = 0
    this.bpm = 150
  }

  activePad() {
    this.classList.toggle('active')
  }

  repeat() {
    let step = this.index % 8
    const activeBars = document.querySelectorAll(`.b${step}`)
    // loop over the bars
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`
    })
    this.index++
  }

  start() {
    const interval = (60 / this.bpm) * 1000
    setInterval(() => {
      this.repeat()
    }, interval)
  }
}

const drumKit = new DrumKit()

drumKit.pads.forEach((pad) => {
  pad.addEventListener('click', drumKit.activePad)
  pad.addEventListener('animationend', function () {
    this.style.animation = ''
  })
})

drumKit.playBtn.addEventListener('click', function () {
  drumKit.start()
})
