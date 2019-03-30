var request;
var store;
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
    var info=store.getAll();
    info.onsuccess=function(data){
      console.log(data.target.result);
      display(data.target.result);
    }
var parent=document.querySelector(".parent");
function display(d){
for(i=0;i<d.length;i++){

var child=document.createElement("h3");
child.classList.add("child");
var image=document.createElement("img");
image.src="images/friends.svg";
image.alt=d[i].name;

var name=document.createElement("h2");
name.textContent=d[i].name;
var link=document.createElement("a");
link.classList.add("link");
link.href="resume.html?id="+d[i].id;
link.textContent="view profile";
child.append(image);
child.append(name);
child.append(link);
parent.append(child);


// child.append(image);
// var link=document.createElement("a");
// link.classList.add("link");
// link.href="resume.html";
// child.append("link");
// var head=document.createElement("h3");
// head.innerHTML=d[i].name;
// child.append(head);
// parent.append(child);
}
}
}
