#!/bin/bash

#curl "http://httpbin.org/patch?id=${ID}" \
curl "http://localhost:4741/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
    \"passwords\": {
      \"old\": \"${OLD}\",
      \"new\": \"${NEW}\"
    }
  }"

echo
