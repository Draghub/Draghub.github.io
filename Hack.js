function checkPermitHome2(ipw,ipw_key,iTag){
	iipw=''; if(ipw!='') iipw=prompt('請輸入指定密碼 (英數字元，大小寫相異)','');
	if(iipw!=null){
		if(/^[0-9a-zA-Z]+$/.test(iipw)){
			eniipw='';
			for(u=0;u<iipw.length;u++){
				eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6=6+(2.1(0)+2.1(0)*4.5(0)-3*4.5(0))+\',\';',7,7,'u|charCodeAt|iipw||ipw_key|charAt|eniipw'.split('|'),0,{}));
			}
			iipw=eniipw;
		} else if(iipw!=''){ alert("密碼必須是英文或數字！");iipw=null;}
		if(iipw==ipw){
			eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4=a.b(\';\');5=\'\';9(3=0;3<4.8;3++){7(/^(\\d+)\\.\\d(\\d+)$/.c(4[3]))5+=g.e(6.$1-6.$2-f)}',17,17,'|||i|ics|icstr|RegExp|if|length|for|iTag|split|test||fromCharCode|273|String'.split('|'),0,{}));
			window.open(icstr+"?checkFromHomeIndex",'_top');
		} else if(iipw!=null) alert("密碼錯誤！");
	}
};
function checkPermitHome(ipw,ipw_key,iTag){
	checkPermitHome2("","",iTag);
};
