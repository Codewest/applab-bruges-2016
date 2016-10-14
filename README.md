Make sure node is installed.  

Run the following command  

```sh
$ npm install -g gulp #this will enable the "gulp" command for your terminal
```

### Usage

From project root, you can run the following commands

* ```gulp scripts```
   * Bundles your modules
   * Transpiles your ES2015 (ES6) JS code to ES5 so it's interpretable by the browser
   * Uglifies (minifies/compresses) your scripts
   * Adds a [sourcemap]
   * Will output a single "app.js" file and the map file to the "dist" folder
* ```gulp styles```
   * Compresses your css
* ```gulp watch```
   * Watches for changes to html, script and style files (triggers on save)
   * Runs the ```gulp scripts``` command for JS files, ```gulp styles``` for CSS files
* ```gulp``` - Runs all of the above
