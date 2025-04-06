function uploadFile() {
  const fileInput = document.getElementById("syllabus");
  const file = fileInput.files[0];
  if (file) {
    alert(`File "${file.name}" uploaded successfully!`);
    // Placeholder: Upload to backend, process and store extracted syllabus
  } else {
    alert("Please choose a file first.");
  }
}

function handleQuestion() {
  const question = document.getElementById("question").value;

  // Placeholder logic (replace with actual NLP + API results)
  if (question.toLowerCase().includes("network")) {
    document.getElementById("subjectOutput").textContent = "Computer Networks";
    document.getElementById("moduleNumberOutput").textContent = "Module 2";
    document.getElementById("moduleNameOutput").textContent = "Routing Protocols";
    document.getElementById("moduleContentOutput").textContent =
      "Distance Vector, Link State, Path Vector protocols.";
    document.getElementById("youtubeVideos").textContent =
      "https://www.youtube.com/watch?v=qiQR5rTSshw";
  } else {
    document.getElementById("subjectOutput").textContent = "Output";
    document.getElementById("moduleNumberOutput").textContent = "Output";
    document.getElementById("moduleNameOutput").textContent = "Output";
    document.getElementById("moduleContentOutput").textContent = "Output";
    document.getElementById("youtubeVideos").textContent = "Output";
  }
}
