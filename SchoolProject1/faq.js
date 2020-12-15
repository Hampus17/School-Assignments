const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(el => {
    el.addEventListener('click', (event) => {
        let item = event.target.parentElement;
        if (item.classList.contains("faq-open")) {
            item.classList.add('faq-closed')
            item.classList.remove('faq-open')

        } else if (item.classList.contains("faq-closed")) {
            item.classList.add('faq-open')
            item.classList.remove('faq-closed')
        }
    })
});