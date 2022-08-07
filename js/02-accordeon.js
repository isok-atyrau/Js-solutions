const titles = document.querySelectorAll('[data-name="accordeon-title"]')

titles.forEach( item => {
    item.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('hidden')
    })

})