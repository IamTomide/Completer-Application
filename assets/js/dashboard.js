const dashboardComponents = document.querySelectorAll("[data-dashboard]");

dashboardComponents.forEach(async (element) => {
  const signUrl = element.dataset.dashboard;
  try {
    const res = await fetch(signUrl);
    if (!res.ok) throw "Module not found";

    let html = await res.text();

    for (let attr in element.dataset) {
      if (attr !== "dashboard") {
        html = html.replace(`{{%${attr}%}}`, element.dataset[attr]);
      }
    }

    element.innerHTML = html;
    loadComponentScripts(element)

  } catch (err) {
    element.innerHTML = `<h4>Component not found</h4>`;
  }
});

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

const mytasksButton = document.querySelector("#myTasks");
const aiSummaryButton = document.querySelector("#aiSummary");
const aiSummary = document.querySelector(".aiSummary");
const taskSummary = document.querySelector(".taskSummary");


console.log(mytasksButton);
mytasksButton.addEventListener("click", () => {
    aiSummary.classList.add('hide');
    taskSummary.classList.remove('hide');
})
aiSummaryButton.addEventListener("click", () => {
    aiSummary.classList.remove('hide');
    taskSummary.classList.add('hide');
})

console.log(taskPageButton);
console.log(dashboardPageButton);