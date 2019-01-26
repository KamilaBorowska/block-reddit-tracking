/*
 * Block Reddit Tracking
 * Copyright (C) 2019 Konrad Borowski
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function blockTracking(details) {
    console.log(details)
    if (!details.requestBody) {
        return
    }
    const decoded = new TextDecoder("utf-8").decode(details.requestBody.raw[0].bytes)
    if (['[', '{"1":', '{"time":'].some(start => decoded.startsWith(start))) {
        return { cancel: true }
    }
}

browser.webRequest.onBeforeRequest.addListener(
    blockTracking,
    { urls: ["*://*.reddit.com/*"], types: ["xmlhttprequest"] },
    ["blocking", "requestBody"]
)
