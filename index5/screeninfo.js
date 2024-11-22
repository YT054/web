const screenData = {
  update: function() {
    return `屏幕实际宽度: ${screen.width}px, 屏幕实际高度: ${screen.height}px, ` +
           `浏览器窗口宽度: ${window.innerWidth}px, 浏览器窗口高度: ${window.innerHeight}px`;
  }
};

function updateScreenInfo() {
  document.getElementById("screen-info").textContent = screenData.update();
}

updateScreenInfo();
setInterval(updateScreenInfo, 1000);