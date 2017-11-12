const publicPath = getSetting({
    name: 'APP_PUBLIC_PATH',
    defaultValue: 'public',
    required: false
});

const resolvedSettings = {};

module.exports = {
    app: {
        server: getSetting('APP_SERVER'),
        name: getSetting('APP_NAME'),
        version: getSetting('APP_VERSION'),
    },
    auth: {
        appName: getSetting('APP_NAME'),
        appPassword: getSetting('APP_PASSWORD')
    },
    publicPath: () => (`/${publicPath()}`)
};

/* eslint-disable prefer-rest-params */
function getSetting({ name, defaultValue, required = true }) {
    return () => {
        const settingName = (typeof arguments[0]) === 'string'
        ? arguments[0]
        : name;

        if (resolvedSettings[settingName] !== undefined) {
            return resolvedSettings[settingName];
        }

        let settingValue = process.env[settingName] || defaultValue;
        if (required && (settingValue === undefined)) {
            throw new Error(`Config setting [${settingName}] is required!!`);
        }

        // fix for boolean values
        settingValue = settingValue === 'true' || settingValue === 'false' ? Boolean(eval(settingValue)) : settingValue; // eslint-disable-line no-eval

        resolvedSettings[settingName] = settingValue;
        return settingValue;
    };
}
/* eslint-enable */
