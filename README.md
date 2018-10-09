# PecheBot
A Bot how can answer questions about me and my career.

## Getting Started
Very simple, just text "bot" to [PecheBot](http://www.pechebot.com) number, to
start. Or, connect with it using [Telegram](https://t.me/PecheBot_bot) or [Skype](https://join.skype.com/bot/c58bf8cc-6063-4ded-a8b6-d250618d015f).

### Prerequisites
PecheBot make use of:
* [Twilio](http://www.twilio.com)
* [Amazon Lambda Account](aws.amazon.com)
* [Claudiajs](http://www.claudiajs.com)
* Optional, [Slack](http://www.slack.com)

### Installing
* ```git clone```
* ```npm install claudia -G```
* Your should have an Amazon Developer Account
* ```npm install```
* ```claudia update -- --configure-twilio-sms-bot```, save your Twilio SID, Account Number, and telefone number
* ```claudia update -- --configure-skype-bot```, use Microsoft App and save its ID and password
* ```claudia update -- --configure-telegram-bot```, use the /botfather to create a new bot, and save the token.
* ```claudia update -- --configure-slack-slash-command```, to use it with Slack Slash Commands. Follow the instructions on Slack on how to create a Slack Slash Command. Save the Slack Verification Token.
* * ```anwser.json```, Edit it and make the necesary changes for suit your situation. Do not delete the "key" 'bot' on this file. You'll need it for the next step.
*
## Running the test
Just text "bot" to your Twilio number, and you should receive an answer.

## Build With
* Node.js and npm
* Claudia - A framework to upload AWS Lambda functions from the CLI,
* and, claudia-bot-builder - a bot framework to facilitate the communication between
platforms.

## Versioning
Still in version 1.0.0

## Authors
* Pedro Salinas - That's me.
*
## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledments
Big thank you to those whose code was used, and serve as inspiration
* EstherBot
