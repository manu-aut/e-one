import { Duration, Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Wait, isPresent, isEnabled } from '@serenity-js/protractor';
import data from '../../../../data/login.json';
import { LoginTarget } from './ui';
import { Check } from '@serenity-js/assertions';

export const Session = {

    init: () =>

        Task.where(`#actor enter credentials`,
            Wait.until(LoginTarget.user, isEnabled()),
            Enter.theValue(data.login.username).into(LoginTarget.user),
            Enter.theValue(data.login.psswd).into(LoginTarget.psswd),
            Click.on(LoginTarget.buttonLog_in),
            Wait.for(Duration.ofMilliseconds(200)),
            Wait.until(LoginTarget.label_error, isVisible()),
           
        ),
};

