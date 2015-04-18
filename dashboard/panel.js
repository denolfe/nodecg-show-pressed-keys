$('#arrows').change(function() {
    nodecg.sendMessage('toggleWASD', { value: $('#arrows').is(":checked") });     
});

$('#row1').change(function() {
    console.log($('#row1').is(":checked"));
    nodecg.sendMessage('row1', { value: $('#row1').is(":checked") });     
});

$('#showInput').change(function() {
    console.log($('#showInput').is(":checked"));
    nodecg.sendMessage('showInput', { value: $('#showInput').is(":checked") });
});