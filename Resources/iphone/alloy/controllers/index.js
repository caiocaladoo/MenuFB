function Controller() {
    function trocarSeletor(current, next) {
        Ti.API.info(current + "[cur]");
        Ti.API.info(next + "[nex]");
        switch (next) {
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
        }
        $.seletor.animate({
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
            left: leftSeletor,
            duration: 200
        }, function() {});
        switch (current) {
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
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        fullscreen: false,
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT ],
        backgroundColor: "#3B5999",
        layout: "absolute",
        navBarHidden: true,
        tabBarHidden: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.searchBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "40dp",
        layout: "absolute",
        backgroundColor: "#3B5999",
        top: "20dp",
        id: "searchBar"
    });
    $.__views.win.add($.__views.searchBar);
    $.__views.pesquisa = Ti.UI.createTextField({
        height: "30dp",
        width: Ti.UI.FILL,
        left: "10dp",
        right: "42dp",
        top: "5dp",
        backgroundColor: "white",
        backgroundFocusedColor: "white",
        paddingLeft: "5dp",
        paddingRight: "5dp",
        hintText: "Pesquisar aqui...",
        font: {
            fontSize: "14dp"
        },
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        color: "#3B5999",
        borderRadius: "5dp",
        tintColor: "#3B5999",
        id: "pesquisa"
    });
    $.__views.searchBar.add($.__views.pesquisa);
    $.__views.searchBtn = Ti.UI.createImageView({
        height: "24dp",
        backgroundImage: "/images/botoes/search.png",
        top: "9dp",
        width: "24dp",
        right: "5dp",
        id: "searchBtn"
    });
    $.__views.searchBar.add($.__views.searchBtn);
    $.__views.tabBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "40dp",
        layout: "absolute",
        backgroundColor: "white",
        top: "60dp",
        id: "tabBar"
    });
    $.__views.win.add($.__views.tabBar);
    $.__views.seletor = Ti.UI.createView({
        width: "25%",
        height: "4dp",
        backgroundColor: "#3B5999",
        bottom: "0dp",
        left: "0dp",
        id: "seletor"
    });
    $.__views.tabBar.add($.__views.seletor);
    $.__views.newsBtn = Ti.UI.createView({
        width: "25%",
        height: "38dp",
        id: "newsBtn",
        left: "0dp"
    });
    $.__views.tabBar.add($.__views.newsBtn);
    $.__views.newsImg = Ti.UI.createImageView({
        height: "26dp",
        id: "newsImg",
        image: "/images/icones/news-blue.png"
    });
    $.__views.newsBtn.add($.__views.newsImg);
    $.__views.messageBtn = Ti.UI.createView({
        width: "25%",
        height: "38dp",
        id: "messageBtn",
        left: "25%"
    });
    $.__views.tabBar.add($.__views.messageBtn);
    $.__views.messageImg = Ti.UI.createImageView({
        height: "26dp",
        id: "messageImg",
        image: "/images/icones/message.png"
    });
    $.__views.messageBtn.add($.__views.messageImg);
    $.__views.peopleBtn = Ti.UI.createView({
        width: "25%",
        height: "38dp",
        id: "peopleBtn",
        left: "50%"
    });
    $.__views.tabBar.add($.__views.peopleBtn);
    $.__views.peopleImg = Ti.UI.createImageView({
        height: "26dp",
        id: "peopleImg",
        image: "/images/icones/contacts.png"
    });
    $.__views.peopleBtn.add($.__views.peopleImg);
    $.__views.globoBtn = Ti.UI.createView({
        width: "25%",
        height: "38dp",
        id: "globoBtn",
        left: "75%"
    });
    $.__views.tabBar.add($.__views.globoBtn);
    $.__views.globoImg = Ti.UI.createImageView({
        height: "26dp",
        id: "globoImg",
        image: "/images/icones/globo.png"
    });
    $.__views.globoBtn.add($.__views.globoImg);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("news", {
        width: "100%",
        height: "100%",
        left: "0dp",
        right: "0dp",
        top: "0dp",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("message", {
        width: "100%",
        height: "100%",
        left: "0dp",
        right: "0dp",
        top: "0dp",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("people", {
        width: "100%",
        height: "100%",
        left: "0dp",
        right: "0dp",
        top: "0dp",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId5 = Alloy.createController("globo", {
        width: "100%",
        height: "100%",
        left: "0dp",
        right: "0dp",
        top: "0dp",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5.getViewEx({
        recurse: true
    }));
    $.__views.scrollable = Ti.UI.createScrollableView({
        showPagingControl: "false",
        top: "100dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        layout: "horizontal",
        views: __alloyId1,
        id: "scrollable"
    });
    $.__views.win.add($.__views.scrollable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.open();
    $.searchBtn.addEventListener("click", function() {
        $.pesquisa.blur();
        Ti.API.info("[pesquisar] " + $.pesquisa.value);
    });
    var currentPage = $.scrollable.getCurrentPage();
    var leftSeletor = "";
    $.scrollable.addEventListener("scroll", function(page) {
        if (currentPage != page.currentPage) {
            Ti.API.info("TROCOU!");
            trocarSeletor(currentPage, page.currentPage);
            currentPage = page.currentPage;
        }
    });
    $.newsBtn.addEventListener("click", function() {
        trocarSeletor(currentPage, 0);
        currentPage = 0;
        $.scrollable.setCurrentPage(0);
    });
    $.messageBtn.addEventListener("click", function() {
        trocarSeletor(currentPage, 1);
        currentPage = 1;
        $.scrollable.setCurrentPage(1);
    });
    $.peopleBtn.addEventListener("click", function() {
        trocarSeletor(currentPage, 2);
        currentPage = 2;
        $.scrollable.setCurrentPage(2);
    });
    $.globoBtn.addEventListener("click", function() {
        trocarSeletor(currentPage, 3);
        currentPage = 3;
        $.scrollable.setCurrentPage(3);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;