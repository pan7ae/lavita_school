const registerBtn = document.getElementById("registration-btn");
registerBtn.addEventListener("click", function () {
	console.log("clicked");
});

const footerElSections = document.getElementsByClassName("footer__item-block");
footerElSections[1].style.paddingBottom = "40px";

const socialBlock = document.getElementsByClassName("social-block");
for (let i = 0; i < socialBlock[0].children.length; i++) {
	if (i === socialBlock[0].children.length - 1) {
		continue;
	} else {
		socialBlock[0].children[i].style.paddingRight = "20px";
	}
}
