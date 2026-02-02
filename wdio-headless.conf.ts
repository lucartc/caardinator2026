/// <reference types="wdio-electron-service" />
export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './test/tsconfig.json',
    
    specs: [
        './test/specs/**/*.ts'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        browserName: 'electron',
        'wdio:electronServiceOptions': {
            appBinaryPath: '/home/luca/Documents/projects/portfolio2026/caardinator/release/0.0.0/linux-unpacked/caardinator',
            appArgs: [
                '--headless',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        }
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    services: [
        ['electron', {
            autoXvfb: true
        }]
    ],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}