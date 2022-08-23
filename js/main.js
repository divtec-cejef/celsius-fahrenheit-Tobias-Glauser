/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

function convertirDegresCToF(temperature){
  'use strict';
  return temperature * 9 / 5 + 32;
}

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const temperature = Number( prompt('Température en celcius :') );

  if (isNaN(temperature)) {
    alert('Veuillez saisir une température valide');
    return;
  }
  alert(`${temperature}°C = ${convertirDegresCToF(temperature)}°F`);

  const a = 'bonjour';
  console.log(a);
}()); // Main IIFE

