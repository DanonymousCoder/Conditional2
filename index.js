let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }
 else if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }let accessAllowed;
  let age = prompt('How old are you?', '');
  
  if (age > 18) {
    accessAllowed = true;
  } else {
    accessAllowed = false;
  }
  
  alert(accessAllowed);
  let age = prompt('age?', 18);

  if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }
  let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

let que = prompt ("What's the “official” name of JavaScript?");
if (que == 'EcmaScript' ) {
    alert(right);
}
else {
    alert(You don't know “ECMAScript”!);
}

let value = prompt (Input a number);
if (value > 0) {
    alert(1);
}
elseif (value < 0) {
    alert(-1);
} 
else {
  alert(0);
}
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}

let browser = prompt ("Which browser do you use");
if (browser == 'Edge' ) {
  alert("You've got the edge");
}
else if (browser == 'Chrome', 'Safari', 'Opera', 'Firefox') {
  alert("We support this browsers also");
}
else {
  alert("We hope this page looks ok");
}

let a = +prompt('a?', '');
switch (a) {
  case 'a == 0':
    alert('0');
    break;
  case 'a == 1':
    alert('1');
    break;
  case 'a == 2 || a == 3':
    alert('2,3');
}