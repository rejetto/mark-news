'use strict';{
    const { days, html, only } = HFS.getPluginConfig()
    const dt =days * 86400 * 1000
    const match = HFS.misc.makeMatcher(only, true)

    HFS.onEvent('afterEntryName', ({ entry }) =>
        entry.t > Date.now() - dt && match(entry.n) && html)
}
