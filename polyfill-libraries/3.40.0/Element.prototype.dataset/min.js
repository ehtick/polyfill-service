Object.defineProperty(Element.prototype,"dataset",{get:function(){for(var t=this,e=this.attributes,r={},n=0;n<e.length;n++){var a=e[n];if(a&&a.name&&/^data-\w[\w\-]*$/.test(a.name)){var i=a.name,u=a.value,s=i.substr(5).replace(/-./g,function(t){return t.charAt(1).toUpperCase()});Object.defineProperty(r,s,{enumerable:!0,get:function(){return this.value}.bind({value:u||""}),set:function o(t,e){void 0!==e?this.setAttribute(t,e):this.removeAttribute(t)}.bind(t,i)})}}return r}});