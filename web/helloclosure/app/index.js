goog.provide("app.index");
goog.require("goog.dom");
goog.require("goog.events");
goog.require("goog.events.EventType");

/* goog.dom   : http://closure-library.googlecode.com/svn/docs/closure_goog_dom_dom.js.html
   goog.events: http://closure-library.googlecode.com/svn/docs/closure_goog_events_events.js.html */

goog.scope(function() {
  var $ = goog.dom.getElement;
  var listen = goog.events.listen;
  var EventType = goog.events.EventType;
  listen(
    $('okButton'),
    EventType.CLICK,
    function(e) {
      $('message').innerHTML = "Helloaa, " + $('yourName').value;
    }
  );
});
