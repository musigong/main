function newWin(url,win,wid,hei) {
	window.open(url,win,"width="+wid+" height="+hei+" left=10 top=10 scrollbars=yes resizable=yes")
}

function center(url,win,sw,sh) {
	cw=screen.availWidth;
	ch=screen.availHeight;
	ml=(cw-sw)/2;
	mt=(ch-sh)/2-25;
	window.open(url,win,"width="+sw+",height="+sh+",top="+mt+",left="+ml+",resizable=yes,scrollbars=yes");
}

function show(lyr,id){
	if(id==0){document.all[lyr].style.display = "none";}
	if(id==1){document.all[lyr].style.display = "";}
}

function showMe(a){
	var mylayer=document.getElementById(a);
	if(mylayer.style.display=="none"){mylayer.style.display="";}
	else{mylayer.style.display="none";}
}

function show_(lyr,id)
{
	if(id==0){document.all[lyr].style.display = "none";}
	if(id==1){document.all[lyr].style.display = "block";}
}

function newWin50(url,win,wid,hei) {
	window.open(url,win,"width="+wid+",height="+hei+",top="+Number(window.screenY+50)+"px,left="+Number(window.screenX+50)+"px,resizable=yes,scrollbars=yes");
}

function preview_on(a){
	var mylyr=document.getElementById("preview");
	mylyr.innerHTML=a;
	mylyr.style.left=event.pageX+20+"px";
	mylyr.style.top=event.pageY-35+"px";
	show("preview",1);
}

function preview_off(){
	show("preview",0);
}

function schedule_on(a){
	document.getElementById(a).style.left=event.pageX+50+"px";
	document.getElementById(a).style.top=event.pageY+"px";
	show(a,1);
}

function schedule_out(a){
	show(a,0);
}

function centerLayer(url,title,wid,hei){
	var wl=document.getElementById("xy_layer");
	var wt=document.getElementById("xy_title");
	var wi=document.getElementById("xy_iframe");
	var ta=document.getElementById("xy_title_area");
	var xb=document.getElementById("xy_xbtn");
	wl.style.position="fixed";
	if(wid==""){wl.style.width="";}
	else if(wid=="100%"){wl.style.width="100%";}
	else{wl.style.width=wid+"px";}
	wl.style.left="50%";
	wl.style.marginLeft=(wid/2*(-1)-1)+"px";
	wl.style.top="50%";
	wl.style.marginTop=((hei+35)/2*(-1)-1)+"px";
	wt.innerHTML=title;
	if(title==""){
		ta.style.display="none";
		xb.style.display="";
	}
	else{
		ta.style.display="";
		xb.style.display="none";
	}
	wi.style.height=hei+"px";
	wl.style.zIndex=5;
	window.open(url,"xy_iframe");
	show("xy_layer",1);
	show("emphasizer",1);
}

function winLayer(url,title,wid,hei,left,top){
	var wl=document.getElementById("win_layer");
	var wt=document.getElementById("win_title");
	var wi=document.getElementById("win_iframe");
	if(wid==""){
		wl.style.width="";}
	else{
		wl.style.width=wid+"px";}
	wl.style.marginLeft=left+"px";
	wl.style.marginTop=top+"px";
	wt.innerHTML=title;
	wi.style.height=hei+"px";
	wl.style.zIndex=5;
	window.open(url,"win_iframe");
	show("win_layer",1);
	show("emphasizer",1);
}

function fixLayer(url,title,wid,hei,left,top){
	var wl=document.getElementById("win_layer");
	var wt=document.getElementById("win_title");
	var wi=document.getElementById("win_iframe");
	wl.style.position="fixed";
	if(wid==""){wl.style.width="";}
	else if(wid=="100%"){wl.style.width="100%";}
	else{wl.style.width=wid+"px";}
	wl.style.marginLeft=left+"px";
	wl.style.marginTop=top+"px";
	wt.innerHTML=title;
	wi.style.height=hei+"px";
	wl.style.zIndex=5;
	window.open(url,"win_iframe");
	show("win_layer",1);
	show("emphasizer",1);
}

function xyLayer(url,title,wid,hei,x,y){
	var xyl=document.getElementById("xy_layer");
	var xyt=document.getElementById("xy_title");
	var xyi=document.getElementById("xy_iframe");
	if(wid==""){
		xyl.style.width="";}
	else{
		xyl.style.width=wid+"px";}
	xyl.style.left=event.pageX+x+"px";
	xyl.style.top=event.pageY+y+"px";
	xyt.innerHTML=title;
	xyi.style.height=hei+"px";
	window.open(url,"xy_iframe");
	show("xy_layer",1);
	show("emphasizer",1);
}

function fxLayer(url,title,wid,hei,left,top){
	var xyl=document.getElementById("xy_layer");
	var xyt=document.getElementById("xy_title");
	var xyi=document.getElementById("xy_iframe");
	xyl.style.position="fixed";
	if(wid==""){
		xyl.style.width="";}
	else{
		xyl.style.width=wid+"px";}
	xyl.style.left=left+"px";
	xyl.style.top=top+"px";
	xyt.innerHTML=title;
	xyi.style.height=hei+"px";
	window.open(url,"xy_iframe");
	show("xy_layer",1);
	show("emphasizer",1);
}

function absLayer(url,title,wid,hei,left,top){
	var xyl=document.getElementById("xy_layer");
	var xyt=document.getElementById("xy_title");
	var xyi=document.getElementById("xy_iframe");
	xyl.style.position="absolute";
	if(wid==""){
		xyl.style.width="";}
	else{
		xyl.style.width=wid+"px";}
	xyl.style.left=left+"px";
	xyl.style.top=top+"px";
	xyt.innerHTML=title;
	xyi.style.height=hei+"px";
	window.open(url,"xy_iframe");
	show("xy_layer",1);
	show("emphasizer",1);
}

function popLayer(url,wid,hei,left,top){
	var wl=document.getElementById("pop_up");
	var wi=document.getElementById("pop_iframe");
	if(wid==""){
		wl.style.width="";}
	else{
		wl.style.width=wid+"px";}
	wl.style.marginLeft=left+"px";
	wl.style.marginTop=top+"px";
	wi.style.height=hei+"px";
	wl.style.zIndex=5;
	window.open(url,"pop_iframe");
	show("pop_up",1);
	show("emphasizer",1);
}

function closeMe(a){
	if(parent.document.name!=document.name){
		if(a=="refresh" || a==1){
			parent.location.reload();
		}else{
			var p_win=parent.document.getElementById("win_layer");
			var p_fix=parent.document.getElementById("fix_layer");
			var p_xy=parent.document.getElementById("xy_layer");
			var p_xy2=parent.document.getElementById("xy_layer2");
			if(p_win){p_win.style.display="none";}
			if(p_fix){p_fix.style.display="none";}
			if(p_xy){p_xy.style.display="none";}
			if(p_xy2){p_xy2.style.display="none";}
			parent.document.getElementById("emphasizer").style.display="none";
		}
	}else{
		self.close();
	}
}

function memoLayer(tit,cont,wid,x,y){
	var ml=document.getElementById("memo_layer");
	ml.style.width=wid+"px";
	ml.style.left=event.pageX+x+"px";
	ml.style.top=event.pageY+y+"px";
	document.getElementById("memo_title").innerHTML=tit;
	document.getElementById("memo_content").innerHTML=cont;
	show("memo_layer",1);
}

function htmledit(excute,values){
	if(values==null){document.execCommand(excute);}
	else{document.execCommand(excute,"",values);}
}

function toolbox_hide_all(){
	show_("forecolors",0);
	show_("backcolors",0);
	show_("fonttypes",0);
	show_("fontsizes",0);
}

function createLink(url){
	var selectStr=window.getSelection();
	var range=selectStr.getRangeAt(0);
	var	clink=document.createElement("a");	//<a></a> 생성
	clink.href=url;
	clink.target="_blank";
	myStr=document.createTextNode(selectStr);	//텍스트 생성
	clink.appendChild(myStr);	//<a>텍스트</a> 생성
	range.extractContents();
	range.insertNode(clink);
	window.getSelection().collapseToEnd();
}

function inputNum(){
	if((event.keyCode<48) || (event.keyCode>57)){
		if(event.preventDefault){event.preventDefault();}
		else{event.returnValue=false;}
	}
}
