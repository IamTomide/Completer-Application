const moduleElements = document.querySelectorAll("[data-import]");


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



