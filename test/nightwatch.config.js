const APP_PORT = 33668;

module.exports = {
    app_port: APP_PORT, // expose to external scripts, not used by Nightwatch
    src_folders: 'test/e2e',
    //page_objects_path: 'test/models',
    output_folder: 'test/reports',

    selenium: {
        start_process: true,
        server_path: require('selenium-server-standalone-jar').path,
        log_path: false,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver' : require('chromedriver').path
        }
    },

    test_settings: {
        default : {
            launch_url: `http://localhost:${APP_PORT}/`,
            selenium_port: 4444,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        }
    }
};
