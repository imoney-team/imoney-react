class Progress{
    constructor(r,time,callback) {
        this.r = r;
        this.time = time;
        this.callback = callback;
        this.init();
    };
    init(){
        let r = this.r;
        let progress = document.getElementById("progress");
        let circle = progress.querySelectorAll("circle");
        [].forEach.call(circle, function(element, index, array){
            element.style.strokeDasharray = Math.PI * (r * 2);
            element.classList.add("transition");
        });
        this.run();
    }
    run(){
        let callback = this.callback;
        let time = this.time;
        let progressBar = document.getElementById("progress-bar");
        let progressText = document.getElementById("progress-text");
        let count = 0;
        let r = this.r;
        let Timer = setInterval(()=>{
            count++;
            if (count>=time) {
                clearInterval(Timer);
                callback();
            } else {
                progressBar.style.strokeDashoffset = ((time-count) / time) * Math.PI * (r * 2)

                let minute = Math.floor((time-count)/60);
                let second = ("0"+Math.floor((time-count)%60)).substr(-2);
                progressText.textContent=minute+":"+second;
            }

        },1000);

    }
}
export default Progress