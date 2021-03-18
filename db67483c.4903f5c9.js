(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(290)),i=a(294),c=a(295),b={id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},o={unversionedId:"2_setup/3_install/1_customizable_install_with_helm",id:"version-v0.5.2/2_setup/3_install/1_customizable_install_with_helm",isDocsHomePage:!1,title:"Customizable install with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-v0.5.2/2_setup/3_install/1_customizable_install_with_helm.md",slug:"/2_setup/3_install/1_customizable_install_with_helm",permalink:"/nifikop/docs/v0.5.2/2_setup/3_install/1_customizable_install_with_helm",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.5.2/2_setup/3_install/1_customizable_install_with_helm.md",version:"v0.5.2",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1612270850,sidebar_label:"Customizable install with Helm",sidebar:"version-v0.5.2/docs",previous:{title:"MiniKube",permalink:"/nifikop/docs/v0.5.2/2_setup/2_platform_setup/2_minikube"},next:{title:"Cluster Scaling",permalink:"/nifikop/docs/v0.5.2/3_tasks/1_nifi_cluster/2_cluster_scaling"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Introduction",id:"introduction",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Installing the Chart",id:"installing-the-chart",children:[]},{value:"Listing deployed charts",id:"listing-deployed-charts",children:[]},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",children:[]}]},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Install of the CRD",id:"install-of-the-crd",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Perform any necessary ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/nifikop/docs/v0.5.2/2_setup/2_platform_setup/1_gke"}),"plateform-specific setup")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/helm/helm#install"}),"Install a Helm client")," with a version higher than 3")),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"This Helm chart install NiFiKop the Orange's Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."),Object(l.b)("p",null,"It will use Custom Ressources Definition CRDs:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nificlusters.nifi.orange.com"),", "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nifiusers.nifi.orange.com"),",  "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nifiusergroups.nifi.orange.com"),", "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nifiregistryclients.nifi.orange.com"),", "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nifiparametercontexts.nifi.orange.com"),", "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nifidataflows.nifi.orange.com"),", ")),Object(l.b)("h3",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.repository")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"orangeopensource/nifikop"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.tag")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image tag"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"v0.5.2-release"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.pullPolicy")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image pull policy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Always"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.imagePullSecrets.enabled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable tue use of secret for docker image"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"image.imagePullSecrets.name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the secret to connect to docker registry"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"certManager.enabled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable cert-manager integration"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"rbacEnable")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, create & use RBAC resources"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"resources")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pod resource requests & limits"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"metricService")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deploy service for metrics"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"debug.enabled")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"activate DEBUG log level"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"certManager.clusterScoped")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true setup cluster scoped resources"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"namespaces")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",Object(l.b)("inlineCode",{parentName:"td"},"get")," permissions on this ",Object(l.b)("inlineCode",{parentName:"td"},"Node")," resource when using limited RBACs."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'""')," i.e. all namespaces")))),Object(l.b)("p",null,"Specify each parameter using the ",Object(l.b)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",Object(l.b)("inlineCode",{parentName:"p"},"helm install"),". For example,"),Object(l.b)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"$ helm install nifikop \\\n      orange-incubator/nifikop \\\n      -f values.yaml\n")),Object(l.b)("h3",{id:"installing-the-chart"},"Installing the Chart"),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Skip CRDs")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"In the case where you don't want to deploy the crds using helm (",Object(l.b)("inlineCode",{parentName:"p"},"--skip-crds"),") you need to deploy manually the crds beforehand:"),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/config/crd/bases/nifi.orange.com_nifiregistryclients.yaml\n")))),Object(l.b)(i.a,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"dryrun",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'helm install nifikop orange-incubator/nifikop \\\n    --dry-run \\\n    --debug.enabled \\\n    --set debug.enabled=true \\\n    --set namespaces={"nifikop"}\n'))),Object(l.b)(c.a,{value:"rn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm install <release name> orange-incubator/nifikop \n"))),Object(l.b)(c.a,{value:"set-params",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'helm install nifikop orange-incubator/nifikop --set namespaces={"nifikop"}\n')))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"the ",Object(l.b)("inlineCode",{parentName:"p"},"--replace")," flag allow you to reuses a charts release name")),Object(l.b)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm list\n")),Object(l.b)("h3",{id:"get-status-for-the-helm-deployment"},"Get Status for the helm deployment"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm status nifikop\n")),Object(l.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(l.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"helm del nifikop\n")),Object(l.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)"))),Object(l.b)("p",null,"Manually delete the CRD:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl delete crd nificlusters.nifi.orange.com\nkubectl delete crd nifiusers.nifi.orange.com\nkubectl delete crd nifiusergroups.nifi.orange.com\nkubectl delete crd nifiregistryclients.nifi.orange.com\nkubectl delete crd nifiparametercontexts.nifi.orange.com\nkubectl delete crd nifidataflows.nifi.orange.com\n")),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you delete the CRD then\nIt will delete ",Object(l.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care"))),Object(l.b)("p",null,"Helm always keeps records of what releases happened. Need to see the deleted releases ? "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm list --deleted\n")),Object(l.b)("p",null,"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm list --all\n")),Object(l.b)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),Object(l.b)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),Object(l.b)("p",null,"To purge a release"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm delete --purge nifikop\n")),Object(l.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(l.b)("h3",{id:"install-of-the-crd"},"Install of the CRD"),Object(l.b)("p",null,"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."),Object(l.b)("p",null,"In this case there is a parameter to say to not install the CRDs :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n')))}p.isMDXComponent=!0},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},291:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},292:function(e,t,a){"use strict";var n=a(0),r=a(293);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},293:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},294:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(292),i=a(291),c=a(52),b=a.n(c),o=37,s=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(l.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,f=Object(n.useState)(c),h=f[0],g=f[1],N=Object(n.useState)(!1),v=N[0],y=N[1];if(null!=p){var w=O[p];null!=w&&w!==h&&u.some((function(e){return e.value===w}))&&g(w)}var C=function(e){g(e),null!=p&&j(p,e)},k=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},x=function(){y(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",_),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",_),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),_(e)},onFocus:function(){return C(t)},onClick:function(){C(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},295:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);