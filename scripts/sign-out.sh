#!/bin/bash

curl "http://localhost:4741/sign-out/$ID" \
#curl "http://httpbin.org/delete?id=$ID" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
