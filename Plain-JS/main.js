"use Strict";

class Timer {
  _totalSeconds;

  render({ root }) {
    const markup = this._generateMarkup();
    root.insertAdjacentHTML("beforeend", markup);

    const rootId = root.getAttribute("id");

    this.elements = {
      resetBtn: document.querySelector(`#${rootId} .timer__btn--reset`),
      startBtn: document.querySelector(`#${rootId} .timer__btn--start`),
      pauseBtn: document.querySelector(`#${rootId} .timer__btn--pause`),
      minutes: document.querySelector(`#${rootId} .timer__text--minutes`),
      seconds: document.querySelector(`#${rootId} .timer__text--seconds`),
      timerBox: document.querySelector(`#${rootId} .timer__input-box`),
      resetInput: document.querySelector(`#${rootId} .timer__input--reset`),
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

const parentElement1 = document.querySelector("#timer-1");
const parentElement2 = document.querySelector("#timer-2");

const timer1 = new Timer();
const timer2 = new Timer();

timer1.render({ root: parentElement1 }); // render timer1 in the root element
timer2.render({ root: parentElement2 }); // render timer2 in the root element
