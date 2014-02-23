![](https://raw2.github.com/justinwoodcock/Jagged-UI/master/app/img/jaggedUI.Logo.v0.2.png)
#Jagged UI
###an AngularJS module for UI Awesomeness
Jagged is trying to fill some gaps in webapp UX/UI while advocating the advancement of [AngularJS](http://angularjs.org).

###App Tech

####Scaffolding / Build tech

**[nodeJS](http://nodejs.org/)**

**[GulpJS](http://gulpjs.com/)** :: Frontend / UI task runner

* **Plugins**: gulp-notify, gulp-uglify, gulp-concat, gulp-rename, gulp-less, gulp-autoprefixer, gulp-csscomb, gulp-minify-css, gulp-cssbeautify, gulp-watch

**[Bower](http://bower.io/)** :: thirdparty repo manager

* **Managing these repos:** AngularJS, Bootstrap, Font Awesome

####Frontend / UI tech
**[AngularJS](http://angularjs.org)**

**[Twitter Bootstrap](http://getbootstrap.com)**

**[LESS](http://lesscss.org)**

**[Font Awesome](http://fontawesome.io/)**


###Dev Setup
#####Step 1: Install nodeJS
Use the [installer](http://nodejs.org/download/) for initial installation as well as updates to nodeJS and NPM.

#####Step 2: Clone the Jagged UI Repo

Either download zip or GIT clone this repository so that its on your local computer.

#####Step 3: Install NPM packages

You can configure what [NPM](https://npmjs.org/) installs by modifying the 'component.json' file in the root of the repo. All packages will be installed to the `/node_modules` directory in the root of the repo.

From the command line, in a terminal, go to the root directory and run:

```javascript
> npm install
```
#####Step 4: Install Bower globally

Install bower globally (if you haven't already).
```javascript
> npm install -g bower
```

#####Step 5: Get Bower libraries

You can configure what [bower](http://sindresorhus.com/bower-components/) retrieves by editing the dependencies in the `component.json` file before running the install command.

From the command line, in a terminal, go to the root directory and run:

```js
> bower install
```

This will download all packages to `/thirdparty`.


###Build

Go to the root directory where `gulpfile.js` is located and run:

```js
> gulp
```

This will run all configured Gulp tasks, including compiling LESS, autoprefixing for vendor specific CSS, CSSComb for organizing CSS properties in the best order, CSS Minification, Javascript Uglify and a watch setup to fire the build process if any files are changed in `app/less/` or `app/js/src/` directories.
		
