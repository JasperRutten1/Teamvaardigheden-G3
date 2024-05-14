function testFunction() {
    console.log("JavaScript file is linked correctly!");
}

testFunction(); // Output: JavaScript file is linked correctly!

function showTools(category) {
    // Get all the tools
    const tools = document.getElementsByClassName('tool');

    // Loop through each tool
    for (let i = 0; i < tools.length; i++) {
        const tool = tools[i];

        // Check if the tool belongs to the given category
        if (tool.classList.contains(category)) {
            // Show the tool
            tool.style.display = 'block';
        } else {
            // Hide the tool
            tool.style.display = 'none';
        }
    }
}



const categories = ['mail', 'chat', 'programmeren', 'ontwerpen', 'taal', 'planning'];

// Loop through each category
for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    // Get the button for the category
    const button = document.getElementById(category);

    // Call the showTools function with the category when the button is pressed
    button.addEventListener('click', function () {
        // Remove the active class from all buttons
        for (let j = 0; j < categories.length; j++) {
            document.getElementById(categories[j]).classList.remove('button-active');
        }

        // Add the active class to the pressed button
        button.classList.add('button-active');

        // Show the tools of the given category
        showTools(category);
    });
}