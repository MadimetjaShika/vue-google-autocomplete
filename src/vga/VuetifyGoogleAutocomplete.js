/**
 * @module vuetify-google-autocomplete
 * @author Madimetja Shika <madi@mjshika.xyz>
 */
export default {
  /**
   * Component name. Returns 'vuetify-google-autocomplete'.
   */
  name: 'vuetify-google-autocomplete',
  /**
   * @mixin
   * @desc Exposed component props.
   */
  props: {
    /**
     * Select Address Types and Address Component Types
     * https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
     */
    addressComponents: {
      type: Object,
      default: () => ({
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        administrative_area_level_2: 'short_name',
        country: 'long_name',
        postal_code: 'short_name',
      }),
    },
    /**
     * Maps to Vuetify 'append-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.append-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    appendIcon: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'append-outer-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.append-outer-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    appendOuterIcon: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to native HTML5 autocapitalize attribute.
     *
     * @alias module:vuetify-google-autocomplete.autocapitalize
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    autocapitalize: {
      type: String,
      default: 'off',
    },
    /**
     * Maps to native HTML5 autocorrect attribute.
     *
     * @alias module:vuetify-google-autocomplete.autocorrect
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    autocorrect: {
      type: String,
      default: 'off',
    },
    /**
     * Maps to Vuetify 'autofocus' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.autofocus
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'background-color' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.background-color
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    backgroundColor: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'browser-autocomplete' prop.
     * @default 'off'
     *
     * @alias module:vuetify-google-autocomplete.props.browserAutocomplete
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    browserAutocomplete: {
      type: String,
      default: 'off',
    },
    /**
     * Maps to Vuetify 'clear-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.clear-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    clearIcon: {
      type: String,
      default: '$clear',
    },
    /**
     * Maps to Vuetify 'clearable' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.clearable
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'color' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.color
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    color: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'counter' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.counter
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|Number|String}
     */
    counter: {
      type: [Boolean, Number, String],
      default: undefined,
    },
    /**
     * Restrict the autocomplete search to a particular country or set of countries.
     *
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {String|Array}
     */
    country: {
      type: [String, Array],
      default: null,
    },
    /**
     * Maps to Vuetify 'dark' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.dark
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'dense' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.dense
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'disabled' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.disabled
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Bias the search towards user's current location.
     *
     * @alias module:vuetify-google-autocomplete.props.enable-geolocation
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {Boolean}
     */
    enableGeolocation: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'error' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.error
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    error: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'error-count' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.error-count
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    errorCount: {
      type: [Number, String],
      default: 1,
    },
    /**
     * Maps to Vuetify 'error-messages' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.error-messages
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    errorMessages: {
      type: Array,
      default: () => [],
    },
    /**
     * Maps to Vuetify 'filled' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.filled
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    filled: {
      type: Boolean,
      default: false,
    },
    /**
     * Fields to be included for the Place in the details response when the details
     * are successfully retrieved, which will be billed for.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields}
     * @type {String|Array}
     */
    fields: {
      type: [String, Array],
      default: null,
    },
    /**
     * Maps to Vuetify 'flat' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.flat
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'full-width' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.full-width
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'hide-details' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.hide-details
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    hideDetails: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'hint' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.hint
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    hint: {
      type: String,
      default: undefined,
    },
    /**
     * ID Attribute for the text field. Is required.
     *
     * @alias module:vuetify-google-autocomplete.props.id
     * @type {String}
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Maps to Vuetify 'label' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.label
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    label: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'light' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.light
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    light: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'loader-height' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.loader-height
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|String}
     */
    loaderHeight: {
      type: [Number, String],
      default: 2,
    },
    /**
     * Maps to Vuetify 'loading' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.loading
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|String}
     */
    loading: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Maps to Vuetify 'loading' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.loading
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean|String}
     */
    messages: {
      type: [String, Array],
      default: () => [],
    },
    /**
     * Maps to Vuetify 'mask' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.mask
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Object|String}
     */
    mask: {
      type: [Object, String],
      default: undefined,
    },
    /**
     * Maps to Vuetify 'no-resize' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.no-resize
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    noResize: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'outlined' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.outlined
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    outlined: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'persistent-hint' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.persistent-hint
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    persistentHint: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'placeholder' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.placeholder
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    placeholder: {
      type: String,
      default: undefined,
    },
    /**
     * Display place name when selecting a result
     *
     * @alias module:vuetify-google-autocomplete.props.placeName
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {Boolean}
     */
    placeName: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'prefix' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prefix
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    prefix: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'prepend-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prepend-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    prependIcon: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'prepend-inner-icon' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.prepend-inner-icon
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    prependIconInner: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'readonly' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.readonly
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'required' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.required
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'return-masked-value' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.return-masked-value
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    returnMaskedValue: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'reverse' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.reverse
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'rounded' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.rounded
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'rows' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.rows
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Number|String}
     */
    rows: {
      type: [Number, String],
      default: 5,
    },
    /**
     * Maps to Vuetify 'rules' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.rules
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    rules: {
      type: Array,
      default: () => [],
    },
    /**
     * Requires an address selection if the user changes the text.
     *
     * @type {Boolean}
     */
    selectionRequired: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'shaped' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.shaped
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    shaped: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'single-line' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.single-line
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    singleLine: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'solo' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.solo
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    solo: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'solo-inverted' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.solo-inverted
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    soloInverted: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to native HTML5 spellcheck attribute.
     *
     * @alias module:vuetify-google-autocomplete.props.spellcheck
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    spellcheck: {
      type: String,
      default: 'false',
    },
    /**
     * Maps to Vuetify 'suffix' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.suffix
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    suffix: {
      type: String,
      default: undefined,
    },
    /**
     * Maps to Vuetify 'success' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.success
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    success: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'success-messages' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.success-messages
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    successMessages: {
      type: [String, Array],
      default: () => [],
    },
    /**
     * Maps to Vuetify 'tabindex' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.tabindex
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {*}
     */
    tabindex: {
      default: 0,
    },
    /**
     * Maps to Vuetify 'textarea' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.textarea
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    textarea: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'toggle-keys' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.toggle-keys
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Array}
     */
    toggleKeys: {
      type: Array,
      default: () => [13, 32],
    },
    /**
     * Maps to Vuetify 'type' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.type
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Types supported in place autocomplete requests.
     *
     * @alias module:vuetify-google-autocomplete.props.types
     * @see {@link https://developers.google.com/places/supported_types#table3}
     * @see {@link https://developers.google.com/places/web-service/autocomplete}
     * @type {String}
     */
    types: {
      type: String,
      default: 'address',
    },
    /**
     * Maps to Vuetify 'validate-on-blur' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.validate-on-blur
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {Boolean}
     */
    validateOnBlur: {
      type: Boolean,
      default: false,
    },
    /**
     * Maps to Vuetify 'value' prop.
     *
     * @alias module:vuetify-google-autocomplete.props.value
     * @see {@link https://vuetifyjs.com/en/components/text-fields}
     * @type {String}
     */
    value: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  /**
   * @mixin
   * @desc See code for members.
   */
  data: () => ({
    /**
     * The Autocomplete object.
     * @access private
     * @type {Autocomplete}
     * @link https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
     */
    autocomplete: null,

    /**
     * Indicates if the Geolocate has already been set.
     * @access private
     */
    geolocateSet: false,

    /**
     * Interval for loading Google Maps.
     * @access private
     */
    loadInterval: null,

    /**
     * Global Google Maps State Watcher.
     * @access private
     */
    vgaMapState: null,

    /**
     * Identifies if user has selected an option yet.
     * @access private
     * @type {String}
     */
    lastSelectedPlace: '',
  }),
  computed: {
    rulesPlusInternalRules() {
      const enforceSelectionRequired = () => {
        if (this.selectionRequired && this.lastSelectedPlace !== this.autocompleteText) {
          return 'Please select an address from the list.';
        }

        return true;
      };

      return [...this.rules, enforceSelectionRequired];
    },
    autocompleteText: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  /**
   * @mixin
   * @desc See code for members.
   */
  methods: {
    /**
     * Called when the input gets focus
     * @access private
     */
    onFocus() {
      this.geolocate();
      this.$emit('focus');
    },

    /**
     * Called when the input loses focus
     * @access private
     */
    onBlur() {
      this.$emit('blur');
    },

    /**
     * Called when the input got changed
     * @access private
     */
    onChange() {
      this.$emit('change', this.autocompleteText);
    },

    /**
     * Called when appended icon is clicked
     * @access private
     */
    onClickAppend() {
      this.$emit('click:append');
    },

    /**
     * Called when appended outer icon is clicked
     * @access private
     */
    onClickAppendOuter() {
      this.$emit('click:append-outer');
    },

    /**
     * Called when clearable icon clicked
     * @access private
     */
    onClickClear() {
      this.$emit('click:clear');
    },

    /**
     * Called when prepended icon is clicked
     * @access private
     */
    onClickPrepend() {
      this.$emit('click:prepend');
    },

    /**
     * Called when prepended inner icon is clicked
     * @access private
     */
    onClickPrependInner() {
      this.$emit('click:prepend-inner');
    },

    /**
     * The error.sync event
     * @access private
     */
    onUpdateError() {
      this.$emit('update:error');
    },

    /**
     * Called when a key gets pressed
     * @param {Event} event A keypress event
     * @access private
     */
    onKeyPress(event) {
      this.$emit('keypress', event);
    },

    /**
     * Clear the input
     * @access private
     */
    clear() {
      this.autocompleteText = '';
      this.$refs.textField.clearableCallback();
    },

    /**
     * Focus the input
     * @access private
     */
    focus() {
      this.$refs.autocomplete.focus();
    },

    /**
     * Blur the input
     * @access private
     */
    blur() {
      this.$refs.autocomplete.blur();
    },

    /**
     * Bias the autocomplete object to the user's geographical location,
     * as supplied by the browser's 'navigator.geolocation' object.
     * @access private
     */
    geolocate() {
      if (this.enableGeolocation && !this.geolocateSet) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const circle = new window.google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy,
            });
            this.autocomplete.setBounds(circle.getBounds());
            this.geolocateSet = true;
          });
        }
      }
    },

    setupGoogle() {
      const options = {};

      if (this.types) {
        options.types = [this.types];
      }

      if (this.country) {
        options.componentRestrictions = {
          country: this.country,
        };
      }

      if (this.fields) {
        if (typeof this.fields === 'string') {
          options.fields = [this.fields];
        } else {
          options.fields = this.fields;
        }
      }

      this.autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById(this.id),
        options,
      );

      // Override the default placeholder
      // text set by Google with the
      // placeholder prop value or an empty value.
      document.getElementById(this.id).setAttribute('placeholder', this.placeholder ? this.placeholder : '');

      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace();

        // if (!place || !place.geometry) {
        if (Object.keys(place).length < 2) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          this.$emit('no-results-found', place);
          return;
        }

        const returnData = {};

        if (place.name !== undefined && this.placeName) {
          this.autocompleteText = place.name;
        } else if (place.formatted_address !== undefined) {
          this.autocompleteText = place.formatted_address;
        }

        if (place.address_components !== undefined) {
          // Get each component of the address from the place details
          for (let i = 0; i < place.address_components.length; i += 1) {
            const addressType = place.address_components[i].types[0];

            if (this.addressComponents[addressType]) {
              const val = place.address_components[i][this.addressComponents[addressType]];
              returnData[addressType] = val;
            }
          }
          if (place.geometry) {
            returnData.latitude = place.geometry.location.lat();
            returnData.longitude = place.geometry.location.lng();
          }

          // additional fields available in google places results
          if (place.name) {
            returnData.name = place.name;
          }
          if (place.photos) {
            returnData.photos = place.photos;
          }
          if (place.place_id) {
            returnData.place_id = place.place_id;
          }

          this.lastSelectedPlace = this.autocompleteText;

          // emit changed event
          this.onChange();
          // return returnData object and PlaceResult object
          this.$emit('placechanged', returnData, place, this.id);
        }
      });
    },
  },
  /**
   * @mixin
   * @desc Updates the autocompleteText member if a v-model was provided.
   */
  created() {
    this.lastSelectedPlace = this.autocompleteText;
  },
  /**
   * @mixin
   * @desc Loads the Google Autocomplete SDK.
   */
  mounted() {
    this.vgaMapState = window.vgaMapState;
    // if (Object.prototype.hasOwnProperty.call(window, 'google')
    //   && Object.prototype.hasOwnProperty.call(window, 'maps')) {
    if (Object.prototype.hasOwnProperty.call(window, 'google')) {
      // we've been here before. just need to get Autocomplete loaded
      this.setupGoogle();
    }
  },
  /**
   * @mixin
   * @desc Resets the autocomplete loaded state.
   */
  destroyed() {
    // trip this on the way out so we can differentiate return trips in mounted()
    window.vgaMapState.initMap = false;
  },
  /**
   * @mixin
   * @desc See code.
   */
  render(createElement) {
    const self = this;
    return createElement('v-text-field', {
      ref: 'textField',
      attrs: {
        id: self.id,
        name: self.id,
        autocapitalize: self.autocapitalize,
        autocorrect: self.autocorrect,
        spellcheck: self.spellcheck,
      },
      props: {
        'append-icon': self.appendIcon,
        'append-outer-icon': self.appendOuterIcon,
        autofocus: self.autofocus,
        'background-color': self.backgroundColor,
        'browser-autocomplete': self.browserAutocomplete,
        'clear-icon': self.clearIcon,
        clearable: self.clearable,
        color: self.color,
        counter: self.counter,
        dark: self.dark,
        dense: self.dense,
        disabled: self.disabled,
        error: self.error,
        'error-count': self.errorCount,
        'error-messages': self.errorMessages,
        filled: self.filled,
        flat: self.flat,
        'full-width': self.fullWidth,
        'hide-details': self.hideDetails,
        hint: self.hint,
        label: self.label,
        light: self.light,
        'loader-height': self.loaderHeight,
        loading: self.loading,
        messages: self.messages,
        mask: self.mask,
        'no-resize': self.noResize,
        outlined: self.outlined,
        'persistent-hint': self.persistentHint,
        placeholder: self.placeholder,
        prefix: self.prefix,
        'prepend-icon': self.prependIcon,
        'prepend-inner-icon': self.prependIconInner,
        readonly: self.readonly,
        required: self.required,
        'return-masked-value': self.returnMaskedValue,
        reverse: self.reverse,
        rounded: self.rounded,
        rows: self.rows,
        rules: self.rulesPlusInternalRules,
        ref: 'autocomplete',
        shaped: self.shaped,
        'single-line': self.singleLine,
        solo: self.solo,
        'solo-inverted': self.soloInverted,
        suffix: self.suffix,
        success: self.success,
        'success-messages': self.successMessages,
        tabindex: self.tabindex,
        textarea: self.textarea,
        'toggle-keys': self.toggleKeys,
        type: self.type,
        value: self.autocompleteText,
        'validate-on-blur': self.validateOnBlur,
        '@focus': self.onFocus(),
        '@blur': self.onFocus(),
        '@change': self.onChange(),
        '@click:append': self.onClickAppend(),
        '@click:append-outer': self.onClickAppendOuter(),
        '@click:clear': self.onClickClear(),
        '@click:prepend': self.onClickPrependInner(),
        '@click:prepend-inner': self.onClickPrependInner(),
        '@update:error': self.onUpdateError(),
        '@keypress': self.onKeyPress(),
      },
      domProps: {
        // value: self.autocompleteText,
      },
      on: {
        focus: () => {
          self.onFocus();
        },
        blur: () => {
          self.onBlur();
        },
        change: () => {
          self.onChange();
        },
        'click:append': () => {
          self.onClickAppend();
        },
        'click:append-outer': () => {
          self.onClickAppendOuter();
        },
        'click:clear': () => {
          self.onClickClear();
        },
        'click:prepend': () => {
          self.onClickPrepend();
        },
        'click:prepend-inner': () => {
          self.onClickPrependInner();
        },
        'update:error': () => {
          self.onUpdateError();
        },
        keypress: (e) => {
          self.onKeyPress(e.target.value);
        },
        input: (value) => {
          // NOTE: value is not an event v-text-field only raises this with the actual value
          this.autocompleteText = value;
        },
      },
    }, []);
  },
  /**
   * @mixin
   */
  watch: {
    /**
     * Update the SDK country option whenever it changes from the parent.
     */
    country: function country(newVal) {
      if (newVal) {
        this.autocomplete.componentRestrictions.country = newVal;
      }
    },

    /**
     * Update the SDK fields option whenever it changes from the parent.
     */
    fields: function fields(newVal) {
      if (newVal) {
        if (typeof newVal === 'string') {
          this.setFields([newVal]);
        } else {
          this.setFields(newVal);
        }
      }
    },

    /**
     * Watches for changes on the Geolocation option.
     */
    enableGeolocation: function enableGeolocation(newVal) {
      if (!newVal) {
        this.geolocateSet = false;
      }

      this.enableGeolocation = newVal;
    },

    'vgaMapState.initMap': function vgaMapStateInitMap(value) {
      if (value) {
        this.setupGoogle();
      }
    },

    /**
     * Update the SDK types option whenever it changes from the parent.
     */
    types: function types(newVal) {
      if (newVal) {
        this.autocomplete.setTypes([this.types]);
      }
    },
  },
};
