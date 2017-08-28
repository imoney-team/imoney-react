class Progress{
    constructor(r,time,callback) {
        this.r = r;
        this.time = time;
        this.callback = callback;
        this.init();
    };
    init(){
        var r = this.r;
        var progress = document.getElementById("progress");
        var circle = progress.querySelectorAll("circle ");
        circle.forEach(function(element, index, array) {
            element.style.strokeDasharray = Math.PI * (r * 2);
            element.classList.add("transition");
        });
        this.run();
    }
    run(){
        var callback = this.callback;
        var time = this.time;
        var progressBar = document.getElementById("progress-bar");
        var progressText = document.getElementById("progress-text");
        var count = 0;
        var r = this.r;
        var Timer = setInterval(()=>{
            count++;
            if (count>=time) {
                clearInterval(Timer);
                callback();
            } else {
                progressBar.style.strokeDashoffset = ((time-count) / time) * Math.PI * (r * 2)

                var minute = Math.floor((time-count)/60);
                var second = ("0"+Math.floor((time-count)%60)).substr(-2);
                progressText.textContent=minute+":"+second;
            }

        },1000);

    }
}
export default Progress