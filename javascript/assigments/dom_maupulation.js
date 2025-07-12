// // 1. Create <div> with text and append
// const newDiv = document.createElement("div");
// newDiv.textContent = "This is a new div!";
// document.body.appendChild(newDiv);

// // 2. Remove specific element by ID
// const removeEl = document.getElementById("removeMe");
// removeEl.remove();

// // 3. Create <ul> with 5 <li> items
// const ul = document.createElement("ul");
// for (let i = 1; i <= 5; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Item ${i}`;
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);

// // 4. Replace an existing <div>
// const replaceMe = document.getElementById("replaceMe");
// const newReplaceDiv = document.createElement("div");
// newReplaceDiv.textContent = "This is the new replaced div.";
// replaceMe.replaceWith(newReplaceDiv);

// // 5. Change src and alt of an image
// const image = document.getElementById("myImage");
// image.src = "new.jpg";
// image.alt = "New image";

// // 6. Change textContent of an element
// document.getElementById("textPara").textContent = "This is new text";

// // 7. Remove one class and add another
// const classEl = document.getElementById("classDiv");
// classEl.classList.remove("oldClass");
// classEl.classList.add("newClass");

// // 8. Insert <p> before existing <h2>
// const h2 = document.getElementById("titleH2");
// const newPara = document.createElement("p");
// newPara.textContent = "Inserted before H2";
// document.body.insertBefore(newPara, h2);

// // 9. Set innerHTML to create multiple <p> elements
// document.getElementById("htmlContainer").innerHTML = `
//   <p>Paragraph 1</p>
//   <p>Paragraph 2</p>
// `;

// // 10. Create a styled <div>
// const styledDiv = document.createElement("div");
// styledDiv.textContent = "Styled Box";
// styledDiv.style.width = "150px";
// styledDiv.style.height = "100px";
// styledDiv.style.backgroundColor = "lightblue";
// document.getElementById("styledDivContainer").appendChild(styledDiv);

// // 11. Clone existing element and append
// const original = document.getElementById("cloneTarget");
// const clone = original.cloneNode(true);
// document.body.appendChild(clone);

// // 12. Create input with placeholder
// const input = document.createElement("input");
// input.placeholder = "Enter your name";
// document.body.appendChild(input);

// // 16. Clear all children from a <div>
// const clearDiv = document.getElementById("clearDiv");
// while (clearDiv.firstChild) {
//   clearDiv.removeChild(clearDiv.firstChild);
// }

// // 18. Insert paragraph as first child
// const firstDiv = document.getElementById("firstChildDiv");
// const firstPara = document.createElement("p");
// firstPara.textContent = "I am the first child!";
// firstDiv.insertBefore(firstPara, firstDiv.firstChild);

// // 19. Create style tag and add CSS
// const styleTag = document.createElement("style");
// styleTag.textContent = `
//   .newClass { color: green; font-weight: bold; }
//   .highlighted { background-color: yellow; }
// `;
// document.head.appendChild(styleTag);

// 20. Check if class exists on element
const classCheck = document.getElementById("classCheck");
console.log("Has 'highlighted' class?", classCheck.classList.contains("highlighted"));
