import { test } from "node:test"
import assert from "node:assert/strict"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { Footer } from "./footer.tsx"

// Real component rendering (react-dom/server executes the component) — proves the
// marketing footer mounts and renders its explore links without crashing.

test("Footer renders the Explore heading", () => {
  const html = renderToStaticMarkup(<Footer />)
  assert.match(html, /Explore/)
  assert.match(html, /private consumer finance/)
})

test("Footer renders a <footer> landmark with links", () => {
  const html = renderToStaticMarkup(<Footer />)
  assert.match(html, /<footer/)
  assert.match(html, /<a /) // at least one explore link
})

test("Footer renders the social-follow copy", () => {
  const html = renderToStaticMarkup(<Footer />)
  assert.match(html, /Follow Irion on/)
})
