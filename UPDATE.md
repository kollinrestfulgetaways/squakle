# Install the expanded Squakle update

Save `squakle-expanded-birds.zip` to iSH at `/root/squakle-expanded-birds.zip`. Then run:

```sh
(
set -e
cd /root/squakle-upload
git pull --ff-only origin main
unzip -o /root/squakle-expanded-birds.zip -d .
git add app.js data.js peaks.js index.html style.css squakle-monogram.png audio README.md AUDIO-CREDITS.md audio-sources.json UPDATE.md
git commit -m "Expand Squakle to 24 bird recordings"
git -c credential.helper= push origin main
)
```

Use your GitHub username and access token if prompted. Do not enter your GitHub password. The package does not change the existing CNAME file or DNS settings. After GitHub Pages finishes deploying, close and reopen the page to load the new scripts. Audio URLs have version tags to replace cached recordings.

## What changed

- 24 recorded species, up from four. All 24 are available in Daily and Practice.
- Replacement excerpts for the original four species; 20 newly playable species.
- Clips range from 3 to 24 seconds. Six progressively longer listening stages fit each recording.
- Full sound, diet, appearance, and fact hints; regenerated waveforms.
- Per-recording author, source URL, license URL, and exact source interval.
- Midnight America/New_York reset retained, including daylight-saving changes.

## Audio review

Reviewed 52 candidate recordings. Chose openly licensed or public-domain sources, preferring source notes about one focal individual and rejecting explicit groups, simultaneous birds, or playback. Screened final excerpts with BirdNET 2.4 using complete 3-second windows with 2-second overlap. Every final excerpt passed target score >=0.70 and other-label scores <0.10. These scores are screening signals, not probabilities. Not manually auditioned by a human, and not a guarantee of one physical individual or zero background sound. See audio-sources.json for the evidence and limits.

## Verification

Passed all 24 practice rounds, complete hints and results, six increasing listening stages, audio asset decoding, source/license metadata, short-clip timers at normal and slow speed, midnight rollover, sleeping-tab recovery, and daylight-saving boundaries. Browser checks confirmed playback, shorter clips, expanded search, credits, and the existing layout.
