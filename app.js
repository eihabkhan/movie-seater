const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const counts = document.getElementById("count");
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);


// Update Number of Selected Seats
function updateTotal() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
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
    updateTotal();
});