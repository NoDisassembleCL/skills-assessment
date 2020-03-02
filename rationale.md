# Rationale

## Assumptions
* Keep as simple as possible, target as many browsers as possible.
* Since it's a widget, assume there might be multiple per page and/or it won't be the only element on the page.
* The hidden items in the PSD (different style popup & dropdown) was _not_ part of the brief, only the visible one (since they conflict).

## Time spent
You were spot on, it took ~3 hours, with a couple extra 10 minute revisits as thoughts floated up, to get to something that was acceptable.

## Thoughts
I tried to write it so that it worked on as many browsers as it could, and could still be read and understood by any older or possibly a screen reader. The end result was probably not as fancy (especially javascript-wise) as others, but I feel the tradeoff was worth it. It also allowed me to use more pure CSS for the effects rather than relying on javascript. That is also why there is some prefixing done in the css file. I still have a hiccup where IE9 is not playing nice with its own flexbox, but I didn't feel that the time spent to debug would end up worthwhile right now.  
Little things like spacing are probably not exactly like the PSD, but I tried to stick with a nice em-based setup so it would flow and adapt as needed rather than exact pixels. I also limited the width to 500px under the assumption this was mobile-first and on desktop would probably be a pinned or floating item, otherwise would be a responsive design that would expand the items as the resolution grew.  
All in all, thanks for the challenge! It was fun and I both learned and re-remembered things that were useful for this and other projects.