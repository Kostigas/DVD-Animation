# DVD-Aniamtion
 This project creates a simple bouncing DVD logo animation using p5.js. The iconic DVD logo, known for its mesmerizing movement in DVD player screensavers, is recreated here as an interactive canvas animation.

# How It Works

- ## Canvas Setup:
  - The canvas is created to match the user’s screen dimensions using `createCanvas(windowWidth, windowHeight)`.
  - The background is set to black (`background(0)`).
- ## Logo Movement:
  - The logo (an ellipse) moves horizontally (`speedX`) and vertically (`speedY`) across the canvas.
  - When the logo reaches the canvas borders, it bounces back by reversing its speed.
  - The logo’s color (`rColour`, `gColour`, `bColour`) changes randomly upon bouncing.
- ## Display:
  - The logo is drawn as an ellipse using `ellipse(x, y, diameter, diameter/2)`.
  - The text “DVD” is displayed at the center of the ellipse.
- ## Responsive Design:
  - The canvas adjusts its size when the window is resized using the ``windowResized()`` function.

# Customization

- Adjust the `diameter` variable to change the size of the logo.
- Modify the `speedX` and `speedY` values to control the logo’s movement speed.
- Experiment with different colors by changing the `rColour`, `gColour`, and `bColour` variables.
