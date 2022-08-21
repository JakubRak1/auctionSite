export const registerHTML = `<h1 class="title_label">
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
export const recoverHTML = `<h1
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
export const resetHTML = `
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
