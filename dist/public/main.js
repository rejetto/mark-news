'use strict';{
    const { days, html, only } = HFS.getPluginConfig()
    const dt =days * 86400 * 1000
    const match = HFS.misc.makeMatcher(only, true)

    HFS.onEvent('afterEntryName', ({ entry }) =>
        Math.max(entry.c||0, entry.m||0) > Date.now() - dt && match(entry.n) && html)
}
