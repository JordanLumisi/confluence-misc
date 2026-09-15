const ring = document.getElementById("progressRing");
const label = document.getElementById("pctLabel");
const slider = document.getElementById("slider");
const CIRCUMFERENCE = 364.4;

function update(val) {
	const offset = CIRCUMFERENCE - (val / 100) * CIRCUMFERENCE;
	ring.style.strokeDashoffset = offset;
	label.textContent = val + "%";
}

slider.addEventListener("input", e => update(e.target.value));
update(0);
