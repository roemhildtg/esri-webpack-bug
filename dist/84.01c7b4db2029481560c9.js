(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/watchUtils":374,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/urlUtils":405,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet":427,"esri/core/pbf":594,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/pbf":594,"esri/layers/graphics/OptimizedGeometry":597,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry":597,"esri/layers/graphics/OptimizedFeature":607,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/graphics/OptimizedFeature":607,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/query":626,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils":627,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/pbfFeatureServiceParser":628,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/queryAttachments":639,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/QueryTask":649,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/operations/queryRelatedRecords":650,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/graphics/sources/StreamLayerSource":2390,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/WebSocketConnector":2391})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2390:function(e,t,r){var n,i;n=[r(353),r(380),r(346),r(624),r(339),r(350),r(340),r(361),r(2391),r(649),r(351)],void 0===(i=function(e,t,r,n,i,o,s,a,u,c,l){return e([r,n],{declaredClass:"esri.layers.graphics.sources.StreamLayerSource",getDefaults:function(e){var t=this.inherited(arguments),r=e.layer;return r&&(t=i.mixin(t,{url:r.url})),t},initialize:function(){this.addResolvingPromise(this._fetchLayers())},properties:{connectionInfo:{get:function(){if(this.layer.hasMemorySource||this.layer.socketUrl)return{serviceSocketUrls:[this.layer.socketUrl]};if(this.layerDefinition){var e,t,r,n,i={},s=this.layerDefinition,a=[],u=[],c=[];if(s.streamUrls&&s.streamUrls.forEach(function(e){"ws"===e.transport&&(a=e.urls,i.token=e.token)},this),a.forEach(function(e){0===e.lastIndexOf("wss",0)?c.push(e):u.push(e)}),(e="https"===o.appUrl.scheme||0===this.url.lastIndexOf("https:",0)?c:0===u.length?c:u)&&e.length>1)for(t=0;t<e.length-1;t++)n=e[r=t+Math.floor(Math.random()*(e.length-t))],e[r]=e[t],e[t]=n;return i.serviceSocketUrls=e,i}}},latestUrl:{get:function(){var e=this.layerDefinition,t=e.keepLatestArchive&&e.keepLatestArchive.featuresUrl;return t||null}},latestQueryTask:{get:function(){var e=this.latestUrl;return e?new c(e):null}},layer:{},relatedFeaturesInfo:{get:function(){var e=(this.layerDefinition||{}).relatedFeatures;return e&&e.featuresUrl?e:null}},relatedFeaturesQueryTask:{get:function(){var e=this.relatedFeaturesInfo,t=e?e.featuresUrl:null;return t?new c(t):null}},parsedUrl:{get:function(){return this.url?o.urlToObject(this.url):null}},url:null},createWebSocketConnector:function(e){var r=new t;return this.when(function(){var t,n,o,s,a=this.connectionInfo,c=this.layer.spatialReference,l={};try{t=this.makeFilter()}catch(e){return void r.reject(e)}if(a){if(a.socketUrl?o=[a.socketUrl]:a.serviceSocketUrls&&(o=a.serviceSocketUrls.map(function(e){return e+"/"+this.layer.socketDirection}.bind(this))),l.socketUrls=o,t&&(t.where||t.geometry||t.outFields)){var d=t.geometry;d&&"string"!=typeof d&&(d=d.toJSON?JSON.stringify(d.toJSON()):JSON.stringify(d)),n=i.mixin(n||{},{where:t.where,geometry:d,outFields:t.outFields})}a.token&&(n=i.mixin(n||{},{token:a.token})),e&&c&&e.wkid!==c.wkid&&(n=i.mixin(n||{},{outSR:e.wkid})),l.queryParams=n,l.layerSource=this,s=new u(l),r.resolve(s)}else r.reject(new Error("No web socket urls found"))}.bind(this)),r.promise},getWebSocketToken:function(){return this._fetchStreamLayer().then(function(e){var t=e.data,r=null;return t.streamUrls&&t.streamUrls.some(function(e){if("ws"===e.transport)return r=e.token,!0},this),r}.bind(this))},makeFilter:function(e){var t,r=this.layer,n=null;if(e){var o;if(t={},e.hasOwnProperty("where")&&(t.where=e.where),e.hasOwnProperty("geometry")){if((o=e.geometry)&&!o.hasOwnProperty("xmin"))throw new Error("Cannot make filter. Only Extent is supported for the geometry filter");o&&!o.declaredClass&&(o=new a(o)),t.geometry=o}}else{var s=r.filter||{};t={where:s.where,geometry:s.geometry};var u=this.relatedFeaturesInfo&&this.relatedFeaturesInfo.outFields||r.outFields;if(u&&-1===u.indexOf("*")){var c=r.fields.map(function(e){return e.name});n=u.filter(function(e){return-1!==c.indexOf(e)}).join(","),t=i.mixin(t||{},{outFields:n})}}return t},queryFeatures:function(e,t){return s.reject()},_fetchLayers:function(){return this._fetchStreamLayer().then(function(e){return e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.layerDefinition=e.data,this._fetchArchiveLayer()}.bind(this)).then(function(e){return this.archivedLayerDefinition=e&&e.data,this._fetchRelatedLayer()}.bind(this)).then(function(e){this.relatedLayerDefinition=e&&e.data}.bind(this))},_fetchStreamLayer:function(){return this._requestServiceDefinition({url:this.layer.parsedUrl.path,content:i.mixin({f:"json"},this.layer.parsedUrl.query)})},_fetchArchiveLayer:function(){var e=this.latestUrl;return e?this._requestServiceDefinition({url:e}):s.resolve()},_fetchRelatedLayer:function(){var e=this.relatedFeaturesInfo;return e?this._requestServiceDefinition({url:e.featuresUrl}):s.resolve()},_requestServiceDefinition:function(e){return e&&e.url?l(e.url,{query:i.mixin(e.content||{},{f:"json"}),responseType:"json"}):s.reject(new Error("url is a required options property"))}})}.apply(null,n))||(e.exports=i)},2391:function(e,t,r){var n,i;n=[r(423),r(380),r(346),r(446),r(624),r(340),r(374),r(342)],void 0===(i=function(e,t,r,n,i,o,s,a){return r.createSubclass([n,i],{declaredClass:"esri.layers.support.WebSocketConnector",initialize:function(){var e=null;if(this.socketUrls.length||(e=new Error("No urls passed to WebSocketConnector. No live connection possible")),"WebSocket"in window||(e=new Error("The browser does not support Web Sockets. No live connection possible")),e){var r=new t;this.addResolvingPromise(r.promise),r.reject(e)}this.queryParams&&this.queryParams.token&&this._set("tokenNeeded",!0)},_socket:null,_connectPromise:null,_disconnectPromise:null,properties:{currentSocketUrl:{value:null,readOnly:!0},layerSource:null,queryParams:null,socketUrls:{value:[]},tokenNeeded:{value:!1},connectionError:{value:null,type:a,readOnly:!0},connectionStatus:{value:"disconnected",readOnly:!0}},connect:function(){var e=this.connectionStatus;return"connected"===e||"connecting"===e?this._connectPromise:"disconnected"===this.connectionStatus?(this._set("connectionStatus","connecting"),this._connect()):"disconnecting"===this.connectionStatus?(this._connectPromise=null,this._disconnectPromise||(this._disconnectPromise=s.once(this,"connectionStatus").then(function(e){if("disconnected"===e.value)return this._connect()}.bind(this))),this._disconnectPromise):void 0},disconnect:function(){var e=this.connectionStatus;"connected"===e?(this._set("connectionStatus","disconnecting"),this._socket?this._socket.close():this._set("connectionStatus","disconnected")):"connecting"===e&&this._connectPromise.then(function(){this.disconnect()}.bind(this))},send:function(e){this._socket&&("object"==typeof e&&(e=JSON.stringify(e)),this._socket.send(e))},_connect:function(){this._connectPromise&&(this._connectPromise=null);var e=new t;return this._connectPromise=e,this._getWebSocketToken().then(function(e){e&&(this.queryParams.token=e);var t=this._makeCurrentUrl(),r=new WebSocket(t);r.onopen=this._handleSocketOpen.bind(this),r.onclose=this._handleSocketClose.bind(this),r.onmessage=this._handleSocketMessage.bind(this),this._socket=r}.bind(this)).catch(function(e){var t=new a("web-socket-connector:connect","Could not get websocket token for secured service",e);this._set("connectionError",t),this._connectPromise.reject(t)}.bind(this)),e.promise},_getWebSocketToken:function(){var e=this.queryParams,t=e&&e.token,r=this.tokenNeeded;return t?o.resolve(t):r?this.layerSource.getWebSocketToken():o.resolve()},_makeCurrentUrl:function(){var t,r,n=this.queryParams,i=this.socketUrls;return 1!==i.length&&this.currentSocketUrl?(t=i.indexOf(this.currentSocketUrl),r=i[t>=i.length-1?0:t+1]):r=i[0],this._set("currentSocketUrl",r),n&&(r+="?"+e.objectToQuery(n)),r},_handleSocketOpen:function(){this._set("connectionStatus","connected"),this._set("connectionError",null),this._disconnectPromise=null,this._connectPromise&&this._connectPromise.resolve()},_handleSocketClose:function(e){var t,r=null;this.queryParams&&(this.queryParams.token=null),e.wasClean&&!e.code||(1001===e.code?t="Service is going away.":4400===e.code?t=e.reason||"Invalid url parameters. Check filter properties.":4404===e.code?t="Service not found":4401===e.code||4403===e.code?t="Not authorized":e.wasClean||(t=e.reason||"Unknown reason"),t&&(r=new a("web-socket-connector:connection closed","Connection failed: "+t),this._set("connectionError",r),this._connectPromise&&this._connectPromise.reject(r))),this._connectPromise=null,this._set("connectionStatus","disconnected"),this._socket=null},_handleSocketMessage:function(e){this.emit("data-received",e.data)}})}.apply(null,n))||(e.exports=i)},374:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(380),r(599)],void 0===(i=function(e,t,r,n){function i(e,t,r,n,i){var o=e.watch(t,function(t,i,o,s){n&&!n(t)||r.call(e,t,i,o,s)},i);if(Array.isArray(t))for(var s=0,a=t;s<a.length;s++){var u=a[s],c=e.get(u);n&&n(c)&&r.call(e,c,c,t,e)}else{c=e.get(t);n&&n(c)&&r.call(e,c,c,t,e)}return o}function o(e,t,o,s,a){function u(){c&&(c.remove(),c=null)}var c,l=!1,d=new r(u),h=new n;return h.cancel=d.cancel,h.isCanceled=d.isCanceled,h.isFulfilled=d.isFulfilled,h.isRejected=d.isRejected,h.isResolved=d.isResolved,h.then=d.then,h.remove=u,Object.freeze(h),c=i(e,t,function(t,r,n,i){l=!0,u(),o&&o.call(e,t,r,n,i),d.resolve({value:t,oldValue:r,propertyName:n,target:i})},s,a),l&&u(),h}function s(e){return!!e}function a(e){return!e}function u(e){return!0===e}function c(e){return!1===e}function l(e){return void 0!==e}function d(e){return void 0===e}function h(e,t,r,n){for(var i=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],o=p(e,t,r,n),s=0,a=i;s<a.length;s++){var u=a[s].trim(),c=e.get(u);r.call(e,c,c,u,e)}return o}function p(e,t,r,n){return e.watch(t,r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.init=h,t.watch=p,t.once=function(e,t,r,n){return o(e,t,r,null,n)},t.when=function(e,t,r,n){return i(e,t,r,s,n)},t.whenOnce=function(e,t,r,n){return o(e,t,r,s,n)},t.whenNot=function(e,t,r,n){return i(e,t,r,a,n)},t.whenNotOnce=function(e,t,r,n){return o(e,t,r,a,n)},t.whenTrue=function(e,t,r,n){return i(e,t,r,u,n)},t.whenTrueOnce=function(e,t,r,n){return o(e,t,r,u,n)},t.whenFalse=function(e,t,r,n){return i(e,t,r,c,n)},t.whenFalseOnce=function(e,t,r,n){return o(e,t,r,c,n)},t.whenDefined=function(e,t,r,n){return i(e,t,r,l,n)},t.whenDefinedOnce=function(e,t,r,n){return o(e,t,r,l,n)},t.whenUndefined=function(e,t,r,n){return i(e,t,r,d,n)},t.whenUndefinedOnce=function(e,t,r,n){return o(e,t,r,d,n)},t.pausable=function(e,t,r,n){var i=!1,o=e.watch(t,function(t,n,o,s){i||r.call(e,t,n,o,s)},n);return{remove:function(){o.remove()},pause:function(){i=!0},resume:function(){i=!1}}},t.on=function(e,t,r,n,i,o,s){function a(t){var n=u[t];n&&(o&&o(n.target,t,e,r),n.handle.remove(),delete u[t])}var u={},c=h(e,t,function(t,o,s){a(s),t&&"function"==typeof t.on&&(u[s]={handle:t.on(r,n),target:t},i&&i(t,s,e,r))},s);return{remove:function(){for(var e in c.remove(),u)a(e)}}}}.apply(null,n))||(e.exports=i)},405:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mapParameters=function e(t){var r={};for(var n in t)if("declaredClass"!==n){var i=t[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){r[n]=[];for(var o=0;o<i.length;o++)r[n][o]=e(i[o])}else"object"==typeof i?i.toJSON&&(r[n]=JSON.stringify(i)):r[n]=i}return r}}.apply(null,n))||(e.exports=i)},427:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1}}();t.default=r}.apply(null,n))||(e.exports=i)},594:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){return function(){function e(e,t,r,n){this._tag=0,this._dataType=99,this._data=e,this._dataView=t,this._pos=r||0,this._end=n||e.byteLength}return e.prototype.clone=function(){return new e(this._data,this._dataView,this._pos,this._end)},e.prototype.pos=function(){return this._pos},e.prototype.next=function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0},e.prototype.empty=function(){return this._pos>=this._end},e.prototype.tag=function(){return this._tag},e.prototype.getInt32=function(){return this._decodeVarint()},e.prototype.getInt64=function(){return this._decodeVarint()},e.prototype.getUInt32=function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))},e.prototype.getUInt64=function(){return this._decodeVarint()},e.prototype.getSInt32=function(){var e=this.getUInt32();return e>>>1^-(1&e)|0},e.prototype.getSInt64=function(){return this._decodeSVarint()},e.prototype.getBool=function(){var e=0!==this._data[this._pos];return this._skip(1),e},e.prototype.getEnum=function(){return this._decodeVarint()},e.prototype.getFixed64=function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r},e.prototype.getSFixed64=function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r},e.prototype.getDouble=function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e},e.prototype.getFixed32=function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e},e.prototype.getSFixed32=function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e},e.prototype.getFloat=function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e},e.prototype.getString=function(){var e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r},e.prototype.getBytes=function(){var e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r},e.prototype.getMessage=function(){var t=this._getLength(),r=this._pos,n=new e(this._data,this._dataView,r,r+t);return this._skip(t),n},e.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},e.prototype._skip=function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e},e.prototype._decodeVarint=function(){var e,t=this._data,r=this._pos,n=0;if(this._end-r>=10)do{if(n|=127&(e=t[r++]),0==(128&e))break;if(n|=(127&(e=t[r++]))<<7,0==(128&e))break;if(n|=(127&(e=t[r++]))<<14,0==(128&e))break;if(n|=(127&(e=t[r++]))<<21,0==(128&e))break;if(n+=268435456*(127&(e=t[r++])),0==(128&e))break;if(n+=34359738368*(127&(e=t[r++])),0==(128&e))break;if(n+=4398046511104*(127&(e=t[r++])),0==(128&e))break;if(n+=562949953421312*(127&(e=t[r++])),0==(128&e))break;if(n+=72057594037927940*(127&(e=t[r++])),0==(128&e))break;if(n+=0x8000000000000000*(127&(e=t[r++])),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{for(var i=1;r!==this._end&&0!=(128&(e=t[r]));)++r,n+=(127&e)*i,i*=128;if(r===this._end)throw new Error("Varint overrun!");++r,n+=e*i}return this._pos=r,n},e.prototype._decodeSVarint=function(){var e=this._decodeVarint();return e%2?-(e+1)/2:e/2},e.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},e.prototype._toString=function(e,t,r){var n="",i="";r=Math.min(this._end,r);for(var o=t;o<r;++o){var s=e[o];128&s?i+="%"+s.toString(16):(n+=decodeURIComponent(i)+String.fromCharCode(s),i="")}return i.length&&(n+=decodeURIComponent(i)),n},e.prototype._toBytes=function(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)},e}()}.apply(null,n))||(e.exports=i)},597:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.lengths=e,this.coords=t}}();t.default=r}.apply(null,n))||(e.exports=i)},607:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t,r,n){void 0===e&&(e=null),void 0===t&&(t={}),this.geometry=e,this.attributes=t,r&&(this.centroid=r),null!=n&&(this.objectId=n)}}();t.default=r}.apply(null,n))||(e.exports=i)},626:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(345),r(351),r(350),r(420),r(625),r(627),r(405)],void 0===(i=function(e,t,r,n,i,o,s,a,u){function c(e,t){var r=e.geometry,n=e.toJSON(),i=n;if(r&&(i.geometry=JSON.stringify(r),i.geometryType=o.getJsonType(r),i.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete i.outFields:-1!==n.outFields.indexOf("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?i.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(i.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var s=n.timeExtent;i.time=[null!=s.startTime?s.startTime:"null",null!=s.endTime?s.endTime:"null"],delete n.timeExtent}return i}function l(e,t,o,a,l){void 0===a&&(a={});var d="string"==typeof e?i.urlToObject(e):e,h=t.geometry?[t.geometry]:[];return a.responseType="pbf"===o?"array-buffer":"json",s.normalizeCentralMeridian(h,null,a).then(function(e){var i=e&&e[0];i&&((t=t.clone()).geometry=i);var s=u.mapParameters(r({},d.query,{f:o},l,c(t,l)));return n(d.path+"/query",r({},a,{query:s}))})}Object.defineProperty(t,"__esModule",{value:!0});var d="Layer does not support extent calculation.";t.queryToQueryStringParameters=c,t.executeQuery=function(e,t,r){return l(e,t,"json",r)},t.executeQueryPBF=function(e,t,r){return l(e,t,"pbf",r).then(function(e){var t=a.parsePBFFeatureQuery(e.data),r=e;return r.data=t,r})},t.executeQueryForIds=function(e,t,r){return l(e,t,"json",r,{returnIdsOnly:!0})},t.executeQueryForCount=function(e,t,r){return l(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})},t.executeQueryForExtent=function(e,t,r){return l(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(d);if(t.hasOwnProperty("count"))throw new Error(d);return e})}}.apply(null,n))||(e.exports=i)},627:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(342),r(343),r(427),r(628)],void 0===(i=function(e,t,r,n,i,o){Object.defineProperty(t,"__esModule",{value:!0});var s=n.getLogger("esri.tasks.operations.pbfQueryUtils");t.parsePBFFeatureQuery=function(e){try{var t=o.parseFeatureQuery(e).queryResult.featureResult;if(t&&t.features&&t.features.length&&t.objectIdFieldName)for(var n=t.objectIdFieldName,a=0,u=t.features;a<u.length;a++){var c=u[a];c.attributes&&(c.objectId=c.attributes[n])}return t}catch(e){var l=new r("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return s.error(l),new i.default}}}.apply(null,n))||(e.exports=i)},628:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(594),r(607),r(427),r(597)],void 0===(i=function(e,t,r,n,i,o){function s(e){return e>=w.length?null:w[e]}function a(e){return e>=S.length?null:S[e]}function u(e){return e>=F.length?null:F[e]}function c(e){return e>=x.length?null:x[e]}function l(e){for(var t=new o.default,r=t.coords;e.next();)switch(e.tag()){case 3:for(var n=e.getUInt32(),i=e.pos()+n,s=0;e.pos()<i;)r[s++]=e.getSInt64();break;case 1:case 2:default:e.skip()}return t}function d(e){for(var t=new o.default,r=t.coords,n=t.lengths;e.next();)switch(e.tag()){case 2:for(var i=e.getUInt32(),s=e.pos()+i;e.pos()<s;)n.push(e.getUInt32());break;case 3:for(var a=e.getUInt32(),u=(s=e.pos()+a,0);e.pos()<s;)r[u++]=e.getSInt64();break;case 1:default:e.skip()}return t}function h(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function p(e){for(var t={type:s(0)};e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=s(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=a(e.getEnum());break;case 5:case 6:default:e.skip()}return t}function f(e,t){for(var r=new n.default,i=0;e.next();)switch(e.tag()){case 1:var o=e.getMessage(),s=t[i++].name;r.attributes[s]=h(o);break;case 2:r.geometry=d(e.getMessage());break;case 4:r.centroid=l(e.getMessage());break;default:e.skip()}return r}function y(e){for(var t=[0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 3:case 4:t.push(e.getDouble());break;default:e.skip()}return t}function g(e){for(var t=[0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 3:case 4:t.push(e.getDouble());break;default:e.skip()}return t}function m(e){for(var t={originPosition:u(0)};e.next();)switch(e.tag()){case 1:t.originPosition=u(e.getEnum());break;case 2:t.scale=y(e.getMessage());break;case 3:t.translate=g(e.getMessage());break;default:e.skip()}return t}function v(e){for(var t={};e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function _(e){for(var t={};e.next();)switch(e.tag()){case 1:t.wkid=e.getUInt32();break;case 5:t.wkt=e.getString();break;case 2:case 3:case 4:default:e.skip()}return t}function b(e){var t=new i.default;for(t.geometryType=c(0);e.next();)switch(e.tag()){case 1:t.objectIdFieldName=e.getString();break;case 3:t.globalIdFieldName=e.getString();break;case 4:t.geohashFieldName=e.getString();break;case 5:t.geometryProperties=v(e.getMessage());break;case 7:t.geometryType=c(e.getEnum());break;case 8:t.spatialReference=_(e.getMessage());break;case 10:t.hasZ=e.getBool();break;case 11:t.hasM=e.getBool();break;case 12:var r=e.getMessage();t.transform=m(r);break;case 9:var n=e.getBool();t.exceededTransferLimit=n;break;case 13:var o=e.getMessage();t.fields.push(p(o));break;case 15:var s=e.getMessage();t.features.push(f(s,t.fields));break;case 2:case 6:default:e.skip()}return t}function k(e){for(var t={};e.next();)switch(e.tag()){case 1:t.featureResult=b(e.getMessage());break;default:e.skip()}return t}Object.defineProperty(t,"__esModule",{value:!0});var w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],S=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],x=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],F=["upperLeft","lowerLeft"];t.parseFeatureQuery=function(e){for(var t=new r(new Uint8Array(e),new DataView(e)),n={};t.next();)switch(t.tag()){case 2:n.queryResult=k(t.getMessage());break;default:t.skip()}return n}}.apply(null,n))||(e.exports=i)},639:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(345),r(351),r(350),r(405)],void 0===(i=function(e,t,r,n,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=function(e,t,n){for(var o={},s=0,a=e;s<a.length;s++)for(var u=a[s],c=u.parentObjectId,l=0,d=u.attachmentInfos;l<d.length;l++){var h=d[l],p=h.id,f=i.addProxy(t+"/"+c+"/attachments/"+p+(n?"?token="+n:"")),y=r({},h,{parentObjectId:c,url:f});o[c]?o[c].push(y):o[c]=[y]}return o},t.executeAttachmentQuery=function(e,t,i){var s={query:o.mapParameters(r({},e.query,{f:"json"},function(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}(t)))};return i&&(s=r({},i,s)),n(e.path+"/queryAttachments",s)}}.apply(null,n))||(e.exports=i)},649:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(338),r(336),r(387),r(345),r(365),r(337),r(743),r(626),r(639),r(650),r(444),r(394),r(418),r(447)],void 0===(i=function(e,t,r,n,i,o,s,a,u,c,l,d,h,p,f,y){return function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.source=null,r}return r(t,e),t.prototype.execute=function(e,t){return this.executeJSON(e,t).then(function(e){return p.fromJSON(e)})},t.prototype.executeJSON=function(e,t){return c.executeQuery(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then(function(e){return e.data})},t.prototype.executeForCount=function(e,t){return c.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then(function(e){return e.data.count})},t.prototype.executeForExtent=function(e,t){return c.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then(function(e){return{count:e.data.count,extent:s.Extent.fromJSON(e.data.extent)}})},t.prototype.executeForIds=function(e,t){return c.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then(function(e){return e.data.objectIds})},t.prototype.executeRelationshipQuery=function(e,t){return(this.gdbVersion||this.source)&&(e=e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source})),d.executeRelationshipQuery(this.parsedUrl,e,o({},this.requestOptions,t)).then(function(e){var t=e.data,r={};return Object.keys(t).forEach(function(e){return r[e]=p.fromJSON(t[e])}),r})},t.prototype.executeAttachmentQuery=function(e,t){var r=this,n=t&&t.query&&t.query.token;return l.executeAttachmentQuery(this.parsedUrl,e,o({},this.requestOptions,t)).then(function(e){return l.processAttachmentQueryResult(e.data.attachmentGroups,r.parsedUrl.path,n)})},t.prototype._normalizeQuery=function(e){return this.gdbVersion||this.source?e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source}):e},n([a.property()],t.prototype,"gdbVersion",void 0),n([a.property()],t.prototype,"source",void 0),n([i(0,a.cast(f))],t.prototype,"execute",null),n([i(0,a.cast(f))],t.prototype,"executeJSON",null),n([i(0,a.cast(f))],t.prototype,"executeForCount",null),n([i(0,a.cast(f))],t.prototype,"executeForExtent",null),n([i(0,a.cast(f))],t.prototype,"executeForIds",null),n([i(0,a.cast(y))],t.prototype,"executeRelationshipQuery",null),n([i(0,a.cast(h))],t.prototype,"executeAttachmentQuery",null),n([a.subclass("esri.tasks.QueryTask")],t)}(a.declared(u))}.apply(null,n))||(e.exports=i)},650:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(345),r(351),r(405)],void 0===(i=function(e,t,r,n,i){function o(e){var t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.outFields&&(t.outFields=t.outFields.join(",")),t.outSpatialReference&&(t.outSR=t.outSR.wkid||JSON.stringify(t.outSR.toJSON()),delete t.outSpatialReference),t.source&&(t.layer=JSON.stringify({source:t.source}),delete t.source),t}Object.defineProperty(t,"__esModule",{value:!0}),t.toQueryStringParameters=o,t.executeRelationshipQuery=function(e,t,s){var a={query:i.mapParameters(r({},e.query,{f:"json"},o(t)))};return s&&(a=r({},s,a)),n(e.path+"/queryRelatedRecords",a).then(function(e){for(var t=e.data,r=t.geometryType,n=t.spatialReference,i={},o=0,s=t.relatedRecordGroups;o<s.length;o++){var a=s[o],u={fields:void 0,objectIdFieldName:void 0,geometryType:r,spatialReference:n,features:a.relatedRecords};if(null!=a.objectId)i[a.objectId]=u;else for(var c in a)a.hasOwnProperty(c)&&"relatedRecords"!==c&&(i[a[c]]=u)}return e.data=i,e})}}.apply(null,n))||(e.exports=i)}}]);