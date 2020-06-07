class Obstacle {
    constructor(ctx) {
        this._ctx = ctx
        this.y = 390
        this.w = 100
        this.h = 100
        this.x = this._ctx.canvas.width
        this.vx = -5

        this._img = new Image()
        this._img.src = "../OBSTACULO-ORDENADOR.png"
      }
    
      draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
          )
      }
    
      move() {
        this.x += this.vx
      }

      collide(el) {
        const colX = el.x + el.w > this.x && el.x < this.x + this.w
        const colY = el.y + el.h > this.y && el.y < this.y + this.h
    
        return colX && colY
      }

      /*isVisible() {
        return (
          this.x < this._ctx.canvas.width * 2 &&
          this.x > 0 - this._ctx.canvas.width
        )
      }*/

    }

