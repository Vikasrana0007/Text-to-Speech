// Creating a new SpeechSynthesisUtterance object to handle speech synthesis
let speech = new SpeechSynthesisUtterance();

// Declaring arrays to store available voices and the voice selection dropdown element
let voices = [];
let voiceSelect = document.querySelector("select");

// Event listener to detect changes in available voices
window.speechSynthesis.onvoiceschanged = () => {
  // Fetching available voices and assigning the first voice to the utterance object
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // Populating the voice selection dropdown with available voices
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Event listener to handle voice selection change
voiceSelect.addEventListener("change", () => {
    // Assigning the selected voice to the utterance object when the dropdown value changes
    speech.voice = voices[voiceSelect.value];
});

// Event listener to handle button click for initiating speech synthesis
document.querySelector("button").addEventListener("click", () => {
  // Setting the text content of the utterance object to the text entered in the textarea
  speech.text = document.querySelector("textarea").value;
  // Initiating speech synthesis with the configured utterance
  window.speechSynthesis.speak(speech);
});
