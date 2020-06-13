class Obstacle {
    constructor(ctx) {
        this._ctx = ctx
        this.y = 390
        this.w = 120
        this.h = 120
        this.x = this._ctx.canvas.width
        this.vx = -6

        this._img = new Image()
        this._img.src = "Images/OBSTACULO-ORDENADOR.png"
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


    }

