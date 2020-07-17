export default class Card {
  constructor(settings) {
    this.x = settings.x;
    this.y = settings.y;
    this.src = settings.src;
    this.size = settings.size;
    this.ctx = settings.context;
    this.isRevealed = false;
  }

  drawBack() {
    let img = new Image();
    img.src = "img/back.jpg";
    this.ctx.drawImage(img,this.x,this.y,this.size,this.size);
  }

  drawFront() {
    let img = new Image();
    img.src = this.src;
    this.ctx.drawImage(img,this.x,this.y,this.size,this.size);
  }    
  
  is_selected(x, y) {
    return x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size;
  }
}
