$(document).ready(function() {
    const canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    function setup() {
        $("#canvas").width(window.innerWidth);
        $("#canvas").height(window.innerHeight);
        w = $("#canvas").width();
        h = $("#canvas").height();
        canvas.width = w;
        canvas.height = h;
    };
    setup();


    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    var mousePos = {
        x : 0,
        y : 0
    };
    canvas.addEventListener('mousemove',function(e){
        mousePos = getMousePos(canvas, e);
    })

    let points = 10;
    let len = 200;
    var size = 200;
    let rot = 1;
    let t = 0;
    let amp = 3;
    let x = 0;
    let y = 0;
    let xstart = w/2;
    let ystart = h/2;
    let lineWidth = 50;
    function polygon() {
        // hexagon
        var numberOfSides = 10;
        if(Math.abs(x-mousePos.x) < 100 && Math.abs(y-mousePos.y) < 100) {
            size = Lerp(size, 250, 0.05);
            lineWidth = Lerp(lineWidth, 25, 0.1);
            rot = Approach(rot, 2, 0.2);
        } else {
            size = Approach(size, 200, 3);
            lineWidth = Approach(lineWidth, 50, 3);
            rot = Approach(rot, 0, 2);
        }
        x = Lerp(x,xstart - (mousePos.x / w)*(w/25),0.25);
        y = Lerp(y,ystart - (mousePos.y / h)*(h/25),0.25);
        
        t = (t+2) % 360;
        size = size+amp*(Math.sin(t *(Math.PI /180)))

        c.beginPath();
        c.moveTo (x +  size * Math.cos(rot), y +  size *  Math.sin(rot));

        for (var i = 1; i <= numberOfSides;i += 1) {
            c.lineTo (x + size * Math.cos(i * 2 * Math.PI / numberOfSides + rot), y + size * Math.sin(i * 2 * Math.PI / numberOfSides + rot));
        }

        c.strokeStyle = "#fff";
        c.lineWidth = lineWidth;
        c.closePath();
        c.stroke();
    }

    function lengthdir_x(len,dir) {
        return Math.cos(dir * 180 / Math.PI) * len;
    }
    function lengthdir_y(len,dir) {
        return Math.sin(dir * 180 / Math.PI) * len;
    }
    function Approach(start,end,shift) {
        if(start < end) {
            return Math.min(start + shift, end);
        } else {
            return Math.max(start - shift, end);
        }
    }
    function Lerp(start, end, shift) {
        shift = shift < 0 ? 0 : shift;
        shift = shift > 1 ? 1 : shift;
        return start + (end - start) * shift;
    }
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

            //clear canvas
            c.rect(0,0,canvas.width,canvas.height);
            c.fillStyle = "#140d14"
            c.fill();
            polygon();
        }
    }
    startAnimation(60);
});
