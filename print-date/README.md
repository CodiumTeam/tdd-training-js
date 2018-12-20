# Goal
Be able to test printCurrentDate function.
# Code to test

    printCurrentDate() {
        return console.log(new Date());
    }
# Learnings
How to build a Mock and Stub manually.

How to use Sinon to generate the doubles.
## Tools
[Sinon](https://sinonjs.org/). Mocking library. 

### Example of Spy	

    it(‘should send an email’, function()
    {
        let emailSender = new EmailSender();
        let spy = sinon.spy(emailSender, ‘send’);
        let userRegistration = new UserRegistration(emailSender);

        userRegistration.run();

        assert(spy.calledOnce);
    }
### Example of Stub    
    it(‘should success when password is valid’, function()
    {
        let passwordValidator = new PasswordValidator();
        sinon.stub(passwordValidator, ‘isValid’).returns(true);
        let userRegistration = new UserRegistration(passwordValidator);
    
        let success = userRegistration.run();
    
    
        assert(success);
    }

