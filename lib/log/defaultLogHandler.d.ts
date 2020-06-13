export default class DefaultLogHandler {
    /**
     * verbose
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    verbose(source: string, message: string): void;
    /**
     * info
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    info(source: string, message: string): void;
    /**
     * warn
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    warn(source: string, message: string): void;
    /**
     * error
     * @param source - the source from where the message is logged, e.g., the class name.
     *          The source provides context information for the logged message.
     *          If the source's length is more than 20, only the first 20 characters are kept.
     * @param message - the message to be logged
     *          If the message's length is more than 100, only the first 100 characters are kept.
     */
    error(source: string, error: Error): void;
}
//# sourceMappingURL=defaultLogHandler.d.ts.map