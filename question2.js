var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    for(var obj of result){
        console.log(obj.flags.png)
    }
    
}
//output
/*https://flagcdn.com/w320/mr.png
question2.js:8 https://flagcdn.com/w320/aw.png
question2.js:8 https://flagcdn.com/w320/ar.png
question2.js:8 https://flagcdn.com/w320/se.png
question2.js:8 https://flagcdn.com/w320/mv.png
question2.js:8 https://flagcdn.com/w320/mx.png
question2.js:8 https://flagcdn.com/w320/nz.png
question2.js:8 https://flagcdn.com/w320/ec.png
question2.js:8 https://flagcdn.com/w320/wf.png
question2.js:8 https://flagcdn.com/w320/ax.png
question2.js:8 https://flagcdn.com/w320/me.png
question2.js:8 https://flagcdn.com/w320/pk.png
question2.js:8 https://flagcdn.com/w320/pn.png
question2.js:8 https://flagcdn.com/w320/zm.png
question2.js:8 https://flagcdn.com/w320/sc.png
question2.js:8 https://flagcdn.com/w320/my.png
question2.js:8 https://flagcdn.com/w320/no.png
question2.js:8 https://flagcdn.com/w320/uz.png
question2.js:8 https://flagcdn.com/w320/vu.png
question2.js:8 https://flagcdn.com/w320/tf.png
question2.js:8 https://flagcdn.com/w320/cx.png
question2.js:8 https://flagcdn.com/w320/sg.png
question2.js:8 https://flagcdn.com/w320/sr.png
question2.js:8 https://flagcdn.com/w320/eh.png
question2.js:8 https://flagcdn.com/w320/mf.png
question2.js:8 https://flagcdn.com/w320/cr.png
question2.js:8 https://flagcdn.com/w320/hm.png
question2.js:8 https://flagcdn.com/w320/ie.png
question2.js:8 https://flagcdn.com/w320/aq.png
question2.js:8 https://flagcdn.com/w320/au.png
question2.js:8 https://flagcdn.com/w320/ly.png
question2.js:8 https://flagcdn.com/w320/qa.png
question2.js:8 https://flagcdn.com/w320/gl.png
question2.js:8 https://flagcdn.com/w320/mu.png
question2.js:8 https://flagcdn.com/w320/kz.png
question2.js:8 https://flagcdn.com/w320/io.png
question2.js:8 https://flagcdn.com/w320/al.png
question2.js:8 https://flagcdn.com/w320/bh.png
question2.js:8 https://flagcdn.com/w320/pg.png
question2.js:8 https://flagcdn.com/w320/bi.png
question2.js:8 https://flagcdn.com/w320/in.png
question2.js:8 https://flagcdn.com/w320/uy.png
question2.js:8 https://flagcdn.com/w320/lc.png
question2.js:8 https://flagcdn.com/w320/bb.png
question2.js:8 https://flagcdn.com/w320/nc.png
question2.js:8 https://flagcdn.com/w320/lv.png
question2.js:8 https://flagcdn.com/w320/ee.png
question2.js:8 https://flagcdn.com/w320/nu.png
question2.js:8 https://flagcdn.com/w320/bl.png
question2.js:8 https://flagcdn.com/w320/pr.png
question2.js:8 https://flagcdn.com/w320/gd.png
question2.js:8 https://flagcdn.com/w320/mo.png
question2.js:8 https://flagcdn.com/w320/cy.png
question2.js:8 https://flagcdn.com/w320/im.png
question2.js:8 https://flagcdn.com/w320/gr.png
question2.js:8 https://flagcdn.com/w320/sy.png
question2.js:8 https://flagcdn.com/w320/lt.png
question2.js:8 https://flagcdn.com/w320/cw.png
question2.js:8 https://flagcdn.com/w320/dm.png
question2.js:8 https://flagcdn.com/w320/ne.png
question2.js:8 https://flagcdn.com/w320/kg.png
question2.js:8 https://flagcdn.com/w320/tt.png
question2.js:8 https://flagcdn.com/w320/tg.png
question2.js:8 https://flagcdn.com/w320/ps.png
question2.js:8 https://flagcdn.com/w320/mg.png
question2.js:8 https://flagcdn.com/w320/hr.png
question2.js:8 https://flagcdn.com/w320/fo.png
question2.js:8 https://flagcdn.com/w320/ht.png
question2.js:8 https://flagcdn.com/w320/ms.png
question2.js:8 https://flagcdn.com/w320/ck.png
question2.js:8 https://flagcdn.com/w320/tl.png
question2.js:8 https://flagcdn.com/w320/mq.png
question2.js:8 https://flagcdn.com/w320/cu.png
question2.js:8 https://flagcdn.com/w320/tw.png
question2.js:8 https://flagcdn.com/w320/sz.png
question2.js:8 https://flagcdn.com/w320/ua.png
question2.js:8 https://flagcdn.com/w320/bm.png
question2.js:8 https://flagcdn.com/w320/kr.png
question2.js:8 https://flagcdn.com/w320/pe.png
question2.js:8 https://flagcdn.com/w320/iq.png
question2.js:8 https://flagcdn.com/w320/md.png
question2.js:8 https://flagcdn.com/w320/sm.png
question2.js:8 https://flagcdn.com/w320/ve.png
question2.js:8 https://flagcdn.com/w320/gy.png
question2.js:8 https://flagcdn.com/w320/ky.png
question2.js:8 https://flagcdn.com/w320/kh.png
question2.js:8 https://flagcdn.com/w320/cc.png
question2.js:8 https://flagcdn.com/w320/mt.png
question2.js:8 https://flagcdn.com/w320/lk.png
question2.js:8 https://flagcdn.com/w320/il.png
question2.js:8 https://flagcdn.com/w320/sd.png
question2.js:8 https://flagcdn.com/w320/vi.png
question2.js:8 https://flagcdn.com/w320/er.png
question2.js:8 https://flagcdn.com/w320/ml.png
question2.js:8 https://flagcdn.com/w320/so.png
question2.js:8 https://flagcdn.com/w320/nf.png
question2.js:8 https://flagcdn.com/w320/km.png
question2.js:8 https://flagcdn.com/w320/ni.png
question2.js:8 https://flagcdn.com/w320/ru.png
question2.js:8 https://flagcdn.com/w320/ug.png
question2.js:8 https://flagcdn.com/w320/nr.png
question2.js:8 https://flagcdn.com/w320/ch.png
question2.js:8 https://flagcdn.com/w320/pt.png
question2.js:8 https://flagcdn.com/w320/tj.png
question2.js:8 https://flagcdn.com/w320/ss.png
question2.js:8 https://flagcdn.com/w320/bv.png
question2.js:8 https://flagcdn.com/w320/fm.png
question2.js:8 https://flagcdn.com/w320/as.png
question2.js:8 https://flagcdn.com/w320/cz.png
question2.js:8 https://flagcdn.com/w320/bw.png
question2.js:8 https://flagcdn.com/w320/tn.png
question2.js:8 https://flagcdn.com/w320/ai.png
question2.js:8 https://flagcdn.com/w320/gw.png
question2.js:8 https://flagcdn.com/w320/sk.png
question2.js:8 https://flagcdn.com/w320/mh.png
question2.js:8 https://flagcdn.com/w320/dz.png
question2.js:8 https://flagcdn.com/w320/jm.png
question2.js:8 https://flagcdn.com/w320/mz.png
question2.js:8 https://flagcdn.com/w320/es.png
question2.js:8 https://flagcdn.com/w320/hn.png
question2.js:8 https://flagcdn.com/w320/nl.png
question2.js:8 https://flagcdn.com/w320/za.png
question2.js:8 https://flagcdn.com/w320/az.png
question2.js:8 https://flagcdn.com/w320/mk.png
question2.js:8 https://flagcdn.com/w320/gm.png
question2.js:8 https://flagcdn.com/w320/lr.png
question2.js:8 https://flagcdn.com/w320/lu.png
question2.js:8 https://flagcdn.com/w320/cv.png
question2.js:8 https://flagcdn.com/w320/bs.png
question2.js:8 https://flagcdn.com/w320/ge.png
question2.js:8 https://flagcdn.com/w320/ki.png
question2.js:8 https://flagcdn.com/w320/tz.png
question2.js:8 https://flagcdn.com/w320/cn.png
question2.js:8 https://flagcdn.com/w320/gt.png
question2.js:8 https://flagcdn.com/w320/st.png
question2.js:8 https://flagcdn.com/w320/de.png
question2.js:8 https://flagcdn.com/w320/sl.png
question2.js:8 https://flagcdn.com/w320/td.png
question2.js:8 https://flagcdn.com/w320/gb.png
question2.js:8 https://flagcdn.com/w320/si.png
question2.js:8 https://flagcdn.com/w320/th.png
question2.js:8 https://flagcdn.com/w320/id.png
question2.js:8 https://flagcdn.com/w320/mp.png
question2.js:8 https://flagcdn.com/w320/gu.png
question2.js:8 https://flagcdn.com/w320/fi.png
question2.js:8 https://flagcdn.com/w320/yt.png
question2.js:8 https://flagcdn.com/w320/gi.png
question2.js:8 https://flagcdn.com/w320/tm.png
question2.js:8 https://flagcdn.com/w320/xk.png
question2.js:8 https://flagcdn.com/w320/ci.png
question2.js:8 https://flagcdn.com/w320/ma.png
question2.js:8 https://flagcdn.com/w320/do.png
question2.js:8 https://flagcdn.com/w320/gh.png
question2.js:8 https://flagcdn.com/w320/va.png
question2.js:8 https://flagcdn.com/w320/je.png
question2.js:8 https://flagcdn.com/w320/tr.png
question2.js:8 https://flagcdn.com/w320/tv.png
question2.js:8 https://flagcdn.com/w320/ir.png
question2.js:8 https://flagcdn.com/w320/eg.png
question2.js:8 https://flagcdn.com/w320/dk.png
question2.js:8 https://flagcdn.com/w320/ke.png
question2.js:8 https://flagcdn.com/w320/bg.png
question2.js:8 https://flagcdn.com/w320/zw.png
question2.js:8 https://flagcdn.com/w320/ao.png
question2.js:8 https://flagcdn.com/w320/ng.png
question2.js:8 https://flagcdn.com/w320/pl.png
question2.js:8 https://flagcdn.com/w320/sn.png
question2.js:8 https://flagcdn.com/w320/sh.png
question2.js:8 https://flagcdn.com/w320/lb.png
question2.js:8 https://flagcdn.com/w320/ws.png
question2.js:8 https://flagcdn.com/w320/ph.png
question2.js:8 https://flagcdn.com/w320/gg.png
question2.js:8 https://flagcdn.com/w320/sv.png
question2.js:8 https://flagcdn.com/w320/kw.png
question2.js:8 https://flagcdn.com/w320/to.png
question2.js:8 https://flagcdn.com/w320/om.png
question2.js:8 https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
question2.js:8 https://flagcdn.com/w320/kn.png
question2.js:8 https://flagcdn.com/w320/cf.png
question2.js:8 https://flagcdn.com/w320/rs.png
question2.js:8 https://flagcdn.com/w320/am.png
question2.js:8 https://flagcdn.com/w320/bd.png
question2.js:8 https://flagcdn.com/w320/la.png
question2.js:8 https://flagcdn.com/w320/cl.png
question2.js:8 https://flagcdn.com/w320/pf.png
question2.js:8 https://flagcdn.com/w320/pa.png
question2.js:8 https://flagcdn.com/w320/us.png
question2.js:8 https://flagcdn.com/w320/np.png
question2.js:8 https://flagcdn.com/w320/mm.png
question2.js:8 https://flagcdn.com/w320/fk.png
question2.js:8 https://flagcdn.com/w320/hu.png
question2.js:8 https://flagcdn.com/w320/pw.png
question2.js:8 https://flagcdn.com/w320/gq.png
question2.js:8 https://flagcdn.com/w320/gn.png
question2.js:8 https://flagcdn.com/w320/ae.png
question2.js:8 https://flagcdn.com/w320/tc.png
question2.js:8 https://flagcdn.com/w320/vg.png
question2.js:8 https://flagcdn.com/w320/li.png
question2.js:8 https://flagcdn.com/w320/ba.png
question2.js:8 https://flagcdn.com/w320/mw.png
question2.js:8 https://flagcdn.com/w320/bt.png
question2.js:8 https://flagcdn.com/w320/cm.png
question2.js:8 https://flagcdn.com/w320/ad.png
question2.js:8 https://flagcdn.com/w320/gp.png
question2.js:8 https://flagcdn.com/w320/cg.png
question2.js:8 https://flagcdn.com/w320/re.png
question2.js:8 https://flagcdn.com/w320/bf.png
question2.js:8 https://flagcdn.com/w320/jo.png
question2.js:8 https://flagcdn.com/w320/cd.png
question2.js:8 https://flagcdn.com/w320/tk.png
question2.js:8 https://flagcdn.com/w320/vn.png
question2.js:8 https://flagcdn.com/w320/sx.png
question2.js:8 https://flagcdn.com/w320/be.png
question2.js:8 https://flagcdn.com/w320/um.png
question2.js:8 https://flagcdn.com/w320/br.png
question2.js:8 https://flagcdn.com/w320/bz.png
question2.js:8 https://flagcdn.com/w320/ag.png
question2.js:8 https://flagcdn.com/w320/py.png
question2.js:8 https://flagcdn.com/w320/bj.png
question2.js:8 https://flagcdn.com/w320/bn.png
question2.js:8 https://flagcdn.com/w320/bo.png
question2.js:8 https://flagcdn.com/w320/dj.png
question2.js:8 https://flagcdn.com/w320/gf.png
question2.js:8 https://flagcdn.com/w320/ca.png
question2.js:8 https://flagcdn.com/w320/pm.png
question2.js:8 https://flagcdn.com/w320/jp.png
question2.js:8 https://flagcdn.com/w320/rw.png
question2.js:8 https://flagcdn.com/w320/vc.png
question2.js:8 https://flagcdn.com/w320/is.png
question2.js:8 https://flagcdn.com/w320/by.png
question2.js:8 https://flagcdn.com/w320/hk.png
question2.js:8 https://flagcdn.com/w320/ls.png
question2.js:8 https://flagcdn.com/w320/fj.png
https://flagcdn.com/w320/at.png
https://flagcdn.com/w320/co.png
https://flagcdn.com/w320/ga.png
https://flagcdn.com/w320/sa.png
https://flagcdn.com/w320/gs.png
https://flagcdn.com/w320/et.png
https://flagcdn.com/w320/bq.png
https://flagcdn.com/w320/mc.png
https://flagcdn.com/w320/kp.png
https://flagcdn.com/w320/it.png
https://flagcdn.com/w320/na.png
https://flagcdn.com/w320/mn.png
https://flagcdn.com/w320/sb.png
https://flagcdn.com/w320/ye.png
https://flagcdn.com/w320/ro.png 
https://flagcdn.com/w320/sj.png
https://flagcdn.com/w320/fr.png */