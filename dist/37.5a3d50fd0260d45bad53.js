(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/watchUtils":374,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/PooledArray":411,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer":425,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/ArcGISService":437,"esri/layers/support/TileInfo":450,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/TileInfo":450,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/LOD":637,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/HeapSort":657,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService":685,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/LRUMap":703,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/TilemapCache":721,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Tilemap":799})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{374:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(380),i(599)],void 0===(n=function(e,t,i,r){function n(e,t,i,r,n){var o=e.watch(t,function(t,n,o,a){r&&!r(t)||i.call(e,t,n,o,a)},n);if(Array.isArray(t))for(var a=0,l=t;a<l.length;a++){var s=l[a],p=e.get(s);r&&r(p)&&i.call(e,p,p,t,e)}else{p=e.get(t);r&&r(p)&&i.call(e,p,p,t,e)}return o}function o(e,t,o,a,l){function s(){p&&(p.remove(),p=null)}var p,c=!1,u=new i(s),h=new r;return h.cancel=u.cancel,h.isCanceled=u.isCanceled,h.isFulfilled=u.isFulfilled,h.isRejected=u.isRejected,h.isResolved=u.isResolved,h.then=u.then,h.remove=s,Object.freeze(h),p=n(e,t,function(t,i,r,n){c=!0,s(),o&&o.call(e,t,i,r,n),u.resolve({value:t,oldValue:i,propertyName:r,target:n})},a,l),c&&s(),h}function a(e){return!!e}function l(e){return!e}function s(e){return!0===e}function p(e){return!1===e}function c(e){return void 0!==e}function u(e){return void 0===e}function h(e,t,i,r){for(var n=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],o=f(e,t,i,r),a=0,l=n;a<l.length;a++){var s=l[a].trim(),p=e.get(s);i.call(e,p,p,s,e)}return o}function f(e,t,i,r){return e.watch(t,i,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.init=h,t.watch=f,t.once=function(e,t,i,r){return o(e,t,i,null,r)},t.when=function(e,t,i,r){return n(e,t,i,a,r)},t.whenOnce=function(e,t,i,r){return o(e,t,i,a,r)},t.whenNot=function(e,t,i,r){return n(e,t,i,l,r)},t.whenNotOnce=function(e,t,i,r){return o(e,t,i,l,r)},t.whenTrue=function(e,t,i,r){return n(e,t,i,s,r)},t.whenTrueOnce=function(e,t,i,r){return o(e,t,i,s,r)},t.whenFalse=function(e,t,i,r){return n(e,t,i,p,r)},t.whenFalseOnce=function(e,t,i,r){return o(e,t,i,p,r)},t.whenDefined=function(e,t,i,r){return n(e,t,i,c,r)},t.whenDefinedOnce=function(e,t,i,r){return o(e,t,i,c,r)},t.whenUndefined=function(e,t,i,r){return n(e,t,i,u,r)},t.whenUndefinedOnce=function(e,t,i,r){return o(e,t,i,u,r)},t.pausable=function(e,t,i,r){var n=!1,o=e.watch(t,function(t,r,o,a){n||i.call(e,t,r,o,a)},r);return{remove:function(){o.remove()},pause:function(){n=!0},resume:function(){n=!1}}},t.on=function(e,t,i,r,n,o,a){function l(t){var r=s[t];r&&(o&&o(r.target,t,e,i),r.handle.remove(),delete s[t])}var s={},p=h(e,t,function(t,o,a){l(a),t&&"function"==typeof t.on&&(s[a]={handle:t.on(i,r),target:t},n&&n(t,a,e,i))},a);return{remove:function(){for(var e in p.remove(),s)l(e)}}}}.apply(null,r))||(e.exports=n)},411:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(382),i(657)],void 0===(n=function(e,t,i,r){var n=2;return function(){function e(e){var t=this;if(this.data=[],this._length=0,this._allocator=null,this._deallocator=function(e,i){return t.data[i]=void 0},this._shrink=function(){},this._hint=new i.RemoveHint,e){if(e.initialSize&&(this.data=new Array(e.initialSize)),e.allocator&&(this._allocator=e.allocator,this._deallocator=e.deallocator,e.initialSize))for(var r=0;r<e.initialSize;++r)this.data[r]=this._allocator(r);e.shrink&&(this._shrink=function(){t.data.length>n*t.length&&(t.data.length=t.length)})}}return e.prototype.toArray=function(){return this.data.slice(0,this.length)},Object.defineProperty(e.prototype,"length",{get:function(){return this._length},set:function(e){if(this._allocator)for(;this.data.length<e;)this.data.push(this._allocator(this.data.length));if(this._deallocator)for(var t=e;t<this._length;++t)this._deallocator(this.data[t],t);this._length=e,this._shrink()},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.length=0},e.prototype.equal=function(e){return i.equals(this.data,e.data)},e.prototype.push=function(e){return this.data.length===this.length&&this._grow((this.length+1)*n),this.data[this.length++]=e,e},e.prototype.pushArray=function(e){var t=this.length+e.length;t>=this.data.length&&this._grow(Math.max(this.length*n,t));for(var i=0;i<e.length;i++)this.data[this._length++]=e[i];return this.back()},e.prototype.pushNew=function(){return this.data.length===this.length&&this._grow((this.length+1)*n),++this._length,this.back()},e.prototype.pop=function(){if(0!==this.length){var e=this.data[this.length-1];return this.length=this.length-1,this._shrink(),e}},e.prototype.removeMany=function(e){var t=this,i=[];return this.data=this.data.filter(function(r,n){return!(n>=t.length)&&(e.indexOf(r)<0||(i.push(r),!1))}),this._length=this.data.length,i},e.prototype.removeUnordered=function(e){var t=i.removeUnordered(this.data,e,this.length,this._hint);return void 0!==t&&(this.length=this.length-1),t},e.prototype.removeUnorderedMany=function(e){var t=i.removeUnorderedMany(this.data,e,this.length,this._hint);return this.length=this.length-t.length,t},e.prototype.front=function(){if(0!==this.length)return this.data[0]},e.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]},e.prototype.swapElements=function(e,t){var i;e>=this.length||t>=this.length||(i=[this.data[t],this.data[e]],this.data[e]=i[0],this.data[t]=i[1])},e.prototype.sort=function(e){r.sort(this.data,0,this.length,e)},e.prototype.some=function(e,t){for(var i=0;i<this.length;++i)if(e.call(t,this.data[i],i,this.data))return!0;return!1},e.prototype.find=function(e,t){for(var i=0;i<this.length;++i){var r=this.data[i];if(e.call(t,r,i,this.data))return r}},e.prototype.filter=function(t,i,r){r=r||new e;for(var n=0;n<this.length;++n)t.call(i,this.data[n],n,this.data)&&r.push(this.data[n]);return r},e.prototype.forEach=function(e,t){for(var i=0;i<this.length;++i)e.call(t,this.data[i],i,this.data)},e.prototype.map=function(e,t){for(var i=new Array(this.length),r=0;r<this.length;++r)i[r]=e.call(t,this.data[r],r,this.data);return i},e.prototype._grow=function(e){if(this._allocator)for(;this.data.length<e;)this.data.push(this._allocator(this.data.length))},e}()}.apply(null,r))||(e.exports=n)},425:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(338),i(336),i(346),i(337)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minScale=0,t.maxScale=0,t}return i(t,e),r([o.property({type:Number,json:{write:!0}})],t.prototype,"minScale",void 0),r([o.property({type:Number,json:{write:!0}})],t.prototype,"maxScale",void 0),r([o.subclass("esri.layers.mixins.ScaleRangeLayer")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},437:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(338),i(336),i(343),i(428),i(337),i(392)],void 0===(n=function(e,t,i,r,n,o,a,l){var s=n.getLogger("esri.layers.mixins.ArcGISService");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=l.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",l.sanitizeUrl(e,s))},enumerable:!0,configurable:!0}),r([a.property({dependsOn:["url"]})],t.prototype,"title",null),r([a.property({type:String})],t.prototype,"url",null),r([a.subclass("esri.layers.mixins.ArcGISService")],t)}(a.declared(o))}.apply(null,r))||(e.exports=n)},450:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(345),i(338),i(336),i(365),i(341),i(348),i(337),i(359),i(367),i(442),i(410),i(383),i(637)],void 0===(n=function(e,t,i,r,n,o,a,l,s,p,c,u,h,f,d){var v=l({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"});return function(e){function t(t){var i=e.call(this)||this;return i.dpi=96,i.format=null,i.origin=null,i.minScale=0,i.maxScale=0,i.size=null,i.spatialReference=null,i}var a;return r(t,e),a=t,t.create=function(e){void 0===e&&(e={size:256,spatialReference:o.SpatialReference.WebMercator});var t=e.resolutionFactor||1,i=e.scales,r=e.size||256,n=e.spatialReference||o.SpatialReference.WebMercator,l=h.getInfo(n),s=l?new o.Point(l.origin[0],l.origin[1],n):new o.Point(0,0,n),p=1/(39.37*u.getMetersPerUnitForSR(n)*96),c=[];if(i)for(var f=0;f<i.length;f++){var d=(m=i[f])*p;c.push({level:f,scale:m,resolution:d})}else{var v=h.isGeographic(n)?512/r*147748799.285417:256/r*591657527.591555,y=Math.ceil(24/t);c.push({level:0,scale:v,resolution:v*p});for(f=1;f<y;f++){var m;d=(m=v/Math.pow(2,t))*p;c.push({level:f,scale:m,resolution:d}),v=m}}return new a({dpi:96,lods:c,origin:s,size:r,spatialReference:n})},Object.defineProperty(t.prototype,"isWrappable",{get:function(){var e=this.spatialReference,t=this.origin;if(e&&t){var i=h.getInfo(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1},enumerable:!0,configurable:!0}),t.prototype.readOrigin=function(e,t){return o.Point.fromJSON(i({spatialReference:t.spatialReference},e))},Object.defineProperty(t.prototype,"lods",{set:function(e){var t=this,i=0,r=0,n=[];this._levelToLOD={},e&&(i=-1/0,r=1/0,e.forEach(function(e){n.push(e.scale),i=e.scale>i?e.scale:i,r=e.scale<r?e.scale:r,t._levelToLOD[e.level]=e})),this._set("scales",n),this._set("minScale",i),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()},enumerable:!0,configurable:!0}),t.prototype.readSize=function(e,t){return[t.cols,t.rows]},t.prototype.writeSize=function(e,t){t.cols=e[0],t.rows=e[0]},t.prototype.zoomToScale=function(e){var t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];var i=Math.round(e-.5),r=Math.round(e);return t[r]+(r-e)*(t[i]-t[r])},t.prototype.scaleToZoom=function(e){for(var t=this.scales,i=t.length-1,r=0;r<i;r++){var n=t[r],o=t[r+1];if(n<=e)return r;if(o===e)return r+1;if(n>e&&o<e)return r+1-(e-o)/(n-o)}return r},t.prototype.snapScale=function(e,t){void 0===t&&(t=.95);var i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))},t.prototype.tileAt=function(e,t,i,r){var n,o,a=this.lodAt(e);if(!a)return null;if("number"==typeof t)n=t,o=i;else if(h.equals(t.spatialReference,this.spatialReference))n=t.x,o=t.y,r=i;else{var l=f.project(t,this.spatialReference);if(!l)return null;n=l.x,o=l.y,r=i}var s=a.resolution*this.size[0],p=a.resolution*this.size[1];return r||(r={id:null,level:0,row:0,col:0,extent:c.create()}),r.level=e,r.row=Math.floor((this.origin.y-o)/p+.001),r.col=Math.floor((n-this.origin.x)/s+.001),this.updateTileInfo(r),r},t.prototype.updateTileInfo=function(e){var t=this.lodAt(e.level);if(t){var i=t.resolution*this.size[0],r=t.resolution*this.size[1];e.id=e.level+"/"+e.row+"/"+e.col,e.extent||(e.extent=c.create()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*r,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+r}},t.prototype.upsampleTile=function(e){var t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))},t.prototype.getTileBounds=function(e,t){var i=this.lodAt(t.level).resolution,r=i*this.size[0],n=i*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*n,e[2]=e[0]+r,e[3]=e[1]+n,e},t.prototype.lodAt=function(e){return this._levelToLOD&&this._levelToLOD[e]||null},t.prototype.clone=function(){return a.fromJSON(this.write({}))},t.prototype._initializeUpsampleLevels=function(){var e=this.lods;this._upsampleLevels=[];for(var t=null,i=0;i<e.length;i++){var r=e[i];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}},n([s.property({type:Number,json:{write:!0}})],t.prototype,"compressionQuality",void 0),n([s.property({type:Number,json:{write:!0}})],t.prototype,"dpi",void 0),n([s.property({type:String,json:{read:v.read,write:v.write}})],t.prototype,"format",void 0),n([s.property({readOnly:!0,dependsOn:["spatialReference","origin"]})],t.prototype,"isWrappable",null),n([s.property({type:o.Point,json:{write:!0}})],t.prototype,"origin",void 0),n([s.reader("origin")],t.prototype,"readOrigin",null),n([s.property({type:[d],value:null,json:{write:!0}})],t.prototype,"lods",null),n([s.property({readOnly:!0})],t.prototype,"minScale",void 0),n([s.property({readOnly:!0})],t.prototype,"maxScale",void 0),n([s.property({readOnly:!0})],t.prototype,"scales",void 0),n([s.property({cast:function(e){return Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]}})],t.prototype,"size",void 0),n([s.reader("size",["rows","cols"])],t.prototype,"readSize",null),n([s.writer("size",{cols:{type:p.Integer},rows:{type:p.Integer}})],t.prototype,"writeSize",null),n([s.property({type:o.SpatialReference,json:{write:!0}})],t.prototype,"spatialReference",void 0),a=n([s.subclass("esri.layers.support.TileInfo")],t)}(s.declared(a))}.apply(null,r))||(e.exports=n)},637:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(338),i(336),i(341),i(337),i(359)],void 0===(n=function(e,t,i,r,n,o,a){return function(e){function t(t){var i=e.call(this,t)||this;return i.level=0,i.levelValue=null,i.resolution=0,i.scale=0,i}var n;return i(t,e),n=t,t.prototype.clone=function(){return new n({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},r([o.property({type:a.Integer,json:{write:!0}})],t.prototype,"level",void 0),r([o.property({type:String,json:{write:!0}})],t.prototype,"levelValue",void 0),r([o.property({type:Number,json:{write:!0}})],t.prototype,"resolution",void 0),r([o.property({type:Number,json:{write:!0}})],t.prototype,"scale",void 0),n=r([o.subclass("esri.layers.support.LOD")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},657:function(e,t,i){var r;void 0===(r=function(){function e(e,t,i,r){for(var n=t,o=t,a=i>>>1,l=e[n-1];o<=a;){(o=n<<1)<i&&r(e[o-1],e[o])<0&&++o;var s=e[o-1];if(r(s,l)<=0)break;e[n-1]=s,n=o}e[n-1]=l}function t(e,t){return e<t?-1:e>t?1:0}return{sort:function(i,r,n,o){void 0===r&&(r=0),void 0===n&&(n=i.length),void 0===o&&(o=t);for(var a=n>>>1;a>r;a--)e(i,a,n,o);var l=r+1;for(a=n-1;a>r;a--){var s=i[r];i[r]=i[a],i[a]=s,e(i,l,a,o)}return i}}}.apply(null,[]))||(e.exports=r)},685:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(345),i(338),i(336),i(365),i(337),i(437),i(450),i(721)],void 0===(n=function(e,t,i,r,n,o,a,l,s,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.copyright=null,t.minScale=0,t.maxScale=0,t.spatialReference=null,t.tileInfo=null,t.tilemapCache=null,t}return r(t,e),Object.defineProperty(t.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),t.prototype.readTileInfo=function(e,t){var i=function(e){return Math.round(1e4*e)/1e4},r=t.minScale?i(t.minScale):1/0,n=t.maxScale?i(t.maxScale):-1/0;return e?(e.lods=e.lods.filter(function(e){var t=i(e.scale);return t<=r&&t>=n}),s.fromJSON(e)):null},t.prototype.readTilemapCache=function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new p({layer:this}):null},n([a.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),n([a.property({json:{origins:{service:{read:!1}}}})],t.prototype,"minScale",void 0),n([a.property({json:{origins:{service:{read:!1}}}})],t.prototype,"maxScale",void 0),n([a.property({type:o.SpatialReference})],t.prototype,"spatialReference",void 0),n([a.property({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),n([a.property({type:s})],t.prototype,"tileInfo",void 0),n([a.reader("service","tileInfo",["tileInfo","minScale","maxScale"])],t.prototype,"readTileInfo",null),n([a.property()],t.prototype,"tilemapCache",void 0),n([a.reader("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),n([a.property()],t.prototype,"version",void 0),n([a.subclass("esri.layers.mixins.ArcGISCachedService")],t)}(a.declared(l))}.apply(null,r))||(e.exports=n)},703:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){return function(){function e(e,t){if(void 0===e&&(e=0),this.sizeOfFunction=function(){return 1},this._sizeOf=0,this._cache=new Map,this._queue=[],e<=0)throw new Error("LRU cache size must be bigger than zero!");this._maxSize=e,t&&(t.disposeFunction&&(this.disposeFunction=t.disposeFunction),t.sizeOfFunction&&(this.sizeOfFunction=t.sizeOfFunction))}return Object.defineProperty(e.prototype,"length",{get:function(){return this._cache.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._sizeOf},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this;this._queue.length=0,this.disposeFunction&&this._cache.forEach(function(t,i){e.disposeFunction(i,t)}),this._cache.clear(),this._sizeOf=0},e.prototype.delete=function(e){var t=this._cache.get(e);return!!this._cache.delete(e)&&(this._sizeOf-=this.sizeOfFunction(t),this._queue.splice(this._queue.indexOf(e),1),this.disposeFunction&&this.disposeFunction(e,t),!0)},e.prototype.forEach=function(e,t){this._cache.forEach(e,t)},e.prototype.get=function(e){var t=this._cache.get(e);if(void 0!==t)return this._queue.splice(this._queue.indexOf(e),1),this._queue.unshift(e),t},e.prototype.has=function(e){return this._cache.has(e)},e.prototype.set=function(e,t){var i=this.get(e);return void 0!==i?this._sizeOf-=this.sizeOfFunction(i):this._queue.unshift(e),this._sizeOf+=this.sizeOfFunction(t),this._cache.set(e,t),this._collect(),this},e.prototype._collect=function(){for(;this._queue.length&&this._sizeOf>this._maxSize;){var e=this._queue.pop(),t=this._cache.get(e);this._cache.delete(e)&&(this._sizeOf-=this.sizeOfFunction(t),this.disposeFunction&&this.disposeFunction(e,t))}},e}()}.apply(null,r))||(e.exports=n)},721:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(345),i(338),i(336),i(423),i(351),i(346),i(342),i(366),i(343),i(703),i(411),i(340),i(374),i(337),i(799)],void 0===(n=function(e,t,i,r,n,o,a,l,s,p,c,u,h,f,d,v,y){var m=c.getLogger("esri.layers.support.TilemapCache");return function(e){function t(t){var i=e.call(this)||this;return i._handles=new p,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=a,i}var l;return r(t,e),l=t,t.prototype.initialize=function(){var e=this;this._tilemapCache=new u(this.cacheByteSize,{sizeOfFunction:function(e){return e.byteSize}}),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],function(){return e._initializeTilemapDefinition()}),d.init(this,"layer.tileInfo.lods",function(t){return e._initializeAvailableLevels(t)},!0)]),this._initializeTilemapDefinition()},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},t.prototype.castLevels=function(e){return e<=2?(m.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(t.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),t.prototype.getTilemap=function(e,t,i){return this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition)},t.prototype.fetchTilemap=function(e,t,i,r){var n=this;if(!this._availableLevels[e])return f.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var o=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,o);if(a)return f.resolve(a);var l=y.tilemapDefinitionId(o),p=this._pendingTilemapRequests[l];return p||(p=y.Tilemap.fromDefinition(o,r).then(function(e){return n._tilemapCache.set(l,e),delete n._pendingTilemapRequests[l],e}).catch(function(e){return delete n._pendingTilemapRequests[l],f.reject(e)}),this._pendingTilemapRequests[l]=p),f.create(function(e,t){p.then(e,t)})},t.prototype.getAvailability=function(e,t,i){if(!this._availableLevels[e])return"unavailable";var r=this.getTilemap(e,t,i);return r?r.getAvailability(t,i):"unknown"},t.prototype.getAvailabilityUpsample=function(e,t,i,r){r.level=e,r.row=t,r.col=i;var n=this.layer.tileInfo;for(n.updateTileInfo(r);;){var o=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==o)return o;if(!n.upsampleTile(r))return"unavailable"}},t.prototype.fetchAvailability=function(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).always(function(r){if(r instanceof y.Tilemap){var n=r.getAvailability(t,i);return"unavailable"===n?f.reject(new s("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):n}return r&&"cancel"===r.dojoType?f.reject(r):"unknown"}):f.reject(new s("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},t.prototype.fetchAvailabilityUpsample=function(e,t,i,r,n){var o=this;r.level=e,r.row=t,r.col=i;var a=this.layer.tileInfo;a.updateTileInfo(r);for(var s=this.fetchAvailability(e,t,i,n).catch(function(e){return e&&"cancel"===e.dojoType?f.reject(e):a.upsampleTile(r)?o.fetchAvailabilityUpsample(r.level,r.row,r.col,r):f.reject(e)}),p={id:r.id,level:e,row:t,col:i},c=this,u=0;l._prefetches.length<l._maxPrefetch&&a.upsampleTile(p);++u)!function(e){var t=c.fetchAvailability(p.level,p.row,p.col,n);l._prefetches.push(t),s.always(function(){return t.cancel()}),t.always(function(){return l._prefetches.removeUnordered(t)})}();return s},t.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;t&&t.token||!this.layer.token||(t=i({},t,{token:this.layer.token})),this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?o.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},t.prototype._tilemapFromCache=function(e,t,i,r){var n=this._getTilemapDefinition(e,t,i,r),o=y.tilemapDefinitionId(n);return this._tilemapCache.get(o)},t.prototype._getTilemapDefinition=function(e,t,i,r){return r.level=e,r.row=t-t%this.size,r.col=i-i%this.size,r},t.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach(function(e){return t._availableLevels[e.level]=!0})},t._maxPrefetch=4,t._prefetches=new h({initialSize:l._maxPrefetch}),n([v.property({constructOnly:!0,type:Number})],t.prototype,"levels",void 0),n([v.cast("levels")],t.prototype,"castLevels",null),n([v.property({readOnly:!0,dependsOn:["levels"],type:Number})],t.prototype,"size",null),n([v.property({constructOnly:!0,type:Number})],t.prototype,"cacheByteSize",void 0),n([v.property({constructOnly:!0})],t.prototype,"layer",void 0),n([v.property({constructOnly:!0})],t.prototype,"request",void 0),l=n([v.subclass("esri.layers.support.TilemapCache")],t)}(v.declared(l))}.apply(null,r))||(e.exports=n)},799:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(345),i(351),i(342),i(339),i(340)],void 0===(n=function(e,t,i,r,n,o,a){function l(e){var t;if("vector-tile"===e.service.type)t=e.service.url+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height;else{var i=e.service.tileServers;t=(i&&i.length?i[e.row%i.length]:e.service.url)+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height}var r=e.service.query;return r&&(t=t+"?"+r),t}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.location={left:0,top:0,width:0,height:0},this.byteSize=40}return e.prototype.getAvailability=function(e,t){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";var i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%8,n=i>>3,o=this._tileAvailabilityBitSet;return n<0||n>o.length?"unknown":o[n]&1<<r?"available":"unavailable"},e.prototype._updateFromData=function(e){for(var t=this.location.width,i=this.location.height,r=!0,n=!0,o=Math.ceil(t*i/8),a=new Uint8Array(o),l=0,s=0;s<e.length;s++){var p=s%8;e[s]?(n=!1,a[l]|=1<<p):r=!1,7===p&&++l}this._isAllUnvailable=n,this._isAllAvailable=r,this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=a,this.byteSize+=a.length)},e.fromDefinition=function(t,o){var s=t.service.request||r,p=t.row,c=t.col,u=t.width,h=t.height,f={query:{f:"json"}};return o=o?i({},f,o):f,s(l(t),o).then(function(e){return e.data}).catch(function(e){return e&&e.details&&422===e.details.httpStatus?{location:{top:p,left:c,width:u,height:h},valid:!0,data:function(){for(var e=[],t=0,i=u*h;t<i;t++)e[t]=0;return e}()}:a.reject(e)}).then(function(t){if(t.location&&(t.location.top!==p||t.location.left!==c||t.location.width!==u||t.location.height!==h))throw new n("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:p,left:c,width:u,height:h}});return e.fromJSON(t)})},e.fromJSON=function(t){e.validateJSON(t);var i=new e;return i.location=Object.freeze(o.clone(t.location)),i._updateFromData(t.data),Object.freeze(i)},e.validateJSON=function(e){if(!e||!e.location)throw new n("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},e}();t.Tilemap=s,t.tilemapDefinitionId=function(e){return e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height},t.tilemapDefinitionUrl=l,t.default=s}.apply(null,r))||(e.exports=n)}}]);