# Huntly Community Church — Website

demo: https://logan-ctc.github.io/huntlycc/
A simple, fast, one-page website. No WordPress, no database, no monthly fees —
just static files hosted free on GitHub Pages.

## What's in here

| File / folder | What it is |
|---------------|------------|
| `index.html`  | The entire website. You rarely need to touch this. |
| `config.js`   | **The file you edit** — the notice banner + the form's email key. |
| `images/`     | Your logos (icon, full colour, white, BUV, GiveWay) + favicon + social image. |

Everything is self-contained — no links back to the old WordPress site, so nothing
breaks when you move the domain.

---

## 1. The notice banner (special services)

Open **`config.js`** and edit the `notice` block:

```js
notice: {
  enabled: true,                                   // true = show,  false = hide
  message: "Special Easter Service ...",           // the text people see
  buttonText: "Questions? Contact us",             // button label ("" hides it)
  buttonLink: "#contact"                           // where the button goes
}
```

To **turn it off**, change `enabled: true` to `enabled: false` and commit.
You can do this right on GitHub: open `config.js` → pencil icon → edit →
"Commit changes". The live site updates within a minute.

---

## 2. The contact form

Already connected. It uses **Web3Forms**, and your access key is in `config.js`:

```js
form: { web3formsAccessKey: "843851b1-43f3-4fc9-88bb-3c1e666de6f0" }
```

Submissions are emailed to the address that key is registered to — nothing is stored
on the site. Fields: **full name** (required), **phone**, **email**, **message**
(at least a phone or an email is required so you can reply).

Tip: send yourself one test message after it's live to confirm the emails arrive in
the right inbox (check spam the first time).

---

## 3. Putting it online (GitHub Pages)

1. Create a new repository on GitHub (e.g. `huntlycc`).
2. Upload **all** files, keeping the structure (`index.html`, `config.js` at the top
   level, and the `images/` folder).
3. Repo **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** → **/(root)** → Save.
4. After a minute the site is live at `https://logan-ctc.github.io/huntlycc/`.

### Pointing huntlycc.org.au at it

1. **Settings → Pages → Custom domain** → enter `huntlycc.org.au` → Save.
   (GitHub adds a `CNAME` file automatically.)
2. At your DNS provider:
   - Four `A` records for the apex `huntlycc.org.au`:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `YOUR-USERNAME.github.io`
3. Back in Pages, tick **Enforce HTTPS** once it becomes available.

> Do this when you're ready to switch away from the old WordPress site. DNS changes
> can take a few hours to fully propagate.

---

*Built as a static replacement for the previous WordPress (Neve) site.
Brand colours: slate #2c4a52 · orange #e07b2c · teal #11a597.*
