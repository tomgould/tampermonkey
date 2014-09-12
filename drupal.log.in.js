// ==UserScript==
// @name         Drupal login.
// @namespace    http://drupal.log.in/
// @version      0.1
// @description  Loggs you in to your drupal site if you're on the user page 
// @match        http://yoursite.co.uk/user
// @copyright    2012+, You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
var your_drupal_login = function () {
    $('input[name="name"]').val('username');
    $('input[name="pass"]').val('password');
    $('#edit-submit').click();
} 

your_drupal_login();
