import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

function filterTable() {
    var countryFilter = document.getElementById('country-filter').value;
    var weightFilter = document.getElementById('weight-filter').value;
    var ratingFilter = document.getElementById('rating-filter').value;

    var table = document.getElementById('fighter-table');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var country = row.getElementsByTagName('td')[2].innerText;
        var weight = row.getElementsByTagName('td')[3].innerText;
        var rating = row.getElementsByTagName('td')[5].innerText;

        var countryMatch = countryFilter === '' || country === countryFilter;
        var weightMatch = weightFilter === '' || weight === weightFilter;
        var ratingMatch = ratingFilter === '' || parseInt(rating) >= parseInt(ratingFilter);

        if (countryMatch && weightMatch && rating ) {
            row.style.display = ''; // show the row
            } else {
            row.style.display = 'none'; // hide the row
            }
        }
    }