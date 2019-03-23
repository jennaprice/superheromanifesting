let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Manifestation Model
 * ==========
 */

let Manifestation = new keystone.List('Manifestation', {
  map: { name: 'title' },

});
Manifestation.add({
  title: { type: String, required: true },
  which: { type: Types.Select, options: 'personal, client', default: 'personal' },
  detail: { type: Types.Html, wysiwyg: true, height: 150 },
  //name: { type: String, required: true },

});