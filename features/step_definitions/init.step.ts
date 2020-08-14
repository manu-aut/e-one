import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Given, When, Then } from 'cucumber';
import { Session, ResultMessage } from '../support/screenplay/register-form/';
import { Ensure, equals } from '@serenity-js/assertions';
import { ClearLocalStorage } from '../support/screenplay/register-form/ClearLocalStorage';

When(/(.*) starts session in the web application/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(Session.init())
);



Then(/(?:he|she|they) should see an error on the front (.*)/, (message: string) =>
    actorInTheSpotlight().attemptsTo(Ensure.that(ResultMessage(), equals(message)))
);