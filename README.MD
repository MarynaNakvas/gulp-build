# Gulp

## How to use on my project

First of all, you need to check if installed on your machine GULP:

```sh
$ gulp --version
CLI version: 2.3.0
Local version: 4.0.2
```

If not, install it globally (see instructions on https://gulpjs.com/docs/en/getting-started/quick-start)

After installation, you need to create in root folder of your project file **gulpfile.js** that describe tasks to be performed.


### About the current build
---
* #### clean:
    *required packages:*
    ```sh
    $ npm install --save-dev del
    ```
    *Short description:* Remove **build/** folder.
* #### styles:
    *required packages:*
    ```sh
    $ npm install --save-dev gulp-plumber gulp-sass gulp-clean-css gulp-sourcemaps gulp-autoprefixer gulp-stylelint gulp-rename
    ```
    *Short description:* This task takes all files from the folder **src/styles** with extension *.scss*, converts them, and put on the folder **build/**.
* #### html:
    *required packages:*
    ```sh
    $ npm install --save-dev gulp-htmlhint gulp-w3c-html-validator gulp-html-bem-validator htmlhint
    ```
    *Short description:* This task takes all files from the folder **src/** with extension *.html*, converts them, and put on the folder **build/**.
* #### fonts:
    *Short description:* This task takes all files from the folder **src/fonts/**, and put on the folder **build/fonts/**.
* #### images:
    *required packages:*
    ```sh
    $ npm install --save-dev gulp-imagemin
    ```
    *Short description:* This task takes all files from the folder **src/images/** with extensions *.{gif,png,jpg,svg,webp}*, converts them, and put on the folder **build/images/**.
* #### serve:
    *required packages:*
    ```sh
    $ npm install --save-dev browser-sync
    ```
    *Short description:* Run local server with hot-reload

### How to run
---
On **package.json** add following  scripts:
```sh
    "scripts": {
        ....
        "build": "gulp build",
        "start": "gulp start"
    },
```
To make build execute script
```sh
   npm run build
```
To start local server execute script
```sh
   npm run start
```


## Hints
* ### To prevent loading into the remote repository code with style errors, install *husky* and setup pre-commit hooks
*required packages:*
```sh
$ npm install --save-dev husky htmlhint stylelint
```
On **package.json** add following  scripts:
```sh
    "scripts": {
        ....
        "htmlhint": "htmlhint src/**/*.html",
        "stylelint": "stylelint src/**/*.scss",
        "test": "npm run stylelint & npm run htmlhint"
    },
    ...
    "husky": {
        "hooks": {
            "pre-commit": "npm run test"
        }
  }
```
Also in the root folder, you must create configs to necessary linters and upload their dependencies
