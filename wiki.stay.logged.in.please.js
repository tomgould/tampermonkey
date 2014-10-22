// ==UserScript==
// @name       Wiki stay logged in.
// @namespace  http://wiki.stay.logged.in.please/
// @version    0.1
// @description  enter something useful
// @match      http://mediawiki.turner.com/*
// @copyright  2012+, You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==
var wikilogin = function() {

    if ($('#pt-anonlogin > a').length > 0) {
        $('#pt-anonlogin > a')[0].click();
    }
    if ($('input#wpName1')) {
        $('input#wpName1').val('username');
        $('input#wpPassword1').val('Passw0rd');
        $('input#wpRemember').click();
        $('input[name="wpLoginattempt"]').click();
    }

}

window.setInterval(wikilogin, 500);
