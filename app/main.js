"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var todo_service_1 = require("./todo-service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [todo_service_1.TodoService]);
//# sourceMappingURL=main.js.map