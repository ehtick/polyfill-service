var ArrayIterator=function(){var e=function(t,r){if(!(this instanceof e))return new e(t,r);Iterator.call(this,t),r=r?String.prototype.contains.call(r,"key+value")?"key+value":String.prototype.contains.call(r,"key")?"key":"value":"value",Object.defineProperty(this,"__kind__",{value:r,configurable:!1,enumerable:!1,writable:!1})};return Object.setPrototypeOf&&Object.setPrototypeOf(e,Iterator.prototype),e.prototype=Object.create(Iterator.prototype,{constructor:{value:e,configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(e){return"value"===this.__kind__?this.__list__[e]:"key+value"===this.__kind__?[e,this.__list__[e]]:e},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object Array Iterator]"},configurable:!0,enumerable:!1,writable:!0}}),e}();