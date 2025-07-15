
function showModal(title, info) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-info").textContent = info;
    document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
