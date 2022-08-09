"use strict";
// Data
const main = () => {
  const account1 = {
    name: "Jan Kowalski",
    login: "qwe",
    password: "123",
    messages: [],
    auctions: [],
  };
  const account2 = {
    name: "Mateusz Bendarski",
    login: "asd",
    password: "321",
    messages: [],
    auctions: [],
  };
  const account3 = {
    name: "Magdalena Biernacz",
    login: "zxc",
    password: "987",
    messages: [],
    auctions: [],
  };

  const accounts = [
    account1,
    account2,
    account3,
  ];
  let mainApp =
    document.querySelector("#main");
  let currentAccount;
  // DOM Elements//
  //Log in elements
  const logBtn = document.querySelector(
    "#login_btn"
  );
  const logName =
    document.querySelector(
      ".login_input--login"
    );
  const logPass =
    document.querySelector(
      ".login_input--password"
    );
  const welcomeText =
    document.querySelector(
      ".welcome_text"
    );
  //Png buttons
  const lang =
    document.querySelector(".languge");
  const sellSortBtn =
    document.querySelector(
      "#sell_sort"
    );
  const buySortBtn =
    document.querySelector("#buy_sort");
  //Event listner//

  logBtn.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      logIn();
    }
  );
  //Btn changes colors with img
  lang.addEventListener(
    "mouseover",
    () => {
      selectBtnPng(
        ".lang_png",
        "lang_png_over"
      );
      selectBtnPng(
        ".lang_info",
        "lang_text_over"
      );
    }
  );

  lang.addEventListener(
    "mouseout",
    () => {
      disSelectBtnPng(
        ".lang_png",
        "lang_png_over"
      );
      disSelectBtnPng(
        ".lang_info",
        "lang_text_over"
      );
    }
  );

  sellSortBtn.addEventListener(
    "mouseover",
    () => {
      selectBtnPng(
        "#sort_sell_img",
        "sorting_img_over"
      );
      document.querySelector(
        "#sort_sell_img"
      ).src = "img/sell_white.png";
      selectBtnPng(
        "#sort_sell_text",
        "sort_text_over"
      );
    }
  );

  sellSortBtn.addEventListener(
    "mouseout",
    () => {
      disSelectBtnPng(
        "#sort_sell_img",
        "sorting_img_over"
      );
      document.querySelector(
        "#sort_sell_img"
      ).src = "img/sell.png";
      disSelectBtnPng(
        "#sort_sell_text",
        "sort_text_over"
      );
    }
  );

  buySortBtn.addEventListener(
    "mouseover",
    () => {
      selectBtnPng(
        "#sort_buy_img",
        "sorting_img_over"
      );
      document.querySelector(
        "#sort_buy_img"
      ).src = "img/buy_white.png";
      selectBtnPng(
        "#sort_buy_text",
        "sort_text_over"
      );
    }
  );

  buySortBtn.addEventListener(
    "mouseout",
    () => {
      disSelectBtnPng(
        "#sort_buy_img",
        "sorting_img_over"
      );
      document.querySelector(
        "#sort_buy_img"
      ).src = "img/buy.png";
      disSelectBtnPng(
        "#sort_buy_text",
        "sort_text_over"
      );
    }
  );
  //Functions//

  const logIn = () => {
    currentAccount = accounts.find(
      (acc) =>
        acc.login === logName.value
    );
    if (
      +currentAccount?.password ===
      +logPass.value
    ) {
      welcomeText.textContent =
        currentAccount.name;
      mainApp.classList.toggle(
        "disp_none"
      );
      mainApp.classList.toggle("app");
      logName.value = logPass.value =
        "";
      logName.blur();
      logPass.blur();
    } else {
      logName.value = logPass.value =
        "";
      logName.blur();
      logPass.blur();
    }
  };

  const selectBtnPng = (
    selectedElementByClass,
    className
  ) => {
    document
      .querySelector(
        `${selectedElementByClass}`
      )
      .classList.add(`${className}`);
  };
  const disSelectBtnPng = (
    selectedElementByClass,
    className
  ) => {
    document
      .querySelector(
        `${selectedElementByClass}`
      )
      .classList.remove(`${className}`);
  };

  mainApp.classList.toggle("disp_none");
  mainApp.classList.toggle("app");

  // for future pop up window

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
};
main();
