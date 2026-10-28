# BizCareers Website

The BizCareers landing page, Terms of Use, Privacy Policy and Delete Your Account page. Plain HTML and CSS, so there is no build step. Light by default, with a dark switch in the top bar.

## Pages

| File | What it is |
|---|---|
| `index.html` | Landing page |
| `terms.html` | Terms of Use (word for word the app's Terms) |
| `privacy.html` | Privacy Policy (the app's promises, plus what Play needs a full policy to say) |
| `delete-account.html` | How to delete an account, in the app or by email, and what is deleted |
| `404.html` | Page not found |

## Put It on GitHub Pages

1. Create a new public repository, for example `bizcareers`.
2. Upload everything in this folder, including the hidden `.nojekyll` file.
3. In the repository: Settings, Pages, Source: Deploy from a branch, Branch: `main`, Folder: `/ (root)`, Save.
4. After a minute the site is at `https://<your-username>.github.io/bizcareers/`.

## Links for Play Console

- Privacy policy: `https://<your-username>.github.io/bizcareers/privacy.html`
- Delete account: `https://<your-username>.github.io/bizcareers/delete-account.html`

## Later

- **Own address:** when jobs.bizcare.pk (or a page on the new bizcare.pk) is ready, add a `CNAME` file with that address and point the DNS at GitHub, or copy this folder to that server.
- **Share preview image:** `og:image` is a relative link because the final address is not known yet. Once it is, make it a full link (`https://.../assets/icon.png`) so WhatsApp and Facebook always show the icon.
- **Play link:** when the app is live, replace the two "Coming Soon to Google Play" badges in `index.html` with the Play Store link.

Icons are Phosphor (MIT), taken from the app's own icon font. The people photos are from Pexels (free licence, see the app's `assets/people/CREDITS.txt`).
