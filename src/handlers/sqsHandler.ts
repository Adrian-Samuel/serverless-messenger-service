import { Handler, SQSEvent } from "aws-lambda";
import { SNS } from "aws-sdk";
import { SMSParams } from "../dto/smsMessage";
import { Message } from '../repository/message'
import { SQSMessageException } from "../Errors/Exception";

export const process: Handler = async (event: SQSEvent) => {
  try {
    const message = JSON.parse(event.Records[0]?.body) as {request: SMSParams};

    const preparedMessage = new Message(
      message.request.Message,
      message.request.PhoneNumber,
      new SNS({ apiVersion: "2010–03–31" })
    );

    await preparedMessage.send();
  } catch (err) {
    new SQSMessageException(err as string);
  }
};
