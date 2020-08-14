import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';



export class LoginTarget {


    static user = Target.the(`input user`).located(by.name('Email'));
    static psswd = Target.the(`input password`).located(by.id('Password'));
    static buttonLog_in = Target.the(`button iniciar sesion`).located(by.id('btnLogin'));
    static labelRegister = Target.the(`¿Aún no estás registrado?`).located(by.partialLinkText('Regístrate'));
    static label_error = Target.the(`Usuario o contraseña invalidos`).located(by.cssContainingText('.validation-summary-errors','Usuario o contraseña invalidos'));
    
    //  se mapea con cssSelectors para no afectar performance with ids

}

