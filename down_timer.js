class DownTimer {
  minutes = 0;
  interval = null;
  END_SEC = 4;
  seconds = this.END_SEC;
  callback = null;

  constructor(minutes, selector) {
    this.minutes = minutes;
    this.selector = selector;
  }

  start(callback) {
    this.minutes--;
    this.callback = callback;
    this.interval = setInterval(this.countDown.bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.callback();
  }

  countDown() {
    $(this.selector).html(this.minutes + ":" + this.seconds);

    if (this.seconds > 0) {
      this.seconds--;
    } else {
      this.seconds = this.END_SEC;
      this.minutes--;

      if (this.minutes <= 0) {
        this.stop();
      }
    }
  }
}
