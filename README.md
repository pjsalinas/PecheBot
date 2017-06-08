# PecheBot
A way to answer questions about my career using different platforms. You don't have to be with me to find out.
Here is how you can do this:

Slack
/pechebot 'theQuestion'

Twilio
Send text to my number

Telegram
Connect with my bot

Skype


### What you will need:
*Slack*
Slack token assigned when you set up Slack Slash Command Integration
    to find out about:
        response_url: originalApiRequest.post.response_url
        channel_name: originalApiRequest.post.channel_name

    originalApiRequest.post = {
		token: "",
		team_id: "",
		team_domain: "pjsalinas",
		channel_id: "",
		channel_name: "",
		user_id: "",
		user_name: "",
		command: "/pechebot",
		text: "bot",
		response_url: "https://hooks.slack.com/commands/1234/5678"
	}

*Twilio*
* Twilio Account ID
* Twilio Auth Token
* Twilio Number