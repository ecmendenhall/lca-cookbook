#! /bin/bash
set -e
echo 'name, amount, unit' > csv
cat $1 | awk '{print $1 " " $2 " " $3}' | sed s/\ /\,/g >> csv
csvtojson parse csv
