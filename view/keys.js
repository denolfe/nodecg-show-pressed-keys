nodecg.listenFor('keyEvent', function (key) {
  switch (key.keyPos) {
    case 'keyDown':
      keyDown(key.keyName);
      break;
    case 'keyUp':
      keyUp(key.keyName);
      break;
  }
});

nodecg.listenFor('toggleWASD', function (toggle) {
  ToggleWASD(toggle.value);
});


nodecg.listenFor('row1', function (toggle) {
  ToggleRow1(toggle.value);
});

function keyDown (key) {
  // console.log(key + " Down");
  if (key == 'LShiftKey' || key == 'RShiftKey') {
    Shift(true);
  }
  $('#' + key).transition({x: 1, y: 1,'background': 'white', 'box-shadow': '0 8px 5px -8px black'}, 35);
}

function keyUp (key) {
  // console.log(key + " Up");
  if (key == 'LShiftKey' || key == 'RShiftKey') {
    Shift(false);
  }
  $('#' + key).transition({x: -1, y: -1, 'background': 'rgba(255,255,255,0.7)', 'box-shadow': '0 8px 8px -8px black'}, 35);
}

function Shift (pressed) {
  if (pressed) {
    $(".normchars").css({'display':'none'});
    $(".specialchars").css({'display':'initial'});
  }
  else {
    $(".specialchars").css({'display':'none'});
    $(".normchars").css({'display':'initial'});
  }
}

function ToggleWASD (enable) {
  console.log(enable);
  if (enable) {
    $('#W').html('<i class="fa fa-arrow-up"></i>');
    $('#A').html('<i class="fa fa-arrow-left"></i>');
    $('#S').html('<i class="fa fa-arrow-down"></i>');
    $('#D').html('<i class="fa fa-arrow-right"></i>');
  } else {
    $('#W').html('W');
    $('#A').html('A');
    $('#S').html('S');
    $('#D').html('D');
  }
}

function ToggleRow1 (enable) {
  console.log("row1 " + enable);
  if (enable) {
    $('.row1').css({'display':'initial'});
  } else {
    $('.row1').css({'display':'none'});
  }
}

// For debug regarding opacity
$(document).click(function() {
    $("<style>body { background: gray; }</style>").appendTo("head");
});