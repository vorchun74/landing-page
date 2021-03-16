// Sort projects

let sortBtn = document.querySelectorAll("[data-filter]");
let projects = document.querySelectorAll("[data-category]");

for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function(event) {
        event.preventDefault();
        
        let category = sortBtn[i].dataset.filter;
        for(let j = 0; j < projects.length; j++) {
            if (category === projects[j].dataset.category || category === "all") {
                projects[j].classList.remove("hide");
            } else {
                projects[j].classList.add("hide");
            }
        }
    });
}

// Modal window

let modalBtn = document.querySelectorAll("[data-modal]");
let modalWindows = document.querySelectorAll("[data-window]");
let bodyScroll = document.querySelector("body");

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function(event) {
        event.preventDefault();

        let modalType = modalBtn[i].dataset.modal;
        
        for (let j = 0; j < modalWindows.length; j++) {
            if (modalType === modalWindows[j].dataset.window) {
                let parentino = document.getElementById(modalType);
                parentino.classList.add("show");
                bodyScroll.classList.add("no-scroll");
            } 
        }
    })
}

let closeBtn = document.querySelectorAll("[data-close]");

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function(event) {
        event.preventDefault();

        let currentWindow = closeBtn[i].closest(".show");
        currentWindow.classList.remove("show");
        bodyScroll.classList.remove("no-scroll");
    })
}