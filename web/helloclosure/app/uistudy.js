goog.provide('app.uistudy');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.ui.Button');

goog.scope(function() {
  var $ = goog.dom.getElement;
  var listen = goog.events.listen;
  var EventType = goog.events.EventType;
  var UiButton = goog.ui.Button;
  
  var okButton = new UiButton("OK");
  okButton.render($("okButton"));

  listen(
    okButton,
    EventType.CLICK,
    function(e) {
      $("message").innerHTML = $("yourName").value;
    }
  );
  
});

