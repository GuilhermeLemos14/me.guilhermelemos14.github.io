document.addEventListener("DOMContentLoaded", () => {
	const params = new URLSearchParams(location.search);
	const starsEnabled = params.get("stars") !== "off";

	if (!starsEnabled) {
		document.body.classList.add("no-stars");
	}

	const toggleButton = document.getElementById("toggle-stars-button");
	if (toggleButton) {
		toggleButton.addEventListener("click", () => {
			const currentUrl = new URL(window.location.href);
			if (document.body.classList.contains("no-stars")) {
				currentUrl.searchParams.delete("stars");
			} else {
				currentUrl.searchParams.set("stars", "off");
			}
			window.location.href = currentUrl.toString();
		});
	}
});
