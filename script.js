const form = document.querySelector("form");
      const submitBtn = document.querySelector(".submit-btn");
      const resetBtn = document.querySelector(".reset-btn");
      const popup = document.querySelector(".popup");
      const closePopupBtn = document.querySelector("#close-popup");

      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
          const firstName = document.querySelector("#first-name").value;
          const lastName = document.querySelector("#last-name").value;
          const dob = document.querySelector("#dob").value;
          const country = document.querySelector("#country").value;
          const gender = document.querySelector('input[name="gender"]:checked').value;
          const profession = document.querySelector("#profession").value;
          const email = document.querySelector("#email").value;
          const mobile = document.querySelector("#mobile").value;

          document.querySelector("#result-first-name").textContent = firstName;
          document.querySelector("#result-last-name").textContent = lastName;
          document.querySelector("#result-dob").textContent = dob;
          document.querySelector("#result-country").textContent = country;
          document.querySelector("#result-gender").textContent = gender;
          document.querySelector("#result-profession").textContent = profession;
          document.querySelector("#result-email").textContent = email;
          document.querySelector("#result-mobile").textContent = mobile;

          popup.style.display = "flex";
        } else {
          form.reportValidity();
        }
      });

      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.reset();
      });

      closePopupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "none";
        form.reset();
      });