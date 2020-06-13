export default class DefaultLogHandler {
  /**
   * verbose
   * @param source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public verbose(source: string, message: string): void {
    console.log(source, message);
  }

  /**
   * info
   * @param source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public info(source: string, message: string): void {
    console.info(source, message);
  }

  /**
   * warn
   * @param source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public warn(source: string, message: string): void {
    console.warn(source, message);
  }

  /**
   * error
   * @param source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   */
  public error(source: string, error: Error): void {
    console.error(source, error);
  }
}
