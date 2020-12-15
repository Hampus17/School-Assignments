// Elements
const navToggle = document.querySelector('#toggle-nav')
const navSearch = document.querySelector('#nav-search')

// Event listeners
navToggle.addEventListener('click', toggleNavbar)
navSearch.addEventListener('click', toggleSearch)

let navToggled = false
let searchToggled = false
const navList = document.querySelector('#nav-list')

function toggleNavbar() {
    if (!navToggled) {
        document.addEventListener('click', (e) => {
            if (e.target.id == "opacity-overlay")
                hideNav()
        })
        showNav()
    } 
    else 
        hideNav()
}

function showNav() {
    navList.style.transform = "translateY(0)"
    document.querySelector('#nav-search-input').classList.remove('hidden')
    document.querySelector('#opacity-overlay').classList.remove('hidden')
    navToggled = true
}

function hideNav() {
    navList.style.transform = "translateY(-100vh)"
    document.querySelector('#nav-search-input').classList.add('hidden')
    document.querySelector('#opacity-overlay').classList.add('hidden')
    navToggled = false
}

function toggleSearch() {
    let input = document.querySelector('#nav-search-input')
    if (!searchToggled) {
        input.style.transform = "translateX(-120vw)"
        searchToggled = true
    } else {
        input.style.transform = "translateX(0)"
        searchToggled = false
    }
}

