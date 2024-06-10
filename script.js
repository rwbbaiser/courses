document.getElementById('main-button').addEventListener('click', () => {
    const mainText = document.getElementById('main-text');
    if (!mainText.style.color) {
        mainText.style.color = 'red';
    } else {
        mainText.style.color = '';
    }
});