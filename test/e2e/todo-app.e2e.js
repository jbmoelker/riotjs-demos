const todo1 = 'demo:nth-child(1) todo-app'; // use to do app in first demo

module.exports = {
    before: (browser) => browser.url(`${browser.launchUrl}src/todo-app/todo-app.demo.html`),
    after:  (browser) => browser.end(),

    'Create empty todo list' : (browser) => browser
        .waitForElementVisible(todo1, 1000)
        .assert.containsText(todo1, 'Groceries')
        .assert.elementNotPresent(`${todo1} li`),

    'Add new todo item': (browser) => browser
        .setValue(`${todo1} input[value="{text}"]`, 'Apples')
        .click(`${todo1} button`)
        .assert.containsText(`${todo1} li`, 'Apples')
        .assert.cssClassNotPresent(`${todo1} label`, 'completed'),

    'Complete the new item': (browser) => browser
        .click(`${todo1} input[type="checkbox"]`)
        .assert.cssClassPresent(`${todo1} label`, 'completed')
        .assert.cssProperty(`${todo1} label`, 'text-decoration', 'line-through'),

    'Restore the new item': (browser) => browser
        .click(`${todo1} label`) // clicking should work on both checkbox and label
        .assert.cssClassNotPresent(`${todo1} label`, 'completed')
        .assert.cssProperty(`${todo1} label`, 'text-decoration', 'none')
};