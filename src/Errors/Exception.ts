export class SQSMessageException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SQSLambdaProcessingError";
  }
}
