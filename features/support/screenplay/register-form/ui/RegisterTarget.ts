import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';


export class RegisterTarget {

    static inputName = Target.the(`input name`).located(by.xpath('//input[@placeholder="* Nombre"]'));
    static lastName = Target.the(`input lastname`).located(by.xpath('//input[@placeholder="* Apellido"]'));
    static id = Target.the(`input id`).located(by.xpath('//input[@placeholder="* Ingresa tu cédula sin espacios, puntos o comas"]'));
    static mail = Target.the(`input mail`).located(by.xpath('//input[@placeholder="* Ingresa tu correo corporativo"]'));
    static confirMail = Target.the(`input mail`).located(by.xpath('//input[@placeholder="* Confirma tu correo"]'));
    static password = Target.the(`input password`).located(by.xpath('//input[@placeholder="* Contraseña"]'));
    static confirmPassword = Target.the(`input confirm key`).located(by.xpath('//input[@placeholder="* Vuelve a escribir la contraseña"]'));
    static checkAcceptConditions = Target.the(`accept conditions`).located(by.css('input[type=checkbox]'));
    static labelMessageError = Target.the(`accept conditions`).located(by.xpath('//*[@id="register-login"]'));
    // -----------------

    static buttonSend = Target.the(`accept conditions`).located(by.name('name'));
    // static labelMessageError = Target.the(`accept conditions`).located(by.xpath("//div[@class='error-message']"));
    static lbl_register_title = Target.the(`head title mod register`).located(by.xpath("//*[@class='primary-color align-left' and contains(text(),'Registro')]"));
    static lblRegisterTitle = Target.the(`head title mod register`).located(by.cssContainingText('.primary-color align-left','Registro'));

}