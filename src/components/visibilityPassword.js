"use strict";

let visibilityLogin = () => {
  //we have two forms and two inputs login. We get them here
  let passwordLogin = document.querySelectorAll(".password-login-input");

  //toggle visibility password
  let toggleVisibilityBtns = document.querySelectorAll(".toggle-visibility");
  function toggleVisibilityPassword(input) {
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
  }

  //set listener on all btns visibility
  toggleVisibilityBtns.forEach((elem, index) => {
    //we get from two forms visibility buttons
    elem.addEventListener("mouseover", () => {
      //send in method all password login inputs for manage visible
      toggleVisibilityPassword(passwordLogin[index]);
    });

    elem.addEventListener("mouseout", () => {
      //send in method all password login inputs for manage visible
      toggleVisibilityPassword(passwordLogin[index]);
    });
  });
};

export default visibilityLogin;
