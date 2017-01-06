/* globals game */

let loadState = {
  preload () {
    game.load.path = 'assets/images/'
    game.load.images([
      'menu-background', 'game-background', 'one-cell-ship', 'two-cells-ship',
      'three-cells-ship', 'four-cells-ship', 'cell', 'start'
    ])
  },
  create () {
    game.state.start('play')
  }
}
