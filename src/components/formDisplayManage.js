"use strict";

let manageForm = () => {
  let getElement = (modificator) => {
    return document.querySelector(modificator);
  };
  let redirectRegister = getElement(".redirect-to-register-btn");
  let redirectLogin = getElement(".redirect-to-login-btn");

  let formRegistration = getElement(".form-registration");
  // let formLogin = getElement(".form-login");

  redirectRegister.addEventListener("click", () => {
    formRegistration.style.opacity = 1;
    formRegistration.style.zIndex = 30;
  });

  redirectLogin.addEventListener("click", () => {
    formRegistration.style.opacity = 0;
    formRegistration.style.zIndex = 10;
  });
};

export default manageForm;
