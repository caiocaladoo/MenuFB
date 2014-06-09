function Controller() {
    function doClick() {
        alert("ola");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "globo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.globo = Ti.UI.createView({
        width: "100%",
        height: "100%",
        left: "0dp",
        top: "0dp",
        id: "globo"
    });
    $.__views.globo && $.addTopLevelView($.__views.globo);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        top: "0dp",
        color: "black",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "globo!",
        id: "__alloyId0"
    });
    $.__views.globo.add($.__views.__alloyId0);
    doClick ? $.__views.__alloyId0.addEventListener("click", doClick) : __defers["$.__views.__alloyId0!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId0!click!doClick"] && $.__views.__alloyId0.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;