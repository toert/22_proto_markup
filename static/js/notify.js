
if(document.URL.indexOf("index.html") >= 0) { var notify = $.notify(
{
	// options
	icon: 'glyphicon glyphicon-map-marker',
	message: 'Ваш регион: Новосибирск?',
	url: '#',
	target: '_blank'
},{
	// settings
	element: 'nav',
	position: null,
	type: "info",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "left"
	},
	offset: {
    x: 20,
    y: 50
  },
	spacing: 10,
	z_index: 1031,
	delay: 1000,
	timer: 100000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInDown',
		exit: 'animated fadeOutUp'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
		'<span data-notify="icon"></span> ' +
		'<span data-notify="title">{1}</span> ' +
		'<span data-notify="message">{2}</span>' +
        '<div class="text-center">' + 
                '<a class="btn btn-info btn-sm" id="yes_btn">ДА</a>' + '  ' + 
                '<a class="btn btn-info btn-sm" id="no_btn">НЕТ</a>' + 
            '</div>' +
		'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
		'</div>' +
		'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>' 
});
                                              };

$( "#yes_btn" ).click(function() {
  notify.close();
});

$( "#no_btn" ).click(function(open_select_region){
    open_select_region.stopPropagation();
    $('#region').dropdown('toggle');
    notify.close();
    return false;
  });
