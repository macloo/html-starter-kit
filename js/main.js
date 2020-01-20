// create variables for each item on the page you want to work with
// using UNIQUE ID attributes from your HTML file

pic1 = document.querySelector("#small-frame-pic");
text1 = document.querySelector("#small-frame-text");

pic2 = document.querySelector("#man-on-vespa-pic");
text2 = document.querySelector("#man-on-vespa-text");

// hide the text divs
text1.style.display = "none";
text2.style.display = "none";

// handle the mouseover effects
pic1.onmouseenter = (e) => {
    pic1.style.display = "none";
    text1.style.display = "block";
};
text1.onmouseleave = (e) => {
    text1.style.display = "none";
    pic1.style.display = "block";
};

pic2.onmouseenter = (e) => {
    pic2.style.display = "none";
    text2.style.display = "block";
};
text2.onmouseleave = (e) => {
    text2.style.display = "none";
    pic2.style.display = "block";
};
