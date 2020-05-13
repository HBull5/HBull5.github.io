class Typewriter {
    constructor(element, strArr) {
        this.element = element;
        this.strArr = strArr;
        this.str = strArr[0];
        this.txt = '';
        this.strPos = 0;
        this.arrIndex = 0;
        this.complete = false;
        this.type();
    }

    type() {
        if(!this.complete) {
            if(this.strPos < this.str.length) {
                this.txt = this.str.substring(this.strPos, (this.strPos + 1));
                this.element.innerHTML += this.txt;
                this.strPos++;
                setTimeout(() => this.type(), 300);
            } else {
                setTimeout(() => {
                  this.complete = true;
                  this.type();
                }, 2000);
            }
        } else {
            if(this.strPos > 0) {
                this.txt = this.str.substring(0, (this.strPos - 1));
                this.element.innerHTML = this.txt;
                this.strPos--;
            } else {
                if(this.arrIndex < (this.strArr.length - 1)) {
                    this.arrIndex++;
                } else {
                    this.arrIndex = 0;
                }
                this.str = this.strArr[this.arrIndex];
                this.complete = false;
            }
            setTimeout(() => this.type(), 100);
        }
    }
}

let element = document.querySelector('#typewriter');
let strArr = ['Developer', 'Computer Wizard', 'Designer'];
new Typewriter(element, strArr);