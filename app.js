const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const counts = document.getElementById("count");
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// Save selected movie index and price
function setMovieData(index, price) {
    localStorage.setItem("selectedMovieIndex", index);
    localStorage.setItem("selectedMoviePrice", price);
}

// Update Number of Selected Seats
function updateTotal() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // TODO: Copy Seats Into an array
    // TODO: Map through the array
    // TODO: Return new array of indexes

    const seatsIndexes = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndexes));

    seatsSelected = selectedSeats.length
    counts.innerText = seatsSelected
    total.innerText = seatsSelected * ticketPrice
}


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