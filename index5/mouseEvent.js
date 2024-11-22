const mouseData = {
  x: 0,
  y: 0,
  update: function(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  },
  format: function() {
    return `鼠标点击位置: (${this.x}, ${this.y})`;
  }
};

document.addEventListener("mousedown", function(event) {
  mouseData.update(event);
  document.getElementById("mouse-coordinates").textContent = mouseData.format();
});