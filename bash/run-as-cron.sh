#!/bin/sh

. "$1"
exec /usr/bin/env -i "$SHELL" -c ". $1; $2"

# chmod +x run-as-cron
