function openToggleByHash() {
    const toggleContainers = document.querySelectorAll(".elementor-toggle");

    toggleContainers.forEach(toggleContainer => {
        const toggleItems = toggleContainer.querySelectorAll(".elementor-tab-title");

        toggleItems.forEach(item => {
            const sanitizedId = item.textContent
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-");

            item.id = sanitizedId;

            if (window.location.hash === `#${sanitizedId}`) {
                toggleContainer.querySelectorAll(".elementor-active").forEach(activeItem => {
                    activeItem.classList.remove("elementor-active");
                    const contentPanel = activeItem.nextElementSibling;
                    if (contentPanel) {
                        contentPanel.style.display = "none";
                    }
                });

                // Open the toggle item if it's not already active
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
}

document.addEventListener("DOMContentLoaded", openToggleByHash);
window.addEventListener("hashchange", openToggleByHash);