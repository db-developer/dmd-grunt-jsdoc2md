/**
 *  © 2019, db-developer.
 *  Licensed under the MIT license.
 */
"use strict";

const path          = require( "path"            );
const strings       = require( "./.conf/strings" );

const env = {
  BUILDDIR:     `${ strings.BUILD }`,
  CONFDIR:      `${ strings.DOT   }${ strings.CONF }`,
  DISTDIR:      `${ strings.DIST  }`,
  LIBDIR:       path.join( `${ strings.SRC   }`, `${ strings.LIB }`     ),
  SRCDIR:       `${ strings.SRC   }`,
  STRINGS:      strings,
};

const GRUNTCONFDIR = path.join( process.cwd(), env.CONFDIR, strings.GRUNT );

module.exports = function( grunt ) {

  require( "load-grunt-config" )( grunt, { configPath: GRUNTCONFDIR, data: env });
  require( "load-grunt-tasks"  )( grunt );

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.ALL,     [ strings.BUILD, `${ strings.COPY }:deploy`, "move:distribute" ]);

  // run lint and all tests by default before packaging
  grunt.registerTask( strings.BUILD,   [ strings.BUILDRO ]);

  grunt.registerTask( strings.BUILDWP, [ strings.ESLINT, `${ strings.CLEAN }:build`, strings.MKDIR,
                                         `${ strings.COPY }:build`, strings.JSONFILE,
                                         "webpack:build", "shell:npm_pack" ]);

  grunt.registerTask( strings.BUILDRO, [ strings.ESLINT, `${ strings.CLEAN }:build`, strings.MKDIR,
                                         `${ strings.COPY }:build`, strings.JSONFILE,
                                         "rollup:build", "shell:npm_pack" ]);

  // run default
  grunt.registerTask( strings.DEFAULT, [ strings.ALL ]);

  // run deploy
  grunt.registerTask( strings.DEPLOY,  [ strings.TEST, strings.BUILD,`${ strings.COPY }:deploy` ]);

  // run dist
  grunt.registerTask( strings.DIST,    [ strings.TEST, strings.BUILD, "move:distribute" ]);

};
