import { Text } from '@serenity-js/protractor';
import { LoginTarget } from './ui';
import { Question } from '@serenity-js/core';


export const ResultMessage = () =>
    Question.about(`#actor would display the error message`, actor => {
        return Text.of(LoginTarget.label_error).answeredBy(actor);

        }
    );










