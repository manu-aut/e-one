# e-one

web applications using [Serenity/JS](https://serenity-js.org),
[Mocha](https://mochajs.org/) and [Protractor](http://www.protractortest.org/).

Learn more: view template
[Serenity/JS Website](https://github.com/serenity-js/todomvc-demo)

## Prerequisites

To use this project, you'll need:
- Node.js,release version 14 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

## Usage

```
git clone https://github.com/psstv/e-one.git
npm install --save-dev
npm ci                  # installs the node modules
npm run lint            # runs the code linter
npm test                # executes the example tests and generates the report under ./target/site/serenity


## Generate report serenity
only the first time

npx serenity-bdd update
npx serenity-bdd run

## Your feedback matters!
Have feedback? callme


