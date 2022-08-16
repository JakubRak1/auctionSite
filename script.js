"use strict";
// Data

const main = () => {
  const account1 = {
    name: "Jan Kowalski",
    login: "qwe",
    password: "123",
    email: "kubarak1939@gmail.com",
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

  let accounts = [
    account1,
    account2,
    account3,
  ];

  let currentAccount = "";

  // DOM Elements//

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
  let titlePopWindow =
    document.querySelector(
      "#pop_title"
    );
  let textPopWindow =
    document.querySelector("#pop_text");

  let btnClosePopWindow =
    document.querySelector(
      "#close_pop_window"
    );

  const btnRegisterNewAcc =
    document.querySelector(
      "#register_btn"
    );
  const btnRecoveryPass =
    document.querySelector(
      "#recover_btn"
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

  btnRecoveryPass.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      recoverWindow();
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
        <p class="submit_title">Login (3 char):</p>
        <p class="submit_title">Password (3 char):</p>
        <p class="submit_title">Confirm Password :</p>
        <p class="submit_title">Email :</p>
        <p class="submit_title">Street :</p>
        <p class="submit_title">Town :</p>
        <p class="submit_title">ZIP Code (..-... format):</p>
        <p class="submit_title">Phone number (without +):</p>
      </div>
      <div class="column_container">
        <input
          type="text"
          placeholder="First Name"
          maxlength="15"
          class="input_newAcc"
          id="first_nacc"
        />
        <input
          type="text"
          placeholder="Last Name"
          maxlength="15"
          class="input_newAcc"
          id="last_nacc"
        />
        <input
          type="text"
          placeholder="Login"
          maxlength="3"
          class="input_newAcc"
          id="login_nacc"
        />
        <input
          type="text"
          placeholder="Password"
          maxlength="3"
          class="input_newAcc"
          id="password_nacc"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          maxlength="3"
          class="input_newAcc"
          id="confirm_nacc"
        />
        <input
          type="text"
          placeholder="Email"
          maxlength="15"
          class="input_newAcc"
          id="email_nacc"
        />
        <input
          type="text"
          placeholder="Street"
          maxlength="15"
          class="input_newAcc"
          id="street_nacc"
        />
        <input
          type="text"
          placeholder="Town"
          maxlength="15"
          class="input_newAcc"
          id="town_nacc"
        />
        <input
          type="text"
          placeholder="ZIP Code"
          maxlength="6"
          class="input_newAcc"
          id="ZIP_nacc"
        />
        <input
          type="text"
          placeholder="Phone Number"
          maxlength="9"
          class="input_newAcc"
          id="phone_nacc"
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
    const btnClosePopWindow =
      document.querySelector(
        "#close_pop_window"
      );
    const btnSubmitNewAccount =
      document.querySelector(
        "#submit_register"
      );
    const containerSubmit =
      document.querySelector(
        ".submit_container"
      );
    const inputFirstName =
      document.querySelector(
        "#first_nacc"
      );
    const inputLastName =
      document.querySelector(
        "#last_nacc"
      );
    const inputLogin =
      document.querySelector(
        "#login_nacc"
      );
    const inputPassword =
      document.querySelector(
        "#password_nacc"
      );
    const inputConfirmPassword =
      document.querySelector(
        "#confirm_nacc"
      );
    const inputEmail =
      document.querySelector(
        "#email_nacc"
      );
    const inputStreet =
      document.querySelector(
        "#street_nacc"
      );
    const inputTown =
      document.querySelector(
        "#town_nacc"
      );
    const inputZIP =
      document.querySelector(
        "#ZIP_nacc"
      );
    const inputPhone =
      document.querySelector(
        "#phone_nacc"
      );
    btnClosePopWindow.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        closeWindow();
        resetPopWindow();
      }
    );
    btnSubmitNewAccount.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        if (
          inputFirstName.value.length >
            0 &&
          inputLastName.value.length >
            0 &&
          inputLogin.value.length ==
            3 &&
          inputPassword.value.length ==
            3 &&
          inputPassword.value ===
            inputConfirmPassword.value &&
          inputEmail.value.length > 0 &&
          inputEmail.value.includes(
            "@"
          ) &&
          inputStreet.value.length >
            0 &&
          inputZIP.value.length > 0 &&
          inputZIP.value.includes(
            "-"
          ) &&
          Number(
            inputZIP.value.replace(
              "-",
              ""
            )
          ) > 0 &&
          inputTown.value.length > 0 &&
          inputPhone.value.length > 0 &&
          Number(inputPhone.value) > 0
        ) {
          let firstNAcc =
            inputFirstName.value;
          firstNAcc =
            stringCorrect(firstNAcc);
          let LastNAcc =
            inputLastName.value;
          LastNAcc =
            stringCorrect(LastNAcc);
          const fullNameNAcc =
            firstNAcc + " " + LastNAcc;
          const loginNAcc =
            inputLogin.value.trim();
          const passwordNAcc =
            inputPassword.value.trim();
          const emailNAcc =
            inputEmail.value.trim();
          let streetNAcc =
            inputStreet.value.trim();
          let townNAcc =
            inputTown.value.trim();
          let ZIPNAcc =
            inputZIP.value.trim();
          const adressNAcc =
            stringCorrect(streetNAcc) +
            ", " +
            stringCorrect(townNAcc) +
            " " +
            ZIPNAcc;
          const phoneNAcc =
            +inputPhone.value;
          createNewAccount(
            fullNameNAcc,
            loginNAcc,
            passwordNAcc,
            emailNAcc,
            adressNAcc,
            phoneNAcc
          );
          resetPopWindow();
          closeWindow();
          dispPopWindow(
            "Account created",
            "Your Account has been created, now you can log in"
          );
          //email sent....
        } else {
          resetPopWindow();
          closeWindow();
          dispPopWindow(
            "Account not-created",
            "Not all blank spaces were filled or data was wrong"
          );
        }
      }
    );
  };

  const createNewAccount = function (
    name,
    login,
    password,
    email,
    adress,
    phoneNumber
  ) {
    let newAcc =
      "account" + (accounts.length + 1);
    const TempAcc = {
      name: name,
      login: login,
      password: password,
      email: email,
      adress: adress,
      phone: phoneNumber,
      messages: [],
      auctions: [],
    };
    TempAcc.propertyName = newAcc;
    accounts.push(TempAcc);
    return TempAcc;
  };

  const stringCorrect = function (
    string
  ) {
    let newString = string.trim();
    return (newString =
      newString[0].toUpperCase() +
      newString.slice(1).toLowerCase());
  };
  const resetPopWindow = () => {
    popWindow.innerHTML = `
        <h1
          class="title_label"
          id="pop_title"
        >
          TEST TEST
        </h1>
        <p
          class="text_label"
          id="pop_text"
        >
          Testing testing
        </p>
        <div class="pop_buttons">
          <button
            class="left_btn"
            id="close_pop_window"
          >
            Close
          </button>
        </div>
      `;
    titlePopWindow =
      document.querySelector(
        "#pop_title"
      );
    textPopWindow =
      document.querySelector(
        "#pop_text"
      );
    btnClosePopWindow =
      document.querySelector(
        "#close_pop_window"
      );
    btnClosePopWindow.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        closeWindow();
      }
    );
  };

  const recoverWindow = () => {
    popWindow.classList.toggle(
      "disp_none"
    );
    popWindow.innerHTML = `<h1
    class="title_label"
  >
    Recovery your Password
  </h1>
  <p
    class="text_label"
  >
    Please enter your login to recovery your password
  </p>
  <form>
    <div class="submit_container">
        <p class="submit_title">Login :</p>
        <input
          type="text"
          placeholder="Login"
          maxlength="3"
          class="input_newAcc"
          id="login_RecPass"
        />
    </div>
  </form>
  <div class="pop_buttons">
    <button
      class="left_btn"
      id="submit_RecoveryPass"
    >
      Submit
    </button>
    <button
      class="left_btn"
      id="close_pop_window"
    >
      Close
    </button>`;
    const btnClosePopWindow =
      document.querySelector(
        "#close_pop_window"
      );
    const btnSubmitRecPass =
      document.querySelector(
        "#submit_RecoveryPass"
      );
    const inputLoginRecPass =
      document.querySelector(
        "#login_RecPass"
      );

    btnClosePopWindow.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        closeWindow();
        resetPopWindow();
      }
    );
    btnSubmitRecPass.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        currentAccount = accounts.find(
          (acc) =>
            acc.login ===
            inputLoginRecPass.value
        );
        if (currentAccount) {
          resetPopWindow();
          closeWindow();
          let emailtext = `Your PASSWORD is : ${currentAccount.password} \n And LOGIN: ${currentAccount.login}.`;
          sendEmail(
            "Recovery email",
            emailtext,
            currentAccount.email
          );
          currentAccount = "";
        } else {
          resetPopWindow();
          closeWindow();
          dispPopWindow(
            "Recovery email",
            "There is none account with this login"
          );
        }
      }
    );
  };

  const sendEmail = function (
    title,
    text,
    email
  ) {
    Email.send({
      SecureToken:
        "164ad37e-af2d-4ea7-8b53-4f99c4abf814",
      To: email,
      From: "sklepafk@gmail.com",
      Subject: title,
      Body: text,
    }).then((message) => {
      if (message === "OK") {
        dispPopWindow(
          "Recovery email",
          "Email was send to you"
        );
      } else {
        dispPopWindow(
          "Recovery email",
          "There were error while sending Email"
        );
      }
    });
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
