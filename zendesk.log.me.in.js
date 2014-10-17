 // ==UserScript==
// @name       Zendesk Log Me In.
// @namespace  http://zendesk.log.me.in/
// @version    0.1
// @description  I hate logging in to the same things every day so I made this
// @match      https://yourdomain.zendesk.com/access/unauthenticated*
// @copyright  2012+, You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==
var zendesklogin = function () {
    $('input#user_email').val('you@emaildomain.com');
    $('input#user_password').val('Passw0rd');
    $('input#remember_me').click();
    $('input[name="commit"]').click();
} 

window.setInterval(zendesklogin, 1000);

