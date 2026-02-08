// Select all color buttons
const buttons = document.querySelectorAll(".btn");

// Add click listener to each button
buttons.forEach(function(btn) {

    btn.addEventListener("click", function() {
        
        // second class => color name (red, blue, green, yellow)
        const color = btn.classList[1];

        // Apply the color to the body background
        document.body.style.background = color;
    });

});
