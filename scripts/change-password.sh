#!/bin/bash

#curl "http://httpbin.org/patch?id=${ID}" \
curl "http://localhost:4741/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=$OLD" \
  --data-urlencode "passwords[new]=$NEW"

echo
