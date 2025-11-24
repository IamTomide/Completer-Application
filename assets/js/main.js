const moduleElements = document.querySelectorAll("[data-import]");
// const login = document.getElementById("login");

// const signin = document.getElementById("signin");
// const  signupForm = document.getElementById("signupPage");
// const loginForm= document.getElementById("loginPage");


const fetchData =(elementlist) => {
  for (let element of elementlist) {
  const dataImport = element.getAttribute("data-import");

  fetch(dataImport)
    .then((res) => {
        if(!res.ok){
            throw "module not found"
        }
      return res.text();
    })
    .then((module) => {
      element.innerHTML = module;
      loadComponentScripts(element)
    })
    .catch(() => {
      element.innerHTML = `<h4>Component not found</h4>`;
    } 
);
}
}

fetchData(moduleElements);

function loadComponentScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        document.body.appendChild(newScript)
    }
}


// const showLogin = () => {
//   login.classList.add("active");
//   signin.classList.remove("active");
//   loginForm.classList.remove("hide");
//   signupForm.classList.add("hide");
// }

// const showSignin = () => {
//   signin.classList.add("active");
//   login.classList.remove("active");
//   signupForm.classList.remove("hide");
//   loginForm.classList.add("hide");
// }

// login.addEventListener("click", showLogin);
// signin.addEventListener("click", showSignin);

