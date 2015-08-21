// ==UserScript==
// @name       Go Away Jenkins
// @namespace  http://Go.Away.Jenkins/
// @version    0.1
// @description  Replaces the jenkins logo on the inner pages with a smiley face
// @match      http://dev-build-01.gms.hosts.turner.co.uk:8080/*
// @copyright  2012+, Me
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant GM_addStyle
// ==/UserScript==
var goAwayJenkins = function () {
    $('#main-table').css({
        backgroundImage:"url(http://i40.tinypic.com/a1tna8.png)",
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "bottom left"
    });
} 

goAwayJenkins();


