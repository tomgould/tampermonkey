// ==UserScript==
// @name         Hide My Logo.
// @namespace    http://hide.my.logo/
// @version      0.1
// @description  Hides the Tom Gould logo 
// @copyright    2014+, Tom Gould
// @match        http://tom-gould.co.uk/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
var hide_logo = function() {
  $('#header-inside-left > a > img').hide();
}
hide_logo();
