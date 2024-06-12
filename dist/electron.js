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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxJQUFJLENBQUNLLGVBQUcsQ0FBQ1ksVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7QUFFcERDLG1CQUFPLENBQUNoQixFQUFFLENBQUMsZUFBZSxFQUFFLFVBQUNpQixLQUFLLEVBQUVDLEdBQUcsRUFBSztFQUMxQ0QsS0FBSyxDQUFDRSxLQUFLLENBQUMsaUJBQWlCLEVBQUVMLFNBQVMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLWludGVydmlldy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1pbnRlcnZpZXcvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9lbGVjdHJvbi1pbnRlcnZpZXcvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb24taW50ZXJ2aWV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZWN0cm9uLWludGVydmlldy8uL2FwcC9tYWluL2VsZWN0cm9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xyXG4gKi9cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgZ2xvYmFsU2hvcnRjdXQsIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XHJcblxyXG5mdW5jdGlvbiBpc0RldigpIHtcclxuICAvLyDwn5GJIOi/mOiusOW+l+aIkeS7rOmFjee9ruS4remAmui/hyB3ZWJwYWNrLkRlZmluZVBsdWdpbiDlrprkuYnnmoTmnoTlu7rlj5jph4/lkJdcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdygpIHtcclxuICAvLyDliJvlu7rmtY/op4jlmajnqpflj6NcclxuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gICAgICAvLyDwn5GHIG5vZGVJbnRlZ3JhdGlvbiBjb250ZXh0SXNvbGF0aW9uIOmFjee9ruS5i+WQjuaJjeiDveiwg+eUqG5vZGXmqKHlnZdcclxuICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0RldigpKSB7XHJcbiAgICAvLyDwn5GHIOeci+WIsOS6huWQl++8jOWcqOW8gOWPkeeOr+Wig+S4i++8jOaIkeS7rOWKoOi9veeahOaYr+i/kOihjOWcqCA3MDAxIOerr+WPo+eahCBSZWFjdFxyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKGBodHRwOi8vMTI3LjAuMC4xOjcwMDFgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGlzdC9pbmRleC5odG1sJyl9YCk7XHJcbiAgfVxyXG4gIC8vIOS6i+S7tjog6L+b5YWl5YWo5bGP5qih5byPXHJcbiAgbWFpbldpbmRvdy5vbignZW50ZXItZnVsbC1zY3JlZW4nLCAoKSA9PiB7XHJcbiAgICAvLyDlnKjnqpflj6Pov5vlhaXlhajlsY/mqKHlvI/ml7bmiafooYzmk43kvZxcclxuICAgIGNvbnNvbGUubG9nKCfov5vlhaXlhajlsY/mqKHlvI8nKTtcclxuICB9KTtcclxuXHJcbiAgLy8g5LqL5Lu2OiDnprvlvIDlhajlsY/mqKHlvI9cclxuICBtYWluV2luZG93Lm9uKCdsZWF2ZS1mdWxsLXNjcmVlbicsICgpID0+IHtcclxuICAgIC8vIOWcqOeql+WPo+emu+W8gOWFqOWxj+aooeW8j+aXtuaJp+ihjOaTjeS9nFxyXG4gICAgY29uc29sZS5sb2coJ+emu+W8gOWFqOWxj+aooeW8jycpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBtYWluV2luZG93O1xyXG59XHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgY29uc3QgbWFpbldpbmRvdyA9IGNyZWF0ZVdpbmRvdygpO1xyXG4gIGFwcC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgICBnbG9iYWxTaG9ydGN1dC5yZWdpc3RlcignQ29tbWFuZE9yQ29udHJvbCtTaGlmdCtpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyDliKTmlq3njrDlnKjmjqfliLblj7DmmK/lkKblpITkuo7miZPlvIDnirbmgIFcclxuICAgICAgaWYgKG1haW5XaW5kb3cud2ViQ29udGVudHMuaXNEZXZUb29sc09wZW5lZCgpKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c6KKr5omT5byA77yM5YiZ5YWz6ZetXHJcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5jbG9zZURldlRvb2xzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ6KKr5omT5byA77yM5YiZ6LCD6LW3XHJcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgYXBwLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5sZW5ndGggPT09IDApIGNyZWF0ZVdpbmRvdygpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IFJPT1RfUEFUSCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnLi4vJyk7XHJcblxyXG5pcGNNYWluLm9uKCdnZXQtcm9vdC1wYXRoJywgKGV2ZW50LCBhcmcpID0+IHtcclxuICBldmVudC5yZXBseSgncmVwbHktcm9vdC1wYXRoJywgUk9PVF9QQVRIKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJfcGF0aCIsImRhdGEiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9lbGVjdHJvbiIsImlzRGV2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY3JlYXRlV2luZG93IiwibWFpbldpbmRvdyIsIkJyb3dzZXJXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwiZGV2VG9vbHMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwibG9hZFVSTCIsImNvbmNhdCIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwib24iLCJjb25zb2xlIiwibG9nIiwiYXBwIiwid2hlblJlYWR5IiwidGhlbiIsImdsb2JhbFNob3J0Y3V0IiwicmVnaXN0ZXIiLCJ3ZWJDb250ZW50cyIsImlzRGV2VG9vbHNPcGVuZWQiLCJjbG9zZURldlRvb2xzIiwib3BlbkRldlRvb2xzIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCIsIlJPT1RfUEFUSCIsImdldEFwcFBhdGgiLCJpcGNNYWluIiwiZXZlbnQiLCJhcmciLCJyZXBseSJdLCJzb3VyY2VSb290IjoiIn0=