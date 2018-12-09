# Rholor

A simple library to generate random hex colors

## Use

```javascript
const rh = require("rholor");
for(let i = 0; i < 100; i++ ){
    console.log(rh());
}
```

and you should get something like

```sh
~$ node color_loop.js
#FFDCCC
#85F3FB
#22700E
#45D730
#B84886
#3EF5C2
#EC63B5
#DA6FE5
#522F23
#002D85
#EB455C
#8BFFE2
#9ECB77
#021F34
#FE0B60
#58D91C
#F240D3
#172289
#78083A
...
```

## Playground

Click [here](https://repl.it/repls/RepentantGorgeousEditor) to play around on REPL.IT

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).