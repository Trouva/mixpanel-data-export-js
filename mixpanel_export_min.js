var MixpanelExport;MixpanelExport=(function(){function a(b){this.opts=b;if(!(this.opts.api_key&&this.opts.api_secret)){throw"Error: api_key and api_secret must be passed to Mixpanel constructor."}this.api_key=this.opts.api_key;this.api_secret=this.opts.api_secret;this.api_stub="//mixpanel.com/api/2.0/"||this.opts.api_stub;this.timeout_after=10||this.opts.timeout_after}a.prototype.events=function(b){return this.get("events",b)};a.prototype.top_events=function(b){return this.get(["events","top"],b)};a.prototype.names=function(b){return this.get(["events","names"],b)};a.prototype.properties=function(b){return this.get(["events","properties"],b)};a.prototype.top_properties=function(b){return this.get(["events","properties","top"],b)};a.prototype.values=function(b){return this.get(["events","properties","values"],b)};a.prototype.funnels=function(b){return this.get(["funnels"],b)};a.prototype.list=function(b){return this.get(["funnels","list"],b)};a.prototype.segmentation=function(b){return this.get(["segmentation"],b)};a.prototype.numeric=function(b){return this.get(["segmentation","numeric"],b)};a.prototype.sum=function(b){return this.get(["segmentation","sum"],b)};a.prototype.average=function(b){return this.get(["segmentation","average"],b)};a.prototype.retention=function(b){return this.get(["retention"],b)};a.prototype.engage=function(b){return this.get(["engage"],b)};a.prototype.get=function(d,c){var b;b=this._build_request_url(d,c);return $.ajax({dataType:"json",url:b})};a.prototype._build_request_url=function(c,b){return""+this.api_stub+((typeof c.join==="function"?c.join("/"):void 0)||c)+"/?"+(this._request_parameter_string(b))};a.prototype._request_parameter_string=function(d){var b,e,c;b=_.extend({api_key:this.api_key,expire:this._timeout(),callback:""},d);e=_.keys(b).sort();c=_.without(e,"callback");return this._get_parameter_string(e,b)+"&sig="+this._get_signature(c,b)};a.prototype._get_parameter_string=function(d,b){var c;c=this;return _.map(d,(function(e){return""+e+"="+(c._url_encode(b[e]))})).join("&")};a.prototype._get_signature=function(d,b){var c,e;c=this;e=_.map(d,(function(f){return""+f+"="+(c._sig_encode(b[f]))})).join("")+this.api_secret;return CryptoJS.MD5(e)};a.prototype._url_encode=function(b){if(Array.isArray(b)){return encodeURIComponent(JSON.stringify(b))}else{return b}};a.prototype._sig_encode=function(b){if(Array.isArray(b)){return JSON.stringify(b)}else{return b}};a.prototype._timeout=function(){return Math.round(new Date().getTime()/1000)+this.timeout_after};return a})();