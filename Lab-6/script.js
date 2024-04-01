const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function displayQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById('quote-text').textContent = `"${text}"`;
    document.getElementById('author').textContent = `- ${author}`;
  }
  
  document.getElementById('new-quote').addEventListener('click', displayQuote);
  
  // Display initial quote
  displayQuote();
  
