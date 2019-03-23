let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Package Model
 * ==========
 */

let Package = new keystone.List('Package', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

Package.add({
  title: { type: String, required: true },
  price: { type: String },
  tagline: { type: String },
  details: { type: Types.Html, wysiwyg: true, height: 300 },
  testimonials: { type: Types.Relationship, ref: 'Testimonial', many: true }
})