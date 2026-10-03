# YouTube evidence

Route by artifact: summary, Q&A or quotes, exact transcript, batch, metadata, or comments. Metadata and comments need no transcript.

## Transcript ladder

1. Reuse a fresh local artifact matching video ID, language, track, and content hash.
2. An installed no-cost caption extractor (for example `baoyu-youtube-transcript`). Keep timestamps for Q&A, quotes, or exact delivery; drop them only for untraceable summaries. Skip chapters, speakers, translation, covers, and listing unless asked.
3. An installed subtitle-only `yt-dlp` route, without browser cookies.
4. The browser only when captions need YouTube UI or session state; write the transcript DOM to a file, no accessibility dumps.
5. No captions: ask before downloading audio or running ASR; prefer local transcription and disclose compute, retention, and accuracy.
6. External transcript APIs only after credentials, privacy, retention, and cost are approved.

Never install a runtime, CLI, or model just to probe.

## Files and processing

Keep the original caption file in OS temp storage outside the workspace; delete it after use unless the user needs it or reuse justifies a cache with provenance and expiry. Promote exact transcripts to a user-approved location. Private content: confirm storage and deletion first.

Report path, video ID, URL, retrieval time, hash, language, and manual/auto/translated track, plus gaps or provisional state. Verify non-empty content, language, cue order, and coverage against duration; label auto-captions in quotes.

- Q&A or quotes: search the file and load only the relevant timestamp windows.
- Summary: summarize bounded chunks once, then synthesize once.
- Exact transcript: deliver the original file; do not route it through context unless asked inline.
- Batch: direct caption extraction beats crawlers; dedupe by video and track, bound concurrency, keep a manifest with per-video failures.

Track order: requested-language manual, requested-language auto, original manual, original auto; report any fallback. Re-fetch live for streams, premieres, or suspected caption changes; captions are final only after the stream ends and cues cover the duration.
