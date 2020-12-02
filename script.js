const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const expandButton = document.querySelector('.expand-modal');
const shrinkButton = document.querySelector('.shrink-modal');

const cards = document.querySelectorAll('.card')

for (let card of cards) {
    
    card.addEventListener("click", function() {
        const blogId = card.getAttribute("id");
        
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${blogId}/`
        
    })
}

document.querySelector(".expand-modal").addEventListener("click", function() {
    modal.classList.add("maximize");
    expandButton.classList.remove("active");
    shrinkButton.classList.add("active");
    // modalOverlay.querySelector("iframe").src = "";
    
})

document.querySelector(".shrink-modal").addEventListener("click", function() {
    modal.classList.remove("maximize");
    expandButton.classList.add("active");
    shrinkButton.classList.remove("active");
    // modalOverlay.querySelector("iframe").src = "";
    
})

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    modal.classList.remove("maximize");
    modalOverlay.querySelector("iframe").src = "";
    expandButton.classList.add("active");
    shrinkButton.classList.remove("active");
    
    
});