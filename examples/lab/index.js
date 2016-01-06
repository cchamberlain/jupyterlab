// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

var phosphide = require('phosphide');
var di = require('phosphor-di');


function main() {
   phosphide.loadPlugins(new di.Container(), [
    require('phosphide/lib/appshell/plugin'),
    require('../lib/terminal/plugin'),
    require('../lib/editor/plugin'),
    require('../lib/filebrowser/plugin'),
    require('../lib/services/plugin')
  ]).then(function() {
    console.log('loading finished');
  });
}

window.onload = main;
