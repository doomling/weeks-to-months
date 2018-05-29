
let result = '';
let image;

function checkResult(days) {
  if (days < 35) { // 4
    result = 'menos de un mes';
    image = 'img/weeks/00.svg';
  } else if ( days >= 35 && days < 63 ) { // 5 a 9
    result = "un mes"
    image = 'img/weeks/01.svg';
  } else if ( days >= 63 && days < 91 ) { // 9 a 13
    result = "dos meses"
    image = 'img/weeks/02.svg';
  } else if ( days >= 91 && days < 126 ) { // 13 a 18
    result = "tres meses"
    image = 'img/weeks/03.svg';
  } else if ( days >= 126 && days < 154 ) { // 18 a 22
    result = "cuatro meses"
    image = 'img/weeks/04.svg';
  } else if ( days >= 154 && days < 182 ) { // 22 a 26
    result = "cinco meses"
    image = 'img/weeks/05.svg';
  } else if ( days >= 182 && days < 217 ) { // 26 a 31
    result = "seis meses"
    image = 'img/weeks/06.svg';
  } else if ( days >= 217 && days < 245 ) { // 31 a 35
    result = "siete meses"
    image = 'img/weeks/07.svg';
  } else if ( days >= 245 && days < 273 ) { // 35 a 39
    result = "ocho meses"
    image = 'img/weeks/08.svg';
  } else if ( days > 273 && days < 300) { // 40+
    result = "nueve meses"
    image = 'img/weeks/09.svg';
  } else if ( days > 300 ) { // nope
    result = "¡demasiados meses!"
    image = 'img/weeks/10.svg';
  }

  return result;
  }

$('#button').on('click', function() {

  if($('#days').val() == "") {
    $('#days').val(0);
  }

  if($('#weeks').val() == "") {
    $('#weeks').val(0);
  }

  let weeks = parseInt($('#weeks').val());
  let days = parseInt($('#days').val());

  console.log(weeks)
  console.log(days);
  console.log(weeks+days);

  // turn everything into days
  let total = (weeks * 7) + days;
  result = checkResult(total);
  $('#result').html(result);
  $('#icon').attr('src', image);
  $('#res-wrapper').removeClass('hidden').addClass('text-result');
  $('#input-wrapper').addClass('hidden').removeClass('input-wrapper');
  $('#button').addClass('hidden').removeClass('button');
  $('#renew').addClass('button').removeClass('hidden');
});

$('#renew').on('click', function() {
  location.reload();
})

$('#doomling').on('click', function() {
  $('#disclaimer').removeClass('hidden').addClass('modal');
});

$('#close').on('click', function() {
  $('#disclaimer').addClass('hidden').removeClass('modal');
})
