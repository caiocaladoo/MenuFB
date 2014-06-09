function Controller() {
    function doClick() {
        alert("ola");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "people";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.people = Ti.UI.createView({
        width: "100%",
        height: "100%",
        left: "0dp",
        top: "0dp",
        id: "people"
    });
    $.__views.people && $.addTopLevelView($.__views.people);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        top: "0dp",
        color: "black",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "people!",
        id: "__alloyId7"
    });
    $.__views.people.add($.__views.__alloyId7);
    doClick ? $.__views.__alloyId7.addEventListener("click", doClick) : __defers["$.__views.__alloyId7!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId7!click!doClick"] && $.__views.__alloyId7.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;