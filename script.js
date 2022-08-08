"use strict";

const account1 = {
  name: "Jan Kowalski",
  login: "qwe",
  password: "123",
};
const account2 = {
  name: "Mateusz Bendarski",
  login: "asd",
  password: "321",
};
const account3 = {
  name: "Magdalena Biernacz",
  login: "zxc",
  password: "987",
};

const accounts = [
  account1,
  account2,
  account3,
];

const lang =
  document.querySelector(".languge");
const langPng = document.querySelector(
  ".lang_png"
);
const langTxt = document.querySelector(
  ".lang_info"
);

langPng.addEventListener(
  "click",
  function () {
    if (langTxt.value === "ENG") {
      console.log("zmien");
      langTxt.innerHTML = "PL";
    }
  }
);

// for future pop up window
{
  /* <div class="add_item">
          <p class="title_label">Add item on auctions</p>
          <div class="chose_category">
            <p class="add_item_text">Chose category:</p>
            <select class="category_list">
              <option value=1>AGD</option>
              <option value=2>Antique</option>
              <option value=3>Cars</option>
              <option value=4>Clothes</option>
              <option value=5>Electronics</option>
              <option value=6>Health</option>
              <option value=7>Kid</option>
              <option value=8>Real Estate</option>
              <option value=9>Others</option>
            </select>
          </div>
          <div class="chose_category">
            <p  class="add_item_text">Title:</p>
            <input type="text" placeholder="Title"  class="input_item">
            </input>
          </div>
          <div class="chose_category">
            <p  class="add_item_text">Description:</p>
            <textarea placeholder="Description" class="input_item desc_input"></textarea>
          </div>
          <div class="chose_category">
            <p  class="add_item_text">Starting Bid:</p>
            <input type="number" placeholder="Starting Bid" class="input_item">
            </input>
          </div>
          <button class="add_itembtn">Add item on auction</button>
        </div> */
}
