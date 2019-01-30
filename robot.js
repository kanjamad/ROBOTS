 // I want to say,"JQuery; when I hear a click on .flash class, toggle the class .laser on .brain"
    // When eyes button is clicked, toggle laser class on brain
    $(".flash").click(function() {
        $(".brain").toggleClass('laser');
    });

    // When color button is clicked...
    $(".color").click(function() {
    // assign each named color a random number 0-255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    // Generate on RGBA value from red, green, and blue
    var randomRGBA = 'rgba('+red+', '+green+', '+blue+', 1)';
    
    //Display the RGBA values in an alert window ( Just want to make sure everything is work)
    alert(randomRGBA);
    });