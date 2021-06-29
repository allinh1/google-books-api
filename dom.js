import { getBooks } from "./api.js";

const form = document.getElementById("apiForm");

const cardElement = (url, title, author, Snippet, parent) => {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "dispCard")

    const newImg = document.createElement("img");
        newImg.setAttribute("src", url);
        newImg.setAttribute("class", "Img");
        newImg.setAttribute("id", "Modal");
        newCard.appendChild(newImg);

    // const newElement = document.createElement(type);
    // newElement.setAttribute("class", "info");

    const bookName = document.createTextNode(title);
        // bookName.setAttribute("class", "Book");
    newCard.appendChild(bookName);

    const writers = document.createTextNode(author);
        // writers.setAttribute("class", "Author");
    newCard.appendChild(writers);

    const description = document.createTextNode(Snippet);
        // descr.setAttribute("class", "descript");
    newCard.appendChild(description);

    parent.appendChild(newCard);
};

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.getElementById("inputText").value;
    const data = await getBooks(input);
    const dataOutput = document.getElementById("data");

    for (let i = 0; i < data.length; ++i) {
        cardElement (
          `${data[i].volumeInfo?.imageLinks?.thumbnail ?? "No Image Found"}` ,
          `${data[i].volumeInfo.title} `,
          `${data[i].volumeInfo.authors} `,
          `${data[i].searchInfo?.textSnippet ?? "No Snippet Found"} `,
          dataOutput
        )
    }
});

// const modal = document.getElementByClass("Modal")
// const img = document.getElementById("Img")

// img.onclick = function() {
//     modal.style.display = "block"
// }

// const createElementWithText = (type, text, parent) => {
//     const newElement = document.createElement(type);
//     const textNode = document.createTextNode(text);
//     newElement.appendChild(textNode);
//     parent.appendChild(newElement);

// createElementWithText(
//     "img",
//     `${data[i].volumeInfo.imageLinks.smallThumbnail}`,
//     dataOutput
// );

// createElementWithText(
//     "H1",
//     `${data[i].volumeInfo.title}`,
//     dataOutput
// );

// createElementWithText(
//     "H2",
//     `${data[i].volumeInfo.authors}`,
//     dataOutput
// )

// createElementWithText(
//     "P",
//     `${data[i].volumeInfo.description}`,
//     dataOutput
// )