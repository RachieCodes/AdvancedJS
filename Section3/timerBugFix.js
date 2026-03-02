// Arrow function, this keyword, and setTimeout
// Fixed a buggy code example that was not working due to incorrect use of 'this' keyword. The tick variable was not being incremented correctly because the function passed to setInterval was not using an arrow function, which caused the 'this' keyword to refer to the global object instead of the Timer instance. By using an arrow function, we can ensure that 'this' refers to the Timer instance, allowing us to access and increment the tick variable correctly.

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.tick++);
      
      if (this.tick > 4)
      {
          this.stop();
      }
    }, 1000);
  }
  
  stop() {
      clearInterval(this.timerId);
  }
}