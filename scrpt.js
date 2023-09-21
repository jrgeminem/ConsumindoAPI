const userList = document.getElementById("user-list");
const refreshBtn = document.getElementById("refresh-btn");

function fetchUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      userList.innerHTML = "";
      data.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log("ocorreu um erro:", error);
    });
}
refreshBtn.addEventListener("click", fetchUser);
fetchUser();

const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
  };
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json)
    .then((data) => {
      alert("Novo Usuario cadastrado:", data);
      fetchUser();
    })
    .catch((error) => {
      console.log("Ocorreu um erro", error);
    });
  nameInput.value = "";
  emailInput.value = "";
});
