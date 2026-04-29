const container = document.querySelector("#quotes");

function renderQuote(quote) {
  const blockquote = document.createElement("blockquote");
  const text = document.createElement("p");
  const footer = document.createElement("footer");

  text.textContent = `“${quote.text}”`;
  footer.textContent = quote.author;

  blockquote.append(text, footer);
  container.append(blockquote);
}

fetch("quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    quotes.forEach(renderQuote);
  });
