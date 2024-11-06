document.addEventListener("DOMContentLoaded", function() {
    const idMap = {};

    const toggleContainers = document.querySelectorAll(".elementor-toggle");

    toggleContainers.forEach(toggleContainer => {
        const toggleItems = toggleContainer.querySelectorAll(".elementor-tab-title");

        toggleItems.forEach(item => {
            let sanitizedId = item.textContent
                .trim()
                .toLowerCase()
                .replace(/^[\d\s-]+/, "")
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");

            if (idMap[sanitizedId]) {
                let counter = idMap[sanitizedId] + 1;
                idMap[sanitizedId] = counter;
                sanitizedId = `${sanitizedId}-${counter}`;
            } else {
                idMap[sanitizedId] = 1;
            }

            item.id = sanitizedId;

            if (window.location.hash === `#${sanitizedId}`) {
                toggleContainer.querySelectorAll(".elementor-active").forEach(activeItem => {
                    activeItem.classList.remove("elementor-active");
                    const contentPanel = activeItem.nextElementSibling;
                    if (contentPanel) {
                        contentPanel.style.display = "none";
                    }
                });

                if (!item.classList.contains("elementor-active")) {
                    item.classList.add("elementor-active");
                    const contentPanel = item.nextElementSibling;
                    if (contentPanel) {
                        contentPanel.style.display = "block";
                    }
                }
                item.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
