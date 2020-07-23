const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const counts = document.getElementById("count");
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);


populateUI();
updateTotal();

// Save selected movie index and price
function setMovieData(index, price) {
    localStorage.setItem("selectedMovieIndex", index);
    localStorage.setItem("selectedMoviePrice", price);
}

// Update Number of Selected Seats
function updateTotal() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndexes = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndexes));

    seatsSelected = selectedSeats.length
    counts.innerText = seatsSelected
    total.innerText = seatsSelected * ticketPrice
}

function populateUI() {
    // Fetch data from localStorage
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && 
        selectedSeats.length > 0) {
            seats.forEach((seat, index) => {
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add("selected")
                }
            });
    }
    
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
        ticketPrice = parseInt(movieSelect.value);
    }

}


// EVENT LISTENERS

// Seat Clicked
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") 
        && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateTotal();
    }
})

// Movie Changed
movieSelect.addEventListener("change", (e) => {
    ticketPrice = parseInt(e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateTotal();
});

// Initial Total 
