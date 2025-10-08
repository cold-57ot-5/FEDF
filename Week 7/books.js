import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { updateCartUI } from './ui.js';

export function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
      <div class="book-info">
        <div class="book-details">
          <strong>${book.title}</strong>
          <small>by ${book.author}</small>
          <div class="book-price">₹${book.price}</div>
        </div>
        <div class="book-actions">
          ${book.availability === "in stock"
            ? `<button data-index="${index}">Add to Cart</button>`
            : `<span class="out-of-stock">Out of Stock</span>`
          }
        </div>
      </div>
    `;
    bookList.appendChild(bookDiv);

    // Make the book card clickable (except button)
    bookDiv.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        if (book.link) {
          window.open(book.link, "_blank"); // Open in new tab
        } else {
          window.location.href = `book.html?index=${index}`; // Fallback local detail page
        }
      }
    });
  });

  // Add to Cart button logic
  bookList.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      addToCart(books[idx]);
      updateCartUI(cart);
      e.stopPropagation();
    });
  });
}
