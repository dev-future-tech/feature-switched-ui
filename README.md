# FeatureSwitchedUi

![CI](https://github.com/dev-future-tech/feature-switched-ui/workflows/CI/badge.svg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Feature Switching

This library consists of:

* FlagRService
  * The interface with the FlagR server
* FlagRComponent
  * A component that will render the body based on the flagID and entityID passed in.

In order to be getting the right results, you need to track the VariantID. This is similar to a session id.

For example, with a Segment rollout of 50% evaluating the following EntityIDs resulted in:

| EntityID | Variant ID | Variant Key |
| -------- | ---------- | ------------- |
| randomly_generated_911902086 | 5 | 'off' |
| randomly_generated_911902085 | None | None |
| randomly_generated_911902084 | 4 | 'on' |
| randomly_generated_911902083 | 4 | 'on' |
| randomly_generated_911902082 | None | None |
| randomly_generated_911902081 | None | None |
| randomly_generated_911902080 | None | None |
| randomly_generated_911902079 | None | None |
| randomly_generated_911902078 | 4 | 'on' |

In order for all clients to get a flag value, you need to set the segment rollout to equal 100%.

