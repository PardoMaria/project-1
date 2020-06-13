class Beer {
    constructor(ctx) {
        this._ctx = ctx
        this.y = this.positionY()
        this.w = 70
        this.h = 90
        this.x = this._ctx.canvas.width
        this.vx = -5

        this._img = new Image()
        this._img.src = "Images/cerveza-notechoques-01.png"
        console.log(this.y)
    }

    positionY(){
        let num = Math.floor(Math.random() * 300) + 275
        if (num > 400 || num === 200)  {
            num = 370
        }
        return num
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