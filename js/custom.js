$(document).ready(function() {
    $('#page').pagepiling({
        menu: '#nav',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['HOME', 'WORK', 'ILLUSTRATION', 'CONTACT']
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
                <iframe src="https://player.vimeo.com/video/301106884" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>`);
        for(i = 0; i < numberImages; i++) {
            console.log(numberImages);
            $('.overlay .images').append(`<div class="image" style="background-image:url('img/project${number}-${i+1}.jpg')"></div>`);
        }
    });

    $('.close').on('click', function(){
        $('.overlay').toggleClass('active');
    });
});