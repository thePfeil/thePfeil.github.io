function info()
   {
     ons.notification.alert("Info", {buttonLabels:"no", title:"!!!"});
   }

   const bestaetigung = function() {
    ons.platform.select("ios");
    ons.notification.confirm("WARNING!!! YOUR PHONE HAS A VIRUS! delete now?", {buttonLabels:["no", "yes"]})
       .then(function(sch) {
         if(sch==0) ons.notification.alert("kanceled");
         else ons.notification.alert("cleaning...").then( function() {
           ons.platform.select("android");
           ons.notification.toast("THAT'S NOT REAL!!! Man... stop.", {timeout:2000})
         } );
       });
   };

   const eingabe = function() {
     ons.notification.prompt("please enter text")
       .then(function(tx) {
         if(tx=="") ons.notification.alert("no input");
         else ons.notification.alert("entered: " + tx);
       });
   };

   function toast()
   {
     ons.notification.toast("toast", {buttonLabel: "okay"});
   }
   
   const iosmode = function() {
     ons.notification.confirm("which OS?", {buttonLabels:["ios", "android"]}).then(function(sss) {
       if(sss == 0) { 
         ons.platform.select("ios");
         ons.notification.toast("ios mode", {buttonLabel: "okay"});
       } else {
         ons.platform.select("android");
         ons.notification.toast("android mode", {buttonLabel: "okay"});
       }
     });
   };


   document.getElementById("idInfo")
      .addEventListener("click", info);
   document.getElementById("idBestaetigung")
      .addEventListener("click", bestaetigung);
   document.getElementById("idEingabe")
      .addEventListener("click", eingabe);
   document.getElementById("idToast")
      .addEventListener("click", toast);
   document.getElementById("idSwitchIOS").addEventListener("click", iosmode);
