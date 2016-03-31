# Range slider

## Functionality

The range slider lets the user to set a numeric range by dragging a handle on a slider rail for both the start and end value.

This module uses the [noUiSlider](http://refreshless.com/nouislider/) for cross browser and touch support.

## Usage

`<range-slider>` supports the following custom tag attributes:

| attribute | type | description
| --- | --- | ---
| `min` | Number | number where range starts (lower limit).
| `max` | Number | Number where range ends (upper limit).
| `values` | Number[] *optional* | Array containing start and end value.  E.g. `values="[10, 20]"`. Defaults to `[opts.min, opts.max]`.
| `step` | Number *optional* | Number to increment / decrement values by. Defaults to 1.
| `on-slide` | Function *optional* | Function called with `(values, HANDLE)` while a user drags the start (`HANDLE == 0`) or end (`HANDLE == 1`) handle. E.g. `on-slide={ updateInputs }`, with `tag.updateInputs = (values, HANDLE) => { const value = values[HANDLE]; }`.
| `on-end` | Function *optional* | Function called with `(values, HANDLE)` when user stops dragging a handle.

For customising the slider appearance see the [Styling section in the noUiSlider docs](http://refreshless.com/nouislider/more/#section-styling).