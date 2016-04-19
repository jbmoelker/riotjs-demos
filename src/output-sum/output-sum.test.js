const riot = require('riot');
const tape = require('tape');

tape('tag without options should output sum of zero', test => {
    test.plan(1);
    test.equal(riot.render('output-sum', {}), '<output-sum><output>0</output></output-sum>');
});

tape('tag with one number should output that number', test => {
    test.plan(2);
    test.equal(riot.render('output-sum', { numbers: [1] }), '<output-sum><output>1</output></output-sum>');
    test.equal(riot.render('output-sum', { numbers: [3.14] }), '<output-sum><output>3.14</output></output-sum>');
});


