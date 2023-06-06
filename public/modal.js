// Get the modal element
const modal = document.getElementById('modal');

// Get the image, title, and description elements inside the modal
const productImage = document.getElementById('product-image');
const productTitle = document.getElementById('product-title');
const productDescription = document.getElementById('product-description');

// Function to display the modal with the selected product's details
function showModal(imageUrl, title, description) {
    productImage.src = imageUrl;
    productTitle.textContent = title;
    productDescription.textContent = description;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event listeners to each product
const products = document.getElementsByClassName('product');
for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image');
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        showModal(imageUrl, title, description);
    });
}

// Close the modal when the close button is clicked
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', closeModal);

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});







