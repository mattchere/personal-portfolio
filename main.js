// Enable scrollspy plugin
$('body').scrollspy({ 
    target: '#navbar' 
});

// Smooth scrolling for navigation links
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);
});
