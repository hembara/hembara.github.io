$(document).ready(function () {
    $(window).resize(function () {
        if(matchMedia('(max-width:767px)').matches && $("#modalQA").data('bs.modal').isShown) {
            $('.modal-mobile-header').css('display', 'block');
        } else {
            $('.modal-mobile-header').css('display', 'none');
        }
    });

    $('#roleQA').on("click", function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.open("careers/qa.html");
        } else {
            $('#modalQA').modal('show');
            autosize($('textarea'));
        }
    });
    $('#roleJavaDev').on("click", function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.open("careers/java-junior.html");
        } else {
            $('#modalJavaDev').modal('show');
            autosize($('textarea'));
        }
    });
    $('#rolePM').on("click", function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.open("careers/pm.html");
        } else {
            $('#modalPM').modal('show');
            autosize($('textarea'));
        }
    });
    $('#roleFrontEnd').on("click", function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.open("careers/front-end.html");
        } else {
            $('#modalFrontEnd').modal('show');
            autosize($('textarea'));
        }
    });

    $('#roleQA, #roleJavaDev, #rolePM, #roleFrontEnd').on("click", function () {
        if(matchMedia('(max-width:767px)').matches) {
            $('.modal-mobile-header').css('display', 'block');
        }
    });
    $('#modalCloseBtn').on("click", function () {
        $('#modalQA, #modalJavaDev, #modalPM, #modalFrontEnd').modal('hide');
        $('.modal-mobile-header').fadeOut("fast");
    });
    $('#modalQA, #modalJavaDev, #modalPM, #modalFrontEnd').on('hidden.bs.modal', function() {
        $('.modal-mobile-header').css('display', 'none');
    });
});
