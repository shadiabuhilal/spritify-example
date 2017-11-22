#!/usr/bin/env node

/**
 * Copyright 2017, Yahoo Holdings.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

'use strict';

const Spritify = require('spritify');

const params = {
    debug: true,
    showIgnoredRules: true,
    css: [
        {
            optimize: false,
            inline: false,
            src: 'public/stylesheets/example.css',
            dest: 'build/css/example.css',
        },
        {
            optimize: true,
            inline: false,
            src: 'public/stylesheets/example.css',
            dest: 'build/css/example.optimize.css',
        },
        {
            optimize: false,
            inline: true,
            src: 'public/stylesheets/example.css',
            dest: 'build/css/example.inline.css',
        },
        {
            optimize: true,
            inline: true,
            src: 'public/stylesheets/example.css',
            dest: 'build/css/example.optimize.inline.css',
        }
    ],
    sprites: [
        {
            /* sprite */
            padding: 10,
            algorithm: 'left-right',
            src: [
                "public/images/common/1x",
                'public/images/icons'
            ],
            dest: 'build/img/sprites/sprite.png',
            relative: '../img/sprites'
        },
        {
            /* retina sprite */
            padding: 15,
            retina: 2,
            algorithm: 'top-down',
            src: [
                "public/images/common/2x",
                'public/images/icons@2x'
            ],
            dest: 'build/img/sprites/sprite@2x.png',
            relative: '../img/sprites'
        },
        {
            /* SVG sprite */
            svg: true,
            src: 'public/images/svg',
            dest: 'build/img/sprites/sprite-svg.svg',
            relative: '../img/sprites',
        }
    ]
};

Spritify.build(params, (err) => {

    if (err) {
        return;
    }

    // console.log('Done!');
});
