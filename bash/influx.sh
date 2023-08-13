# Delete Bucket
docker-compose exec influxdb bash

influx delete \
--org karmadev \
--bucket soschinmed \
--start 2020-01-01T00:00:00.00Z \
--stop 2100-05-01T00:00:00.00Z \
-t lyhxnqxj49Wq56Y7TgUKiquVDpEyM7Ow1-NTkICwLysls4iW7vFkTkAdgoQ4j5OV51dmrK85QrtrCc9oxKOUXA==