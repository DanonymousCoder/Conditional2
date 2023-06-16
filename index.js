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