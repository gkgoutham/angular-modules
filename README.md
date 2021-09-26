# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


GRC-App
	- Login
	- Home Page
		- Module A
			- Functionality 1
			- Functionality 2
		- Moduel B
			- Functionality 1
			- Functionality 2
			- Reports
		- Module C
			-	
		- Module D
			- ....
			

Create Main Application 
	- $ ng new my-app
	- $ cd my-app
	- $ npm i jquery
	- $ npm i bootstrap
	- $ npm install ../my-module-a/dist/my-module-a-0.0.0.tgz
	- $ ng serve


Create Feature Module
	- $ ng new my-module-a
	-  cd my-module-a/
 	-  npm i jquery
 	-  npm i bootstrap
 	-  ng g module chartjs
	-  ng g module flot
 	-  ng g module inline
 	-  ng g module uplot
 	- ng g component --module chartjs chart 
 	-  ng g component --module flot floating-chart
 	-  ng g component --module inline inline-chart
 	-  ng g component --module uplot plot-chart
 	-  ng serve
 	-  npm install ng-packagr --save-dev
 	- npm run packagr
 	- cd dist/
 	-  ls
 	- npm pack

Create Feature Module
	- $ ng new my-module-b
	-  cd my-module-b/
 	-  npm i jquery
 	-  npm i bootstrap
 	-  ng g module project
	-  ng g module profile
 	- ng g component --module project add 
 	-  ng g component --module project edit
 	-  ng g component --module project view
 	-  ng g component --module profile details
 	-  ng serve
 	-  npm install ng-packagr --save-dev
 	- npm run packagr
 	- cd dist/
 	-  ls
 	- npm pack
