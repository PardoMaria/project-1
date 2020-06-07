const TOP_KEY = 38
const DOWN_KEY = 40
const RIGHT_KEY = 39
const LEFT_KEY = 37


class Maria {
    constructor(ctx) {
        this._ctx = ctx
        this.tick = 0
        this.coins = []
        this.x = 0.1 * this._ctx.canvas.width
        this.y0 = 350 
        this.y = this.y0
        this.w = 40
        this.h0 = 130
        this.h = this.h0
        this.vx = 0
        this.vy = 0
        this.ay = 0.8
        this.invencible = false
        this._img = new Image()
        this._img.src = "../maria-sprite.png"
        this._img.frames = 3
        this._img.frameIndex = 0

        this._setListeners()
    }

    setVencible() {
      setTimeout(() => {
        this.invencible = false
      }, 1000)
    }
    draw() {
        this._ctx.drawImage(
          this._img,
          this._img.frameIndex * this._img.width / this._img.frames,
          0,
          this._img.width / this._img.frames,
          this._img.height,
          this.x,
          this.y,
          this.w,
          this.h
        )
        this._animate()
    
      }

      move() {
        this.x += this.vx
    
        if (this.y < this.y0) {
          this.vy += this.ay;
          this.y += this.vy;
        } else {
          this.vy = 0;
        }
      }

      _animate() {
        this.tick++
    
        if (this.tick > 8) {
          this.tick = 0
    
          if (!this._isJumping()) {
            this._img.frameIndex++
          }
        }
    
        if (this._img.frameIndex >= this._img.frames) {
          this._img.frameIndex = 0
        }
      }

      _setListeners() {
        document.onkeydown = (e) => {
            if (e.keyCode === TOP_KEY) {
              this._jump()
            } else if(e.keyCode === DOWN_KEY) {
              this._bend()
            } else if (e.keyCode === RIGHT_KEY) {
              this.vx = 5
            } else if (e.keyCode === LEFT_KEY) {
              this.vx = -5
            } 
      }
      document.onkeyup = (e) => {
        if (e.keyCode === DOWN_KEY) {
          this._stand()
        } else if (e.keyCode === RIGHT_KEY) {
          this.vx = 0
        } else if (e.keyCode === LEFT_KEY) {
          this.vx = 0
        }
      }
    }

    _jump() {
        if (!this._isJumping()) {
          this._img.frameIndex = 2
          this.y -= 20;
          this.vy -= 15;
        }
      }

    _stand() {
        this._img.frameIndex = 0
        this.h = this.h0
    }

    _bend() {
        if (!this._isBend()) {
          this.h = this.h0 / 2
          this.y += this.h
        }
      }

    _isBend() {
        return this.h !== this.h0
    }
    
     _isJumping() {
        return this.y < this.y0
    }
    
}