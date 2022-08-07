
const tabs = document.querySelectorAll('[data-tab]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(item => {
    item.addEventListener('click', (e)=> {

        tabs.forEach((item) => {
            item.classList.remove('tab-bg')
        })

       e.target.classList.add('tab-bg')

        tabContents.forEach(item => {
            item.classList.add('hidden')
        })

        const tabContent = document.querySelector('#'+ e.target.dataset.tab)
        tabContent.classList.remove('hidden')

    })
})