

 document.querySelector(".btn").addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://type.fit/api/quotes").then((response) => response.json())
  .then((db) => {
    console.log(db[0].text + db[0].author)
    
    //shuffle the array
    //select a random quote
    // assign it to p tag
    const shuffled = db.sort((a,b) => 0.5 -Math.random())
    // document.querySelector(".randomQuote").innerHTML = `
    // <h3>"${shuffled[0].text}"</h3>
    // <p> by ${shuffled[0].author}</p>
    // `
    document.querySelector(".display").innerHTML = 
    `
    <br><br><br>
    <h3>"${shuffled[0].text}"</h3>
    <p> by ${shuffled[0].author}</p>
    
    `
    document.querySelector(".display").classList.add("displayQuote")



  }).catch(console.log)
})

