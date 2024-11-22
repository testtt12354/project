function showRecipe(title, description, steps) {
    console.log('showRecipe triggered');
    document.getElementById("recipeTitle").innerText = title;
    document.getElementById("recipeDescription").innerText = description;

    const recipeStepsElement = document.getElementById("recipeSteps");
    recipeStepsElement.innerHTML = ''; 
    steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        recipeStepsElement.appendChild(li);
    });

    document.getElementById("recipeModal").style.display = 'flex';


    document.querySelector("main").style.filter = "blur(5px)";
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("recipeModal").style.display = 'none';
    document.querySelector("main").style.filter = "none"; 
}

document.querySelector(".close").onclick = function() {
    document.getElementById("recipeModal").style.display = 'none';
    document.querySelector("main").style.filter = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("recipeModal")) {
        document.getElementById("recipeModal").style.display = 'none';
        document.querySelector("main").style.filter = "none";
    }
}
