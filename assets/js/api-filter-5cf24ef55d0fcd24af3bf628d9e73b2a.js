YUI.add("api-filter",function(e){e.APIFilter=e.Base.create("apiFilter",e.Base,[e.AutoCompleteBase],{initializer:function(){this._bindUIACBase(),this._syncUIACBase()},getDisplayName:function(t){return e.each(e.YUIDoc.meta.allModules,function(e){e.name===t&&e.displayName&&(t=e.displayName)}),"elements"===this.get("queryType")&&(t="&lt;"+t+"&gt;"),t}},{ATTRS:{resultHighlighter:{value:"phraseMatch"},queryType:{value:"classes"},source:{valueFn:function(){var t=this
return function(a){var i=e.YUIDoc.meta[t.get("queryType")],s=[]
return e.each(i,function(e){e.toLowerCase().indexOf(a.toLowerCase())>-1&&s.push(e)}),s}}}}})},"3.4.0",{requires:["autocomplete-base","autocomplete-highlighters","autocomplete-sources"]})

//# sourceMappingURL=api-filter-2c5dae670e12fcb56c06c075d336aa0a.map