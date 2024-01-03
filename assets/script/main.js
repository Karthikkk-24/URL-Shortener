
const serverPort = 'localhost:3000';
const shortenBtn = document.getElementById('shortenBtn');
const urlInput = document.getElementById('urlInput');
shortenBtn.addEventListener('click', () => {
    if(urlInput.value == '') {
        alert('Please enter a valid URL');
    }

    fetch(`http://${serverPort}/shorten?url=${urlInput.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // document.getElementById('urlInput').value = '';
        // document.getElementById('urlInput').focus();
        // document.getElementById('urlInput').select();
        // document.getElementById('urlInput').value = data.shortenedUrl;
    })
    .catch((error) => {
        console.log(error);
    });

})