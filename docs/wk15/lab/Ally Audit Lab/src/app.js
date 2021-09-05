// Elements

const delBtns = document.getElementsByClassName("fa-trash-alt");
const loginBtnTxt = document.getElementById("login").getElementsByTagName("p")[0];
const realDelBtn = document.querySelectorAll("main .card button");
const formSection = document.getElementById("form-section");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const log = document.getElementById("login");

// Event Listeners

log.addEventListener("click", login);

for (let btn of realDelBtn) {
    btn.addEventListener("click", delCard);
}

form.addEventListener("submit", addCard);

// Functions

function login() {
    if (loginBtnTxt.textContent === "Log-in") {
        loginBtnTxt.textContent = "Log-out";
        for (let btn of delBtns) {
            btn.parentElement.style.display = "inline";
        }
        formSection.style.display = "block";
    } else {
        loginBtnTxt.textContent = "Log-in";
        for (let btn of delBtns) {
            btn.parentElement.style.display = "none";
        }
        formSection.style.display = "none";
    }
}

function delCard(event) {
    event.currentTarget.parentElement.parentElement.remove();
}

function addCard(event) {
    event.preventDefault();
    // console.log(form.checkValidity()); // should be true

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.querySelector("textarea").value;

    const textDiv = createSimpleNode("div", "text");
    textDiv.appendChild( createNodeWithText("h3", title , "i-title") );
    textDiv.appendChild( createNodeWithText("p", description , "i-description") );
    textDiv.appendChild( createNodeWithText("h3", '$' + price , "i-price") );

    const buttonDiv = createSimpleNode("div", "buttons");
    const delButton = createSimpleNode("button", "btn");
    const buttonI = createSimpleNode("i", "fas fa-trash-alt");

    delButton.style.display = 'inline';  // by default .btn has display: none
    
    delButton.appendChild(buttonI);
    buttonDiv.appendChild(delButton);

    const li = createSimpleNode("li", "card");
    li.appendChild(textDiv);
    li.appendChild(buttonDiv);
    document.querySelector("ul").appendChild(li);
    
    // adding event listener to newly created button
    delButton.addEventListener("click", delCard);

    // Clear input fields
    document.getElementById("title").value = '';
    document.getElementById("price").value  = '';
    document.querySelector("textarea").value  = '';
}

// Helper functions to avoid repetition.

function createSimpleNode( element, classes ) {
    const simpleEle = document.createElement(element);
    simpleEle.className = classes;
    return simpleEle;
}

function createNodeWithText(element, content, classes) {
    const ele = createSimpleNode( element, classes );
    ele.textContent = content;
    return ele;
}
