(function($) {
  $( document ).ready(function() {
    if($('.gform-referral').length !== 0) {
      var formNum = $('.gform-referral').attr('id').substr(6);

      $( ".edit-link" ).click(function() {
        $('#gform_target_page_number_' + formNum).val('1');
        $('#gform_' + formNum).trigger('submit',[true]);
      });

      $('.gf_step').click(function() {
        var stepNum = $(this).attr('id').substr(-1);
        $('#gform_target_page_number_' + formNum).val(stepNum);
        $('#gform_' + formNum).trigger('submit',[true]);
      });

      $('.edit-link-mobile').click(function() {
        var stepNum = $(this).attr('id').substr(-1);
        $('#gform_target_page_number_' + formNum).val(stepNum);
        $('#gform_' + formNum).trigger('submit',[true]);
      });
    }

    // populate Primary Contact fields if Same as Patient field is checked
    function primaryFields() {
      if ( $('.field-same-as-patient input').hasClass('checked') ) {
        $('.field-primary-name .name_first input').val($('.field-patient-name .name_first input').val());
        $('.field-primary-name .name_last input').val($('.field-patient-name .name_last input').val());
        $('.field-primary-phone input').val($('.field-patient-phone input').val());
        $('.field-primary-extension input').val($('.field-patient-extension input').val());
        $('.field-primary-email input').val($('.field-patient-email input').val());
      } else {
        $('.field-primary-name input').val('');
        $('.field-primary-phone input').val('');
        $('.field-primary-extension input').val('');
        $('.field-primary-email input').val('');
      }
    }

    $('.field-patient-name input, .field-patient-phone input, .field-patient-extension input, .field-patient-email input').focusout(function() {
      if ( $('.field-same-as-patient input').hasClass('checked') ) {
        primaryFields();
      }
    });

    $('.field-same-as-patient input').click(function() {
      $('.field-same-as-patient input').toggleClass('checked');
      primaryFields();
    });

    // add required to address field sublabels
    $('.address_line_1 label, .address_city label, .address_state label, .address_zip label').append('<span class="gfield_required">*</span>')

    // hacky way to append product logo to image gallery
    setTimeout(function() {
      var thumbnails = $('.product-thumbnails');
      if(thumbnails.length > 0) {
        $( '.product-thumbnails .flickity-slider' ).append( $('.product-brand-logo') );
      } else {
        $( '.flickity-slider' ).append( $('.product-brand-logo') );
      }
    }, 500);

    // alert when going bill pay external site
    $('.link-pay-bill').click(function() {
      if (!confirm("Note: Clicking Pay My Bill will take you to another website.")) {
        return false;
      }
    });

    // open submenu when clicking parent if parent has no link
    $('.menu-item-has-children a').click(function() {
      if (!$(this).attr('href')) {
        $(this).parent().toggleClass('active');
      }
    });

  });

})( jQuery );

/**
 * Role Selector
 *
 * An IIFE that contains scripts for the Role Selector component.
 */

(function (window, document, $, undefined) {

  "user strict";

  var roleSelector = window.roleSelector = {};

  var options = window.roleSelector.options = {
      roleSelectorButtonClass: "role-selector"
    , roleSelectorMenuClass: "role-selector-menu"
    , roleSelectorMenuItemClass: "role-selector-menu-item"
    , roleSelectorMenuOpenClass: "-is-open"
  };

  var elements = window.roleSelector.elements = {
      $html: $('html')
    , $body: $('body')
    , $roleSelectorButton: $('.' + options.roleSelectorButtonClass)
    , $roleSelectorButtonText: $('.' + options.roleSelectorButtonClass + ' span')
    , $roleSelectorMenu: $('.' + options.roleSelectorMenuClass)
  };

  roleSelector.openMenu = function() {
    elements.$roleSelectorMenu.addClass(options.roleSelectorMenuOpenClass);
  };

  roleSelector.closeMenu = function() {
    elements.$roleSelectorMenu.removeClass(options.roleSelectorMenuOpenClass);
  };

  roleSelector.selectRole = function(selection) {
    var role = selection
      , roleText = $(selection).text()
      ;

    console.log(roleText);

    elements.$roleSelectorButtonText.text(roleText);

  };

  roleSelector.init = function() {

    elements.$roleSelectorButton.on('click tap', function(e) {
      e.preventDefault();
      e.stopPropagation();

      if(elements.$roleSelectorMenu.length && elements.$roleSelectorMenu.hasClass(options.roleSelectorMenuOpenClass)) {
        roleSelector.closeMenu();
      } else {
        roleSelector.openMenu();
      }
    });

    elements.$body.on('click tap', function(e) {

      if ( elements.$roleSelectorMenu.hasClass(options.roleSelectorMenuOpenClass) ) {
         roleSelector.closeMenu();
      }
    });

    elements.$roleSelectorMenu.on( 'click tap', '.' + options.roleSelectorMenuItemClass, function (e) {
      e.preventDefault();

      var selection = e.target;

      roleSelector.selectRole(selection);
    });
  };

  roleSelector.init();

} (window, document, window.jQuery));
