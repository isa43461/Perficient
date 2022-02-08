const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            console.log(data[i].id, data[i].title);
        };
    })
}

getData();
