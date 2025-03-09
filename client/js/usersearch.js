document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const keyword = document.getElementById("searchKeyword").value.trim();

    if (keyword !== "") {
        fetch(`/article/server/database/search.php?keyword=${encodeURIComponent(keyword)}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("searchResults").innerHTML = data;
            })
            .catch(error => {
                console.error("Error fetching search results:", error);
            });
    } else {
        document.getElementById("searchResults").innerHTML = "Please enter a keyword to search.";
    }
});

