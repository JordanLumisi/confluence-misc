const wifiBtn = document.getElementById("wifiBtn");
const wifiModal = document.getElementById("wifiModal");
const wifiModalClose = document.getElementById("wifiModalClose");

function openWifiModal() {
	wifiModal.classList.add("active");
}

function closeWifiModal() {
	wifiModal.classList.remove("active");
}

wifiBtn.addEventListener("click", openWifiModal);
wifiModalClose.addEventListener("click", closeWifiModal);

wifiModal.addEventListener("click", e => {
	if (e.target === wifiModal) closeWifiModal();
});

document.addEventListener("keydown", e => {
	if (e.key === "Escape") closeWifiModal();
});
