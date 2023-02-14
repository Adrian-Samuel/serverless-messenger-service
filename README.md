# Messenger Service

This is a serverless repo to send texts using http endpoint

Endpoint in question -  /sms/send
Service used to send sms - AWS sns


## TODOs

1. Tests

Unit Tests Cases

- What happens when number is invalid
- What happens if it's invalid
- What happens when the number is empty
- What happens when the message is empty
- What happens when it's not empty

Integration Tests Cases

- Assert message and status code on http /post
  - Valid response
  - Invalid response

3. Fix Webpack Setup
    - Get serverless plugin to work

4. Use Middleware from [Middy](https://middy.js.org/) to implement out middleware pattern