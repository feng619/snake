import click from './click.mp3'
import direction from './direction.mp3'
import eat from './eat.mp3'
import hit from './hit.mp3'

const mapping = {
  click,
  direction,
  eat,
  hit
}

function playSound(name) {
  new Audio(mapping[name]).play()
}

export default playSound
