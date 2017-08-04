#!/bin/bash

curl "http://localhost:4741/sign-up" \
#curl "http://httpbin.org/post" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD" \
  --data-urlencode "credentials[password_confirmation]=$PASSWORD"

echo
