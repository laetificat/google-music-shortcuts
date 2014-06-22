$('*').keydown(function(event) {
    if (event.keyCode == 179) {
        $('button[data-id="play-pause"]').click();
    }
    if (event.keyCode == 176) {
        $('button[data-id="forward"]').click();
    }
    if (event.keyCode == 177) {
        $('button[data-id="rewind"]').click();
    }
});
