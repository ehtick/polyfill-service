function ArraySpeciesCreate(e,r){if(0===r&&1/r==-Infinity&&(r=0),!1===IsArray(e))return ArrayCreate(r);var n=Get(e,"constructor");if("object"===Type(n)&&null===(n="Symbol"in self&&"species"in self.Symbol?Get(n,self.Symbol.species):undefined)&&(n=undefined),n===undefined)return ArrayCreate(r);if(!IsConstructor(n))throw new TypeError("C must be a constructor");return Construct(n,[r])}