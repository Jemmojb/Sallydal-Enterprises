document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const productGrid = document.getElementById('product-grid');
    const productItems = productGrid.getElementsByClassName('product-item');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < productItems.length; i++) {
            const productName = productItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (productName.includes(filter)) {
                productItems[i].style.display = "";
            } else {
                productItems[i].style.display = "none";
            }
        }
    });
});

function filterProducts(category) {
    const productGrid = document.getElementById('product-grid');
    const productItems = productGrid.getElementsByClassName('product-item');

    for (let i = 0; i < productItems.length; i++) {
        if (category === 'all' || productItems[i].getAttribute('data-category') === category) {
            productItems[i].style.display = "";
        } else {
            productItems[i].style.display = "none";
        }
    }
}


