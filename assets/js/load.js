/* globals game */

let loadState = {
  preload () {
    // background for menu
    // game.load.image('background', 'assets/images/background.png')

    game.load.path = 'assets/images/'
    game.load.images([
      'menu-background', 'game-background', 'one-cell-ship', 'two-cells-ship',
      'three-cells-ship', 'four-cells-ship', 'cell'
    ])
    // // load game image assets
    // game.load.image('levelBackground', 'assets/images/game-background.png')
    // // ships
    // game.load.image('one-cell-ship', 'assets/images/one-cell-ship.png')
    // game.load.image('two-cells-ship', 'assets/images/two-cells-ship.png')
    // game.load.image('three-cells-ship', 'assets/images/three-cells-ship.png')
    // game.load.image('four-cells-ship', 'assets/images/four-cells-ship.png')

    // invisible sprite for cell
    // game.load.image('cell', 'assets/images/cell.png')

    // load game audio assets
    // game.load.audio('bgMusic', ['assets/audio/music.mp3', 'assets/audio/music.ogg'])
    // game.load.audio('paddleTouch', ['assets/audio/paddle.mp3', 'assets/audio/paddle.ogg'])
    // game.load.audio('brickDestroy', ['assets/audio/brick.mp3', 'assets/audio/brick.ogg'])
    // game.load.audio('gameOver', ['assets/audio/dead.mp3', 'assets/audio/dead.ogg'])
  },
  create () {
    game.state.start('play')
  }
}
