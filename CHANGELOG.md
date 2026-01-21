# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

Updated dependencies (versions) in package.json  
Dropped support for nodejs versions prior 12 see: https://nodejs.org/en/about/releases/

### Added

- No additions yet

### Fixed

- No Fixes yet

## [1.1.2] - 2026-01-21

### Added
- Added a Mermaid-based pipeline diagram documenting the data flow from source files through jsdoc2md, dmd, helpers, and partials.
- Added comprehensive unit tests for `lib/helpers/helpers.js` using `mocha` and `expect.js`.
- Added unit tests for `lib/index.js` verifying export shape, configuration semantics, and absence of side effects.
- Added explicit test coverage for the error-handling path in `helpers.sort`, including mocked `console.log`.

### Changed
- Updated header comments across JavaScript modules, including relative file paths and role descriptions.
- Updated and semantically modernized `README.md` to accurately describe the package’s purpose and integration into the dmd render pipeline.
- Clarified and refined module-level JSDoc comments, especially for `lib/index.js`, to reflect its role as a pure entry module.
- Standardized documentation style and wording across source files for long-term maintainability.

### Fixed
- Fixed missing or unclear documentation around helper responsibilities and non-responsibilities.
- Fixed incomplete test coverage for `helpers.sort` by exercising its exception-handling branch.

## [1.1.1] - 2024-07-01

Changed some developer dependencies

## [1.1.0] - 2024-07-01
- Updated dependencies (versions) in package.json
- Dropped support for nodejs versions prior 18 see: https://nodejs.org/en/about/releases/
- Changed eslint config file to flat
- Added eslint settings for vscode (using older eslint version than grunt)
- Moved 'old' (conflicting) eslint config files for vscode to .conf/vscode

## [1.0.0] - 2021-07-28

Switched to a stable major release number. No breaking changes.

### Added
- Added CHANGELOG.md

### Changed
- Switched to "stable" version 1.x
- README.md set link CHANGELOG.md
- package.json set to https://www.slashlib.org/?page_id=508

### Updates
- updated various developer dependencies
