let quoteBtn = document.querySelector(".get-quote-btn");
let quoteText = document.querySelector(".quote-text");
quoteBtn.addEventListener("click", setQuote);

function setQuote() {
  const quotePromise = fetch("https://api.quotable.io/random");

  quotePromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => quoteText.innerHTML = data.content)
    .catch((err) => console.log(err));
}
