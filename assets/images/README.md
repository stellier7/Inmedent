# Inmedent — Image Assets

Drop client media here and reference paths from `js/config.js`.

## Required client assets (replace demo files)

| File / folder | Used for | Config field |
| --- | --- | --- |
| `logo.png` or `logo.svg` | Header & footer logo | `branding.logoUrl` |
| `hero.jpg` | Hero background | `branding.heroImageUrl` |
| `dentist.jpg` | Dra. Milicen Murillo photo | `dentists[0].photoUrl` |
| `gallery/smile-01.jpg` … `smile-05.jpg` | Smile gallery | `gallery[]` |

## Already included (no action needed)

| File | Used for |
| --- | --- |
| `financing/Bac.png` | BAC financing logo |
| `financing/Ficohsa.png` | FICOHSA financing logo |

## Per-client layout

```
assets/images/
  logo.png               ← TODO: add client logo
  hero.jpg               ← TODO: replace demo hero
  dentist.jpg            ← TODO: replace with Dra. Milicen Murillo photo
  gallery/
    smile-01.jpg         ← TODO: replace with client gallery photos
    smile-02.jpg
    …
  financing/
    Bac.png              ✓ included
    Ficohsa.png          ✓ included
```

After adding files, update the matching paths in `js/config.js` if filenames differ.
