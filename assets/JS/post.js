// Work in Progress

window.onload = () => {
  const { form, closeModal, formWrap, submitOTP } = prepareHtml();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    register();
  });

  submitOTP.addEventListener("submit", (e) => {
    e.preventDefault();
    verifyPin();
  });

  closeModal.forEach((element) => {
    element.onclick = () => {
      element.parentElement.classList.replace("flex", "hidden");

      formWrap.classList.remove("hidden");
    };
  });
};

const register = async () => {
  const { firstName, lastName, email, password, retypePassword } =
    prepareHtml();

  const registerData = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    password: password.value,
    confirm_password: retypePassword.value,
  };

  const { verifiedEmail, errorMessage, errorModal, formWrap, verifyModal } =
    prepareHtml();

  makeRequest(
    "https://api.oltemlogistics.com/auth/register",
    "POST",
    registerData,
    (data) => {
      // add email to use for verification
      verifiedEmail.innerHTML = data.data.user.email;
      verifyModal.classList.remove("hidden");
      formWrap.classList.add("hidden");
    },
    (data) => {
      errorMessage.innerHTML = data.message;
      errorModal.classList.replace("hidden", "flex");
      formWrap.classList.add("hidden");
    }
  );
};

const verifyPin = async () => {
  const {
    verifiedEmail,
    thePin,
    SuccessfulModal,
    sucessMessage,
    errorMessage,
    verifyModal,
    errorModal,
  } = prepareHtml();

  const OTP = {
    code: thePin.value,
    email: verifiedEmail.innerHTML,
  };

  makeRequest(
    "https://api.oltemlogistics.com/auth/register/verify/email",
    "POST",
    OTP,
    (data) => {
      sucessMessage.innerHTML = data.message;
      SuccessfulModal.classList.replace("hidden", "flex");
      verifyModal.classList.add("hidden");
    },
    (data) => {
      errorMessage.innerHTML = data.message;
      errorModal.classList.replace("hidden", "flex");
      verifyModal.classList.add("hidden");
      SuccessfulModal.classList.replace("hidden", "flex");
    }
  );
};
const { SuccessfulModal, verifyModal, errorModal } = prepareHtml();

async function makeRequest(url, method, data, onSuccess,
) {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();
  console.log(responseData);

  const statusCode = responseData.statusCode;

  if (statusCode > 299) {
    onError(responseData);
    return false;
  }
  // onSuccess(data);
  onSuccess(responseData);
}

function prepareHtml() {
  const password = document.querySelector(".password");
  const email = document.querySelector(".email");
  const retypePassword = document.querySelector(".retypePassword");
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const verifiedEmail = document.querySelector(".verified");
  const formWrap = document.querySelector(".form_container");
  const errorModal = document.querySelector(".error-modal");
  const SuccessfulModal = document.querySelector(".success-modal");
  const errorMessage = document.querySelector(".errormessage");
  const sucessMessage = document.querySelector(".successmessage");
  const verifyModal = document.querySelector(".verificationModal");
  const form = document.querySelector(".form");
  const closeModal = document.querySelectorAll(".close-modal");
  const submitOTP = document.querySelector(".submitOTP");
  const thePin = submitOTP.firstElementChild.lastElementChild;

  return {
    firstName,
    lastName,
    email,
    password,
    retypePassword,
    verifiedEmail,
    errorMessage,
    errorModal,
    formWrap,
    verifyModal,
    form,
    closeModal,
    submitOTP,
    SuccessfulModal,
    thePin,
    sucessMessage,
  };
}
// SOLID =>
