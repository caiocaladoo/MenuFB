function doClick(e) {
	alert($.label.text);
}

var inputHab = false;

$.win.open();

$.searchBtn.addEventListener("click", function(e) {
	$.pesquisa.blur();
	Ti.API.info("[pesquisar] " + $.pesquisa.value);
});

var currentPage = $.scrollable.getCurrentPage();
var leftSeletor = "";
//alternando os marcadores do carrosel
$.scrollable.addEventListener("scroll", function(page) {

	if (currentPage != page.currentPage) {
		Ti.API.info("TROCOU!");
		trocarSeletor(currentPage, page.currentPage);
		currentPage = page.currentPage;
	}
});

$.newsBtn.addEventListener("click", function(e) {
	trocarSeletor(currentPage, 0);
	currentPage = 0;
	$.scrollable.setCurrentPage(0);
});

$.messageBtn.addEventListener("click", function(e) {
	trocarSeletor(currentPage, 1);
	currentPage = 1;
	$.scrollable.setCurrentPage(1);
});

$.peopleBtn.addEventListener("click", function(e) {
	trocarSeletor(currentPage, 2);
	currentPage = 2;
	$.scrollable.setCurrentPage(2);
});

$.globoBtn.addEventListener("click", function(e) {
	trocarSeletor(currentPage, 3);
	currentPage = 3;
	$.scrollable.setCurrentPage(3);
});

function trocarSeletor(current, next) {
	Ti.API.info(current + "[cur]");
	Ti.API.info(next + "[nex]");
	switch(next) {
		case 0:
			leftSeletor = "0";
			$.newsImg.image = "/images/icones/news-blue.png";
			break;
		case 1:
			leftSeletor = "25%";
			$.messageImg.image = "/images/icones/message-blue.png";
			break;
		case 2:
			leftSeletor = "50%";
			$.peopleImg.image = "/images/icones/contacts-blue.png";
			break;
		case 3:
			leftSeletor = "75%";
			$.globoImg.image = "/images/icones/globo-blue.png";
			break;
	}

	$.seletor.animate({
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
		left : leftSeletor,
		duration : 200
	}, function(e) {
	});

	//identificando onde eu estava
	switch(current) {
		case 0:
			$.newsImg.image = "/images/icones/news.png";
			break;
		case 1:
			$.messageImg.image = "/images/icones/message.png";
			break;
		case 2:
			$.peopleImg.image = "/images/icones/contacts.png";
			break;
		case 3:
			$.globoImg.image = "/images/icones/globo.png";
			break;
	}
}