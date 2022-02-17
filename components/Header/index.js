// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const spanElement = document.createElement('span');
    spanElement.classList.add('date');
    spanElement.textContent = "MARCH 28, 2019";
    headerDiv.appendChild(spanElement);

    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";
    headerDiv.appendChild(h1);

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    spanTemp.textContent = "98°";
    headerDiv.appendChild(spanTemp);


    return headerDiv;
}

const elementContainer = document.querySelector(".header-container");

elementContainer.appendChild(Header());