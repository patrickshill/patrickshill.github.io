$(document).ready(function(){

    //Shaker
    var shakerGallery = document.getElementById("shakerGallery");
    var shakerGalleryPos = 0;

    //Animate in arrows on mouseover
    $(shakerGallery).hover(function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#shakerGalleryPrev","#shakerGalleryNext"],
            opacity: 1,
            duration: 500,
            easing: "easeInCubic"
        });
    },function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#shakerGalleryPrev","#shakerGalleryNext"],
            opacity: 0,
            duration: 500,
            easing: "easeOutCubic"
        });
        $(".gallery-prev").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#shakerGalleryPrev","#shakerGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
        $(".gallery-next").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#shakerGalleryPrev","#shakerGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
    });

    $("#shakerGalleryPrev").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(shakerGallery).css("width");
        if(shakerGalleryPos > 0){
            shakerGalleryPos--;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*shakerGalleryPos;
            anime({
                targets: shakerGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*shakerGalleryPos;
            anime({
                targets: shakerGallery,
                left: [
                    {value: newPos+15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }

    });
    $("#shakerGalleryNext").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(shakerGallery).css("width");
        if(shakerGalleryPos < 5){
            shakerGalleryPos++;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*shakerGalleryPos;
            anime({
                targets: shakerGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*shakerGalleryPos;
            anime({
                targets: shakerGallery,
                left: [
                    {value: newPos-15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }
    });

    //Shaker
    var scrumGallery = document.getElementById("scrumGallery");
    var scrumGalleryPos = 0;

    //Animate in arrows on mouseover
    $(scrumGallery).hover(function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#scrumGalleryPrev","#scrumGalleryNext"],
            opacity: 1,
            duration: 500,
            easing: "easeInCubic"
        });
    },function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#scrumGalleryPrev","#scrumGalleryNext"],
            opacity: 0,
            duration: 500,
            easing: "easeOutCubic"
        });
        $(".gallery-prev").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#scrumGalleryPrev","#scrumGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
        $(".gallery-next").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#scrumGalleryPrev","#scrumGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
    });

    $("#scrumGalleryPrev").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(scrumGallery).css("width");
        if(scrumGalleryPos > 0){
            scrumGalleryPos--;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*scrumGalleryPos;
            anime({
                targets: scrumGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*scrumGalleryPos;
            anime({
                targets: scrumGallery,
                left: [
                    {value: newPos+15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }

    });
    $("#scrumGalleryNext").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(scrumGallery).css("width");
        if(scrumGalleryPos < 4){
            scrumGalleryPos++;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*scrumGalleryPos;
            anime({
                targets: scrumGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*scrumGalleryPos;
            anime({
                targets: scrumGallery,
                left: [
                    {value: newPos-15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }
    });
    

    //Chappy
    var chappyGallery = document.getElementById("chappyGallery");
    var chappyGalleryPos = 0;

    //Animate in arrows on mouseover
    $(chappyGallery).hover(function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#chappyGalleryPrev","#chappyGalleryNext"],
            opacity: 1,
            duration: 500,
            easing: "easeInCubic"
        });
    },function(){
        anime.remove(".gallery-prev");
        anime.remove(".gallery-next");
        anime({
            targets:["#chappyGalleryPrev","#chappyGalleryNext"],
            opacity: 0,
            duration: 500,
            easing: "easeOutCubic"
        });
        $(".gallery-prev").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#chappyGalleryPrev","#chappyGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
        $(".gallery-next").hover(function(){
            anime.remove(".gallery-prev");
            anime.remove(".gallery-next");
            anime({
                targets:["#chappyGalleryPrev","#chappyGalleryNext"],
                opacity: 1,
                duration: 500,
                easing: "easeInCubic"
            });
        });
    });

    $("#chappyGalleryPrev").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(chappyGallery).css("width");
        if(chappyGalleryPos > 0){
            chappyGalleryPos--;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*chappyGalleryPos;
            anime({
                targets: chappyGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*chappyGalleryPos;
            anime({
                targets: chappyGallery,
                left: [
                    {value: newPos+15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }

    });
    $("#chappyGalleryNext").click(function() {
        //Animate button
        anime({
            targets: this,
            scale: [
                {value: 0.8, duration: 0},
                {value: 1, duration: 1000}
            ]
        });

        //Increment target gallery slide
        let galleryWidth = $(chappyGallery).css("width");
        if(chappyGalleryPos < 3){
            chappyGalleryPos++;
            
            //Animate slide
            let newPos = -parseInt(galleryWidth)*chappyGalleryPos;
            anime({
                targets: chappyGallery,
                left: newPos,
                duration: 1000,
                easing: 'easeInOutCubic'
            });
        } else {
            //Animate if at end of gallery
            let newPos = -parseInt(galleryWidth)*chappyGalleryPos;
            anime({
                targets: chappyGallery,
                left: [
                    {value: newPos-15,  duration: 100},
                    {value: newPos,     duration: 500}
                ]
            });
        }
    });
});
