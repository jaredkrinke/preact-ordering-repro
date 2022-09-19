# Repro for apparent Preact order bug
Tested on 10.11.0 in MS Edge Version 105.0.1343.42 on Windows (both 64-bit). I first hit this in a large app, but was able to reduce it down to a single file with no other dependencies.

In the repro, there's a button that toggles between two different pieces of content (by toggling a state flag on a component).

When you load the page, the elements will be in the correct order. Click the button, and the content changes and is still in the correct order.

Click the button *again* and the first piece of content is shown with elements out of order.