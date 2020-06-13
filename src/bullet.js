class Bullet {
    constructor(ctx, x, y) {
      this._ctx = ctx
      this.y = y
      this.x = x
      this.w = 100
      this.h = 80
      this.vx = 10
  
      this._img = new Image()
      this._img.src = "../Images/consolelog-weapon-01.png"
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
}