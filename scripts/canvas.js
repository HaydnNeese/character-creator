const map = {
    cols: 4,
    rows: 4,
    tsize: 32,
    tiles: [
        10, 10, 10, 10,
        20, 20, 20, 20,
        2, 2, 2, 2
    ],
    getTile: function(col, row) {
        return this.tiles[row * map.cols + col]
    }
}
for (var column = 0; column < map.columns; column++) {
    for (var row = 0; row < map.rows; row++) {
      var tile = map.getTile(column, row);
      var x = column * map.tileSize;
      var y = row * map.tileSize;
      drawTile(tile, x, y);
    }
  }
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);