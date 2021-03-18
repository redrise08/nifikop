(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(290)),o={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},l={unversionedId:"5_references/1_nifi_cluster/2_read_only_config",id:"version-v0.5.2/5_references/1_nifi_cluster/2_read_only_config",isDocsHomePage:!1,title:"Read only configurations",description:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.",source:"@site/versioned_docs/version-v0.5.2/5_references/1_nifi_cluster/2_read_only_config.md",slug:"/5_references/1_nifi_cluster/2_read_only_config",permalink:"/nifikop/docs/v0.5.2/5_references/1_nifi_cluster/2_read_only_config",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.5.2/5_references/1_nifi_cluster/2_read_only_config.md",version:"v0.5.2",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1612270850,sidebar_label:"Read only configurations",sidebar:"version-v0.5.2/docs",previous:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.5.2/5_references/1_nifi_cluster/1_nifi_cluster"},next:{title:"Node configuration",permalink:"/nifikop/docs/v0.5.2/5_references/1_nifi_cluster/3_node_config"}},c=[{value:"ReadOnlyConfig",id:"readonlyconfig",children:[]},{value:"NifiProperties",id:"nifiproperties",children:[]},{value:"ZookeeperProperties",id:"zookeeperproperties",children:[]},{value:"BootstrapProperties",id:"bootstrapproperties",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'  # readOnlyConfig specifies the read-only type Nifi config cluster wide, all theses\n  # will be merged with node specified readOnly configurations, so it can be overwritten per node.\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.ui.banner.text=NiFiKop by Orange\n      # A comma separated list of allowed HTTP Host header values to consider when NiFi\n      # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n#      webProxyHost:\n      # Nifi security client auth\n      needClientAuth: false\n      # Indicates which of the configured authorizers in the authorizers.xml file to use\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n#      authorizer:\n    # ZookeeperProperties configuration that will be applied to the node.\n    zookeeperProperties:\n      # Additionnals zookeeper.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        initLimit=15\n        autopurge.purgeInterval=24\n        syncLimit=5\n        tickTime=2000\n        dataDir=./state/zookeeper\n        autopurge.snapRetainCount=30\n    # BootstrapProperties configuration that will be applied to the node.\n    bootstrapProperties:\n      # JVM memory settings\n      nifiJvmMemory: "512m"\n      # Additionnals bootstrap.properties configuration that will override the one produced based\n      # on template and configurations.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n      overrideConfigs: |\n        # java.arg.4=-Djava.net.preferIPv4Stack=true\n\n')),Object(i.b)("h2",{id:"readonlyconfig"},"ReadOnlyConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nifiProperties"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"#nifiproperties"}),"NifiProperties")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nifi.properties configuration that will be applied to the node."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"zookeeperProperties"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"#zookeeperproperties"}),"ZookeeperProperties")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"zookeeper.properties configuration that will be applied to the node."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bootstrapProperties"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"#bootstrapproperties"}),"BootstrapProperties")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bootstrap.conf configuration that will be applied to the node."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"nifiproperties"},"NifiProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Additionnals nifi.properties configuration that will override the one produced based on template and configurations."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"webProxyHosts"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"["," ","]","string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"}),"web-properties")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"needClientAuth"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Nifi security client auth."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"authorizer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Indicates which of the configured authorizers in the authorizers.xml file to use ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"}),"authorizer-configuration")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"managed-authorizer"')))),Object(i.b)("h2",{id:"zookeeperproperties"},"ZookeeperProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Additionnals zookeeper.properties configuration that will override the one produced based on template and configurations."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'""')))),Object(i.b)("h2",{id:"bootstrapproperties"},"BootstrapProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Additionnals bootstrap.conf configuration that will override the one produced based on template and configurations."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NifiJvmMemory"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM memory settings."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"512m"')))))}p.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,O=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);