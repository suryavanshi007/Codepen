window.onload = function() {
    var d = document;
    var q = "querySelector";
    var iframe = d[q]("iframe");
    
    var totalArea = document.querySelectorAll('textarea');
    for (var i = totalArea.length - 1; i >= 0; i--) {
      if (totalArea[i].addEventListener) {
        totalArea[i].addEventListener('input', function() {
          iframe.srcdoc = totalArea[0].value + '<style>' +
          totalArea[1].value + '</style>' + '<script>' +
          totalArea[2].value + '<\/script>';
        }, false);
      } else if (totalArea[i].attachEvent) {
        totalArea[i].attachEvent('onpropertychange', function() {
          iframe.srcdoc = area[0].value + '<style>' +
          totalArea[1].value + '</style>' + '<script>' +
          totalArea[2].value + '<\/script>';
        });
      }
    }
  }