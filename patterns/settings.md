# Settings: explain, edit, confirm

Use when the user changes related preferences. Group by meaningful decisions, not by input type.

## Assemble

Put page identity above local navigation. Selected navigation has a persistent marker and `aria-current`; it must remain reachable on mobile. Each section has an h2, short consequence/help and a field group. On a wide screen the explanation may sit beside the fields; on narrow screens it precedes them.

Keep form content within a reading measure even if the shell is wide. Align labels, controls and help to a common rail. Pair only short related fields; long names, descriptions and permission explanations use the full field width. Use section gaps/dividers before adding cards.

Place save/cancel within the scope they affect. One form-wide footer works for a single transaction; independent section saves require independent outcome messages. Avoid repeating equally prominent Save buttons where their scope is unclear.

## State and feedback

A label is always visible. Connect helper/error text to the input. Invalid state uses `aria-invalid` and a specific correction; preserve entered values. Checkbox/radio text explains what choosing the option means. On save show pending feedback if asynchronous, prevent duplicates, then a visible announced success or recoverable failure. Do not imply persistence in a local-only example.

## Foundation mapping

Use base-4 step 2 for label/control, step 4 between paired fields and step 12 between major sections. Use body-size inputs, increasing touch-input text to a project 1rem role where needed. Keep the kit's target minimum in both densities. Use a readable control edge, separate decorative section divider, small control radius and productive state feedback.

## Acceptance

Check long helper text, an invalid email, retained input after failure, keyboard checkbox toggling, successful save and navigation at 375px. Test before/after the explanatory-aside breakpoint and 200% zoom. Compare field measure and grouping against a two-column benchmark. A shorter form is not automatically a better one; assess the same relationships.
