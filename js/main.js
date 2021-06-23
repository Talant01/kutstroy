const modal = document.getElementById('modal'),
      btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    modal.style.display = 'flex'
    modal.style.alignItems = 'center'
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})