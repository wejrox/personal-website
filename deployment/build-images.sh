PROJ_ROOT="$(git rev-parse --show-toplevel)"
IMAGE_NAME="$DOCKER_USERNAME/$DOCKER_IMAGE_NAME"
PROJECT_VERSION=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' ${PROJ_ROOT}/package.json)

docker build . -t $IMAGE_NAME:$TRAVIS_BUILD_NUMBER

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" ]]; then
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  docker tag $IMAGE_NAME:$TRAVIS_BUILD_NUMBER $IMAGE_NAME:$PROJECT_VERSION
  docker push $IMAGE_NAME:$PROJECT_VERSION
  docker tag $IMAGE_NAME:$TRAVIS_BUILD_NUMBER $IMAGE_NAME:latest
  docker push $IMAGE_NAME:latest
fi
