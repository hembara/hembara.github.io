(function($) {

  var providerLanding = "./healthcare-professionals/";
  var caregiverLanding = "./caregivers/";

  function createCookie(name,value,days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  function eraseCookie(name) {
      createCookie(name,"",-1);
  }

  $('.provider_user').click(function() {
    //console.log('PROVIDER');
    createCookie('user','provider',360);
    window.location.href = providerLanding;
  });

  $('.caregiver_user').click(function() {
    //console.log('CAREGIVER');
    createCookie('user','caregiver',360);
    window.location.href = caregiverLanding;
  });

  $('.header_logo, .link-home').click(function() {
    eraseCookie('user');
  });


  $('.select_user').on('change', function() {

    if(this.value === 'provider'){
      createCookie('user','provider',360);
      window.location.href = providerLanding;
    }

    if(this.value === 'caregiver'){
      createCookie('user','caregiver',360);
      window.location.href = caregiverLanding;
    }

  })



})( jQuery );
