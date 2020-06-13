"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultLogHandler_1 = require("./defaultLogHandler");
/**
 * The Log class provides static methods for logging messages at different levels (verbose,
 * info, warning, error) and with context information. Context information helps identify
 * which component generated the messages and makes the messages useful and filterable.
 * @public
 */
var Log = /** @class */ (function () {
    function Log() {
    }
    /**
     * Configures the logger with a different target.
     * @beta
     */
    Log.initialize = function (logHandler) {
        Log._logHandler = logHandler;
    };
    /**
     * Logs a verbose message
     * @param   source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param   message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    Log.verbose = function (source, message) {
        this._logHandler.verbose(source, message);
    };
    /**
     * info
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    Log.info = function (source, message) {
        this._logHandler.info(source, message);
    };
    /**
     * warn
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    Log.warn = function (source, message) {
        this._logHandler.warn(source, message);
    };
    /**
     * error
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param error - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    Log.error = function (source, error) {
        this._logHandler.error(source, error);
    };
    Log._logHandler = new defaultLogHandler_1.default();
    return Log;
}());
exports.default = Log;
//# sourceMappingURL=Log.js.map