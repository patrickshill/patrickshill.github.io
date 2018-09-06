$(document).ready(function(){

    const canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d",{ alpha: false });
    c.imageSmoothingEnabled = true;
    
    class Circle {
        constructor(x,y,r,vx,vy,color) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.vx = vx;
            this.vy = vy;
            this.color = color;
        }

        draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }
        
        update() {
            if(this.x > w || this.x < 0) {
                this.vx *= -1;
            }
            if(this.y > h || this.y < 0) {
                this.vy *= -1;
            }
            this.x = (this.x + this.vx);
            this.y = (this.y + this.vy);
            this.draw();
        }
    }
    var colors = ["#fff", "#999", "#979797"];
    var cList = [];
    function setup() {
        $("#canvas").width(window.innerWidth);
        $("#canvas").height(window.innerHeight);
        w = $("#canvas").width();
        h = $("#canvas").height();
        canvas.width = w;
        canvas.height = h;
        
        for(let i=0;i<100;i++) {
            let x = Math.floor(Math.random()*canvas.width);
            let y = Math.floor(Math.random()*canvas.height);
            let r = Math.floor(Math.random()*5 + 2);
            let vx = (Math.random()*2 + 1)*Math.round(Math.random())? 1 : -1;
            let vy = (Math.random()*2 + 1)*Math.round(Math.random())? 1 : -1;
            let color = colors[Math.round(Math.random()*2)];
            var circle = new Circle(x,y,r,vx,vy,color);
            cList.push(circle)
        }
    }
    console.log(cList);

    $(window).resize(function() {
        setup();
    });
    setup();

    var fps, fpsInterval, startTime, now, then, elapsed;
    function startAnimation(fps) {
        fpsInterval = 1000/fps;
        then = Date.now();
        startTime = then;
        animationLoop();
    }
    
    

    

    function animationLoop() {
        requestAnimationFrame(animationLoop);
        
        now = Date.now();
        elapsed = now - then;
        
        if(elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            
            //Animation code

            //clear canvas
            c.rect(0,0,canvas.width,canvas.height);
            c.fillStyle = "#140d14"
            c.fill();
            for(let i=0;i<cList.length;i++) {
                cList[i].update();
            }
        }
    }
    startAnimation(60);

    // var points = [];
    // for(let i=0;i<100;i++) {
    //     points[i] = [Math.random()*w,Math.random()*h,Math.random()*5,Math.random()*0.5+0.5];
    //     c.fillStyle = "#272727";
    //     c.fillRect(points[i][0],points[i][1],2,2);
    // }

    // function animationLoop() {
    //     window.requestAnimationFrame(animationLoop);
        
    //     c.fillStyle = "#222";
    //     c.fillRect(0,0,w,h);
        
    //     for(let i=0;i<points.length;i++) {
    //         points[i][0] = (points[i][0]+points[i][3]) % w;
    //         points[i][1] = (points[i][1]+Math.random()*1) % h;

    //         // c.fillStyle = "#777";
    //         // c.beginPath();
    //         // c.arc(points[i][0],points[i][1],Math.random()*1+points[i][2],0,2*Math.PI);
    //         // c.fill();

            
    //         c.fillStyle = "#FFF";
    //         c.beginPath();
    //         c.arc(points[i][0],points[i][1],2,0,2*Math.PI);
    //         c.fill();
    //     }

    //     // for(let i=0;i<points.length;i++) {
    //     //     c.fillStyle = "#FFF";
    //     //     c.beginPath();
    //     //     c.arc(points[i][0],points[i][1],2,0,2*Math.PI);
    //     //     c.fill();
    //     // }

    //     //Text
    //     c.font = "60px Roboto";
    //     c.fillText("Hello",w*0.5-100,h*0.5);
    // }
    // animationLoop();

});