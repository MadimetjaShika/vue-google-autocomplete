import Vue from 'vue';
import Vuetify from 'vuetify';
import VuetifyGoogleAutocomplete from './../../src/VuetifyGoogleAutocomplete.vue';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',

    components: { VuetifyGoogleAutocomplete },

    data: {
        vueGoogleAutocompleteLink: 'https://github.com/olefirenko/vue-google-autocomplete',
        gitHubLink: 'https://github.com/MadimetjaShika/vuetify-google-autocomplete',
        npmLink: 'https://www.npmjs.com/package/vuetify-google-autocomplete',
        address: {},
        disabled: false,
        id: 'map',
        appendIcon: 'search',
        prependIcon: '',
        callbackFunction: 'getAddressData',
        classname: '',
        placeholderText: 'Search Address',
        types: 'address',
        typesOptions: [
            'geocode',
            'address',
            'establishment',
            'regions',
            'cities',
        ],
        country: [],
        countryOptions: [
            'br',
            'sg',
            'fr',
            'za',
            'mx'
        ],
        enableGeolocation: false,
    },

    computed: {
        outputHtml: function(){
            console.log('Hello output...');
            return `<vuetify-google-autocomplete
        id="${this.id}"
        :appendIcon="${this.appendIcon}"
        :prependIcon="${this.prependIcon}"
        :classname="${this.classname}"
        :placeholder="${this.placeholderText}"
        :disabled="${this.disabled}"
        :enable-geolocation="${this.enableGeolocation}"
        :types="${this.types}"
        :country="${this.country}"
        :placechanged="${this.callbackFunction}">
</vuetify-google-autocomplete>`;
        },
    },

    methods: {
        /**
        * Callback method when the location is found.
        *
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        */
        getAddressData: function (addressData, placeResultData) {
            this.address = addressData;
        }
    }
});
