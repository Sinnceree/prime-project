# Live Version
https://voxze.github.io/prime-project/

# Design Decision
I went with a basic design to make it easy for the user to see exactly what is going on and why.
The user has a brief title telling them what's the point of the specific website they're on and an input field.
When the user clicks the button I generate a grid to display to them the prime number that comes before their specified input.

# How does this work
I created a function that checks whether the number passed in the param is a prime number or not and if it's not continue to recursively call that
function until we either find a prime number or we're out of numbers to check. If the function finds the prime number we then display that to the user.
Or we simply display that we couldn't find a prime number before your specified input. 
