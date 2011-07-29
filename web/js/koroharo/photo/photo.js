goog.provide('koroharo.photo');
(function(module) {

  module.itos = function(i, d) {
    if (!d) d = 2;
    var s = "" + i;
    while (s.length < d) {
      s = "0" + s;
    }
    return s;
  };

  module.seqnums  = function(startindex, numslength, digit) {
    var nums = [];
    for (var i = 0; i < numslength; i++) {
      nums.push(module.itos(startindex++, digit));
    }
    return nums;
  };

  var Props = function (data) {
    this.data = data;
  };
  Props.prototype.prop = function(key1) {
    var parent = this;
    return function (key2, defaultValue) {
      return parent.get(key1, key2, defaultValue);
    };
  };
  Props.prototype.get = function(key1, key2, defaultValue) {
    if (this.data.hasOwnProperty(key1) && this.data[key1].hasOwnProperty(key2)) {
      return this.data[key1][key2];
    } else {
      return defaultValue;
    }
  };
  

  module.garally = function(settings, props) {
    props = new Props(props);
    $(settings.target)
      .addClass("photo-container")
      .each(function(index, container) {

        $(settings.nums).each(function(i, num) {
          var imgname = settings.prefix + num + settings.ext;
          var prop = props.prop(imgname);
          $(container).append(
            $(document.createElement("div"))
              .attr({id: settings.prefix + num})
              .addClass("photo-cell")
              .append(
                $(document.createElement("a"))
                  .addClass("photo-link")
                  .attr({
                    href: imgname,
                    rel: settings.rel,
                    title: prop("title", "-")
                  })
                  .append(
                    $(document.createElement("img"))
                      .addClass("photo-thumbnail")
                      .attr({
                        src: settings.thumbprefix + num + settings.thumbext,
                        height: prop("thumbheight", settings.thumbheight),
                        width: prop("thumbwidth", settings.thumbwidth)
                      })
                  )
              )
              .append(
                $(document.createElement("div"))
                  .addClass("photo-text")
                  .html(prop("title", ""))
              )
          );
        });

      });

    $("a[rel='" + settings.rel + "']").colorbox({
      title: false,
      photo: false,
      current: "{current}/{total}",
      transition:"elastic",
      width:"80%",
      height:"80%"
    });
  };

})(koroharo.photo);