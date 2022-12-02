const login = document.querySelector(".login");
const closeLoginBtn = document.getElementById("close-login");
const loginModal = document.querySelector(".login-modal");

login.onclick = () => {
  loginModal.style.display = "flex";
};

closeLoginBtn.onclick = () => {
  loginModal.style.display = "none";
};
