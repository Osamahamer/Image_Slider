class Slider {
    constructor() {
        this.images = [];
        this.images[0] = "images/1.jpg";
        this.images[1] = "images/2.jpg";
        this.images[2] = "images/3.jpg";
        this.images[3] = "images/4.jpg";

        this.links = [];
        this.links[0] = "#";
        this.links[0] = "#";
        this.links[0] = "#";
        this.links[0] = "#";

        this.count = 0;
        setInterval(() => {
            this.playSlider();
        }, 3000);
    }
    playSlider() {

        if (this.count < this.images.length - 1) { this.count++; }
        else {
            this.count = 0;
        }

        document.slider_show.src = this.images[this.count];
        document.getElementById("LinkImg").href = this.links[this.count];



    }
}
