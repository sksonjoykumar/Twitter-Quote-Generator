// Selected all html id
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  // async await function
  const quoteApi = "https://api.quotable.io/random";
  async function quoteFunction(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  }
  //   newQuoteBtn addEventListener
  newQuoteBtn.addEventListener("click", function () {
    quoteFunction(quoteApi);
  });

  //   tweetBtn addEventListener
  tweetBtn.addEventListener("click", tweetFunction);
}

//   tweetFunction
function tweetFunction() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---by " +
      author.innerHTML,
    "Tweet Window",
    "width=700, height =400"
  );
}
