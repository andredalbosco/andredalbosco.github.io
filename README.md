# Website production and drafts

The live website is https://andredalbosco.github.io/.
GitHub Pages publishes only the root of the `main` branch.

## Work on drafts

Use the `codex/drafts` branch for unfinished articles and website changes.
Its source is public on GitHub, but this branch is not deployed by GitHub Pages.

The Mac has two separate checkouts:

- Production (`main`): `/Users/dbsc/andredalbosco/andredalbosco.github.io`
- Drafts (`codex/drafts`): `/Users/dbsc/andredalbosco/andredalbosco.github.io-drafts`

Preview the draft website locally:

```sh
cd /Users/dbsc/andredalbosco/andredalbosco.github.io-drafts
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and refresh after editing. Stop the server with Ctrl+C.
This is a static HTML/CSS/JavaScript site; the preview does not render Markdown
into article pages. Markdown drafts can be read on GitHub until an article
publishing system is added.

Save work to GitHub by committing selected files on `codex/drafts` and pushing
that branch. Those pushes do not update the live website.

## Publish finished work

Publication is a deliberate step: merge approved changes into `main` and push
`main`. GitHub Pages then rebuilds the live website. If the drafts branch contains
unfinished articles, publish only the finished changes rather than merging the
whole branch.

Do not change the GitHub Pages publishing source to the drafts branch.
