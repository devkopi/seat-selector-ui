function appendSets(seats, rowType) {
    const row = document.querySelector(`.${rowType}`);
    for (let i = 1; i <= seats; i++ ){
        const seat = document.createElement('div')
        seat.classList.add("seat");
        row.appendChild(seat);
    }
}

function selectSeats(){
    const seat = document.querySelectorAll('.seat');
    seat.forEach(item=>{
        item.addEventListener('click', ()=> {
            item.classList.toggle("selected");
        })
    })
}

function markRandomSeats(seat_reserved) {
    const totalSeats = document.querySelectorAll(".seat");
    const reservedSeats = getRandomSeats(totalSeats, seat_reserved);
    reservedSeats.forEach(seat=>{
        seat.classList.add('reserved');
    });
}

function getRandomSeats(seats, count){
    const shuffledSeats = Array.from(seats).sort(() => 0.5 - Math.random());
    return shuffledSeats.slice(0, count);
}

window.addEventListener('DOMContentLoaded', () => {
    const seat_reserved = 10;
    appendSets(12, "first-front-row");
    appendSets(14, "second-front-row");
    appendSets(96, "middle-row");
    appendSets(14, "second-last-row");
    appendSets(12, "first-last-row");
    selectSeats();
    markRandomSeats(seat_reserved);
})