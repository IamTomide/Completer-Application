const moduleElements = document.querySelectorAll("[data-import]");


for (let element of moduleElements) {
  const dataImport = element.getAttribute("data-import");
  console.log(dataImport);
  
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