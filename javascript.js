const slider = document.getElementById("slider");
const left = document.getElementById("left-side");
let lastPercentage = 0;

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  if (slider.contains(e.target)) {
    const x = isTouchDevice() ? e.touches[0].clientX : e.clientX;
    const sliderRect = slider.getBoundingClientRect();
    const offsetX = x - sliderRect.left;

    if (offsetX >= 0 && offsetX <= sliderRect.width) {
      const percentage = (offsetX / sliderRect.width) * 100;
      left.style.width = `${percentage}%`;
      lastPercentage = percentage;
    }
  }
};

slider.addEventListener("mousemove", (e) => {
  move(e);
});

slider.addEventListener("touchmove", (e) => {
  move(e);
});

slider.addEventListener("mouseleave", () => {
  left.style.width = `${lastPercentage}%`;
});

// Shielded Site JS
(function () {
  window.onload = function () {
    var frameName = new ds07o6pcmkorn({
      openElementId: "#shielded-logo",
      modalID: "modal",
    });
    frameName.init();
  };
})();
