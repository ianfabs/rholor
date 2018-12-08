(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.returnExportsGlobal = factory();
  }

}(this, function () {
// UMD Definition above, do not remove this line

// To get to know more about the Universal Module Definition
// visit: https://github.com/umdjs/umd

  const rholor = ()=>{
    const l='0123456789ABCDEF';
    let c='#';
    for(let i=0;i<6;i++)with(Math){c+=l[floor(random()*16)]}
    return c;
  }
  return rholor;
}));
