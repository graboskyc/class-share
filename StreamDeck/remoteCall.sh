#!/bin/bash

classid=""
email=""
password=""
uri="https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/YOURIDHERE/service/hook/incoming_webhook/remoteToggleVis?classid=${classid}"

curl --header "email: ${email}" --header "password: ${password}" ${uri}