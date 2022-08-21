export const checkInputs = (
  e,
  text
) => {
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
export const checkConfirmInput = (
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

export const checkEmailInput = (
  e,
  text
) => {
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
export const checkAreaInput = (
  e,
  text
) => {
  if (
    !(
      e.target.value.includes("+") &&
      +e.target.value.replace("+", "") >
        -1
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
export const checkPhoneInput = (
  e,
  text
) => {
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
