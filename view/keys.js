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

var showInput = false;
nodecg.listenFor('showInput', function (enabled) {
  console.log('received: '+ enabled.value)
  showInput = enabled.value;
  if (showInput)
    $('#showInput').transition({'background': 'rgba(255,255,255,0.7)', 'box-shadow':'0 8px 8px -8px black' });
  else
  {
    $('#showInput').val('');
    $('#showInput').transition({'background': 'transparent', 'box-shadow':'none' });
  }
});

var globalShift = false;

function keyDown (key) {
  // console.log(key + " Down");
  if (key == 'LShiftKey' || key == 'RShiftKey') {
    Shift(true);
  }
  if (showInput) GetKeyPress(key, globalShift);
  $('#' + key).transition({x: 1, y: 1,'background': 'white', 'box-shadow': '0 8px 5px -8px black'}, 35);
}

function keyUp (key) {
  // console.log(key + " Up");
  if (key == 'LShiftKey' || key == 'RShiftKey') {
    Shift(false);
  }
  $('#' + key).transition({x: -1, y: -1, 'box-shadow': '0 8px 8px -8px black'}, 35).transition({'background': 'rgba(255,255,255,0.7)'}, 100);
}

function Shift (pressed) {
  if (pressed) {
    globalShift = true;
    $(".normchars").css({'display':'none'});
    $(".specialchars").css({'display':'initial'});
  }
  else {
    globalShift = false;
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

var clearKeys = ['Escape','Tab','Enter'];
var modifierKeys = ['LShiftKey','RShiftKey','LControlKey','RControlKey','LMenu','RMenu','Capital'];
var specialKeys = ['1','2','3','4','5','6','7','8','9','0','OemMinus','Oemplus','Oem1','Oem7','Oemcomma','OemPeriod','OemQuestion'];

function GetKeyPress (id, shift)
{
  console.log(id + " " + shift);
  var input = $('#showInput');

  if (isInArray(id, clearKeys)) 
    input.val(''); 
  else if (id == 'Back')
  {
    input.val(input.val().slice(0,-1));
  }
  else if (isInArray(id, modifierKeys))
  {
    // do nothing, maybe show mods later???
  } 
  else if (isInArray(id, specialKeys))
  {
    if (shift) {
      input.val(input.val() + $('#' + id + " .specialchars").text());
    } else {
      input.val(input.val() + $('#' + id + " .normchars").text());
    }
  } 
  else
  {
    if (id == 'Space')
      input.val(input.val() + ' ');
    else if (shift)
      input.val(input.val() + id);
    else
        input.val(input.val() + id.toLowerCase());
  }
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

// For debug regarding opacity
$(document).click(function() {
    $("<style>body { background: gray; }</style>").appendTo("head");
});