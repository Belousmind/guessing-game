class GuessingGame {
    setRange(min, max) {
       this.min = min;
       this.max = max; 
    }
    guess() {
        this.number;
        this.midle = Math.round((this.max - this.min) / 2 + this.min)
        if (this.number < this.midle) {
            greater(); 
        } else if (this.number > this.midle) {
            lower();
        } else {
            return this.midle;
        }
    }
    lower() {
        this.max = this.midle;
    }
    greater() {
        this.min = this.midle;
    }
}
module.exports = GuessingGame;



