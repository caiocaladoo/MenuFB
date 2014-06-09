function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "message";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.message = Ti.UI.createView({
        width: "100%",
        height: "100%",
        left: "0dp",
        top: "0dp",
        id: "message"
    });
    $.__views.message && $.addTopLevelView($.__views.message);
    $.__views.scroll = Ti.UI.createScrollView({
        showHorizontalScrollIndicator: "false",
        scrollType: "vertical",
        layout: "vertical",
        contentWidth: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: "0dp",
        id: "scroll"
    });
    $.__views.message.add($.__views.scroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    for (var i = 0; 20 > i; i++) {
        Ti.API.info("added");
        var viewContent = Ti.UI.createView();
        viewContent.applyProperties($.createStyle({
            apiName: "View",
            classes: "viewContent"
        }));
        var imgView = Ti.UI.createImageView({
            image: 0 == i % 2 ? "/images/contact-blue.png" : "/images/contact-red.png",
            height: "98dp",
            width: "98dp",
            left: "0dp"
        });
        viewContent.add(imgView);
        0 == i && (viewContent.top = "10dp");
        $.scroll.add(viewContent);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;