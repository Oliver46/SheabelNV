import 'bootstrap';
import '../scss/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import currentYear from "./scripts/fullYear"
import CurrentDate from "./scripts/date"
import Weather from "./scripts/weather"

new currentYear();
new CurrentDate();
new Weather();