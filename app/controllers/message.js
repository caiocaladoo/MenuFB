var args = arguments[0] || {};

function doClick(e) {
	alert("ola");
}

for (var i = 0; i < 20; i++) {

	Ti.API.info("added");
	var viewContent = Ti.UI.createView();

	viewContent.applyProperties($.createStyle({
		apiName : "View",
		classes : "viewContent"
	}));

	var imgView = Ti.UI.createImageView({
		image : i % 2 == 0 ? "/images/contact-blue.png" : "/images/contact-red.png",
		height : "98dp",
		width : "98dp",
		left : "0dp",
	});

	viewContent.add(imgView);

	if (i == 0) {
		viewContent.top = "5dp";
	}

	$.scroll.add(viewContent);
}
