const data = {
  year: 0,
  month: 0,
  day: 0,
  weekday: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  updateTime: function() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.day = now.getDate();
    this.weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  },
  formatTime: function() {
    let timeString = `${this.year}年${this.month}月${this.day}日 ${this.weekday} ` +
                     `${this.hours}:${this.minutes}:${this.seconds}`;
    if (this.minutes === 20 || this.minutes === 50) {
      timeString += " - 站起来活动一下吧！";
    }
    return timeString;
  }
};

function updateClock() {
  data.updateTime();
  document.getElementById('clock').textContent = data.formatTime();
}

updateClock();
setInterval(updateClock, 1000);