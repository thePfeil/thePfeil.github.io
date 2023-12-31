function info()
   {
     ons.notification.alert("Info", {buttonLabels:"nein", title:"!!!"});
   }

   const bestaetigung = function() {
    ons.platform.select("ios");
    ons.notification.confirm("WARNUNG!!! Ihr IOS hat einen Virus! Jetzt löschen?", {buttonLabels:["nein", "ja"]})
       .then(function(sch) {
         if(sch==0) ons.notification.alert("Abgebrohen");
         else ons.notification.alert("Reinigung wird durchgeführt...").then( function() {
           ons.platform.select("android");
           ons.notification.toast("DAS IST NICHT ECHT!!! Ernsthaft... geht gar nicht!", {timeout:2000})
         } );
       });
   };

   const eingabe = function() {
     ons.notification.prompt("Bitte eine Eingabe")
       .then(function(tx) {
         if(tx=="") ons.notification.alert("Keine Eingabe");
         else ons.notification.alert("Eingegeben: " + tx);
       });
   };

   function toast()
   {
     ons.notification.toast("Der Toast", {buttonLabel: "okay"});
   }
   
   const iosmode = function() {
     ons.notification.confirm("welche OS?", {buttonLabels:["apple allg.", "windows+linux"]}).then(function(sss) {
       if(sss == 0) { 
         ons.platform.select("ios");
         ons.notification.toast("ios modus", {buttonLabel: "okay"});
       } else {
         ons.platform.select("android");
         ons.notification.toast("android modus", {buttonLabel: "okay"});
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