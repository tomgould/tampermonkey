// ==UserScript==
// @name       Jenkins auto login.
// @namespace  http://jenkins.auto.login/
// @version    0.1
// @description  Automatically loggs you in to jenkins
// @match      http://my-jenkins.url/login
// @copyright  2012+, Tom Gould
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==
var jenkinslogin = function () {
    $('input[name="j_username"]').val('username');
    $('input[name="j_password"]').val('password');
    $('input#remember_me').click();
    $('#yui-gen1-button').click();
} 
 
window.setInterval(jenkinslogin, 1000);
 