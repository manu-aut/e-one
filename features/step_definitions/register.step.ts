import { When, TableDefinition, Then } from 'cucumber';
import { actorInTheSpotlight, actorCalled } from '@serenity-js/core';
import { User } from '../support/screenplay/register-form/User';
import { Fail } from '../support/screenplay/register-form/Fail';
import { Ensure, equals } from '@serenity-js/assertions';
import { RegisterTarget } from '../support/screenplay/register-form';
import { AllMessageResult } from '../support/screenplay/register-form/AllMessageResult';


When(/(?:he|she|they) would register the form/, () =>
    actorInTheSpotlight().attemptsTo(User.register()),
);


When(/(?:he|she|they) repeatedly completes the registration/, (dateRegisterUser: TableDefinition) =>
    actorInTheSpotlight().attemptsTo(Fail.register(dateRegisterUser.hashes())),
);


Then(/(?:he|she|they) should see that error in the register module (.*)/, (message: string) =>
    actorInTheSpotlight().attemptsTo(Ensure.that(AllMessageResult(), equals(message)))
);


