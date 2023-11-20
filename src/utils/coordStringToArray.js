function coordStringToArray(coord) {
  return coord.split(' ').map((v) => Number(v))
}

export default coordStringToArray
