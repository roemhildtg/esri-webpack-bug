(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/layers/StreamLayerView":1580,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/layers/StreamLayerView2DLegacy":2394})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1580:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n(338),n(336),n(346),n(342),n(446),n(366),n(340),n(374),n(337)],void 0===(o=function(e,t,n,r,o,i,c,a,s,l,d){return function(e){function t(){var t=e.call(this)||this;return t._handles=new a,t.connectionError=null,t.connectionStatus="disconnected",t.filter=null,t._handles.add(l.on(t,"controller","data-received",function(e){t.emit("data-received",e)})),t}return n(t,e),t.prototype.connect=function(){return this.controller.connection.connect()},t.prototype.disconnect=function(){this.controller.connection.disconnect()},t.prototype.updateFilter=function(e){return"connected"!==this.connectionStatus?s.reject(new i("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):this.controller.updateFilter(e).then(function(e){return e}).catch(function(e){throw e})},r([d.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],t.prototype,"connectionError",void 0),r([d.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),r([d.property()],t.prototype,"controller",void 0),r([d.property({aliasOf:"controller.filter",readOnly:!0})],t.prototype,"filter",void 0),r([d.subclass("esri.views.layers.StreamLayerView")],t)}(d.declared(o,c))}.apply(null,r))||(e.exports=o)},2394:function(e,t,n){var r,o;r=[n.dj.c(e.i),t,n(338),n(336),n(337),n(807),n(1580)],void 0===(o=function(e,t,n,r,o,i,c){return function(e){function t(){return e.call(this)||this}return n(t,e),r([o.property({aliasOf:"controller.graphics",readOnly:!0})],t.prototype,"graphics",void 0),r([o.subclass("esri.views.2d.layers.StreamLayerView2DLegacy")],t)}(o.declared(c,i))}.apply(null,r))||(e.exports=o)}}]);