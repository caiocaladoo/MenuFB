function Controller() {
    function doClick() {
        alert("ola");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "news";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.news = Ti.UI.createView({
        width: "100%",
        height: "100%",
        left: "0dp",
        top: "0dp",
        id: "news"
    });
    $.__views.news && $.addTopLevelView($.__views.news);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        top: "0dp",
        color: "black",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "news!",
        id: "__alloyId6"
    });
    $.__views.news.add($.__views.__alloyId6);
    doClick ? $.__views.__alloyId6.addEventListener("click", doClick) : __defers["$.__views.__alloyId6!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId6!click!doClick"] && $.__views.__alloyId6.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;