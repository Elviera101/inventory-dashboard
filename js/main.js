import { products } from "./products.js";

import {
    searchProducts,
    filterProductsByCategory,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from "./inventoryUtils.js";

import {
    displayProducts,
    displayTotalInventoryValue,
    displayLowStockCount,
    displayOutOfStockCount
} from "./display.js";


const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");


function updateDisplay(filteredProducts) {
    displayProducts(filteredProducts);

    const totalValue = calculateTotalInventoryValue(filteredProducts);
    const lowStock = countLowStockProducts(filteredProducts);
    const outOfStock = countOutOfStockProducts(filteredProducts);

    displayTotalInventoryValue(totalValue);
    displayLowStockCount(lowStock);
    displayOutOfStockCount(outOfStock);
}


function performSearch() {
    const query = searchInput.value.trim();
    const category = categoryFilter.value;

    let filteredProducts = products;

    if (query !== "") {
        filteredProducts = searchProducts(filteredProducts, query);
    }

    if (category !== "All") {
        filteredProducts = filterProductsByCategory(
            filteredProducts,
            category
        );
    }

    updateDisplay(filteredProducts);
}


searchBtn.addEventListener("click", performSearch);


categoryFilter.addEventListener("change", performSearch);


resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "All";

    updateDisplay(products);
});


searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});


updateDisplay(products);