$(document).ready(function() {
    var apiKey = ""; // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(state) {
      var state_obj = state_info[state];
      var url =`https://api.darksky.net/forecast/79f6190bc4ef781f728172e06a723b2f/${state_obj.lat},${state_obj.lng}`;
      // console.log(state_obj.lat);

      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                  var temperature = null
                  // TODO
                  // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                  var temperature = data.currently.temperature;
                  console.log(temperature);

                  // console.log(temperature)

                  //TODO
                  // Default color gray
                  // Create a series of if else blocks to set the color for the state based on the temperature
                  // Less than equal to 10 should be blue
                  // Between 11 and 30 should be cyan
                  // Between 31 and 50 should be green
                  // Between 51 and 80 should be orange
                  // Greater than 80 should be red
                  if(temperature <= 10){
                    $(`#${state}`).css('fill', "blue");
                  }
                  else if(temperature > 10 && temperature <= 30){
                    $(`#${state}`).css('fill', "cyan");
                  }
                  else if(temperature > 30 && temperature <= 50){
                    $(`#${state}`).css('fill', "green");
                  }
                  else if(temperature > 50 && temperature <= 80){
                    $(`#${state}`).css('fill', "orange");
                  }
                  else if(temperature > 80){
                    $(`#${state}`).css('fill', "red");
                  }
                  else {
                    $(`#${state}`).css('fill', "grey");
                  }
      });
    });
});
