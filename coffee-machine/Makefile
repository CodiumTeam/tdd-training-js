.PHONY: default test coverage docker-test docker-coverage
default: docker-test

test:
	npm test

coverage:
	npm run coverage
	@printf "To visualize the lines open the report at coverage/lcov-report/index.html\n"

docker-test:
	docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codiumteam/tdd-training-js make test

docker-coverage:
	@docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codiumteam/tdd-training-js make coverage
