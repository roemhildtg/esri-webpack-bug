(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Domain":376,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Field":396,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/domains":403,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/LegendOptions":426,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/ArcGISService":437,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/CodedValueDomain":600,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/InheritedDomain":601,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/RangeDomain":602,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/fieldType":603,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/PointCloudLayer":898,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/PointCloudRenderer":1040,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/SceneService":1069,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm":1271,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer":1315,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":1316,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm":1317,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer":1318,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer":1319,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter":1426,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/ColorModulation":1483,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":1484,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":1485,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/ColorClassBreakInfo":1486,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/StopInfo":1487,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/ColorUniqueValueInfo":1488,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter":1635,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter":1636,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter":1637,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer":1638,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils":2323,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils":2324,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils":2325,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils":2326})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1040:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(348),t(339),t(337),t(1483),t(1484),t(1485)],void 0===(n=function(e,r,t,o,n,i,l,a,s,p,u){var d=i.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),c=function(e){function r(r){var t=e.call(this)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},o([a.property({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],r.prototype,"type",void 0),o([a.property({types:u.pointSizeAlgorithmTypes,json:{read:p.read,write:!0}})],r.prototype,"pointSizeAlgorithm",void 0),o([a.property({type:s.default,json:{write:!0}})],r.prototype,"colorModulation",void 0),o([a.property({json:{write:!0},nonNullable:!0,type:Number})],r.prototype,"pointsPerInch",void 0),o([a.subclass("esri.renderers.PointCloudRenderer")],r)}(a.declared(n));return(c||(c={})).fieldTransformTypeKebabDict=i({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),c}.apply(null,o))||(e.exports=n)},1069:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(351),t(342),t(343),t(428),t(340),t(350),t(337),t(361),t(619),t(360),t(399),t(437),t(434),t(431),t(392)],void 0===(n=function(e,r,t,o,n,i,l,a,s,p,u,d,c,y,f,v,h,m,b){var g=l.getLogger("esri.layers.mixins.SceneService");return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode=null,r.spatialReference=null,r.fullExtent=null,r.heightModelInfo=null,r.version={major:Number.NaN,minor:Number.NaN,versionString:""},r.copyright=null,r.sublayerTitleMode="item-title",r.title=null,r.layerId=null,r}return t(r,e),r.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},r.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return y.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=o?new y(o):null},r.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent?null:new d({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},r.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},r.prototype.readTitlePortalItem=function(e,r){return"item-title"!==this.sublayerTitleMode?void 0:e},r.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return b.titleFromUrlAndName(this.url,r.name);var o=r.name||b.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(o=t+" - "+o),b.cleanTitle(o)},r.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(r.prototype,"url",{set:function(e){var r=b.sanitizeUrlWithLayerId(this,e,g);this._set("url",r.url),null!=r.layerId&&this._set("layerId",r.layerId)},enumerable:!0,configurable:!0}),r.prototype.writeUrl=function(e,r){b.writeUrlWithLayerId(this,e,"layers",r)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var r=p.urlToObject(e);return null!=this.layerId&&b.match.test(r.path)&&(r.path=r.path+"/layers/"+this.layerId),r},enumerable:!0,configurable:!0}),r.prototype.readRootNode=function(e,r){return r.store.rootNode},r.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(r){return e._updateExtentFromRootNode(r)})},r.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},r.prototype._fetchRootNode=function(){if(!this.rootNode)return s.resolve();var e=p.join(this.parsedUrl.path,this.rootNode);return n(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}).catch(function(r){throw new i("sceneservice:root-node-missing","Root node missing.",{error:r,url:e})})},r.prototype._fetchService=function(){var e=this;return(null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(r){null!=r&&(e.layerId=r)}):s.resolve()).then(function(){return e._fetchServiceLayer()})},r.prototype._fetchFirstLayerId=function(){return n(this.url,{query:{f:"json"},responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},r.prototype._fetchServiceLayer=function(){var e=this;return n(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));var t=r.data;e.read(t,{origin:"service",url:e.parsedUrl}),e._validateLayer(t)})},r.prototype._validateLayer=function(e){},o([u.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],r.prototype,"properties",void 0),o([u.property({type:y})],r.prototype,"spatialReference",void 0),o([u.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readSpatialReference",null),o([u.property({type:d})],r.prototype,"fullExtent",void 0),o([u.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readFullExtent",null),o([u.property({readOnly:!0,type:c})],r.prototype,"heightModelInfo",void 0),o([u.property({readOnly:!0})],r.prototype,"version",void 0),o([u.reader("version",["store.version"])],r.prototype,"readVersion",null),o([u.property({type:String,json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([u.property({type:String})],r.prototype,"sublayerTitleMode",void 0),o([u.property({type:String})],r.prototype,"title",void 0),o([u.reader("portal-item","title")],r.prototype,"readTitlePortalItem",null),o([u.reader("service","title",["name"])],r.prototype,"readTitleService",null),o([u.property({type:Number})],r.prototype,"layerId",void 0),o([u.reader("service","layerId",["id"])],r.prototype,"readLayerId",null),o([u.property()],r.prototype,"url",null),o([u.writer("url")],r.prototype,"writeUrl",null),o([u.property({dependsOn:["layerId"]})],r.prototype,"parsedUrl",null),o([u.property()],r.prototype,"store",void 0),o([u.property({type:String})],r.prototype,"rootNode",void 0),o([u.reader("rootNode",["store.rootNode"])],r.prototype,"readRootNode",null),o([u.subclass("esri.layers.mixins.SceneService")],r)}(u.declared(f,v,a,h,m))}.apply(null,o))||(e.exports=n)},1271:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(348),t(337)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.typeKebabDictionary=i({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),o([l.property({type:r.typeKebabDictionary.apiValues,readOnly:!0,nonNullable:!0,json:{type:r.typeKebabDictionary.jsonValues,read:!1,write:r.typeKebabDictionary.write}})],n.prototype,"type",void 0),o([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],n)}(l.declared(n));r.PointSizeAlgorithm=a,r.default=a}.apply(null,o))||(e.exports=n)},1315:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(345),t(338),t(336),t(339),t(337),t(1040),t(426),t(1486)],void 0===(n=function(e,r,t,o,n,i,l,a,s,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i.clone(this.colorClassBreakInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[p.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),u=n([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(l.declared(a))}.apply(null,o))||(e.exports=n)},1316:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(337),t(1271)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="fixed-size",r.size=0,r.useRealWorldSymbolSizes=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},o([n.enumeration.serializable()({pointCloudFixedSizeAlgorithm:"fixed-size"})],r.prototype,"type",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"size",void 0),o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"useRealWorldSymbolSizes",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],r)}(n.declared(i.default));r.PointSizeFixedSizeAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1317:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(337),t(1271)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="splat",r.scaleFactor=1,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({scaleFactor:this.scaleFactor})},o([n.enumeration.serializable()({pointCloudSplatAlgorithm:"splat"})],r.prototype,"type",void 0),o([n.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],r.prototype,"scaleFactor",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],r)}(n.declared(i.default));r.PointSizeSplatAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1318:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(345),t(338),t(336),t(339),t(337),t(1040),t(426),t(1487)],void 0===(n=function(e,r,t,o,n,i,l,a,s,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudStretchRenderer:"point-cloud-stretch"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[p.default],json:{write:!0}})],r.prototype,"stops",void 0),u=n([l.subclass("esri.renderers.PointCloudStretchRenderer")],r)}(l.declared(a))}.apply(null,o))||(e.exports=n)},1319:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(345),t(338),t(336),t(339),t(337),t(1040),t(426),t(1488)],void 0===(n=function(e,r,t,o,n,i,l,a,s,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}var u;return o(r,e),u=r,r.prototype.clone=function(){return new u(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.enumeration.serializable()({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[p.default],json:{write:!0}})],r.prototype,"colorUniqueValueInfos",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),u=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],r)}(l.declared(a))}.apply(null,o))||(e.exports=n)},1426:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(348),t(337)],void 0===(n=function(e,r,t,o,n,i,l){var a=i.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){return e.call(this)||this}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([l.property({readOnly:!0,type:a.apiValues,nonNullable:!0,json:{read:!1,write:a.write}})],r.prototype,"type",void 0),o([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(l.declared(n))}.apply(null,o))||(e.exports=n)},1483:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(337)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},o([i.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),n=o([i.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(i.declared(n));r.ColorModulation=l,r.default=l}.apply(null,o))||(e.exports=n)},1484:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(440),t(1316),t(1317)],void 0===(n=function(e,r,t,o,n){function i(e){return e&&l[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var l={pointCloudFixedSizeAlgorithm:o.default,pointCloudSplatAlgorithm:n.default};r.read=function(e,r,o){var n=i(e);if(n){var l=new n;return l.read(e,o),l}return o&&o.messages&&e&&o.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=i(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},1485:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1271),t(1316),t(1317)],void 0===(n=function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.pointSizeAlgorithmTypes={key:"type",base:t.default,typeMap:{"fixed-size":o.default,splat:n.default}}}.apply(null,o))||(e.exports=n)},1486:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(362),t(341),t(339),t(337),t(359)],void 0===(n=function(e,r,t,o,n,i,l,a,s){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([a.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([a.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([a.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([a.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(a.declared(i));r.ColorClassBreakInfo=p,r.default=p}.apply(null,o))||(e.exports=n)},1487:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(362),t(341),t(339),t(337),t(359)],void 0===(n=function(e,r,t,o,n,i,l,a,s){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({label:this.label,value:this.value,color:l.clone(this.color)})},o([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([a.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),o([a.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([a.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(a.declared(i));r.StopInfo=p,r.default=p}.apply(null,o))||(e.exports=n)},1488:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(362),t(341),t(339),t(337),t(359)],void 0===(n=function(e,r,t,o,n,i,l,a,s){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},o([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([a.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),o([a.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([a.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r)}(a.declared(i));r.ColorUniqueValueInfo=p,r.default=p}.apply(null,o))||(e.exports=n)},1635:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(339),t(337),t(1426)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,requiredClearBits:n.clone(this.requiredClearBits),requiredSetBits:n.clone(this.requiredSetBits)})},o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1636:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(339),t(337),t(1426)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.includedReturns=[],t.type="return",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,includedReturns:n.clone(this.includedReturns)})},o([i.property({type:[String],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1637:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(339),t(337),t(1426)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.mode="exclude",t.type="value",t.values=[],t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,mode:this.mode,values:n.clone(this.values)})},o([i.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property()],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1638:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(345),t(338),t(336),t(339),t(337),t(1040)],void 0===(n=function(e,r,t,o,n,i,l,a){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-rgb",t.field=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:i.clone(this.field)}))},n([l.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],r.prototype,"type",void 0),n([l.property({json:{write:{target:{field:{type:String},fieldTransformType:{type:String}},enabled:!0}},type:String})],r.prototype,"field",void 0),a=n([l.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(l.declared(a))}.apply(null,o))||(e.exports=n)},2323:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(402),t(440),t(1635),t(1636),t(1637)],void 0===(n=function(e,r,t,o,n,i,l){function a(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudValueFilter:l,pointCloudBitfieldFilter:n,pointCloudReturnFilter:i};r.read=function(e,r,t){if(e&&Array.isArray(e))return e.map(function(e){var r=a(e);if(r){var n=new r;return n.read(e,t),n}t&&t.messages&&e&&t.messages.push(new o("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})},r.write=function(e,r,o,n){var i=e.map(function(e){return e.write({},n)});t.setDeepValue(o,i,r)},r.fromJSON=function(e){var r=a(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2324:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1635),t(1426),t(1636),t(1637)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{value:i,bitfield:t,return:n}}}.apply(null,o))||(e.exports=n)},2325:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(440),t(1315),t(1638),t(1318),t(1319)],void 0===(n=function(e,r,t,o,n,i,l){function a(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:n,pointCloudStretchRenderer:i,pointCloudUniqueValueRenderer:l};r.read=function(e,r,o){var n=a(e);if(n){var i=new n;return i.read(e,o),i}return o&&o.messages&&e&&o.messages.push(new t("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=a(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2326:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1315),t(1040),t(1638),t(1318),t(1319)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":t,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":l}}}.apply(null,o))||(e.exports=n)},376:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(348),t(337)],void 0===(n=function(e,r,t,o,n,i,l){var a=i({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.type=null,t}return t(r,e),o([l.property({json:{write:!0}})],r.prototype,"name",void 0),o([l.property({json:{read:a.read,write:a.write}})],r.prototype,"type",void 0),o([l.subclass("esri.layers.support.Domain")],r)}(l.declared(n))}.apply(null,o))||(e.exports=n)},396:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(347),t(336),t(341),t(337),t(403),t(603)],void 0===(n=function(e,r,t,o,n,i,l,a){return function(e){function r(r){var t=e.call(this)||this;return t.alias=null,t.defaultValue=void 0,t.domain=null,t.editable=!0,t.length=-1,t.name=null,t.nullable=!0,t.type=null,t}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})},o([i.property({type:String,json:{write:!0}})],r.prototype,"alias",void 0),o([i.property({json:{write:{allowNull:!0}}})],r.prototype,"defaultValue",void 0),o([i.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],r.prototype,"domain",void 0),o([i.property({type:Boolean,json:{write:!0}})],r.prototype,"editable",void 0),o([i.property({type:Number,json:{write:!0}})],r.prototype,"length",void 0),o([i.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),o([i.property({type:Boolean,json:{write:!0}})],r.prototype,"nullable",void 0),o([i.property({type:String,json:{read:a.kebabDict.read,write:a.kebabDict.write}})],r.prototype,"type",void 0),n=o([i.subclass("esri.layers.support.Field")],r)}(i.declared(n))}.apply(null,o))||(e.exports=n)},403:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(600),t(376),t(601),t(602)],void 0===(n=function(e,r,t,o,n,i){function l(e,r){switch(e.type){case"range":var t="range"in e?e.range[0]:e.minValue,o="range"in e?e.range[1]:e.maxValue;if(+r<t||+r>o)return a.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(function(e){return null==e||e.code!==r}))return a.INVALID_CODED_VALUE}return null}var a;Object.defineProperty(r,"__esModule",{value:!0}),r.CodedValueDomain=t,r.DomainBase=o,r.InheritedDomain=n,r.RangeDomain=i,function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(a=r.DomainValidationError||(r.DomainValidationError={})),r.isValidDomainValue=function(e,r){return null===l(e,r)},r.validateDomainValue=l,r.types={key:"type",base:r.DomainBase,typeMap:{range:r.RangeDomain,"coded-value":r.CodedValueDomain}},r.getDomainRange=function(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}},r.fromJSON=function(e){return e&&e.type?"range"===e.type?r.RangeDomain.fromJSON(e):"codedValue"===e.type?r.CodedValueDomain.fromJSON(e):null:null}}.apply(null,o))||(e.exports=n)},426:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(341),t(337)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title=null,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({title:this.title})},o([i.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),n=o([i.subclass("esri.renderers.support.LegendOptions")],r)}(i.declared(n));r.LegendOptions=l,r.default=l}.apply(null,o))||(e.exports=n)},437:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(343),t(428),t(337),t(392)],void 0===(n=function(e,r,t,o,n,i,l,a){var s=n.getLogger("esri.layers.mixins.ArcGISService");return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=a.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{set:function(e){this._set("url",a.sanitizeUrl(e,s))},enumerable:!0,configurable:!0}),o([l.property({dependsOn:["url"]})],r.prototype,"title",null),o([l.property({type:String})],r.prototype,"url",null),o([l.subclass("esri.layers.mixins.ArcGISService")],r)}(l.declared(i))}.apply(null,o))||(e.exports=n)},600:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(339),t(337),t(376)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.codedValues=null,t.type="coded-value",t}var l;return t(r,e),l=r,r.prototype.writeCodedValues=function(e,r){var t=null;e&&(t=e.map(function(e){return n.fixJson(n.clone(e))})),r.codedValues=t},r.prototype.getName=function(e){var r=null;if(this.codedValues){var t=String(e);this.codedValues.some(function(e){return String(e.code)===t&&(r=e.name),!!r})}return r},r.prototype.clone=function(){return new l({codedValues:n.clone(this.codedValues),name:this.name})},o([i.property({json:{write:!0}})],r.prototype,"codedValues",void 0),o([i.writer("codedValues")],r.prototype,"writeCodedValues",null),o([i.enumeration.serializable()({codedValue:"coded-value"})],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.support.CodedValueDomain")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},601:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(337),t(376)],void 0===(n=function(e,r,t,o,n,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.type="inherited",t}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i},o([n.enumeration.serializable()({inherited:"inherited"})],r.prototype,"type",void 0),i=o([n.subclass("esri.layers.support.InheritedDomain")],r)}(n.declared(i))}.apply(null,o))||(e.exports=n)},602:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(338),t(336),t(337),t(376)],void 0===(n=function(e,r,t,o,n,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.maxValue=null,t.minValue=null,t.type="range",t}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})},o([n.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[1]}},write:{target:"range",writer:function(e,r,t){r[t]=[this.minValue,e]}}}})],r.prototype,"maxValue",void 0),o([n.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[0]}},write:{target:"range",writer:function(e,r,t){r[t]=[e,this.maxValue]}}}})],r.prototype,"minValue",void 0),o([n.enumeration.serializable()({range:"range"})],r.prototype,"type",void 0),i=o([n.subclass("esri.layers.support.RangeDomain")],r)}(n.declared(i))}.apply(null,o))||(e.exports=n)},603:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(348)],void 0===(n=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.kebabDict=t({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}.apply(null,o))||(e.exports=n)},898:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(345),t(338),t(336),t(351),t(342),t(339),t(343),t(340),t(350),t(337),t(399),t(1069),t(2323),t(2324),t(396),t(2325),t(2326),t(732)],void 0===(n=function(e,r,o,n,i,l,a,s,p,u,d,c,y,f,v,h,m,b,g,w){function j(e,r,t){return e&&((e=b.read(e,r,t)||void 0)||C.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var C=p.getLogger("esri.layers.PointCloudLayer");return function(e){function r(r,t){var o=e.call(this)||this;return o.operationalLayerType="PointCloudLayer",o.opacity=1,o.fields=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new m;return"FieldTypeInteger"===e.type&&((e=s.clone(e)).type="esriFieldTypeInteger"),r.read(e,t),r}):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map(function(e){return new m({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.reject(new a("point-cloud-layer:view-not-supported","PointCloudLayer is only supported in 3D"));case"3d":return u.create(function(e){return Promise.all([t.e(1),t.e(2),t.e(4),t.e(8),t.e(77)]).then(function(){var r=[t(2398)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return u.reject(new a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.attributeStorageInfo;r<t.length;r++){var o=t[r];if(o.name===e){var n=d.join(this.parsedUrl.path,"./statistics/"+o.key);return l(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&C.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&C.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},i([c.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),i([c.property({readOnly:!0,json:{write:!1,read:!1}})],r.prototype,"opacity",void 0),i([c.property({types:[h.types],json:{origins:{service:{read:{source:"filters",reader:v.read}}},read:{source:"layerDefinition.filters",reader:v.read},write:{target:"layerDefinition.filters",writer:v.write}}})],r.prototype,"filters",void 0),i([c.property({type:[m]})],r.prototype,"fields",void 0),i([c.reader("service","fields",["fields","attributeStorageInfo"])],r.prototype,"readServiceFields",null),i([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([c.property({value:null,type:w,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],r.prototype,"elevationInfo",null),i([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),i([c.property({types:g.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:j}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:j},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",void 0),i([c.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([c.subclass("esri.layers.PointCloudLayer")],r)}(c.declared(y,f))}.apply(null,o))||(e.exports=n)}}]);