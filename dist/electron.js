/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
function _path() {
  var data = _interopRequireDefault(__webpack_require__(/*! path */ "path"));
  _path = function _path() {
    return data;
  };
  return data;
}
function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");
  _electron = function _electron() {
    return data;
  };
  return data;
}
/**
 * @desc electron 主入口
 */

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return "development" === 'development';
}
function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new (_electron().BrowserWindow)({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      // 👇 nodeIntegration contextIsolation 配置之后才能调用node模块
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL("http://127.0.0.1:7001");
  } else {
    mainWindow.loadURL("file://".concat(_path()["default"].join(__dirname, '../dist/index.html')));
  }
  // 事件: 进入全屏模式
  mainWindow.on('enter-full-screen', function () {
    // 在窗口进入全屏模式时执行操作
    console.log('进入全屏模式');
  });

  // 事件: 离开全屏模式
  mainWindow.on('leave-full-screen', function () {
    // 在窗口离开全屏模式时执行操作
    console.log('离开全屏模式');
  });
  // 事件：主窗口关闭
  mainWindow.on('close', function () {
    // 主窗口关闭后，应用默认退出
    _electron().app.quit();
  });
  return mainWindow;
}
_electron().app.whenReady().then(function () {
  var mainWindow = createWindow();
  _electron().app.on('ready', function () {
    _electron().globalShortcut.register('CommandOrControl+Shift+i', function () {
      // 判断现在控制台是否处于打开状态
      if (mainWindow.webContents.isDevToolsOpened()) {
        // 如果被打开，则关闭
        mainWindow.webContents.closeDevTools();
      } else {
        // 如果没有被打开，则调起
        mainWindow.webContents.openDevTools();
      }
    });
  });
  _electron().app.on('activate', function () {
    if (_electron().BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
var ROOT_PATH = _path()["default"].join(_electron().app.getAppPath(), '../');
_electron().ipcMain.on('get-root-path', function (event, arg) {
  event.reply('reply-root-path', ROOT_PATH);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEtBQUssQ0FBQyxFQUFFNUIsWUFBWSxDQUFDLENBQUM7RUFDaEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTTZCLFNBQVMsR0FBR2xCLGtCQUFJLENBQUNDLElBQUksQ0FBQ0ssZUFBRyxDQUFDYSxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUVwREMsbUJBQU8sQ0FBQ2pCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQ2tCLEtBQUssRUFBRUMsR0FBRyxFQUFLO0VBQzFDRCxLQUFLLENBQUNFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRUwsU0FBUyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24taW50ZXJ2aWV3L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uLWludGVydmlldy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2VsZWN0cm9uLWludGVydmlldy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9lbGVjdHJvbi1pbnRlcnZpZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24taW50ZXJ2aWV3Ly4vYXBwL21haW4vZWxlY3Ryb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKipcclxuICogQGRlc2MgZWxlY3Ryb24g5Li75YWl5Y+jXHJcbiAqL1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBnbG9iYWxTaG9ydGN1dCwgaXBjTWFpbiB9IGZyb20gJ2VsZWN0cm9uJztcclxuXHJcbmZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIC8vIPCfkYkg6L+Y6K6w5b6X5oiR5Lus6YWN572u5Lit6YCa6L+HIHdlYnBhY2suRGVmaW5lUGx1Z2luIOWumuS5ieeahOaehOW7uuWPmOmHj+WQl1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkge1xyXG4gIC8vIOWIm+W7uua1j+iniOWZqOeql+WPo1xyXG4gIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIGhlaWdodDogODAwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICAgIC8vIPCfkYcgbm9kZUludGVncmF0aW9uIGNvbnRleHRJc29sYXRpb24g6YWN572u5LmL5ZCO5omN6IO96LCD55Sobm9kZeaooeWdl1xyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYgKGlzRGV2KCkpIHtcclxuICAgIC8vIPCfkYcg55yL5Yiw5LqG5ZCX77yM5Zyo5byA5Y+R546v5aKD5LiL77yM5oiR5Lus5Yqg6L2955qE5piv6L+Q6KGM5ZyoIDcwMDEg56uv5Y+j55qEIFJlYWN0XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGh0dHA6Ly8xMjcuMC4wLjE6NzAwMWApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9kaXN0L2luZGV4Lmh0bWwnKX1gKTtcclxuICB9XHJcbiAgLy8g5LqL5Lu2OiDov5vlhaXlhajlsY/mqKHlvI9cclxuICBtYWluV2luZG93Lm9uKCdlbnRlci1mdWxsLXNjcmVlbicsICgpID0+IHtcclxuICAgIC8vIOWcqOeql+WPo+i/m+WFpeWFqOWxj+aooeW8j+aXtuaJp+ihjOaTjeS9nFxyXG4gICAgY29uc29sZS5sb2coJ+i/m+WFpeWFqOWxj+aooeW8jycpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDkuovku7Y6IOemu+W8gOWFqOWxj+aooeW8j1xyXG4gIG1haW5XaW5kb3cub24oJ2xlYXZlLWZ1bGwtc2NyZWVuJywgKCkgPT4ge1xyXG4gICAgLy8g5Zyo56qX5Y+j56a75byA5YWo5bGP5qih5byP5pe25omn6KGM5pON5L2cXHJcbiAgICBjb25zb2xlLmxvZygn56a75byA5YWo5bGP5qih5byPJyk7XHJcbiAgfSk7XHJcbiAgLy8g5LqL5Lu277ya5Li756qX5Y+j5YWz6ZetXHJcbiAgbWFpbldpbmRvdy5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAvLyDkuLvnqpflj6PlhbPpl63lkI7vvIzlupTnlKjpu5jorqTpgIDlh7pcclxuICAgIGFwcC5xdWl0KCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1haW5XaW5kb3c7XHJcbn1cclxuXHJcbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcclxuICBjb25zdCBtYWluV2luZG93ID0gY3JlYXRlV2luZG93KCk7XHJcbiAgYXBwLm9uKCdyZWFkeScsICgpID0+IHtcclxuICAgIGdsb2JhbFNob3J0Y3V0LnJlZ2lzdGVyKCdDb21tYW5kT3JDb250cm9sK1NoaWZ0K2knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIOWIpOaWreeOsOWcqOaOp+WItuWPsOaYr+WQpuWkhOS6juaJk+W8gOeKtuaAgVxyXG4gICAgICBpZiAobWFpbldpbmRvdy53ZWJDb250ZW50cy5pc0RldlRvb2xzT3BlbmVkKCkpIHtcclxuICAgICAgICAvLyDlpoLmnpzooqvmiZPlvIDvvIzliJnlhbPpl61cclxuICAgICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLmNsb3NlRGV2VG9vbHMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDlpoLmnpzmsqHmnInooqvmiZPlvIDvvIzliJnosIPotbdcclxuICAgICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBhcHAub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgUk9PVF9QQVRIID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcuLi8nKTtcclxuXHJcbmlwY01haW4ub24oJ2dldC1yb290LXBhdGgnLCAoZXZlbnQsIGFyZykgPT4ge1xyXG4gIGV2ZW50LnJlcGx5KCdyZXBseS1yb290LXBhdGgnLCBST09UX1BBVEgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIl9wYXRoIiwiZGF0YSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2VsZWN0cm9uIiwiaXNEZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjcmVhdGVXaW5kb3ciLCJtYWluV2luZG93IiwiQnJvd3NlcldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJkZXZUb29scyIsIm5vZGVJbnRlZ3JhdGlvbiIsImNvbnRleHRJc29sYXRpb24iLCJsb2FkVVJMIiwiY29uY2F0IiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJhcHAiLCJxdWl0Iiwid2hlblJlYWR5IiwidGhlbiIsImdsb2JhbFNob3J0Y3V0IiwicmVnaXN0ZXIiLCJ3ZWJDb250ZW50cyIsImlzRGV2VG9vbHNPcGVuZWQiLCJjbG9zZURldlRvb2xzIiwib3BlbkRldlRvb2xzIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCIsIlJPT1RfUEFUSCIsImdldEFwcFBhdGgiLCJpcGNNYWluIiwiZXZlbnQiLCJhcmciLCJyZXBseSJdLCJzb3VyY2VSb290IjoiIn0=