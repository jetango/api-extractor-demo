"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultLogHandler = /** @class */ (function () {
    function DefaultLogHandler() {
    }
    /**
     * verbose
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    DefaultLogHandler.prototype.verbose = function (source, message) {
        console.log(source, message);
    };
    /**
     * info
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    DefaultLogHandler.prototype.info = function (source, message) {
        console.info(source, message);
    };
    /**
     * warn
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    DefaultLogHandler.prototype.warn = function (source, message) {
        console.warn(source, message);
    };
    /**
     * error
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    DefaultLogHandler.prototype.error = function (source, error) {
        console.error(source, error);
    };
    return DefaultLogHandler;
}());
exports.default = DefaultLogHandler;
//# sourceMappingURL=defaultLogHandler.js.map