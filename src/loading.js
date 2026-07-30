import {
  loadingOverlay,
  loadingContent,
  spinner,
  loadingText,
} from "./dom.js";

class Loading {
  show(message) {
    loadingText.textContent = message;
    loadingOverlay.classList.remove("hidden");
  }

  hide() {
    loadingOverlay.classList.add("hidden");
  }
}

export const loading = new Loading();