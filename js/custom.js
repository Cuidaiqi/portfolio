

$(document).ready(function() {
    $('#page').pagepiling({
        menu: '#nav',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['REEL', 'WORK', 'ILLUSTRATION', 'CONTACT']
        }
    });

    $('.project').on('click', function(){
        $('.overlay').toggleClass('active');
        let title = $(this).data('title');
        console.log('new');
        $('.overlay h1').html(title);
        let description = $(this).data('description');
        $('.overlay h2').html(description);
        let number = $(this).data('number');
        let numberImages = $(this).data('number-images');
        $('.overlay .images').html('');
        $('.overlay .images').append(`
            <div class = "reel" width="640" height ="360">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/413958053" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>`);
        for(i = 0; i < numberImages; i++) {
            console.log(numberImages);
            $('.overlay .images').append(`<div class="image" style="background-image:url('img/project${number}-${i+1}.jpg')"></div>`);
        }
    });

    $('.project1').on('click', function(){
        $('.overlay').toggleClass('active');
        let title = $(this).data('title');
        console.log('new');
        $('.overlay h1').html(title);
        let description = $(this).data('description');
        $('.overlay h2').html(description);
        let number = $(this).data('number');
        let numberImages = $(this).data('number-images');
        $('.overlay .images').html('');
        $('.overlay .images').append(`
            <div class = "reel" width="640" height ="360">
            <iframe src="https://player.vimeo.com/video/203940569" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>`);
       
    });

    $('.project2').on('click', function(){
        $('.overlay').toggleClass('active');
        let title = $(this).data('title');
        console.log('new');
        $('.overlay h1').html(title);
        let description = $(this).data('description');
        $('.overlay h2').html(description);
        let number = $(this).data('number');
        let numberImages = $(this).data('number-images');
        $('.overlay .images').html('');
        $('.overlay .images').append(`
            <div class = "reel" width="640" height ="360">
            <iframe src="https://player.vimeo.com/video/358715334" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        
        </div>`);
       
    });

    $('.project3').on('click', function(){
        $('.overlay').toggleClass('active');
        let title = $(this).data('title');
        console.log('new');
        $('.overlay h1').html(title);
        let description = $(this).data('description');
        $('.overlay h2').html(description);
        let number = $(this).data('number');
        let numberImages = $(this).data('number-images');
        $('.overlay .images').html('');
        $('.overlay .images').append(`
            <div class = "reel" width="640" height ="360">
            <iframe src="https://player.vimeo.com/video/311501696" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>`);
        
    });

    
    $('.project4').on('click', function(){
        $('.overlay').toggleClass('active');
        let title = $(this).data('title');
        console.log('new');
        $('.overlay h1').html(title);
        let description = $(this).data('description');
        $('.overlay h2').html(description);
        let number = $(this).data('number');
        let numberImages = $(this).data('number-images');
        $('.overlay .images').html('');
        $('.overlay .images').append(`
            <div class = "reel" width="640" height ="360">
            <iframe src="https://player.vimeo.com/video/311499969" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>`);
       
    });

    $('.close').on('click', function(){
        $('.overlay').toggleClass('active');
    });
});

$(function() {
    $( "#cover" ).draggable();
  });
  