/* globals game */

let playState = {
  create () {
    // set game background image
    this.levelBackground = game.add.sprite(0, 0, 'levelBackground')

    this.cellWidth = 50
    this.cellHeight = 50

    this.template = this.get2dArray(10, 10, 0)
    console.log(this.template)

    this.cells = game.add.group()

    for (let i = 0; i < this.template.length; i++) {
      for (let j = 0; j < this.template.length; j++) {
        let cell = this.cells.create(i * this.cellWidth, j * this.cellHeight, 'cell')
        cell.inputEnabled = true
        // cell.events.onInputDown.add(this.setX, this)
      }
    }

    // create ships
    let oneCellShip = game.add.image(800, 50, 'one-cell-ship')
    oneCellShip.anchor.setTo(0.5, 0.5)
    oneCellShip.inputEnabled = true
    oneCellShip.input.enableDrag(true)

    let twoCellsShip = game.add.image(900, 150, 'two-cells-ship')
    twoCellsShip.anchor.setTo(0.5, 0.5)
    twoCellsShip.inputEnabled = true
    twoCellsShip.input.enableDrag(true)

    let threeCellsShip = game.add.image(1000, 250, 'three-cells-ship')
    threeCellsShip.anchor.setTo(0.5, 0.5)
    threeCellsShip.inputEnabled = true
    threeCellsShip.input.enableDrag(true)

    let fourCesllsShip = game.add.image(1100, 350, 'four-cells-ship')
    fourCesllsShip.anchor.setTo(0.5, 0.5)
    fourCesllsShip.inputEnabled = true
    fourCesllsShip.input.enableDrag(true)

    // handle double click
    game.input.onTap.add(this.rotateShip, this)
  },
  update () {},
  // where 'el' is default element which will be filled in every array
  get2dArray (rows, columns, el) {
    return Array(rows).fill().map(() => Array(columns).fill(el))
  },
  setShip () {
  },
  rotateShip () {
    console.log('something')
  },
  // check who win
  checkMatch () {}
}
