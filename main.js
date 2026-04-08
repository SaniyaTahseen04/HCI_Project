const events = [
  { title: "Tech Conference", category: "tech", status: "upcoming", date: "April 20" },
  { title: "Music Fest", category: "music", status: "ongoing", date: "April 10" },
  { title: "Sports Meet", category: "sports", status: "completed", date: "March 25" }
];

const container = document.getElementById("eventContainer");

function displayEvents(list) {
  container.innerHTML = "";

  list.forEach(event => {
    const card = `
      <div class="card">
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <span class="status ${event.status}">${event.status}</span>
        <br><br>
        <button onclick="registerEvent('${event.title}')">Register</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filterEvents(category) {
  if (category === "all") {
    displayEvents(events);
  } else {
    displayEvents(events.filter(e => e.category === category));
  }
}

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  displayEvents(events.filter(e =>
    e.title.toLowerCase().includes(value)
  ));
});

function registerEvent(name) {
  alert("Registered for " + name);
}

// Initial load
displayEvents(events);