
(function() {
    console.log("Initializing Ohlone 50th Anniversary Blog Engine...");

    // Make each listing card open its post while preserving any links inside it.
    document.querySelectorAll(".custom-post-card").forEach(function(card) {
        const postLink = card.querySelector(".card-title a[href]") ||
            card.querySelector(".card-image-wrap a[href]");
        if (!postLink) return;

        const postUrl = postLink.href;
        card.setAttribute("role", "link");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", "Open " + postLink.textContent.trim());

        function openPost() {
            window.location.href = postUrl;
        }

        card.addEventListener("click", function(event) {
            if (!event.target.closest("a, button, input, select, textarea")) {
                openPost();
            }
        });

        card.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPost();
            }
        });
    });
})();
