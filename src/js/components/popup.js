$('.directions__popup').on('click', function () {
	var text = $(this).attr('data-text');
	$('#order-popup .popup__title').text(text);
	$('#order-popup input[type=hidden]').val(text);
});