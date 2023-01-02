"use strict";

let getRegistr = () => {
  //get loader
  let loader = document.querySelector(".loader-register");

  //get inputs and button for send
  let username = document.querySelector("#username-register-input");

  let password = document.querySelector(".password-register-input");

  let email = document.querySelector(".email-register-input");

  let sendAuthBtn = document.querySelector(".register-form-btn");

  //create object for get info from inputs
  let formData = {
    username: false,
    password: false,
    email: false,
  };

  //   send data user from form on server
  async function postData(data) {
    loader.style.display = "flex";

    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        loader.style.display = "none";
      }

      if (!res.ok) {
        console.log(res, "result");
        loader.style.display = "none";
      }

      password.value = "";
      username.value = "";
      email.value = "";
    });
  }

  sendAuthBtn.addEventListener("click", (e) => {
    formData.password = password.value;
    formData.username = username.value;
    formData.email = email.value;
    // console.log(formData);

    if (
      formData.password !== "" &&
      formData.username !== "" &&
      formData.email !== ""
    ) {
      e.preventDefault();
      console.log(formData);
      postData(formData);
    }
  });
};

export default getRegistr;
