
const searchBox = document.querySelector("#searchBox");
const icon = document.querySelector("#icon")
const submitButton = document.querySelector("#submitButton")
const defaultMsg = document.querySelector("section h2") 
const main = document.querySelector(".display")
const previousSearches = document.querySelector(".history")
icon.addEventListener("click", (event) => {
    searchBox.classList.toggle("active")
    submitButton.classList.toggle("active")
    defaultMsg.classList.toggle("active")
    main.style.display =  "none"
    previousSearches.classList.toggle("active")
    document.querySelector(".btn").classList.toggle("active")
    // document.querySelector(".reset").style.display = "block"
})

// -Function to display info ----------------------------------------------------------------------------


const weatherApp = document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();
    //input value
    const input = event.target.search.value;
    //fetch the url
    const basicUrl = `https://wttr.in/${input}?format=j1`
    if (!input) {
       document.querySelector(".display").textContent = "Please enter a city or location"
       throw "error";
    } 
    
    fetch(basicUrl).then((response) => response.json()).then((db) => {
        

        document.querySelector(".display").innerHTML = 
        `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
        <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
        <p><b>Region:</b> ${db.nearest_area[0].region[0].value}</p>
        <p><b>Country:</b> ${db.nearest_area[0].country[0].value}</p>
        <p><b>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
        <p>Visibility:</b> ${db.current_condition[0].visibility}</p>`

        const main = document.querySelector(".display")
        main.style.display =  "block"
        // main.classList.toggle("active")
    
        main.addEventListener("click", (event) => {

          event.preventDefault()
          //when clicking the main display, show more information about the weather
      
              main.innerHTML = 
              `<h3><b>Weather Info</b></h3>
              <p><b>Humidity:</b> ${db.current_condition[0].humidity}</p>
              <p><b>Sunset:</b> ${db.weather[0].astronomy[0].sunset}</p>
              <p>Date:</b> ${db.weather[0].date}</p>
              <p>Wind Speed Per Miles:</b> ${db.current_condition[0].windspeedMiles}</p>
              <p>Visibility:</b> ${db.current_condition[0].visibility}</p>`

      
      })

      
      // When clicking the reset button

      document.querySelector(".reset").addEventListener("click", (event) => {

        event.preventDefault();

       document.querySelector(".displayQuote").classList.remove("displayQuote")
       document.querySelector("main").reset()

     })

      
        // video - weatherDesc

        switch (db.current_condition[0].weatherDesc[0].value) {
            case "Partly cloudy" :
            document.querySelector(".background").innerHTML = 
            `<video 
            autoplay loop class ="back-video" plays-inline>
            <source src="./media/partly.mp4" type="video/mp4">
            </video>`

            main.innerHTML = 
            `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
            <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
            <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
            <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
            <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
            <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2601; &#x2602; &#x2601;</p>`

            document.querySelector(".audio").innerHTML = 
            `<embed src="./music/leaf.mp3" loop="true" autostart="true" width="2" height="0">`

            break
          
            case "Clear" :
                document.querySelector(".background").innerHTML = 
                `<video 
                autoplay loop class ="back-video" plays-inline>
                <source src="./media/clearSky.mp4" type="video/mp4">
                </video>`

                main.innerHTML = 
                `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
                <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
                <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
                <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
                <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
                <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2602; &#x2601; &#x2602;</p>`

                document.querySelector(".audio").innerHTML = 
                `<embed src="./music/sunny.mp3" loop="true" autostart="true" width="2" height="0">`


            break
          
            case "Overcast" :
                document.querySelector(".background").innerHTML = 
                `<video 
                autoplay loop class ="back-video" plays-inline>
                <source src="./media/overcast.mp4" type="video/mp4">
                </video>`

                main.innerHTML = 
                `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
                <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
                <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
                <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
                <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
                <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2601; &#x2602; &#x2601;</p>`
                
                document.querySelector(".audio").innerHTML = 
                `<embed src="./music/windy.mp3" loop="true" autostart="true" width="2" height="0">`
             
                
             break  

             case "Light rain shower" && "Light rain, mist" && "Rain":
                document.querySelector(".background").innerHTML = 
                `<video 
                autoplay loop class ="back-video" plays-inline>
                <source src="./media/rainonwindow.mp4" type="video/mp4">
                </video>`

                main.innerHTML = 
                `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
                <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
                <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
                <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
                <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
                <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2602; &#x2601; &#x2602;</p>`

          
             break  

             case "Sunny":
                document.querySelector(".background").innerHTML = 
                `<video 
                autoplay loop class ="back-video" plays-inline>
                <source src="./media/sunflowerLow.mp4" type="video/mp4">
                </video>`

                main.innerHTML = 
                `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
                <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
                <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
                <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
                <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
                <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2602; &#x2601; &#x2602;</p>`
          
                document.querySelector(".audio").innerHTML = 
                `<embed src="./music/sunny.mp3" loop="true" autostart="true" width="2" height="0">`

             break  

             case "Moderate rain":
                document.querySelector(".background").innerHTML = 
                `<video 
                autoplay loop class ="back-video" plays-inline>
                <source src="./media/lightsnow.mp4" type="video/mp4">
                </video>`

                main.innerHTML = 
                `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
                <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
                <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
                <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
                <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
                <p class="rain">Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2602; &#x2601; &#x2602;</p>`

                document.querySelector(".audio").innerHTML = 
                `<embed src="./music/snowWalking.mp3" loop="true" autostart="true" width="2" height="0">`
                
             break  

          }

          if (db.weather[0].hourly[0].chanceofrain < "30") {
            document.querySelector(".display .rain").innerHTML = `Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2600; &#x263C;&#x2600;`
          }

          const li = document.createElement("li")
          li.innerHTML =  
          `
          <b>${db.nearest_area[0].areaName[0].value}</b>- 
          ${db.current_condition[0].FeelsLikeF}°F`;
          
          document.querySelector(".history ul").style.height = "200px"
  
          li.addEventListener("click", (event) => {
             
            main.innerHTML = 
            `<h2><b>${db.nearest_area[0].areaName[0].value}</b></h2>
            <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
            <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
            <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
            <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>
            <p>Chance of Rain: ${db.weather[0].hourly[0].chanceofrain}% &#x2601; &#x2602; &#x2601;</p>`
  
  
              const days = ["Today", "Tomorrow", "Day After Tomorrow"];
              for (let i = 0; i < days.length; i++) {
  
                      div[i].innerHTML = `
                      <h3>${days[i]}</h3>
                      <p><b>Average Temperature:</b> ${db.weather[i].avgtempF}°F</p>
                      <p><b>Max Temperature:</b> ${db.weather[i].maxtempF}°F</p>
                      <p><b>Min Temperature:</b> ${db.weather[i].mintempF}°F</p>`
              }
             
           })
  
          const list = document.querySelector(".history ul");
       
          let found = false;
          document.querySelectorAll("ul li").forEach((each) => {
            if (each.innerHTML === li.innerHTML) {
              found = true;
            }
          });
          if (!found) {
            list.append(li);
          }
  
          document.querySelector(".history ul p").textContent = ""
  
          const days = ["Today", "Tomorrow", "Day After Tomorrow"];
          const div = document.querySelectorAll(".days div")
  
          for (let i = 0; i < days.length; i++) {
  
                  div[i].innerHTML = `
                  <h3>${days[i]}</h3>
                  <p><b>Average Temperature:</b> ${db.weather[i].avgtempF}°F</p>
                  <p><b>Max Temperature:</b> ${db.weather[i].maxtempF}°F</p>
                  <p><b>Min Temperature:</b> ${db.weather[i].mintempF}°F</p>`
  
          }

        


          
    




        }
    ).catch(console.log)

    event.target.reset();

})


