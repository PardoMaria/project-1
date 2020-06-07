class Game {
    constructor(ctx) {
      this._ctx = ctx
  
      this._intervalId = null
  
      this._bg = new Background(ctx)
      this._maria = new Maria(ctx)
      this._obstacles = [
        //new Obstacle(ctx)
      ]
      this.coins = [
          new Coin(ctx)
      ]
      this.beer = [
        //new Beer(ctx)
      ]
      //tick obstaculos
      this.tick = 0
      //tick coins
      this.tick2 = 0
      //tick beer
      this.tick3 = 0
      this.score = this._maria.coins.length

    }
    start() {
        this._intervalId = setInterval(() => {
          this._clear()
          this._draw()
          this._move()
          this._addObstacle()
          this._clearObstacles()
          this._addCoin()
          this._checkCollisions()
        }, 1000 / 60);
      }

      _addObstacle() {
        if (this.tick++ === 113) {
            this.tick = 0
          this._obstacles.push(new Obstacle(ctx))
        }
        if (this.tick3++ === 1000) {
            this.tick3 = 0
          this.beer.push(new Beer(ctx))
        }
      }

      _addCoin() {
        if (this.tick2++ === 50) {
            this.tick2 = 0
        this.coins.push(new Coin(ctx))
        }   
      }

      _clearObstacles() {
        this._obstacles = this._obstacles.filter(o => {
          return o.x + o.w >= 0
        })
      }
    
    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
      }
    
    _draw() {
        this._bg.draw()
        this._maria.draw()
        this._obstacles.forEach(e => {
            e.draw()
        })
        this.coins.forEach(c => c.draw())
        this.beer.forEach(b => {
          b.draw()
      })
      }
    
    _move() {
        this._bg.move()
        this._maria.move()
        this._obstacles.forEach(e => {
            e.move()
        })
        this.coins.forEach(c => c.move())
        this.beer.forEach(b => {
          b.move()
      })
      }

      _checkCollisions() {
        this.beer.forEach(o => {
          const colX = (this._maria.x - 10) + (this._maria.w - 10) > o.x && (this._maria.x - 10) < o.x + o.w
          const colY = (this._maria.y - 10) + (this._maria.h - 10) > o.y && (this._maria.y - 10) < o.y + o.h 
          if (colX && colY) {
            this._gameOver()
          }
        })

        this._obstacles.forEach(o => {
          const colX = (this._maria.x - 10) + (this._maria.w - 10) > o.x  && (this._maria.x - 10) < o.x + o.w 
          const colY = (this._maria.y - 10) + (this._maria.h - 10) > o.y  && (this._maria.y - 10) < o.y + o.h  
          if (colX && colY && !this._maria.invencible) {
            this._maria.invencible = true
            this.score--
            this._maria.setVencible()
          } else if (this.score < 0){
            this._gameOver()
          }
        })
        //consolelog para saber que se esta haciendo bien la suma y resta de puntos
        console.log(this.score)
        this.coins.some((coin) => {
          if(coin.collide(this._maria)){
            var index = this.coins.indexOf(coin);
            this.coins.splice(index, 1);
            this.score = this.score +1
          }
        })
      }
      _gameOver() {
        clearInterval(this._intervalId)

        this._ctx.font = "40px Comic Sans MS";
        this._ctx.textAlign = "center";
        this._ctx.fillText(
          "GAME OVER",
          this._ctx.canvas.width / 2,
          this._ctx.canvas.height / 2
        );
      }
}