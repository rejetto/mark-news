'use strict';{
    const { days, html } = HFS.getPluginConfig()
    const dt =days * 86400 * 1000
    
    HFS.onEvent('afterEntryName', ({ entry }) =>
        entry.t > Date.now() - dt && html)
}
