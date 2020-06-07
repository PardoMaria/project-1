class Coin {
    constructor(ctx) {
      this._ctx = ctx
      this.x = this._ctx.canvas.width
      this.y = 300
      this.w = 90
      this.h = 90
      this.vx = -5
      this.catched = false
      this.value = 10
      this._img = new Image()
      this._img.src = "../moneda-ironhack.png"
  
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

      if (colX && colY) {
        this.catched = true
      }

      return colX && colY
    }
    
}