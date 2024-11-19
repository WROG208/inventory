// Load JSON data and initialize the gallery
fetch('https://serene-entremet-154bc8.netlify.app/')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById("gallery");
        const searchBox = document.getElementById("search");

        // Function to display images
        function displayImages(filter = "") {
            gallery.innerHTML = ""; // Clear the gallery
            data
                .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
                .forEach(item => {
                    const container = document.createElement("div");
                    container.className = "image-container";

                    const img = document.createElement("img");
                    img.src = `images/${item.image}`;
                    img.alt = item.name;

                    const caption = document.createElement("p");
                    caption.textContent = item.description;

                    container.appendChild(img);
                    container.appendChild(caption);
                    gallery.appendChild(container);
                });
        }

        // Search functionality
        searchBox.addEventListener("input", () => {
            const searchValue = searchBox.value;
            displayImages(searchValue);
        });

        // Display all images on load
        displayImages();
    })
    .catch(err => console.error("Error loading JSON data:", err));
