"use Strict";

const parentElement = document.querySelector(".timer1");
const parentElement2 = document.querySelector(".timer2");

class Timer {
  _totalSeconds;

  render(root, className) {
    const markup = this._generateMarkup();
    root.insertAdjacentHTML("beforeend", markup);

    this.elements = {
      resetBtn: document.querySelector(`.${className} .timer__btn--reset`),
      startBtn: document.querySelector(`.${className} .timer__btn--start`),
      pauseBtn: document.querySelector(`.${className} .timer__btn--pause`),
      minutes: document.querySelector(`.${className} .timer__text--minutes`),
      seconds: document.querySelector(`.${className} .timer__text--seconds`),
      timerBox: document.querySelector(`.${className} .timer__input-box`),
      resetInput: document.querySelector(`.${className} .timer__input--reset`),
    };

    this.defineActions();
    this.disabledElement(this.elements.startBtn);
  }

  disabledElement(element) {
    element.disabled = true;
  }

  unDisabledElement(element) {
    element.disabled = false;
  }

  defineActions() {
    this.elements.resetBtn.addEventListener("click", () =>
      this.show(this.elements.timerBox, "close")
    );

    this.elements.resetInput.addEventListener(
      "keydown",
      this.resetTimerValue.bind(this)
    );

    this.elements.startBtn.addEventListener(
      "click",
      this.startTimer.bind(this)
    );

    this.elements.pauseBtn.addEventListener("click", this.stopTimer.bind(this));
  }

  displayTime() {
    const minutesLeft = Math.floor(this._totalSeconds / 60);
    const secondsLeft = this._totalSeconds % 60;
    this.elements.minutes.textContent = `${minutesLeft}`.padStart(2, 0);
    this.elements.seconds.textContent = `${secondsLeft}`.padStart(2, 0);
  }

  clearInput() {
    this.elements.resetInput.value = "";
  }

  resetTimerValue(e) {
    if (e.key === "Enter") {
      this._totalSeconds = e.target.value;
      this.unDisabledElement(this.elements.startBtn);

      this.displayTime();
      this.clearInput();
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timerCountdown();
    }, 1000);

    this.timerCountdown();
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.elements.startBtn.style.display = "";
    this.elements.pauseBtn.style.display = "none";

    if (this._totalSeconds <= 0) this.disabledElement(this.elements.startBtn);
  }

  show(el, className) {
    el.classList.remove(className);
  }

  timerCountdown() {
    if (this._totalSeconds < 0) {
      this.stopTimer();
      return;
    }

    this.elements.startBtn.style.display = "none";
    this.elements.pauseBtn.style.display = "inline-block";

    this.displayTime();

    this._totalSeconds--;
  }

  _generateMarkup() {
    return `
				<span class="timer__text timer__text--minutes">00</span>
				<span class="timer__text timer__text--icon">:</span>
				<span class="timer__text timer__text--seconds">00</span>
				
				<button class="timer__btn timer__btn--pause close">Pause</button>
				<button class="timer__btn timer__btn--start">Start</button>
				<button class='timer__btn timer__btn--reset'>Reset</button>
				<div class="timer__input-box close"><input type="text" class="timer__input timer__input--reset"></div>
		`;
  }
}

const timer1 = new Timer();
timer1.render(parentElement, "timer1");

const timer2 = new Timer();
timer2.render(parentElement2, "timer2");
