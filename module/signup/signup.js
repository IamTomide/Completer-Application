const signupComponents = document.querySelectorAll("[data-signUp]");
const login = document.getElementById("login");
const signin = document.getElementById("signin");
let signUpParent = login.parentElement.parentElement;
let loginTemplate = login.parentElement.parentElement.previousElementSibling;




// for (let signupComponent of signupComponents) {
//   const signupcomponentData = signupComponent.getAttribute("data-signUp");
  
//   fetch(signupcomponentData)
//     .then((res) => {
//         if(!res.ok){
//             throw "module not found"
//         }
//       return res.text();
//     })
//     .then((signupcomp) => {
//         let updatedsignComp = signupcomp.replace("{{%heading%}}", "Join TaskMaster").replace("{{%subhead%}}", "Create an account to boost your creativity")
//         signupComponent.innerHTML = updatedsignComp;
//     })
//     .catch(() => {
//       signupComponent.innerHTML = `<h4>Component not found</h4>`;
//     } 
// );
// }
signupComponents.forEach(async (element) => {
  const signUrl = element.dataset.signup;
  console.log(signUrl);
  try {
    const res = await fetch(signUrl);
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
const showLogin = () => {
  signUpParent.classList.add("hide");
  loginTemplate.classList.remove("hide");
}

login.addEventListener("click", showLogin);