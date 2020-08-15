Feature: register user by front

    In order to use sjs2.0 + protractor with cucumber
    As Automation analyst
    I would like to see my registration successfully


    Scenario: Validate unregister user

        When psstv starts session in the web application
        Then he should see an error on the front Usuario o contraseña invalidos


    Scenario: Register Happy Path

        When psstv starts session in the web application
        And he would register the form
        Then visualizaria un registro exitoso




    @test
    Scenario Outline: Register user message errors validation
        When psstv starts session in the web application
        And he repeatedly completes the registration
            | name   | last name   | id   | mail   | confirmation email   | passwd   | confirmation passwd   |
            | <name> | <last name> | <id> | <mail> | <confirmation email> | <passwd> | <confirmation passwd> |
        Then he should see that error in the register module <message>

        Examples:
            | name    | last name | id           | mail                       | confirmation email         | passwd  | confirmation passwd | message                                                                           |
            | juancho | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 456789  | 456789              | Lo sentimos, el correo electrónico ingresado no está autorizado para el registro. |
            | juancho | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbertacto@gmail.com    | 456789  | 456789              | El correo no coincide                                                             |
            |         | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 456789  | 456789              | El campo 'Nombre' es obligatorio.                                                 |
            | juancho |           | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 456789  | 456789              | El campo 'Apellido' es obligatorio.                                               |
            | juancho | psstv     |              | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 456789  | 456789              | El campo 'Cédula' es obligatorio.                                                 |
            | juancho | psstv     | 111290020    |                            | cucumbercontacto@gmail.com | 456789  | 456789              | El correo no coincide                                                             |
            | juancho | psstv     | 111290020    | cucumbertacto@gmail.com    |                            | 456789  | 456789              | El correo no coincide                                                             |
            | juancho | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com |         | 456789              | El campo 'Contraseña' es obligatorio.                                             |
            | juancho | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 6yhdghj | 456789              | El Contraseña no coincide                                                         |
            | juancho | psstv     | 111290020    | cucumbercontacto@gmail.com | cucumbercontacto@gmail.com | 6yhdghj |                     | El campo 'Verificar contraseña' es obligatorio.                                   |
            # ----------------
            | juancho | psstv     | 1112  90020  | cucumbertacto@gmail.com    | cucumbertacto@gmail.com    | 6yhdghj | 6yhdghj             | El campo 'Cédula' deberia ir sin especios ni comas.                               |
            | juancho | psstv     | 11.1290,0,20 | cucumbertacto@gmail.com    | cucumbertacto@gmail.com    | 6yhdghj | 6yhdghj             | El campo 'Cédula' deberia ir sin especios ni comas.                               |
            | juancho | psstv     | 111290020    | cucumbertacto@gmail.com    | cucumbertacto@gmail.com    | 6yhdghj | 6yhdghj             | Para continuar debe aceptar los términos y condiciones.                           |





    Scenario Outline: Value Analysis & Equivalence Partitioning and others exploratory you know
        When psstv starts session in the web application
        And he repeatedly completes the registration
            | name   | last name   | id   | mail   | confirmation email   | passwd   | confirmation passwd   |
            | <name> | <last name> | <id> | <mail> | <confirmation email> | <passwd> | <confirmation passwd> |
        Then he should see that error in the register module <message>

        Examples:
            | name                                                             | last name                        | id        | mail                    | confirmation email      | passwd                                                                | confirmation passwd | message                                              |
            | 88fdf92da558800c8a432a8d9bfff34188fdf92da558800c8a432a8d9bfff341 | 88fdf92da558800c8a432a8d9bfff341 | 111290020 | cucumbertacto@gmail.com | cucumbertacto@gmail.com | 6yhdghj                                                               | 6yhdghj             | El campo 'Nombre' tiene una longitud no permitida.   |
            | muchosGenteCreeQuePorqueCO                                       | 88fdf92da558800c8a432a8d9bfff341 | 111290020 | cucumbertacto@gmail.com | cucumbertacto@gmail.com | 6yhdghj                                                               | 6yhdghj             | El campo 'Apellido' tiene una longitud no permitida. |
            | SELECT * FROM users WHERE name='user' and password='' or '1'='1' | 765678                           | 111290020 | cucumbertacto@gmail.com | cucumbertacto@gmail.com | SELECT * FROM users WHERE name='' or ' 1=1' and password='' or ' 1=1' | 6yhdghj             | plaf plaf, pumm.                                     |











