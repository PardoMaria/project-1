class Background {
    constructor(ctx){
        this._ctx = ctx

        this.x = 0
        this.y = 0
    
        this.vx = -2
        this.vy = 0
    
        this.ax = 0
        this.ay = 0
    
        this.w = this._ctx.canvas.width
        this.h = this._ctx.canvas.height

        this._img = new Image ()
        this._img.src = "Images/fondo-mariìa-sinpixel-01.jpg"
    }
    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.w,
            this.h
          )
      
        this._ctx.drawImage(
            this._img,
            this.x + this.w,
            this.y,
            this.w,
            this.h
        )
      }
    
      move() {
        this.vx += this.ax
        this.vy += this.ay
    
        this.x += this.vx
        this.y += this.vy

        if (this.x + this.w <= 0) {
            this.x = 0
          }
      }
}