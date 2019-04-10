// Business Logic
function MovieTicket(movieName, movieTime, personAge) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.personAge = personAge,
  this.ticket = 10;
  this.priceByName();
  this.priceByTime();
  this.priceByAge();
}

MovieTicket.prototype.ticketInfo = function() {
  return "You have purchased a ticket for " + this.movieName + " at " + this.movieTime + "for" + this.ticket + "."//Your movie ticket will cost $" + this.moviePrice + ".";
}

// Movie ticket price functions for movie name
MovieTicket.prototype.priceByName = function() {
  if(this.movieName === "dumbo"){
    this.ticket -= 1;
  } else if(this.movieName === "us") {
    this.ticket;
  } else if (this.movieName === "theGoonies"){
    this.ticket -= 3;
  } else{
    console.log("There is an error for movie name selection");
  }
}
// Movie ticket price function for movie time
MovieTicket.prototype.priceByTime = function() {
  if(this.movieTime === "15:00"){
    this.ticket -= 1 ;
  } else if(this.movieTime === "17:00") {
    this.ticket;
  } else if (this.movieTime === "19:00"){
    this.ticket += 1;
  } else if (this.movieTime === "21:00"){
    this.ticket += 1;
  }else{
    console.log("There is an error for movie time selection");
  }
}
// Movie ticket price function for person age
MovieTicket.prototype.priceByAge = function() {
  if(this.personAge >= 65){
    this.ticket -= 1 ;
  } else{
    this.ticket;
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#whatTicket").submit(function(event) {
    event.preventDefault();
    var movieName = $("#movieName").val();
    var movieTime = $("#movieTime").val();
    var personAge = $("#personAge").val();
    var movieTicket = new MovieTicket(movieName, movieTime, personAge);
    $(".results").show();
    $(".name").text(movieName);
    $(".time").text(movieTime);
    $(".price").text(movieTicket.ticket);
    console.log(movieTicket);
  });
});
