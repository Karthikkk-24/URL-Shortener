const serverPort = 'localhost:3000';
const shortenBtn = document.getElementById('shortenBtn');
const urlInput = document.getElementById('urlInput');

shortenBtn.addEventListener('click', () => {
    if (urlInput.value === '') {
        alert('Please enter a valid URL');
    } else {
        fetch(`http://${serverPort}/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: urlInput.value }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
});
