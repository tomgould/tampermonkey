// ==UserScript==
// @name         Drupal login.
// @namespace    http://drupal.log.in/
// @version      0.1
// @description  Loggs you in to your drupal site if you're on the user page 
// @copyright    2014+, Tom Gould
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
var your_drupal_login = function() {
  var hostname = window.location.hostname.toLowerCase().replace('www.', '');
  var pathname = window.location.pathname.toLowerCase();
    
  /**
   * Sites to log in to
   */
  var drupalSites = {
    tomgould: {
      host: "tom-gould.co.uk",
      user: "Username",
      pass: "password"
    },
    drupalOrg: {
      host: "drupal.org",
      user: "Username",
      pass: "password"
    }
  };

  if (pathname === "/user") {
    for (var key in drupalSites) {
      var site = drupalSites[key];
      if (site.host === hostname && $('input[name="name"]').length) {
        var r = confirm("Do you want to log in as " + site.user + " using password " + site.pass + "?");
        if (r === true) {
            $('input[name="name"]').val(site.user);
            $('input[name="pass"]').val(site.pass);
            $('#edit-submit').click();
        } 
      }
    }
  }
};

your_drupal_login();
