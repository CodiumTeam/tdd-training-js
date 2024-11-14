.PHONY: docker-build
docker-build:
	docker build -t codiumteam/tdd-training-js .

.PHONY: docker-publish
docker-publish:
	docker push codiumteam/tdd-training-js