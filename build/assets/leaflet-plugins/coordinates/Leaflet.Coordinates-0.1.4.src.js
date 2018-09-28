//# sourceMappingURL=Leaflet.Coordinates-0.1.4.src.js.map
L.Control.Coordinates=L.Control.extend({options:{position:"bottomright",decimals:4,decimalSeperator:".",labelTemplateLat:"Lat: {y}",labelTemplateLng:"Lng: {x}",labelFormatterLat:void 0,labelFormatterLng:void 0,enableUserInput:!0,useDMS:!1,useLatLngOrder:!1,centerUserCoordinates:!1},onAdd:function(a){this._map=a;var b=this._container=L.DomUtil.create("div","leaflet-control-coordinates"),c=this.options;this._labelcontainer=L.DomUtil.create("div","uiElement label",b);this._label=L.DomUtil.create("span",
"labelFirst",this._labelcontainer);this._inputcontainer=L.DomUtil.create("div","uiElement input uiHidden",b);var d,e;c.useLatLngOrder?(e=L.DomUtil.create("span","",this._inputcontainer),this._inputY=this._createInput("inputY",this._inputcontainer),d=L.DomUtil.create("span","",this._inputcontainer),this._inputX=this._createInput("inputX",this._inputcontainer)):(d=L.DomUtil.create("span","",this._inputcontainer),this._inputX=this._createInput("inputX",this._inputcontainer),e=L.DomUtil.create("span",
"",this._inputcontainer),this._inputY=this._createInput("inputY",this._inputcontainer));d.innerHTML=c.labelTemplateLng.replace("{x}","");e.innerHTML=c.labelTemplateLat.replace("{y}","");L.DomEvent.on(this._inputX,"keyup",this._handleKeypress,this);L.DomEvent.on(this._inputY,"keyup",this._handleKeypress,this);a.on("mousemove",this._update,this);a.on("dragstart",this.collapse,this);a.whenReady(this._update,this);this._showsCoordinates=!0;c.enableUserInput&&L.DomEvent.addListener(this._container,"click",
this._switchUI,this);return b},_createInput:function(a,b){a=L.DomUtil.create("input",a,b);a.type="text";L.DomEvent.disableClickPropagation(a);return a},_clearMarker:function(){this._map.removeLayer(this._marker)},_handleKeypress:function(a){switch(a.keyCode){case 27:this.collapse();break;case 13:this._handleSubmit();this.collapse();break;default:this._handleSubmit()}},_handleSubmit:function(){var a=L.NumberFormatter.createValidNumber(this._inputX.value,this.options.decimalSeperator),b=L.NumberFormatter.createValidNumber(this._inputY.value,
this.options.decimalSeperator);if(void 0!==a&&void 0!==b){var c=this._marker;c||(c=this._marker=L.marker(),c.on("click",this._clearMarker,this));a=new L.LatLng(b,a);c.setLatLng(a);c.addTo(this._map);this.options.centerUserCoordinates&&this._map.setView(a,this._map.getZoom())}},expand:function(){this._showsCoordinates=!1;this._map.off("mousemove",this._update,this);L.DomEvent.addListener(this._container,"mousemove",L.DomEvent.stop);L.DomEvent.removeListener(this._container,"click",this._switchUI,this);
L.DomUtil.addClass(this._labelcontainer,"uiHidden");L.DomUtil.removeClass(this._inputcontainer,"uiHidden")},_createCoordinateLabel:function(a){var b=this.options,c;c=b.labelFormatterLng?b.labelFormatterLng(a.lng):L.Util.template(b.labelTemplateLng,{x:this._getNumber(a.lng,b)});a=b.labelFormatterLat?b.labelFormatterLat(a.lat):L.Util.template(b.labelTemplateLat,{y:this._getNumber(a.lat,b)});return b.useLatLngOrder?a+" "+c:c+" "+a},_getNumber:function(a,b){return b.useDMS?L.NumberFormatter.toDMS(a):
L.NumberFormatter.round(a,b.decimals,b.decimalSeperator)},collapse:function(){if(!this._showsCoordinates&&(this._map.on("mousemove",this._update,this),this._showsCoordinates=!0,L.DomEvent.addListener(this._container,"click",this._switchUI,this),L.DomEvent.removeListener(this._container,"mousemove",L.DomEvent.stop),L.DomUtil.addClass(this._inputcontainer,"uiHidden"),L.DomUtil.removeClass(this._labelcontainer,"uiHidden"),this._marker)){var a=L.marker(),b=this._marker.getLatLng();a.setLatLng(b);var c=
L.DomUtil.create("div","");L.DomUtil.create("div","",c).innerHTML=this._createCoordinateLabel(b);b=L.DomUtil.create("a","",c);b.innerHTML="Remove";b.href="#";var d=L.DomEvent.stopPropagation;L.DomEvent.on(b,"click",d).on(b,"mousedown",d).on(b,"dblclick",d).on(b,"click",L.DomEvent.preventDefault).on(b,"click",function(){this._map.removeLayer(a)},this);a.bindPopup(c);a.addTo(this._map);this._map.removeLayer(this._marker);this._marker=null}},_switchUI:function(a){L.DomEvent.stop(a);L.DomEvent.stopPropagation(a);
L.DomEvent.preventDefault(a);this._showsCoordinates?this.expand():this.collapse()},onRemove:function(a){a.off("mousemove",this._update,this)},_update:function(a){a=a.latlng;var b=this.options;a&&(this._currentPos=a=a.wrap(),this._inputY.value=L.NumberFormatter.round(a.lat,b.decimals,b.decimalSeperator),this._inputX.value=L.NumberFormatter.round(a.lng,b.decimals,b.decimalSeperator),this._label.innerHTML=this._createCoordinateLabel(a))}});L.control.coordinates=function(a){return new L.Control.Coordinates(a)};
L.Map.mergeOptions({coordinateControl:!1});L.Map.addInitHook(function(){this.options.coordinateControl&&(this.coordinateControl=new L.Control.Coordinates,this.addControl(this.coordinateControl))});
L.NumberFormatter={round:function(a,b,c){var d=L.Util.formatNum(a,b)+"";a=d.split(".");if(a[1]){for(b-=a[1].length;0<b;b--)a[1]+="0";d=a.join(c||".")}return d},toDMS:function(a){var b=Math.floor(a),c=60*(a-b);a=Math.floor(c);c=Math.round(60*(c-a));60==c&&(a++,c="00");60==a&&(b++,a="00");10>c&&(c="0"+c);10>a&&(a="0"+a);return""+b+"&deg; "+a+"' "+c+"''"},createValidNumber:function(a,b){if(a&&0<a.length){a=a.split(b||".");try{var c=Number(a.join("."));return isNaN(c)?void 0:c}catch(d){}}}};