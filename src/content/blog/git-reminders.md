---
title: 'Git reminders'
description: 'A friendly note to self about some super useful Git commands I use.'
pubDate: 'Sep 15 2023'
heroImage: '/blog-git-reminders.jpg'
---

This is a friendly note to self about some of the lifesaver Git commands I have been using for years, yet keep forgetting about.

## Config
---
### List Git configuration

`$ git config -l`

### Set Global Git user details

`$ git config --global user.name "Inspector Stoppard"`<br/>
`$ git config --global user.email inspector.stoppard@seehowthey.run`

## Misc
---

### Raise a branch from the dead

In case you accidentally deleted both a local branch and its remote counterpart (who hasn't done that haha), it is possible to bring it back to life. The process is explained in <a href="https://confluence.atlassian.com/bbkb/how-to-restore-a-deleted-branch-765757540.html" target="_blank">this life saver of an article (opens in a new tab)</a>.

### Change the author of a git commit

`$ git commit --amend --author="Rob Pataki <robert@robertpataki.com>" --no-edit`

### Interactively rebase the first commit

`$ git rebase -i --root`

### Switch back to previous branch

`$ git checkout -`

## Tagging
---

## List tags

`$ git tag -l`

## Create new tag

`$ git tag v1.0`

## Create & check out a new branch off a tag

`$ git checkout -b eip-hotfix/v2.272.0 tags/v2.272.0`

### Delete a tag

`$ git tag -d <tag_name>`

## Commig signing
---

### Install GPG CLI

`$ brew install gpg2`

### List GPG keys

`$ gpg --list-secret-keys --keyid-format=long`

### Export a GPG key

`$ gpg --armor --export <key>`

### Set up signing every commit globally

1. `$ git config --global user.signingkey <Key from your list>`
2. `$ git config --global gpg.program $(which gpg)`
3. `$ git config --global commit.gpgsign true`
4. `$ export GPG_TTY=$(tty)`

### Test if GPG signing works

`$ echo "test" | gpg --clearsign`

### Sign an individual commit (if not already set to globally sign)

`$ git commit -S`

`$ git  commit --amend -S`

<a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits" target="_blank">Read more about Git signing on the Github docs site (opens in a new tab)</a>.
