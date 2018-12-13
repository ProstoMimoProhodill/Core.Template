"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var button = styled_components_1.default.button;
var ToolButtonStyle = button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    position: relative;\n    width: 100%;\n    margin-left: -50%;\n    left: 50%;\n  }\n"], ["\n  {\n    position: relative;\n    width: 100%;\n    margin-left: -50%;\n    left: 50%;\n  }\n"])));
var ToolButton = /** @class */ (function (_super) {
    __extends(ToolButton, _super);
    function ToolButton(props) {
        return _super.call(this, props) || this;
    }
    ToolButton.prototype.render = function () {
        return (React.createElement(ToolButtonStyle, { className: "btn btn-success", onClick: this.props.listener },
            React.createElement("img", { src: this.props.path })));
    };
    return ToolButton;
}(React.Component));
exports.ToolButton = ToolButton;
var templateObject_1;
//# sourceMappingURL=ToolButton.js.map