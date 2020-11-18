.PHONY: default test coverage docker-build docker-test docker-coverage
default: docker-test

test:
	npm test

coverage:
	coverage run --source=fizz_buzz -m unittest
	coverage report
	coverage html
	@printf "To visualize the lines open the report at htmlcov/index.html\n"

docker-build:
	@docker build .. -t codium-tdd-training-js

docker-test:
	docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codium-tdd-training-js make test

docker-coverage:
	@docker run --rm -v ${PWD}:/opt/project -w /opt/project codium-tdd-training-js make coverage
