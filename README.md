# Installation
1. Download the code using GIT or with the [downloading the zip](https://github.com/CodiumTeam/tdd-training-js/archive/master.zip) link
2. Run the script to verify that you have everything we need for the training:
    - On Linux / Mac: [check-system.sh](./check-system.sh)
    - On Windows: [check-system.cmd](./check-system.cmd)
3. Go into the folder of the kata you want to practice. Eg: cd fizz-buzz
4. Execute the tests. Pick one option:  
    - Option 1: With docker and make

         `make`
    - Option 2: With docker without make

        `docker run -it --rm -v ${PWD}:/opt/project -v /opt/project/node_modules codiumteam/tdd-training-js make test`
    - Option 3: Without docker:
        - Install the dependencies: `npm install`
        - Execute the tests
   	        - Linux / Mac: `npm test`
            - Windows: `npm run test:win`
5. Solve the kata.

# Katas
## Fizz Buzz
Kata to start doing TDD
## Roman numerals
Kata to keep practicing TDD
## Password validator
Kata to practice some test smells.
## User registration
Kata to start practising TDD with test doubles.
## Coffee Machine
Kata to practice outside-in TDD.
