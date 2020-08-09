class DownTimer {
  hours = 0;
  minutes = 0;
  interval = null;
  SECS_IN_A_MIN = 10;
  MINS_IN_AN_HOURS = 10;
  seconds = this.SECS_IN_A_MIN - 1;
  callback = null;

  constructor(minutes, selector) {
    this.hours = Math.floor(minutes / this.MINS_IN_AN_HOURS);
    this.minutes = minutes % this.MINS_IN_AN_HOURS;
    this.selector = selector;
  }

  start(callback = null) {
    this.minutes--;
    this.callback = callback;
    this.interval = setInterval(this.countDown.bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.callback();
  }

  updateSelector() {
    $(this.selector).html(this.hours + ":" + this.minutes + ":" + this.seconds);
  }

  countDown() {
    this.updateSelector();
    if (this.seconds > 0) {
      this.seconds--;
    } else {
      this.minutes--;
      if (this.minutes <= 0) {
        this.updateSelector();
        this.stop();
      }

      this.seconds = this.SECS_IN_A_MIN - 1;
    }
  }
}
