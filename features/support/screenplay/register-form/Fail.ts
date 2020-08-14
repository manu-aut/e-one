import { Check } from '@serenity-js/assertions';
import { Task, Duration } from '@serenity-js/core';
import { Click, isVisible, Wait, Enter } from '@serenity-js/protractor';
import { LoginTarget, RegisterTarget } from './ui';



let dateRegisterUser: { [key: string]: string };


export const Fail = {




    register: (dataTableRegister: Array<{ [p: string]: string }>) => {
        dataTableRegister.forEach(value => {
            dateRegisterUser = value;
        });

        return Task.where(`#actor repeatedly completes the registration.`,
            Check.whether(LoginTarget.label_error, isVisible()).andIfSo(
                Click.on(LoginTarget.labelRegister)),
            // Wait.for(Duration.ofMilliseconds(6000)),
            // Wait.until(RegisterTarget.lblRegisterTitle, isVisible()),
            Enter.theValue(dateRegisterUser['name']).into(RegisterTarget.inputName),
            Enter.theValue(dateRegisterUser['last name']).into(RegisterTarget.lastName),
            Enter.theValue(dateRegisterUser['id']).into(RegisterTarget.id),
            Enter.theValue(dateRegisterUser['mail']).into(RegisterTarget.mail),
            Enter.theValue(dateRegisterUser['confirmation email']).into(RegisterTarget.confirMail),
            Enter.theValue(dateRegisterUser['passwd']).into(RegisterTarget.password),
            Enter.theValue(dateRegisterUser['confirmation passwd']).into(RegisterTarget.confirmPassword),
            Click.on(RegisterTarget.checkAcceptConditions),
            Click.on(RegisterTarget.buttonSend),

            // Wait.for(Duration.ofMilliseconds(2000)),
            Wait.until(RegisterTarget.labelMessageError, isVisible()),


        );

    }

};