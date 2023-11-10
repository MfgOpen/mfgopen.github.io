function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(initEventHandlers);

function initEventHandlers() {
  console.log("Welcome to the ManufacturingOpen homepage!");
}
