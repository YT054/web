document.addEventListener("DOMContentLoaded", function() {
  // 选择所有员工项
  const employeeCards = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  employeeCards.forEach(function(card) {
    card.onclick = function() {
      alert("你点击了：" + this.textContent.trim());
    };
  });

  // 添加鼠标停留事件（onmouseover）
  employeeCards.forEach(function(card) {
    card.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标离开事件（onmouseout）
  employeeCards.forEach(function(card) {
    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复背景色
    };
  });
});