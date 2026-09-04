import { getStockStatus } from "./inventoryUtils.js";

export function displayProducts(products) {
    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");

    productList.innerHTML = "";

    if (products.length === 0) {
        noResultsMessage.style.display = "block";
        return;
    }

    noResultsMessage.style.display = "none";

    products.forEach(({ id, name, category, price, stock }) => {
        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        const stockStatus = getStockStatus(stock);

        productCard.innerHTML = `
            <h3>${name}</h3>

            <div class="product-info">
                <p><strong>Product ID:</strong> ${id}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Price:</strong> ₱${price.toLocaleString()}</p>
                <p><strong>Stock:</strong> ${stock}</p>
            </div>

            <div class="stock-status">
                ${stockStatus}
            </div>
        `;

        productList.appendChild(productCard);
    });
}

export function displayTotalInventoryValue(total) {
    const totalInventoryValue =
        document.getElementById("totalInventoryValue");

    totalInventoryValue.textContent = `₱${total.toLocaleString()}`;
}

export function displayLowStockCount(count) {
    const lowStockCount =
        document.getElementById("lowStockCount");

    lowStockCount.textContent = count;
}

export function displayOutOfStockCount(count) {
    const outOfStockCount =
        document.getElementById("outOfStockCount");

    outOfStockCount.textContent = count;
}