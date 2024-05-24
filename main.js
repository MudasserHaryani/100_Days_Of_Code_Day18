/*🚀 Day 18 Challenge: Start Coding! 🚀

Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/
//Set up details about smartphone 
var smartPhone = {
    make: "Xiaomi",
    model: "Note 12 Pro",
    specs: {
        storage: "256GB",
        ScreenSize: "6.3 inches",
        batterCapacity: "5000 mAh"
    }
};
// Shows what we've set up about the smartphone
console.log(smartPhone);
//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// A list showing a programmer's skills in detail 
var developerSkills = {
    languages: ["JavaScript", "Typescript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list 
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
//Showing a skill from each category
console.log("Language: ".concat(languages[0], ". Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
console.log("Language: ".concat(languages[1], ". Framework: ").concat(frameworks[1], ", Tool: ").concat(tools[1]));
console.log("Language: ".concat(languages[2], ". Framework: ").concat(frameworks[2], ", Tool: ").concat(tools[2]));
/*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.*/
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    //Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
//Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "dark");
//Showing the user's choice
console.log(userPreference);
