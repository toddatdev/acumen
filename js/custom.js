$(document).ready(function() {
    var selected = $('.custom-select-option').val();
    if (selected == "Select Export Type"){
        $('.custom-select-option').addClass('export-type')
    }
});




$(document).ready(function() {

    $('.custom-select-option').change(function() {
        var selectedOption = $(this).find('option:selected').val();

        if (selectedOption == 'Select Export Type') {
            $(this).addClass('export-type');
        } else {
            $(this).removeClass('export-type');
            $(this).addClass('export-type-font-size');
        }

    });
});

$(document).ready(function() {
    var selectedd = $('.default-page').val();
    if (selectedd == "Default Page"){
        $('.default-page').addClass('select-option-form-color')
    }
});
$(document).ready(function() {

    $('.default-page').change(function() {
        var selectedOptions = $(this).find('option:selected').val();

        if (selectedOptions == 'Default Page') {
            $(this).addClass('select-option-form-color');
        } else {
            $(this).removeClass('select-option-form-color');
            $(this).addClass('export-type-font-size');
        }

    });
});

$(document).ready(function() {
    var report = $('.select-report').val();
    if (report == "Select Report"){
        $('.select-report').addClass('select-option-form-color')
    }
});
$(document).ready(function() {

    $('.select-report').change(function() {
        var selectedReport = $(this).find('option:selected').val();

        if (selectedReport == 'Select Report') {
            $(this).addClass('select-option-form-color');
        } else {
            $(this).removeClass('select-option-form-color');
            $(this).addClass('export-type-font-size');
        }

    });
});

$(document).ready(function() {
    var DefaultOption = $('.select-default').val();
    if (DefaultOption == "Email Address"){
        $('.select-default').addClass('select-option-form-color')
    }
});
$(document).ready(function() {

    $('.select-default').change(function() {
        var selectedDefaultOption = $(this).find('option:selected').val();

        if (selectedDefaultOption == 'Email Address') {
            $(this).addClass('select-option-form-color');
        } else {
            $(this).removeClass('select-option-form-color');
            $(this).addClass('export-type-font-size');
        }

    });
});