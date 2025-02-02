exports.version = 1.2 // consider new keep-modified-time-uploading behaviour
exports.description = "Mark files that are newer than the configured number of days"
exports.apiRequired = 8 // getPluginConfig
exports.frontend_js = "main.js"
exports.repo = "rejetto/mark-news"

exports.configDialog = {
    sx: { maxWidth: '20em' },
}

exports.config = {
    days: { type: 'number', min: .5, step: .5, frontend: true, defaultValue: 7, },
    html: { label: "HTML", multiline: true, frontend: true, defaultValue: `<b>✳︎ NEW</b> &nbsp;` },
    only: { label: "Limit to some names", frontend: true, helperText: "example: *.jpg" }
}