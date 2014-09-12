// ==UserScript==
// @name       Okta stay logged in.
// @namespace  http://okta.stay.logged.in.please/
// @version    0.1
// @description  Keeps you logged in to your Okta SSO console
// @match      https://YOURSSO.okta.com/*
// @copyright  2012+, You
// ==/UserScript==
var ssologin = function () {
    var email = document.getElementById('user-signin');
    if (email) {
        var pass = document.getElementById('pass-signin');
        var signin_button = document.getElementById('signin-button');
        email.value = 'YOUR_NAME@email.com';
        pass.value = 'PASSWORD';
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('click', true, true);
        signin_button.dispatchEvent(evt);
        console.log('Logged In');
    }
    var button = document.getElementById('session-timeout-ok');
    if (button) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('click', true, true);
        button.dispatchEvent(evt);
    }
}
window.setInterval(ssologin, 10000);