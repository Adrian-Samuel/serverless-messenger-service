import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { requestValidator } from "../validators/httpValidator";

export const smsSend: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const parseResult = requestValidator.safeParse(event.body);

  if (!parseResult.success) {
    return {
      statusCode: 422,
      body: parseResult.error.toString(),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Your message is being processed`,
      request: parseResult.data,
    }),
  };
};
