class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll('.pad')
    this.kickAudio = document.querySelectorAll('.kick-sound')
    this.snareAudio = document.querySelectorAll('.snare-sound')
    this.hihatAudio = document.querySelectorAll('.hihat-sound')
    this.index = 0
  }
  repeat() {
    let step = this.index % 8
    const activeBars = document.querySelectorAll(`.b${step}`)
    console.log(activeBars)
    this.index++
  }

  start() {
    setInterval(() => {
      this.repeat()
    }, 1000)
  }
}

const drumKit = new DrumKit()

drumKit.start()
