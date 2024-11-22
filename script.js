const search = document.getElementById('search')
const svg = document.querySelector(".notranslate")

svg.addEventListener('click',function(){
    window.location.href = 'recipes.html'
})

search.addEventListener('input',function() {
    if(search.value.toLowerCase() === 'black fridays'){
        window.location.href = 'blackfriday.html';
    }

    if(search.value.toLowerCase() === 'healthy'){
        window.location.href = 'healthyFood.html';
    }

    if(search.value.toLowerCase() === 'categories'){
        window.location.href = 'categories.html'
    }

    if(search.value.toLowerCase() === 'recipes'){
        window.location.href = 'recipes.html'
    }
    
    if(search.value.toLowerCase() === 'food news'){
        window.location.href = 'food news.html'
    }
})
