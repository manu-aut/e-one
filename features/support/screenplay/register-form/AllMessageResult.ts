import { Question, Duration } from '@serenity-js/core';
import { Text, Wait, isVisible } from '@serenity-js/protractor';
import { RegisterTarget } from './ui';


export const AllMessageResult = () =>
    Question.about(`#actor would display the error message`, actor => {
        return Text.of(RegisterTarget.labelMessageError).answeredBy(actor);
        }
    );










