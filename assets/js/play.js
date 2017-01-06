/* globals game */

let playState = {
  create () {
    // set game background image
    this.levelBackground = game.add.sprite(0, 0, 'game-background')

    // cell square width and height
    this.cellSide = 50

    this.cells = game.add.group()
    this.cells.inputEnableChildren = true
    this.cells.onChildInputDown.add(this.shoot, this)

    this.board = this.createCells()

    this.checkBoard = Array(10).fill().map(() => Array(10).fill(0))

    this.startButton = game.add.sprite(600, 450, 'start')
    this.startButton.inputEnabled = true
    this.startButton.events.onInputDown.add(this.startGame, this)

    this.ships = game.add.group()
    this.ships.inputEnableChildren = true
    this.ships.onChildInputDown.add(this.rotateShip, this)

    // create ships
    this.oneCellShip = this.ships.create(800, 50, 'one-cell-ship')
    this.oneCellShip.length = 1
    this.oneCellShip.direction = 'vertical'
    this.oneCellShip.input.enableDrag()
    this.oneCellShip.input.enableSnap(50, 50, false, true)

    this.twoCellsShip = this.ships.create(900, 150, 'two-cells-ship')
    this.oneCellShip.length = 2
    this.oneCellShip.direction = 'vertical'
    this.twoCellsShip.input.enableDrag(true)
    this.twoCellsShip.input.enableSnap(50, 50, false, true)

    this.threeCellsShip = this.ships.create(1000, 250, 'three-cells-ship')
    this.oneCellShip.length = 3
    this.oneCellShip.direction = 'vertical'
    this.threeCellsShip.input.enableDrag(true)
    this.threeCellsShip.input.enableSnap(50, 50, false, true)

    this.fourCesllsShip = this.ships.create(1100, 350, 'four-cells-ship')
    this.oneCellShip.length = 4
    this.oneCellShip.direction = 'vertical'
    this.fourCesllsShip.input.enableDrag(true)
    this.fourCesllsShip.input.enableSnap(50, 50, false, true)

    // console.log(this.ships)
    // console.log(this.cells)
  },

  update () {},

  createCells () {
    let cells = Array(10).fill().map(() => Array(10).fill(0))
    // for (let i = 0; i < 10; i++) {
    //   for (let j = 0; j < 10; j++) {
    //     cells[i][j] = this.cells.create(i * this.cellSide, j * this.cellSide, 'cell')
    //   }
    // }
    return cells
  },

  setShip () {},

  rotateShip (ship, pointer) {
    // handle double click
    if (pointer.msSinceLastClick < game.input.doubleTapRate) {
      console.log('Double clicked sprite')
      ship.angle += 90
    }
  },

  startGame () {
    // http://phaser.io/docs/2.6.2/Phaser.Group.html#ignoreChildInput
    this.ships.ignoreChildInput = true

    let ships = this.ships.children
    let shipsLength = this.ships.children.length
    for (let i = 0; i < shipsLength; i++) {
      let cellIndexX = Math.floor(ships[i].x / this.cellSide)
      let cellIndexY = Math.floor(ships[i].y / this.cellSide)
      this.board[cellIndexX][cellIndexY] = 'x'
    }
  },

  shoot () {
    // Figure out what position on the grid that translates to
    let cellIndexX = Math.floor(game.input.x / this.cellSide)
    let cellIndexY = Math.floor(game.input.y / this.cellSide)

    // if (this.oneCellShip.input.pointerOver()) {
    //   this.checkBoard[cellIndexX][cellIndexY] = 'x'
    // }
  },

  // check who win
  checkMatch () {}
}
