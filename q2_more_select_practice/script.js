// PLACE YOUR CODE HERE

// REPLACE THE NULL ON EACH LINE BELOW WITH YOUR ANSWER
// DO NOT CHANGE THE VARIABLE NAMES

// Q1 - select the first <h2> element in the document
header2 = document.querySelector("h2")
// Q2 - select the first element with the class "highlight"
highlight = document.querySelector(".highlight");
// Q3 - select the first <span class="highlight"> in the document
spanHighlight = document.querySelector("span[class=highlight]");
// Q4 - select the first element that has the class 'finished'
finished = document.querySelector(".finished");
// Q5 - select the first <p> element in the document
firstParagraph = document.querySelector("p");
// Q6 - select the first <p class="emphasis"> in the document
emphasisParagraph = document.querySelector("p.emphasis");

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header2, highlight, spanHighlight, finished, firstParagraph, emphasisParagraph};
} catch (e) {}