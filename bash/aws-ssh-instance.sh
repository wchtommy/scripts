#!/usr/bin/env bash

PS3="Select instance to SSH:  "
KEY="~/.ssh/cure.key"

instances=`aws ec2 describe-instances --region=ap-east-1 --output text --query 'Reservations[*].Instances[*].{name:Tags[?Key==\`Name\`].Value, ip:NetworkInterfaces[0].PrivateIpAddress}' | awk 'NR%2{printf "%s ",$0;next;}1' | sed "s/ NAME//;" | sort`

readarray -t options <<<"$instances"

export COLUMNS=1

select INSTANCE in "${options[@]}" "Quit";
do
  case $INSTANCE in
    "Quit")
      break
      ;;
    *)
      echo "You picked" $INSTANCE
      IP=${INSTANCE%    *}
      ssh -i $KEY ec2-user@$IP
      break
      ;;
  esac
done
