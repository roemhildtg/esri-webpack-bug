(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/layers/MapNotesLayerView2D":2456})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{2456:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n(338),n(336),n(340),n(337),n(1067),n(790),n(1429)],void 0===(i=function(e,t,n,r,i,o,s,p,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._popupTemplates=new Map,t.container=new s,t.featuresViews=[],t}return n(t,e),t.prototype.hitTest=function(e,t){var n=this;if(this.suspended||!this.featuresViews.length)return i.resolve();var r=this.featuresViews.map(function(n){return n.hitTest(e,t)});return i.all(r).then(function(e){return e.filter(function(e,t){return e&&(e.popupTemplate=n._popupTemplates.get(n.featuresViews[t]),e.layer=n.layer,e.sourceLayer=n.layer),!!e})[0]||null})},t.prototype.update=function(e){},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(t){var n=new a;n.graphics=t.source,n.mapView=e.view,n.renderer=t.renderer,e._popupTemplates.set(n,t.popupTemplate),e.featuresViews.push(n),e.container.addChild(n.container)})},t.prototype.detach=function(){this.container.removeAllChildren(),this.featuresViews.forEach(function(e){e.graphics=null,e.mapView=null,e.renderer=null,e=null}),this._popupTemplates=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},r([o.subclass("esri.views.2d.layers.MapNotesLayerView2D")],t)}(o.declared(p))}.apply(null,r))||(e.exports=i)}}]);