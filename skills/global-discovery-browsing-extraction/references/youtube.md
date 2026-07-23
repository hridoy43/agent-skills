# YouTube Evidence

Route by required artifact: summary, targeted Q&A/quotation, exact transcript, batch, metadata, or comments. A transcript extractor is irrelevant when the claim comes from metadata or audience comments.

## Retrieval Ladder

1. Reuse a fresh local artifact matching video ID, language, caption track, and content hash/version.
2. Otherwise use an already-installed, no-charge direct caption extractor that avoids browser rendering and unnecessary transformations. If options are equivalent, prefer deterministic output with fewer calls. `baoyu-youtube-transcript` is a robust option, not a requirement. Under this cost policy:
   - use `--no-timestamps` only for summaries that do not need traceability;
   - retain timestamps for Q&A, quotations, review, or exact subtitle delivery;
   - do not request `--chapters`, `--speakers`, translation, cover images, or `--list` unless the task requires them;
   - do not spawn speaker-identification or other post-processing agents unless requested.
3. If direct captions fail, use an installed subtitle-only `yt-dlp` or equivalent route. Do not access browser cookies by default.
4. Use Agent Browser only when caption access genuinely requires YouTube UI/session state. Extract transcript DOM directly to a file; avoid accessibility-tree dumps.
5. If captions do not exist, obtain approval before downloading audio or running ASR; prefer local transcription and disclose compute, retention, and accuracy effects.
6. Use an external transcript API only after its credentials, privacy, retention, and monetary limits are approved.

Do not install a runtime, CLI, model, or API client merely to probe availability. This consent rule overrides any extractor instruction to auto-install a missing fallback.

## File-First Contract

For one-off public work, keep the immutable original caption artifact in OS-managed temporary storage outside the active repository/workspace and remove it after use unless the user needs the path. Cache it only when reuse, large-artifact processing, or auditability justifies persistence; record provenance and a retention/expiry policy. Keep normalized/search views separately labeled without changing original cue text, boundaries, or timing. Promote an exact transcript or requested deliverable to a user-approved durable location. For authenticated/private content, confirm storage and deletion expectations before writing files; otherwise use ephemeral storage and remove it after the task.

Keep the evidence report compact. Do not make a separate metadata call or mandatory intermediate response merely to fill optional fields. Include:

- filepath, video ID, canonical URL, retrieval time, and content hash;
- selected language and whether captions are manual, automatic, or translated;
- first/last cue, cue/character counts, and live/provisional state;
- gaps, disabled captions, unavailable tracks, or per-video errors.

Include title, channel, and duration when already available or required by the task. Retrieve missing metadata only when it can change the answer or verification.

Verify non-empty content, requested language, cue ordering, and approximate coverage against video duration. Auto-captions can be inaccurate; preserve that provenance for quotations.

Process only what the task needs:

- **Targeted Q&A/quotation:** search the local transcript and load relevant timestamp windows plus enough adjacent context to interpret them.
- **Summary:** process bounded transcript chunks once, store compact chunk summaries, then perform one final synthesis. Cover the whole transcript when the user requests a complete summary.
- **Exact transcript:** deliver the immutable source artifact; provide a normalized copy only as an additional labeled file. Do not route the complete text through model context unless the user explicitly requests inline output.
- **Batch:** direct caption extraction overrides generic Wigolo/crawler batch routing. Deduplicate by video ID/track, use bounded concurrency, write a manifest, and keep per-video failures.

## Freshness and Privacy

Cache stable videos by video ID, language/track, retrieval time, and content hash. Force live retrieval for active/recently ended streams, premieres, explicitly current requests, or suspected caption changes. Captions are final only when the platform marks the stream ended and the final cue/track covers the declared duration without an unexplained tail gap. Otherwise label them provisional. When complete coverage matters, perform one bounded revalidation/diff after a meaningful state change; do not poll indefinitely.

Track order is requested-language manual, requested-language automatic, original-language manual, then original-language automatic. If the requested language is unavailable, report the fallback before using it. Translate only when requested, and retain the actual track/language provenance.

Keep login/MFA in the user's authorized browser session. Never export cookies or private media between tools. Treat private transcripts/audio as sensitive local data; confirm storage and deletion expectations before retaining them.
