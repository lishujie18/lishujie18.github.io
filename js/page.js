
document.querySelector("#nav_icon").addEventListener("click", function() {
	var x = document.getElementById("nav_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});