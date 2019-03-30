var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].substring(1).split("=");
  paravalue=parseInt(para[1]);
}


var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexedDB is not supported");

}
var open=idb.open("storeData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function(e){
  request=e.target.result;
  store=request.createObjectStore("fromdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
  open.onerror=function(error){
    console.log("SDFsdf");
  }
    open.onsuccess=function(e){
    request=e.target.result;
    var transaction=request.transaction("fromdata","readwrite");
    store=transaction.objectStore("fromdata");
    var info=store.get(paravalue);
    info.onsuccess=function(data){
      console.log(data);
      personalinfo(data.target.result);
    }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var image=document.createElement("img");
  image.src="images/friends.svg";
  image.alt=pi.name;
  left.append(image);
  var hh=document.createElement("h2");
  hh.textContent=pi.name;
  left.append(hh);
  var hi=document.createElement("h3");
  hi.textContent=pi.phoneno;
  left.append(hi);
  var hj=document.createElement("h4");
  hj.textContent=pi.emailid;
  left.append(hj);

  // var hk=document.createElement("h5");
  // hk.textContent=pi.selectcollage;
  // left.append(hh);
  // var hl=document.createElement("h2");
  // hl.textContent=pi.selectcourse;
  // left.append(hl);
  // var right=document.querySelector(".right");
  // function personalinfo(pi){
  //   var image=document.createElement("img");
  //   image.src="images/friends.svg";
    // image.alt=pi.name;
    // left.append(image);

    var head11=document.createElement("h2");
    head11.textContent="education details";
    right.append(head11);
   var table=document.createElement("table");
   table.border="1";
   var tr1="<tr><th>institute</th><th>branch</th><th>yop</th><th>percentage</th></tr>";
   var tr2="";
   for(var i in pi.education){
     // console.log(pi.education.branch);
     tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].yop+"</td><td>"+pi.education[i].percentage+"</td></tr>"
   }
   table.innerHTML=tr1+tr2;
  right.append(table);

  var head1=document.createElement("h2");
  head1.textContent="skills";
  right.append(head1);
  var hr=document.createElement("hr");
  hr.textContent=pi.skills;
  right.append(hr);
}
