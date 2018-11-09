define(["require","exports","dojo/has"],function(e,r,n){function a(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function i(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}var t;Object.defineProperty(r,"__esModule",{value:!0}),(t=r.MessageType||(r.MessageType={}))[t.HANDSHAKE=0]="HANDSHAKE",t[t.CONFIGURE=1]="CONFIGURE",t[t.CONFIGURED=2]="CONFIGURED",t[t.OPEN=3]="OPEN",t[t.OPENED=4]="OPENED",t[t.RESPONSE=5]="RESPONSE",t[t.INVOKE=6]="INVOKE",t[t.CANCEL=7]="CANCEL",t[t.CLOSE=8]="CLOSE",t[t.OPEN_PORT=9]="OPEN_PORT";var s=0;r.newJobId=function(){return s++},r.isTranferableResult=a,r.toInvokeError=function(e){return e?e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack}):null},r.postMessage=function(e,r,t,s){2===arguments.length||void 0===t&&void 0===s?e.postMessage(r):(n("esri-workers-arraybuffer-transfer")||(s?(s=s.filter(function(e){return!i(e)})).length||(s=null):a(t)&&t.transferList&&(t.transferList=t.transferList.filter(function(e){return!i(e)}),t.transferList.length||(t.transferList=null))),s?(r.data=t,e.postMessage(r,s)):a(t)?(r.data=t.result,t.transferList?e.postMessage(r,t.transferList):e.postMessage(r)):(r.data=t,e.postMessage(r)))},r.receiveMessage=function(e){if(!e)return null;var r=e.data;return r?"string"==typeof r?JSON.parse(r):r:null}});