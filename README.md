# GitHub Diff Manager

A tiny Chrome extension providing quality-of-life improvements for code review.

Extension setup heavily inspired by [prettier-chrome-extension](https://github.com/prettier/prettier-chrome-extension) from the Prettier team.

## Overview

When visiting the files section of a GitHub pull request (ex: https://github.com/chrissantamaria/github-diff-manager/pull/1/files), the extension checks for any valid [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) files and automatically marks them as reviewed. This prevents large snapshot diffs from potentially cluttering the page, in turn speeding up review.

This use case is very tailored for my workflow but in the future I'd like to make this fully customizable for any type of files (see below).

## Todo

- Fully handle GitHub page transitions (some SPA magic is happening preventing the content script from always running)
- Dynamic regex filename matching from config
- Visual config editor from options
- Find more elegant way of targeting filename / reviewed toggle button
- Come up with a more creative name 😅
