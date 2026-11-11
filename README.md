# Squakle

Daily bird-call guessing game. This upload-ready package contains the current Squakle interface, approved S-shaped bird logo, recordings, and credits. No build command, server, database, or API key is needed.

## GitHub Pages setup

1. Choose a dedicated repository named `squakle`. For a separate brand identity, create a free GitHub organization and put the repository there. A different repository also works within an existing account. Free GitHub Pages requires a public repository.
2. Extract this ZIP. Upload its CONTENTS to the repository, preserving the `audio` folder. `index.html` must be at the repository root, not inside an extra folder. Commit to `main`.
3. Open Settings > Pages. Select Deploy from a branch, then `main` and `/(root)`. Save.
4. Use the published URL shown by GitHub. Deployment can take several minutes.

GitHub's web upload accepts extracted files, not a ZIP as a deployable website. On an iPhone, use Files to extract the ZIP; a computer is usually easier for preserving the audio folder during upload.

## Connect squakle.com later

First get the default GitHub Pages URL working. Then follow GitHub's custom-domain guide. Verify domain ownership before updating DNS. Add `squakle.com` under Settings > Pages > Custom domain and use the DNS records GitHub documents for the repository owner. Do not point DNS to the repository URL or another site's IP. Enable Enforce HTTPS when GitHub makes it available. This package intentionally does not claim a custom domain before setup.

## Demo behavior

Six guesses with 2, 4, 7, 11, 17, and 24-second clips. Twelve guess choices and four recorded answers; daily answers repeat every four days and reset at midnight America/New_York. Progress and statistics stay in the current browser and hostname. Practice is unlimited and temporary. Feedback profiles are deliberately simplified. Answers are in client JavaScript; this is not cheat-resistant competitive scoring.

Share links work on both a GitHub Pages repository path and a custom domain.

## Credits

Northern Cardinal XC125284 and Mourning Dove XC128006: Jonathon Jongsma, CC BY-SA 3.0. American Robin and Blue Jay: G. McGrane, public domain. Recordings are shortened, normalized, and faded. The in-game Credits & demo details dialog links original recordings and licenses. Adapted CC BY-SA audio remains licensed CC BY-SA 3.0. Keep those credits with the recordings.

The Squakle logo is the approved S-shaped bird monogram. Fonts are loaded from Google Fonts with system fallbacks.

## Official instructions

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations

## Edit

`index.html`: layout; `style.css`: appearance; `app.js`: game logic; `data.js`: species and recording metadata; `peaks.js`: audio waveform data. `audio/` contains the bundled MP3 recordings.
