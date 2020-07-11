$('#send').on('click', sendMessage);

// function sendMessage() {
//     if ($('textarea').val() !== '') {
//         console.log( $('textarea'.val()) );
//         $('textarea').val('');
//         var $div = $('<div>message</div>');
//         $div.addClass('my-bubble');
//         $('.chatbox').append(div);
//     } else {
//         console.log('보낼 내용이 없습니다.');
//     }
// }

function sendMessage() {
    var newMessage = $('#new-message').val();
    if (newMessage != '') {
        $('.chatbox').append('<div class="my-bubble bubble">' + newMessage + '</div>')

        $('#new-message').val('');    
    }
}