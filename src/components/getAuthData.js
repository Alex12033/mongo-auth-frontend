"use strict";

let getAuth = () => {
  //get loader
  let loader = document.querySelector(".loader");

  // get inputs data
  let username = document.querySelector("#username-login-input");

  let password = document.querySelector(".password-login-input");

  let sendAuthBtn = document.querySelector(".login-form-btn");

  //send this object for check user is registered on server
  let formData = {
    username: false,
    password: false,
  };

  // send data user from form on server
  async function postData(data) {
    loader.style.display = "flex";

    await fetch("https://mongo-auth-api.onrender.com/isLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          loader.style.display = "none";
        }

        if (!res.ok) {
          loader.style.display = "none";
        }

        password.value = "";
        username.value = "";

        return res.json();
      })
      .then((data) => {
        if (data.registered === true) {
          alert(`${data.user.username} you successfully login`);
        } else {
          alert(`please register and after login`);
        }
      });
  }

  sendAuthBtn.addEventListener("click", (e) => {
    if (formData.password !== "" && formData.username !== "") {
      e.preventDefault();

      formData.password = password.value;
      formData.username = username.value;

      console.log(formData);
      postData(formData);
    }
  });
};

export default getAuth;
