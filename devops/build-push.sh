#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="skepfy/backend-company"
DOCKER_PATH="."
IMAGE_TAG="latest"
REPOSITORY="harbor-dev.aquaapia.com.br/$IMAGE_NAME"
FULL_REPOSITORY_NAME="$REPOSITORY:$IMAGE_TAG"

docker build -t $IMAGE_NAME $DOCKER_PATH --no-cache
docker tag $IMAGE_NAME $FULL_REPOSITORY_NAME
# echo "sDpd64DJ4W" | docker login --username admin --password-stdin $REPOSITORY
# docker push $FULL_REPOSITORY_NAME

docker run --network=dbskepfy_default --env-file .env --rm -it skepfy/backend-company