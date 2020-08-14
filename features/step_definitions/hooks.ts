import { engage } from '@serenity-js/core';
import { Before, setDefaultTimeout } from 'cucumber';
import { browser } from 'protractor';
import { Actors } from '../support/Actors';
import { ClearLocalStorage } from '../support/screenplay/register-form/ClearLocalStorage';

Before(() => {
    engage(new Actors());
    setDefaultTimeout(60 * 1000);
    browser.get(browser.baseUrl);
    
});

