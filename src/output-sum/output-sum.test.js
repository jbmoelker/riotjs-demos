const riot = require('riot');
const tape = require('tape');

const output = (sum) => `<output-sum><output>${sum}</output></output-sum>`;

tape('tag without options should output sum of zero', test => {
    test.plan(1);
    test.equal(riot.render('output-sum', {}), output(0));
});

tape('tag with one number should output that number', test => {
    test.plan(3);
    test.equal(riot.render('output-sum', { numbers: [1] }), output(1));
    test.equal(riot.render('output-sum', { numbers: ['2'] }), output(2)); // strings should also work
    test.equal(riot.render('output-sum', { numbers: [3.14] }), output(3.14)); // floats should also work
});

tape('tag with multiple numbers should output the sum of those number', test => {
    test.plan(3);
    test.equal(riot.render('output-sum', { numbers: [1, 2, 3] }), output(6));
    test.equal(riot.render('output-sum', { numbers: ['1', '2', '3', '4'] }), output(10)); // strings should also work
    test.equal(riot.render('output-sum', { numbers: [3.14, '4.20', 5] }), output(12.34)); // floats should also work
});
