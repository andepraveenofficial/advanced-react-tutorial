document.getElementById('loadDataBtn').addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    document.getElementById('dataContainer').innerText = JSON.stringify(data);
});
