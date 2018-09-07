const 
    textBtn = document.querySelector('#textBtn'), 
    jsonBtn = document.querySelector('#jsonBtn'),
    apiDataBtn = document.querySelector('#apiDataBtn'),
    output = document.querySelector('#output');

textBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('text.txt')
        .then(response => response.text())
        .then(text => output.innerHTML = `<p>${text}</p>`)
        .catch(error => output.innerHTML = `<p class="error">${error}</p>`);
});

jsonBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let formattedData = '';
            data.forEach(element => {
                formattedData += `<p>${element.name}, ${element.age} years old</p>`;
            });
            output.innerHTML = formattedData;
        });
});

apiDataBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://api.github.com/users/karppinska')
        .then(response => response.json())
        .then(data => output.innerHTML = `<img src="${data.avatar_url}"></img><p>${data.login}</p>`);
});