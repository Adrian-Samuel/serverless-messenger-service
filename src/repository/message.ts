import { SNS } from "aws-sdk";
import { SMSParams } from "../dto/smsMessage"

export class Message {
    private message: string;
    private phoneNumber: string;
    private sender: SNS;
    constructor(message: string, number: string, sender: SNS) {
      this.message = message;
      this.phoneNumber = number;
      this.sender = sender;
    }
    send() {
      return this.sender
        .publish({
          Message: this.message,
          PhoneNumber: this.phoneNumber,
        } as SMSParams)
        .promise();
    }
  }
  