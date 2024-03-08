const languageSelectionButtons = document.querySelectorAll('#language-selection button');
const activityContainer = document.getElementById('activity-container');
const feedbackMessage = document.getElementById('feedback-message');
const recordButton = document.getElementById('record-button');
const targetSoundText = document.getElementById('target-sound-text');
const targetSoundImage = document.getElementById('target-sound-image');
const targetSoundAudio = document.getElementById('target-sound-audio');
const progressCount = document.getElementById('progress-count');

let currentLanguage;
let targetSound;
let recording;
let correctCount = 0;
let speechRecognition;

// Improved function to handle loading activity data with error handling
function loadActivityData(language) {
  const languageData = activityData[language];
  if (languageData) {
    targetSound = languageData.sounds[Math.floor(Math.random() * languageData.sounds.length)];
    updateActivityContent();
  } else {
    console.error(Activity data not found for language: ${language});
  }
}