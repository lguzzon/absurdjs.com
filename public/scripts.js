absurd=Absurd();
absurd.component("SiteMap",{sitemapWidth:400,html:".sitemap",css:{".sitemap":{d:"b",wid:"0px",ov:"h",right:0,pos:"f",hei:"100%","&.open":{wid:"400px"},".links":{hei:"auto"},"@media all and (max-width: 700px)":{"&.open":{wid:"100%"}}}},sitemapOpen:function(){this.dispatch("updateContentWidth",{isSiteMapOpen:!0,diff:this.sitemapWidth});var t=this.qs(".content",!1).offsetHeight;this.css[".sitemap"].hei=t+"px",this.css[".sitemap"][".links"].hei=t-128+"px",this.populate().addClass("open")},sitemapClose:function(){this.dispatch("updateContentWidth",{isSiteMapOpen:!1,diff:this.sitemapWidth}),this.css[".sitemap"].wid="0px",this.populate().removeClass("open")},close:function(t){t&&t.preventDefault(),this.sitemapClose(),SiteMapButton.open=!1},ready:function(){this.populate(),this.wire("sitemapOpen"),this.wire("sitemapClose")}})();var SiteMapButton=absurd.component("SiteMapButton",{html:".sitemap-button",open:!1,clicked:function(t){t.preventDefault(),this.open=!this.open,this.dispatch("sitemap"+(this.open?"Open":"Close"))},ready:function(){this.populate()}})();
absurd.component("Content",{css:{".content":{wid:"100%",hei:"100%","@media all and (max-width: 1000px)":{wid:"100%"}}},updateContentWidth:function(t){var e=parseInt(this.getStyle("width",this.qs(".content",!1)).replace("px",""));this.css[".content"].wid=e-(t.isSiteMapOpen?t.diff:-t.diff)+"px",this.populate()},ready:function(){this.wire("updateContentWidth"),this.populate()}})();
absurd.component("TryIt",{css:{".content-container":{maw:"100%"},".doc-home":{d:"n"}},ready:function(){this.qs(".jsbin-widget")&&this.populate()}})();
absurd.component("ContentFooter",{html:".footer-content",css:{".footer-content":{hei:"9px",".open":{"-w-trs":"all 1000ms","-wmso-trf":"rotate(0)"}}},toggle:function(t){t.preventDefault(),this.open?(this.open=!1,this.css[".footer-content"].hei="9px",this.css[".footer-content"][".open"]["-wmso-trf"]="rotate(0)"):(this.open=!0,this.css[".footer-content"].hei="150px",this.css[".footer-content"][".open"]["-wmso-trf"]="rotate(180deg)"),this.populate()},ready:function(){this.populate()}})();
absurd.component("LandingVideo",{html:".landing .video",ready:function(){this.verify(function(){var n=this.populate().qs("video"),i=this;this.addEventListener(n,"playing",function(){i.applyCSS({transparent:1})}),n.load()})}})(),absurd.component("LandingLogo",{html:".landing .logo",ready:function(){this.verify(function(){var n=this;n.applyCSS({moveto:"0/0"})})}})();