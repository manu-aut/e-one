import dataRegister from '../../../../data/register.json';
import { Task, Duration } from '@serenity-js/core';
import { Wait, Enter, Click, isVisible } from '@serenity-js/protractor';
import { RegisterTarget, LoginTarget } from './ui';
import { Check } from '@serenity-js/assertions';




export const User = {

    register: () =>
        Task.where(`#actor would complete the registration`,

            Check.whether(LoginTarget.label_error, isVisible()).andIfSo(
                Click.on(LoginTarget.labelRegister)),
            Wait.for(Duration.ofMilliseconds(2000)),
            Enter.theValue(dataRegister.form.name).into(RegisterTarget.inputName),
            Enter.theValue(dataRegister.form.lastName).into(RegisterTarget.lastName),
            Enter.theValue(dataRegister.form.id).into(RegisterTarget.id),
            Enter.theValue(dataRegister.form.mail).into(RegisterTarget.mail),
            Enter.theValue(dataRegister.form.confirmMail).into(RegisterTarget.confirMail),
            Enter.theValue(dataRegister.form.passwd).into(RegisterTarget.password),
            Enter.theValue(dataRegister.form.confirmPasswd).into(RegisterTarget.confirmPassword),
            Click.on(RegisterTarget.checkAcceptConditions),



        ),

};