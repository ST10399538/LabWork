## Reflection on Adding SSL/HTTPS

Switching the app to HTTPS didn’t really break anything, but it did mean updating links and settings to use `https://` instead of `http://`. The biggest hassle was dealing with the self-signed certificate — browsers and tools showed warnings until I manually marked it as trusted. If this were a production setup, I’d get a real certificate from a trusted authority, set up automatic renewals, and tighten the security settings. For development, though, the self-signed cert works fine and lets me test everything over SSL.
