exports.version = 1.3 // consider new keep-modified-time-uploading behaviour
exports.description = "Mark files that are newer than the configured number of days"
exports.apiRequired = 8 // getPluginConfig
exports.frontend_js = "main.js"
exports.repo = "rejetto/mark-news"
exports.changelog = [
    { "version": 1.3, "message": "Allow number of days smaller than 0.5" }
]

exports.configDialog = {
    sx: { maxWidth: '20em' },
}

exports.config = {
    days: { type: 'number', min: .01, step: .01, frontend: true, defaultValue: 7, helperText: "Enter 0.5 for 12 hours" },
    html: { label: "HTML", multiline: true, frontend: true, defaultValue: `<b>✳︎ NEW</b> &nbsp;` },
    only: { label: "Limit to some names", frontend: true, helperText: "example: *.jpg" }
}