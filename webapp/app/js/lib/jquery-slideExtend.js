'use strict';
jQuery.fn.extend({
  slideRightShow: function () {
    return this.each(function() {
        $(this).show('slide', {direction: 'right'}, 300);
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 300);
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 300);
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 300);
    });
  }
});