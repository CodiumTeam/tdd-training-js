.PHONY: default test coverage docker-build docker-test docker-coverage
default: docker-build docker-test

test:
	npm test

coverage:
	npm run coverage
	@printf "To visualize the lines open the report at coverage/lcov-report/index.html\n"

docker-build:
	@docker build .. -t codium-tdd-training-js

docker-test:
	docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codium-tdd-training-js make test

docker-coverage:
	@docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codium-tdd-training-js make coverage
