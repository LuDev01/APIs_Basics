window.addEventListener('load', () => {
    for (let i = 1; i <= 10; i++) {
        const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=fRosJIDpbrsMJEpcfjX9ckflY6Woj28R&tag=&rating=g`
    
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {

                const consulta = document.querySelector('.consulta');
                
                const newConsult = document.createElement('article');

                newConsult.innerHTML += `<h3>${data.data.username}</h3>`
                newConsult.innerHTML += `<img src="${data.data.images.downsized.url}"></img>`
                newConsult.innerHTML += `<a href="${data.data.bitly_url}">Link al gif origianl</a>`

                consulta.appendChild(newConsult);
            })
            .catch(error => console.log(error))
    }
})
// FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69