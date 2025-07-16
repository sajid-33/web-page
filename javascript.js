const moods = {
  happy: {
    color: "#ffe066",
    emoji: "😊"
  },
  sad: {
    color: "#74c0fc",
    emoji: "😢"
  },
  angry: {
    color: "#ff6b6b",
    emoji: "😠"
  },
  calm: {
    color: "#a5d8ff",
    emoji: "😌"
  }
};

const buttons = document.querySelectorAll("button[data-mood]");
const emojiDisplay = document.getElementById("emoji");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    document.body.style.backgroundColor = moods[mood].color;
    emojiDisplay.textContent = moods[mood].emoji;
    emojiDisplay.style.transform = "scale(1.2)";
    setTimeout(() => emojiDisplay.style.transform = "scale(1)", 200);
  });
});
