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
    popWindow.classList.remove(
      "disp_none"
    );
    titlePopWindow.textContent = title;
    textPopWindow.textContent = text;
  };

  const closeWindow = () => {
    popWindow.classList.add(
      "disp_none"
    );
  };

  const registerWindow = () => {
    popWindow.classList.remove(
      "disp_none"
    );
    popWindow.innerHTML = registerHTML;

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
    const inputAreaCode =
      document.querySelector(
        "#areacode_nacc"
      );
    const inputPhone =
      document.querySelector(
        "#phone_nacc"
      );
    const allInputs = [
      inputFirstName,
      inputLastName,
      inputLogin,
      inputPassword,
      inputConfirmPassword,
      inputEmail,
      inputStreet,
      inputTown,
      inputZIP,
      inputAreaCode,
      inputPhone,
    ];

    allInputs.forEach(function (
      element
    ) {
      element.addEventListener(
        "blur",
        (e) => {
          checkInputs(
            e,
            "You must fill this position"
          );
        }
      );
    });
    inputConfirmPassword.addEventListener(
      "blur",
      (e) => {
        checkConfirmInput(
          e,
          "Password are not the same",
          inputPassword.value
        );
      }
    );
    inputEmail.addEventListener(
      "blur",
      (e) => {
        checkEmailInput(
          e,
          "Enter correct email adress  "
        );
      }
    );
    inputAreaCode.addEventListener(
      "blur",
      (e) => {
        checkAreaInput(
          e,
          "Area code is incorect"
        );
      }
    );
    inputPhone.addEventListener(
      "blur",
      (e) => {
        checkPhoneInput(
          e,
          "Phone number is incorect"
        );
      }
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
          !document.querySelector(
            ".eror_space"
          )
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
            inputAreaCode.value +
            inputPhone.value;
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

  const checkInputs = (e, text) => {
    if (!e.target.value) {
      e.target.classList.add(
        "red_border"
      );
      const parent = e.target.closest(
        ".name-input_container"
      );
      if (!parent.nextElementSibling)
        parent.insertAdjacentHTML(
          "afterend",
          `<p class="eror_space">${text}</p>`
        );
    } else {
      e.target.classList.remove(
        "red_border"
      );
      if (
        e.target.closest(
          ".name-input_container"
        ).nextElementSibling
      ) {
        const parent = e.target.closest(
          ".name-input_container"
        );
        parent.nextElementSibling.remove();
      }
    }
  };

  const checkConfirmInput = (
    e,
    text,
    compare
  ) => {
    if (e.target.value != compare) {
      e.target.classList.add(
        "red_border"
      );
      const parent = e.target.closest(
        ".name-input_container"
      );
      if (!parent.nextElementSibling)
        parent.insertAdjacentHTML(
          "afterend",
          `<p class="eror_space">${text}</p>`
        );
    } else {
      e.target.classList.remove(
        "red_border"
      );
      if (
        e.target.closest(
          ".name-input_container"
        ).nextElementSibling
      ) {
        const parent = e.target.closest(
          ".name-input_container"
        );
        parent.nextElementSibling.remove();
      }
    }
  };

  const checkEmailInput = (e, text) => {
    if (!e.target.value.includes("@")) {
      e.target.classList.add(
        "red_border"
      );
      const parent = e.target.closest(
        ".name-input_container"
      );
      if (!parent.nextElementSibling)
        parent.insertAdjacentHTML(
          "afterend",
          `<p class="eror_space">${text}</p>`
        );
    } else {
      e.target.classList.remove(
        "red_border"
      );
      if (
        e.target.closest(
          ".name-input_container"
        ).nextElementSibling
      ) {
        const parent = e.target.closest(
          ".name-input_container"
        );
        parent.nextElementSibling.remove();
      }
    }
  };
  const checkAreaInput = (e, text) => {
    if (
      !(
        e.target.value.includes("+") &&
        +e.target.value.replace(
          "+",
          ""
        ) > -1
      )
    ) {
      e.target.classList.add(
        "red_border"
      );
      const parent = e.target.closest(
        ".name-input_container"
      );
      if (!parent.nextElementSibling)
        parent.insertAdjacentHTML(
          "afterend",
          `<p class="eror_space">${text}</p>`
        );
    } else {
      e.target.classList.remove(
        "red_border"
      );
      if (
        e.target.closest(
          ".name-input_container"
        ).nextElementSibling
      ) {
        const parent = e.target.closest(
          ".name-input_container"
        );
        parent.nextElementSibling.remove();
      }
    }
  };
  const checkPhoneInput = (e, text) => {
    if (
      !(
        +e.target.value > -1 &&
        (e.target.value.length === 9 ||
          e.target.value.length === 7)
      )
    ) {
      e.target.classList.add(
        "red_border"
      );
      const parent = e.target.closest(
        ".name-input_container"
      );
      if (!parent.nextElementSibling)
        parent.insertAdjacentHTML(
          "afterend",
          `<p class="eror_space">${text}</p>`
        );
    } else {
      e.target.classList.remove(
        "red_border"
      );
      if (
        e.target.closest(
          ".name-input_container"
        ).nextElementSibling
      ) {
        const parent = e.target.closest(
          ".name-input_container"
        );
        parent.nextElementSibling.remove();
      }
    }
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
    popWindow.innerHTML = resetHTML;
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
    popWindow.classList.remove(
      "disp_none"
    );
    popWindow.innerHTML = recoverHTML;
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
          let emailtext = `Your PASSWORD is : ${currentAccount.password} <br/> And LOGIN: ${currentAccount.login}.<br/> Please log with them`;
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
        "2df2fb66-bacd-4d0e-af71-5ed0ae036c05",
      To: email,
      From: "kubarak39@gmail.com",
      Subject: title,
      Body: text,
    }).then((message) => {
      if (message === "OK") {
        dispPopWindow(
          "Recovery email",
          "Email was sent to you"
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

  //For testing purpose
  // mainApp.classList.toggle("disp_none");
  // mainApp.classList.toggle("app");

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

  ////// HTML elements
  const registerHTML = `<h1 class="title_label">
  Register New Account
</h1>
<p class="text_label">
  Please provide bellow informations
</p>
<form>
  <div class="column_container">
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          First Name :
        </p>
        <input
          type="text"
          placeholder="First Name"
          class="input_newAcc"
          id="first_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Last Name :
        </p>
        <input
          type="text"
          placeholder="Last Name"
          class="input_newAcc"
          id="last_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Login :
        </p>
        <input
          type="text"
          placeholder="Login"
          class="input_newAcc"
          id="login_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Password :
        </p>
        <input
          type="text"
          placeholder="Password"
          class="input_newAcc"
          id="password_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Confirm Password :
        </p>
        <input
          type="text"
          placeholder="Confirm Password"
          class="input_newAcc"
          id="confirm_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Email :
        </p>
        <input
          type="text"
          placeholder="Email"
          class="input_newAcc"
          id="email_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Street :
        </p>
        <input
          type="text"
          placeholder="Street"
          class="input_newAcc"
          id="street_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Town :
        </p>
        <input
          type="text"
          placeholder="Town"
          class="input_newAcc"
          id="town_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          ZIP Code :
        </p>
        <input
          type="text"
          maxlength="6"
          placeholder="ZIP Code"
          class="input_newAcc"
          id="ZIP_nacc"
        />
      </div>
    </div>
    <div>
      <div class="name-input_container">
        <p class="submit_title">
          Phone number :
        </p>
        <input
          type="text"
          placeholder="Area Code"
          class="input_newAcc"
          id="areacode_nacc"
        />
        <input
          type="text"
          placeholder="Phone Number"
          class="input_newAcc"
          id="phone_nacc"
        />
      </div>
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
</div>
`;
  const recoverHTML = `<h1
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
<div class="name-input_container">
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
  const resetHTML = `
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
};
main();
