const modal = document.getElementById('modal'),
      btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    modal.style.display = 'block'
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})