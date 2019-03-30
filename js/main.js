function submitdata(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var phoneno=document.querySelector("#phoneno").value;
  var emailid=document.querySelector("#emailid").value;
var ginstitute=document.querySelector("#ginstitute").value;
var gbranch=document.querySelector("#gbranch").value;
var gyop=document.querySelector("#gyop").value;
var gpercentage=document.querySelector("#gpercentage").value;
var icollage=document.querySelector("#icollage").value;
var icourse=document.querySelector("#icourse").value;

var iyop=document.querySelector("#iyop").value;
var jschool=document.querySelector("#jschool").value;
var jyop=document.querySelector("#jyop").value;
var jpercentage=document.querySelector("#jpercentage").value;
var kskills=document.querySelector("#kskills").value;


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
    store.put({
      career:career,
      name:name,
      phoneno:phoneno,
      emailid:emailid,
      education:[
        {
          institute:ginstitute,
          branch:gbranch,
          yop:gyop,
          percentage:gpercentage
        },

      {
        institute:icollage,
        branch:icourse,
        yop:iyop,
          percentage:"90"
        },
        {
          institute:jschool,
          branch:"asdb",
          yop:jyop,
            percentage:jpercentage
          }
        ]

        });


}
window.open("index.html");

}
