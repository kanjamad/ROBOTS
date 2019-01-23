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
I'm not going to put anything in there <div> be cause I'll use them to build a robot!
Every shape in this robot is a shape that can create with nothing but a little bit of HTML and CSS.

This robot is made of 60 lines of CSS and about 25 lines of HTML.
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

1. Getting on the Grid
We used margin-zero-auto to build the robot parts becarde learning borders and radial gradients and CSS positioning all in one go would melt most human brains.
I need to animate the robot!, it has to be free to come and go  rool around the screen
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

position: relative;
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.( relative: this allows me to move things around on the page.)

properties: top, right, bottom left 
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


Arming the Cotbot
