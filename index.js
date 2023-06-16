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

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );