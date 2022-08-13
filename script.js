"use strict";
// Data

const main = () => {
  const account1 = {
    name: "Jan Kowalski",
    login: "qwe",
    password: "123",
    email: "jankowalski@gmail.com",
    adress: "Krzywa 10 Kraków",
    phone: "887855697",
    messages: [],
    auctions: [],
  };
  const account2 = {
    name: "Mateusz Bendarski",
    login: "asd",
    password: "321",
    email: "mateuszek@gmail.com",
    adress: "Pokrzeczna 10 Kraków",
    phone: "785987456",
    messages: [],
    auctions: [],
  };
  const account3 = {
    name: "Magdalena Biernacz",
    login: "zxc",
    password: "987",
    email: "madzia@gmail.com",
    adress: "Krzywa 10 Wrocław",
    phone: "236547892",
    messages: [],
    auctions: [],
  };

  const accounts = [
    account1,
    account2,
    account3,
  ];

  let currentAccount;

  // DOM Elements//
  //Log in elements

  const mainApp =
    document.querySelector("#main");

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
  const popWindow =
    document.querySelector(
      ".pop_window"
    );
  const titlePopWindow =
    document.querySelector(
      "#pop_title"
    );
  const textPopWindow =
    document.querySelector("#pop_text");

  const btnClosePopWindow =
    document.querySelector(
      "#close_pop_window"
    );

  const btnRegisterNewAcc =
    document.querySelector(
      "#register_btn"
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
  btnClosePopWindow.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      closeWindow();
    }
  );
  btnRegisterNewAcc.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      registerWindow();
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
      dispPopWindow(
        "Login Sucusefull",
        "You have been log-in"
      );
    } else {
      logName.value = logPass.value =
        "";
      logName.blur();
      logPass.blur();
      dispPopWindow(
        "Login Failed",
        "You provided wrong login or password"
      );
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

  const dispPopWindow = (
    title,
    text
  ) => {
    popWindow.classList.toggle(
      "disp_none"
    );
    titlePopWindow.textContent = title;
    textPopWindow.textContent = text;
  };

  const closeWindow = () => {
    popWindow.classList.toggle(
      "disp_none"
    );
  };

  const registerWindow = () => {
    popWindow.classList.toggle(
      "disp_none"
    );
    popWindow.innerHTML = `<h1
    class="title_label"
  >
    Register New Account
  </h1>
  <p
    class="text_label"
  >
    Please provide bellow informations
  </p>
  <form>
    <div class="submit_container">
      <div class="column_container">
        <p class="submit_title">First Name :</p>
        <p class="submit_title">Last Name :</p>
        <p class="submit_title">Login:</p>
        <p class="submit_title">Password :</p>
        <p class="submit_title">Confirm Password :</p>
        <p class="submit_title">Email :</p>
        <p class="submit_title">Street :</p>
        <p class="submit_title">Town :</p>
        <p class="submit_title">ZIP Code :</p>
        <p class="submit_title">Phone number :</p>
      </div>
      <div class="column_container">
        <input
          type="text"
          placeholder="First Name"
          maxlength="15"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Last Name"
          maxlength="15"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Login"
          maxlength="3"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Password"
          maxlength="3"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          maxlength="3"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Email"
          maxlength="15"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Street"
          maxlength="15"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Town"
          maxlength="15"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="ZIP Code"
          maxlength="6"
          class="input_newAcc"
        />
        <input
          type="text"
          placeholder="Phone Number"
          maxlength="15"
          class="input_newAcc"
        />
      </div>
    </div>
  </form>
  <div class="pop_buttons">
    <button
      class="left_btn"
      id="submit_register"
    >
      Submit
    </button>
    <button
      class="left_btn"
      id="close_pop_window"
    >
      Close
    </button>`;
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

{
  /* <div class="pop_window">
      <h1
        class="title_label"
      >
        Register New Account
      </h1>
      <p
        class="text_label"
      >
        Please provide bellow informations
      </p>
      <form>
        <div class="submit_container">
          <div class="column_container">
            <p class="submit_title">First Name :</p>
            <p class="submit_title">Last Name :</p>
            <p class="submit_title">Login:</p>
            <p class="submit_title">Password :</p>
            <p class="submit_title">Confirm Password :</p>
            <p class="submit_title">Email :</p>
            <p class="submit_title">Street :</p>
            <p class="submit_title">Town :</p>
            <p class="submit_title">ZIP Code :</p>
            <p class="submit_title">Phone number :</p>
          </div>
          <div class="column_container">
            <input
              type="text"
              placeholder="First Name"
              maxlength="15"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Last Name"
              maxlength="15"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Login"
              maxlength="3"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Password"
              maxlength="3"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              maxlength="3"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Email"
              maxlength="15"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Street"
              maxlength="15"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Town"
              maxlength="15"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              maxlength="6"
              class="input_newAcc"
            />
            <input
              type="text"
              placeholder="Phone Number"
              maxlength="15"
              class="input_newAcc"
            />
          </div>
        </div>
      </form>
      <div class="pop_buttons">
        <button
          class="left_btn"
          id="submit_register"
        >
          Submit
        </button>
        <button
          class="left_btn"
          id="close_pop_window"
        >
          Close
        </button>
      </div> */
}
