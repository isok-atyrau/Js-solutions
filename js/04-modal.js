const buttons = document.querySelectorAll("[data-modal-button]");
const closeButtons = document.querySelectorAll("[ data-modal-close]")
const modals = document.querySelectorAll("[data-modal]")


// Кнопки открыть модалку
buttons.forEach(item => {
    item.addEventListener('click', (e) => {

        const modalId = e.target.dataset.modalButton;
        const modal =  document.querySelector("#" + modalId)
        modal.classList.remove("hidden")

        // Отмена всплытие по фэйду
        modal.querySelector(".modal-window").addEventListener("click", (e) => {
            e.stopPropagation()
        })
    })
})

// Кнопки закрыть модалку
closeButtons.forEach(item => {
    item.addEventListener('click', (e) => {
        const modal = e.target.closest("[data-modal]")
        modal.classList.add("hidden")
    })
})

// Закрыть по fade
modals.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.classList.add("hidden")
        // e.stopImmediatePropagation()
    })
})