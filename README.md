# ROBOT
Buid A CSS Robot
The robot will have laser eyes.
Make a simple shapes with HTML and CSS


1. Shapes and Flow
<div> element as a container: somtimes it held images, text and help both.
divs are by default, invisible rectangles.
To make an empty <div> visible , three things have to happen:
(1)a width
(2)a hight
(3) either a background or a border color.
I'm not going to put anything in there <div> because I'll use them to build a robot!
Every shape in this robot is a shape that can create with nothing but a little bit of HTML and CSS.

This robot is made from CSS and HTML.
* Use JavaScript to activate the tricking laserbeams in its head.

2. Inventing the Wheel
According to the default, normal flow of the web everything put on a web page wants to sit flush on top of each other.
start
.foot class  will building a circle.
border control
Can make tons of different shapes with just 2 CSS properties
border-radius which played with and combination punch of border-left, border-right, border-top and border-bottom.
Can style the borders of any HTML element one by one to make trianfles, starsm trapezoids and more 
div{
    border-left: width style color;
    border-top: width style color;
    etc...
}

3. Brains!
It's time to make robot head visible.
This should be familiar : Just made the head visible by giving it color, height, and width 
add a border radius. And  style more add border-bottom property giving only one side of shape a contrasting border.


4. Laser eyes
Used a radial gradient to glowy laser eyes.
By default a round gradient wants to be centered in the HTML element that cintains it. Will use that, and also use background-size to colorl how many times and where it appears in the shape.

5. An antenna
I am going to call it antenna though. Class name beep
The CSS for the antenna is similar to the CSS for the torso shape. An extra border gives it that hourglass shape.
First, just going to flesh out thr basics of the antenna's size, style and color.
Adding a transparent left and right border will give the antenna a trapezoid shape like the torso.
But when I add a top border, something pretty neat happens!





Part 2: Using CSS to position elements on a webpage
Robot needs to rock the disco and its eyes should shoot lasers
CSS positioning in depth, The idea of "in front of" and behind inCSS, Writhing CSS transforms to fip and rotate elements.

- Getting on the Grid
Used margin-zero-auto to build the robot parts becarde learning borders and radial gradients and CSS positioning all in one go would melt most human brains.
I need to animate the robot!, it has to be free to come and go  roll around the screen
So, it's time to take the training wheels off
    - Going to kill the margin: 0 auto;
    - or delete the entire div style from CSS: height, width and margin.
CSS positioning
I need some way of telling the Cotbot's pieces to do things like move up! and scoot over to the right!
That's where the css position property comes in handy.
 ideal of X, Y, Z corrdinates.( take away from Descartes)
 Think of the screen as agrid. The top left corner has X and Y coordinates of 0,0


There are 5 ways to position things with CSS 
link : https://www.w3schools.com/css/css_positioning.asp

* static
* relative
* fixed
* absolute
* sticky

But I will use just 2 
position: static;
HTML elements are positioned static by default.
Static positioned elements are not affected by the top, bottom, left, and right properties.
How things work if I don't apply any positioning at all!

- position: relative;
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.( relative: this allows me to move things around on the page.)

- properties: top, right, bottom left 
( left, top) like (X, Y) => Use them to declare how far away something should be from the left side of, or from the top of, it's container in pixels.
* Not use right, bottom : Want everything orented from the same direction.

The Z axis goes from back to front, just as Y goes from top to bottom, X goes from left to right.
link: https://www.w3schools.com/cssref/pr_pos_z-index.asp
In CSS, say z-index
The default value for Z-index, when I don't declare any z-index, is 0.
If I want somthing to go behind my main working layer, give it a negtive value.
If I want it in front, give it a number greater than zero.

Want to move the robot around on the screen
* write CSS that affects all of the <div> on the page as if they were on unit.
* Create a new div class called robot 
* and wrap it around the four other div that are robot pieces.


- Arming the Cotbot
I could build the cotbot's arms with CSS shapes, but have other way easier tool that will give me the general shape of hands and shoulders.
Specifcally by the lowercase letter j as styled with css and rendered in a google web font. https://fonts.google.com/specimen/Poller+One?selection.family=Poller+One

- Blink 
So, will use CSS animation(need to define and need to assign it) that will make it look like laser beams are shooting out of the Cotbot's eyes!
And will animating .brain, to change the color of the eye gradient ehich is part of the background property.




Part3: Creat and Controlling Animations with JavaScript
1. Build a button to control the robot's laser eyes
2. JavaScript will generates random color.
Fire Cease Fire;
- Let's create a special class for when the eye should be blinking, from the regular .brain
Call it .laser, take all 2 animation styles out of .brain, and paste them into a new class called .laser
That will stop the blinking for now, because no HTML element is assigned the .laser class yet.
- Make a button; it will go inside and give the button a class name(flash) so JQuery can listen to it.
The .flash button will be a toggle.(Toggle is just a fancy name to say turning something on/off)
A toggle button will turn my new CSS class .laser -and animations attached to it on/off.
JQuery is a library full of helpful JavaScript. Instead of writing functions from scratch, I can write the name of commonly used funtions that already exist in the library. 
Include the JQuery library in the <head> HTML file https://www.w3schools.com/jquery/jquery_get_started.asp
There's funtion in the JQuery library call toggleClass

What's my funtion?;
A funtion is a busy little machine that only does one thing. That thing will either be: it does something useful or ir returns a value.

The next thing the robot will do is change the background color on the whole page. Every time I click a button, I'll get a new color. If I click the button really fast, it will look like flashing strobe lights at a dance club. Instead of writing one alternate body style and toggling it on or off, I do generate an infinite number of completely random colors!! with code!!! (My code will say: 1. when a button is clicked 2. generate a completely random color value 3. Then change the <body>'s background to the new color). Remember RGBA?; rgba(red, green, blue, alpha) The red, green and blue values are numbers between 0 and 255; the alpha scale runs from 0 to 1. Create a random RGBA value involes picking 3 random numbers ( between 0 and 255) then assigning 1 as the alpha value. 
This is how ask JavaScript to provide a random number between 0 and 255.
*       Math.floor(Math.random() *255)
It works like this : Math.random creates a random number between 0 and 1.
*       0 x 255 = 0
*       1 x 255 = 255
Multiply that random number by 255, I get a random number between 0 and 255.
Example
Math.floor is that rounds any value down to a whole number.
0.5 x 225 = 127.5
Math.floor(127.5) = 127
other example
0.831 x 255 = 211.905
Math.floor(211.905) = 211

- Step one;  I'll generate random whole numbers between 0 and 255 to make RGB values 
- Step two; make JavaScript remember those numbers.

How write one funtion that creates 3 variable - red, green,and blue - when the color button is click?
This how ask one funtion to create multiple variable;    
    $(".color").click(function() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
This says: when .color is clicked, generate a red value between 0 and 255, and a greeen value 0-255, and a blue value 0-255.
Click it again Variables have a short attention spans. Every time I click the color button, the browsers runs the click script all over again, and I get brand new values.

    

