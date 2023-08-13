
docker rm -vf $(docker ps -aq)
docker rmi -f $(docker images -aq)


docker image inspect steveltn/https-portal:1.7