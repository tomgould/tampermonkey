  // ==UserScript==
  // @name         Hide annoying things form your FaceBook wall
  // @namespace    http://hide.annoying.things/
  // @version      0.1
  // @description  Deleted DOM nodes from facebook containing the strings in the array
  // @match        https://www.facebook.com/
  // @copyright    2014+, Tom Gould
  // @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
  // @grant        GM_addStyle
  // ==/UserScript==
  var hideAnnoyingThingsStrings = [
    "cameron",
    "xbox",
    "playstation",
    "football",
    "poker",
    "game",
    "Apple",
    "iPhone",
    "iPad",
    "iWatch"
  ];

  var hideAnnoyingThings = function() {
      $('._4ikz').each(function() {
          var elements = $(this).find('div.mbm');
          $.each(elements, function(key, value) {
              var findings = hideAnnoyingThings_str_contains(
                      $(value).html(), hideAnnoyingThingsStrings, 0);
              if (findings !== false) {
                  $(this).remove();
                  console.log('Found a ' + findings);
              }
          });
      });
  }

  var hideAnnoyingThings_str_contains = function(haystack, needles, offset) {
      for (i = 0; i < needles.length; i++) {
          var str = needles[i].toLowerCase();
          var n = (haystack.toLowerCase() + '')
              .indexOf(str, (offset || 0));
          if (n > -1) {
              return str;
          }
      }
      return false;
  }

  window.setInterval(hideAnnoyingThings, 1000);
