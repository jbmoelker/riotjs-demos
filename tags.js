riot.tag2('range-slider', '<div data-slider></div>', '', '', function(opts) {
        var tag = this;
        var slider;

        tag.on('mount', createSlider);
        tag.on('update', onUpdate);

        function onUpdate() {
            createSlider();
            slider.updateOptions(sliderOptions(opts));
        }

        function createSlider () {
            if (slider) { return; }

            var element = tag.root.querySelector('[data-slider]');
            slider = window.noUiSlider.create(element, sliderOptions(opts));

            slider.on('slide', function(values, handle) {
                if (typeof opts.onSlide === 'function') {
                    opts.onSlide(values, handle);
                }
            });
            slider.on('end', function(values, handle) {
                if (typeof opts.onEnd === 'function') {
                    opts.onEnd(values, handle);
                }
            });
        }

        function sliderOptions (opts) {
            var min = toNumber(opts.min);
            var max = toNumber(opts.max);

            return {
                connect: true,
                range: { min: min, max: max },
                start: toArray(opts.values, [min, max]),
                step: toNumber(opts.step, 0)
            }
        }

        function toArray(value, defaultValue) {
            if (value) {
                return Array.isArray(value) ? value : JSON.parse(value);
            } else {
                return defaultValue;
            }
        }

        function toNumber(value, defaultValue) {
            var number = Number(value);
            var isNumber = !isNaN(number);
            return isNumber ? number : defaultValue;
        }
});
riot.tag2('todo-app', '<h3>{opts.title}</h3> <ul> <li each="{item in items}"> <label class="{completed: item.done}"> <input type="checkbox" __checked="{item.done}" onclick="{parent.toggle}"> {item.title} </label> </li> </ul> <form onsubmit="{add}"> <input name="input" value="{text}" onkeyup="{edit}"> <button __disabled="{!text}">Add #{items.length + 1}</button> </form>', '', '', function(opts) {
        var tag = this;
        this.items = opts.items || [];
        this.text = '';
        this.add = add;
        this.edit = edit;
        this.toggle = toggle;

        function add () {
            if (tag.text.length) {
                tag.items.push({ title: tag.text });
                tag.text = tag.input.value = '';
            }
        }

        function edit (event) {
            tag.text = event.target.value;
        }

        function toggle (event) {
            var item = event.item.item;
            item.done = !item.done;
            return true;
        }
});