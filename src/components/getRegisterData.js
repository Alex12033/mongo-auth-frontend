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

    // await fetch("http://localhost:3001/register", {
    await fetch("https://mongo-auth-api.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.ok);
          loader.style.display = "none";
          alert("you successfully registered");
        }

        if (!res.ok) {
          console.log(res, "result");
          loader.style.display = "none";

          throw new Error('Network response was not OK');
        }

        password.value = "";
        username.value = "";
        email.value = "";
      })
      .catch((error) => {
        alert(`Sorry :( error in process registration ${error}`);
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
