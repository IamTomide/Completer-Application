const components = document.querySelectorAll("[data-component]");


for (let component of components) {
  const componentData = component.getAttribute("data-component");
  
  fetch(componentData)
    .then((res) => {
        if(!res.ok){
            throw "module not found"
        }
      return res.text();
    })
    .then((comp) => {
        component.innerHTML += comp;
    })
    .catch(() => {
      component.innerHTML = `<h4>Component not found</h4>`;
    } 
);
}