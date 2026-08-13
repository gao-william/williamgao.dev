# William Gao — Cybersecurity Portfolio

A deliberately simple multi-page portfolio made with plain HTML, CSS, and JavaScript.

The shared top navigation links to Home, Projects, William's resume, GitHub, LinkedIn, and email.

## Pages

- `detection-engineering-ir-homelab.html` — segmented detection engineering and incident response homelab
- `index.html` — introduction, background, education, technical focus, and profile links
- `projects.html` — project index with short previews
- `vulnerability-assessment.html` — full Brick Wall Cyber case study
- `windows-domain-automation.html` — Windows/Linux domain services and automation case study
- `systems-security-scripting.html` — Python systems and security scripting collection
- `stack-buffer-overflow.html` — stack-based buffer overflow exploit-development case study
- `file-metadata-ledger.html` — C parser, chained history, DLL, and TCP service case study
- `systembc-malware-analysis.html` — static, dynamic, and debugger-assisted malware analysis case study
- `about.html` — preserved standalone About page (not linked in the trial navigation)

## Project content

The Projects page currently links to seven detailed write-ups, led by a detection engineering and incident response homelab. Each project has its own section navigation and automatic previous/next project links.

Profile details are populated from William's current resume, including education, expected
graduation, email, GitHub, LinkedIn, technical areas, and career focus.

Add each future project to `projects.html`, then create a separate detail page with section jump links and optional previous/next project navigation.

## Local preview

You can open `index.html` directly in a browser. If Python is installed, you can also run this command inside the folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.
