// Refer back to this video to make the rest of the component https://youtu.be/QWvK5_5hL7I

class Card extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define("card", Card);

function showOptions(num) {
	if (num == "0") {
		document.getElementById("assigneeDropdown").classList.toggle("hide");
	}
	if (num == "1") {
		document.getElementById("reporterDropdown").classList.toggle("hide");
	}
	if (num == "2") {
		document.getElementById("statusDropdown").classList.toggle("hide");
	}
	if (num == "3") {
		document.getElementById("typeDropdown").classList.toggle("hide");
	}
	if (num == "4") {
		document.getElementById("statusCategoryDropdown").classList.toggle("hide");
	}
	if (num == "5") {
		document.getElementById("sortPanel").classList.toggle("hide");
	}
}
document.getElementById("collapse-filter").onclick = (e) => {
	e.preventDefault();
};



// window.onclick = function (event) {
// 	if (!event.target.matches(".dropbtn")) {
// 		var dropdowns = document.getElementsByClassName("dropdown-content");

// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains("show")) {
// 				openDropdown.classList.remove("show");
// 			}
// 		}
// 	}
// };
