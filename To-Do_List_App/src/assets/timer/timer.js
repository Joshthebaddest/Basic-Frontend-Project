class Timer {
    constructor(durationTimer, startButton, pauseButton, callBack ){
        this.durationTimer = durationTimer;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callBack){
            this.onStart = callBack.startTimer;
            this.onTick = callBack.startTick;
            this.onComplete = callBack.endTimer;
        }

        this.startButton = () => this.start();
        this.pauseButton = () => this.pause();
    }

    start = () => {
        // console.log(this.onStart) 
        // console.log(parseFloat(this.durationTimer.value))
        if(this.onStart){
            this.onStart(this.timeLeft);
        }
        
        this.tick();
        this.interval = setInterval(this.tick, 50);
        // console.log(interval)
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        // this.timeLeft = this.timeLeft;
        // console.log(this.timeLeft)
        

        if (this.timeLeft <= 0) {
            if(this.onComplete){
                this.onComplete();
            }
            this.pause();
        }
        else {

            this.timeLeft = this.timeLeft - 0.05;
            if(this.onTick){
                this.onTick(this.timeLeft);
            }
            // this.timeLeft = this.timeLeft;
        }
        
    }
    get timeLeft () {
        console.log(this.durationTimer.value)
        return parseFloat(this.durationTimer.value)
    }
    set timeLeft (time) {
        this.durationTimer.value = time.toFixed(2);
    }
};

export const MyTimer =  Timer