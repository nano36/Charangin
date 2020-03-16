var w=window; var DO=document; var mLoginAct=null; var LC_USER=null; var LC='/'; var LC_PAIS='';
var MSIE = (navigator.userAgent.indexOf('MSIE')!=-1) ? true:false;
ck=DO.cookie; i=ck.indexOf('pub_pais'); if (i!=-1) { e=ck.indexOf(';',i+9); LC_PAIS=(e!=-1)?ck.substr(i+9,e-i-9):ck.substr(i+9); }

function GE(elm) { return DO.getElementById(elm); }
function GS(elm) { return DO.getElementById(elm).style; }
function PI(elm) { return parseInt(elm,10) }
function show(elm) { GS(elm).display = ''; }
function hide(elm) { GS(elm).display = 'none'; }
function HTML(elm, newdata) { if (typeof(newdata)!="undefined") GE(elm).innerHTML=newdata; else return GE(elm).innerHTML; }
function ADS(u) { s=DO.createElement('script'); s.type='text/javascript'; s.async=true; s.src=u; DO.getElementsByTagName("head")[0].appendChild(s); }

function mShTop() {
	cont ='<div id=f_ucmd style="display:none"></div><table id=f_tpt><tr>';
	cont+='<TD class=l><a href="'+LC+'"><img src="/IMG/f_logoHD.png" title="Tablaturas y Acordes para Guitarra"></a></td>';
	cont+='<td class=m><a href="//acordes.lacuerda.net/tabs/" title="Acordes de Canciones">acordes</a> | <a href="'+LC+'Evolucion" title="Acordes del Web">evoluci&oacute;n</a> | ';
	cont+='<a href="http://videos.lacuerda.net">videos</a> | ';
	cont+='<a href="'+LC+'Recursos">recursos</a> | <a href="'+LC+'Usuarios">comunidad</a> | ';
	cont+='<a href="'+LC+'Enlaces">enlaces</a> | <a href="'+LC+'Extras">extras</a></td>';
	cont+='<TD class=b><form name=mForm action=https://acordes.lacuerda.net/busca.php method=get><input type=hidden name=canc value=0>';
	cont+='<table id=f_bus><tr><td class=bi><a id=busTipo href="javascript:mCambio()" tabindex=1>buscar &nbsp;&nbsp;</a></td>';
	cont+='<td class=bm><input type=text name=exp id=f_exp tabindex=2 value="Artista o Canción" style="color:#ccc" onfocus="mExpF()" onblur="mExpB()"></td>';
	cont+='<td class=bd onclick="mEnvio()">&nbsp;</td></tr></table></form></td></tr></table>';
	HTML('f_top',cont);

	ck=DO.cookie; i=ck.indexOf('lc_user'); if (i!=-1) { e=ck.indexOf(';',i+8); u=(e!=-1)?ck.substr(i+8,e-i-8):ck.substr(i+8);
	HTML('f_login','<a href="javascript:mUCmds()">['+u+']</a>'); LC_USER=u;
	} else HTML('f_login','<a href="javascript:mLogin()">Conexi&#243;n</a> &middot; <a href="'+LC+'Usuarios/registro.php">Inscripci&#243;n</a>');
}

function mUCmds() {
	if (GS('f_ucmd').display!='none') { hide('f_ucmd'); return; }
	cont='<a href="'+LC+'Usuarios/go.php?j=1">ver perfil</a> | <a href="'+LC+'Usuarios/go.php?j=2">mensajes</a> | ';
	cont+='<a href="'+LC+'Usuarios/go.php?j=3">favoritos</a> | <a href="'+LC+'Usuarios/login.php?action=logout">salir</a>';
	cont+=' &nbsp; <a href="javascript:hide(\'f_ucmd\')" style="color:#fc0">[X]</a>&nbsp;';
	HTML('f_ucmd', cont); show('f_ucmd');
}

function mShFrames(pid) { var PUBSITE="http://acordes.lacuerda.net/PUB/";
//	return;
//	try { ban728.location=PUBSITE+'728.php?pub_id='+pid; } catch(err) {}
//	try { ban160.location=PUBSITE+'160.php'; } catch(err) {}
//	try { ban300.location=PUBSITE+'300.php?pub_id='+pid; } catch(err) {}
	if (GE('banTxt')!=null) ADS(PUBSITE+'txtad2.php');
}

function mCambio() {
  var cv=[]; cv[0]=2; cv[1]=0; cv[2]=1; var ct=[]; ct[0]='artistas'; ct[1]='buscar'; ct[2]='canciones';
  var c = DO.forms.mForm.canc; HTML('busTipo', ct[c.value]+' &nbsp;&nbsp;');
  c.value = cv[c.value]; mExpB();
}

function mExpF() { if (GS('f_exp').color!="") { GE('f_exp').value=''; GS('f_exp').color=""; } }
function mExpB() { if (GS('f_exp').color=="" && GE('f_exp').value!="") return;
	var cl=[]; cl[0]="Artista o Canción"; cl[2]="Nombre del Artista"; cl[1]="Título de la Canción";
	GS('f_exp').color="#ccc"; GE('f_exp').value=cl[DO.forms.mForm.canc.value];
}
function mEnvio() { DO.forms.mForm.submit(); }

function mLogin() { popData = {url:LC+'Usuarios/login.php',w:300,h:300}; ADS("/TRAN/utilPop.js"); }

function calImg(d) { img=Math.floor(d[1]/0.5)*5; if (img>90) img=90; if(img<55) img=55;
	if (d[2]==0) { img='00';txt='N/A (0 opiniones)'} else { txt=d[1]+' ('+d[2]+' opiniones)'; }
	return ['/IMG/Cal/cal'+img+'.gif',txt];
}


var TERRAPAIS = (LC_PAIS=='mx' || LC_PAIS=='ar' || LC_PAIS=='cl' || LC_PAIS=='co' || LC_PAIS=='pe' || LC_PAIS=='es') ? true : false;

function tStats() { return; }
