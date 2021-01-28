setTimeout(() => {
  MktoForms2.loadForm("//app-ab16.marketo.com", "983-JVJ-088", 1558);
  MktoForms2.whenReady(function (form){
    //Add an onSuccess handler
     form.onSuccess(function(values, followUpUrl){
      //get the form's jQuery element and hide it
      form.getFormElem().hide();
      // original marketo
      // document.getElementById('confirmform').style.visibility = 'visible';
      document.getElementById('confirmform').setAttribute("style", "visibility:visible; display:block");
      //return false to prevent the submission handler from taking the lead to the follow up url.
      return false;
      });
   });
}, 1000);