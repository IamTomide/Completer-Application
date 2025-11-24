const logincomponents = document.querySelectorAll("[data-login]");
const loginB = document.getElementById("loginB");
const signinB = document.getElementById("signinB");
let loginParent = loginB.parentElement.parentElement;
let SignUptemplate = loginB.parentElement.parentElement.nextElementSibling;



logincomponents.forEach(async (element) => {
  const url = element.dataset.login;

  try {
    const res = await fetch(url);
    if (!res.ok) throw "Module not found";

    let html = await res.text();

    for (let attr in element.dataset) {
      if (attr !== "login") {
        html = html.replace(`{{%${attr}%}}`, element.dataset[attr]);
      }
    }

    element.innerHTML = html;

  } catch (err) {
    element.innerHTML = `<h4>Component not found</h4>`;
  }
});

const showSignin = () => {
  loginParent.classList.add("hide");
  SignUptemplate.classList.remove("hide");
}

signinB.addEventListener("click", showSignin);