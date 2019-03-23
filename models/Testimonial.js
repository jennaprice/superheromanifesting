let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */

let Testimonial = new keystone.List('Testimonial', {
  map: { name: 'name' },

});

Testimonial.add({
  name: { type: String, required: true },
  title: { type: String },
  detail: { type: Types.Html, wysiwyg: true, height: 150 },
});

Testimonial.defaultColumns = ' title | name ';
Testimonial.register();