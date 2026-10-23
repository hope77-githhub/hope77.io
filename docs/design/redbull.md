---
version: alpha
name: Red Bull
description: >-
  Red Bull is a global energy drink brand that powers extreme athletes, artists, and adventurers. The design system
  reflects high-octane energy through bold typography, vivid accent colors, and a clean, athletic aesthetic that
  celebrates human performance and fearlessness.
logo:
  src: https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg
colors:
  surface: '#ffffff'
  surface-dim: '#f8f8f8'
  surface-bright: '#ffffff'
  surface-container-lowest: '#f0f0f0'
  surface-container-low: '#f5f5f5'
  surface-container: '#f8f8f8'
  surface-container-high: '#efefef'
  surface-container-highest: '#e8e8e8'
  on-surface: '#000000'
  on-surface-variant: '#4a4a4a'
  inverse-surface: '#001e3c'
  inverse-on-surface: '#ffffff'
  outline: '#000f1e'
  outline-variant: '#8e9192'
  surface-tint: '#1b6aee'
  primary: '#db0a40'
  on-primary: '#ffffff'
  primary-container: '#ff6b8a'
  on-primary-container: '#ffffff'
  inverse-primary: '#ff1744'
  secondary: '#1b6aee'
  on-secondary: '#ffffff'
  secondary-container: '#e3f0ff'
  on-secondary-container: '#1b6aee'
  tertiary: '#001e3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00162b'
  on-tertiary-container: '#ffffff'
  error: '#d32f2f'
  on-error: '#ffffff'
  error-container: '#ffcdd2'
  on-error-container: '#b71c1c'
  primary-fixed: '#ff6b8a'
  primary-fixed-dim: '#db0a40'
  on-primary-fixed: '#ffffff'
  on-primary-fixed-variant: '#ffffff'
  secondary-fixed: '#1b6aee'
  secondary-fixed-dim: '#0d47a1'
  on-secondary-fixed: '#ffffff'
  on-secondary-fixed-variant: '#ffffff'
  tertiary-fixed: '#001e3c'
  tertiary-fixed-dim: '#000f1e'
  on-tertiary-fixed: '#ffffff'
  on-tertiary-fixed-variant: '#ffffff'
  background: '#ffffff'
  on-background: '#000000'
  surface-variant: '#f5f5f5'
typography:
  display:
    fontFamily: Bull
    fontSize: 60px
    fontWeight: '800'
    lineHeight: 68px
    letterSpacing: '-0.04em'
  headline-lg:
    fontFamily: Bull
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: '-0.02em'
  headline-md:
    fontFamily: Bull
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: Bull Text
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Bull Text
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Bull Text
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Bull Text
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Bull Text
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1600px
elevation:
  sm: 0 1px 2px rgba(0, 15, 30, 0.06)
  md: 0 8px 12px rgba(0, 15, 30, 0.08)
  lg: 0 8px 16px rgba(0, 15, 30, 0.15)
layout:
  containerMaxWidth: 1600px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    fontWeight: '500'
  button-primary-hover:
    backgroundColor: '#c2073a'
    textColor: '{colors.on-primary}'
  button-primary-active:
    backgroundColor: '#a80530'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    border: 2px solid {colors.primary}
  button-secondary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary}'
  button-ghost:
    backgroundColor: rgba(0, 15, 30, 0.1)
    textColor: '{colors.tertiary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
  button-ghost-hover:
    backgroundColor: rgba(0, 15, 30, 0.15)
    textColor: '{colors.tertiary}'
  card:
    backgroundColor: '{colors.surface-container}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.md}'
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
    boxShadow: '{elevation.lg}'
  input-field:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: '{spacing.sm}'
    border: 1px solid {colors.outline-variant}
  input-field-focus:
    backgroundColor: '{colors.surface}'
    border: 2px solid {colors.secondary}
    boxShadow: inset 0 0 0 2px {colors.secondary}, 0 0 0 2px {colors.on-primary}
  badge:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
    fontWeight: '500'
  badge-secondary:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.secondary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    textColor: '{colors.on-surface}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  navigation-item:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    padding: 8px 16px
    rounded: '{rounded.DEFAULT}'
  navigation-item-active:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    fontWeight: '700'
---

## Overview

Red Bull embodies an **Athletic-Maximalist** aesthetic: bold, unapologetic, and performance-driven. The design system channels the brand's core mission to energize and inspire extreme athletes, creators, and adventurers through a visual language that is simultaneously clean and explosive. The UI celebrates motion, confidence, and human achievement—every element is purposeful, never decorative. The emotional response is one of invigoration: users feel empowered, not overwhelmed.

The brand voice is direct, energetic, and aspirational without being pretentious. Red Bull speaks in active verbs and vivid imagery: "Give your wings a workout," "Push beyond limits," "Fuel your next move." The tone avoids corporate jargon; instead, it uses athlete-speak and cultural references. Vocabulary leans toward action (accelerate, ignite, unleash) and sensory language (crisp, electric, vivid). Example sentence: "Watch the best athletes in the world defy gravity—live."

## Colors

Red Bull's color system is built on **high-contrast energy**: a pure white canvas anchors the interface, while a vivid magenta-red primary (#db0a40) acts as the electric accent that commands attention on CTAs, badges, and key interactions. This primary is the brand's signature—it appears on every call-to-action button, creating an unmistakable visual rhythm across the site. The secondary blue (#1b6aee) provides a technical, trustworthy counterpoint used for focus states, links, and secondary actions. The tertiary navy (#001e3c) grounds the system as the deep background for modals and high-contrast text overlays.

Surface colors maintain a minimalist palette: pure white (#ffffff) as the default canvas, with a subtle warm gray (#f8f8f8) for container backgrounds to provide gentle visual sepa

## Typography

The type system pairs **Bull** (a geometric, athletic display family at weights 700–800) with **Bull Text** (a humanist body family at weights 400–700), creating a dynamic contrast between headlines and body copy. Bull's condensed proportions and heavy weight convey power and speed; Bull Text's open counters and moderate x-height ensure readability at small sizes. Display (60px, weight 800, -0.04em tracking) is reserved for hero statements and major section breaks, commanding the page with its scale and weight. Headline-lg (40px, weight 700) anchors content sections; headline-md (28px, weight 700) introduces subsections. Body-lg (18px, weight 400, 28px line-height) is the default reading size, with generous line-height (1.56) to support scanning. Label-md (14px, weight 500) is used for but

## Layout

Red Bull's layout follows a **12-column fluid grid** with a maximum container width of 1600px, allowing content to breathe on ultra-wide displays while maintaining focus on smaller screens. The gutter spacing is a consistent 24px (md spacing), creating a predictable rhythm. Section separation uses lg spacing (40px) for major content blocks, md spacing (24px) for subsections, and sm spacing (12px) for component-level grouping. The white-space philosophy is generous: negative space is treated as a design element, not wasted real estate. Hero sections occupy full viewport height with centered content, while card-based layouts use a 2–3 column grid on desktop, collapsing to single-column on mobile. Container padding is always {spacing.md} (24px) on desktop, reducing to {spacing.sm} (12px) on m

## Elevation & Depth

Depth in Red Bull's system is achieved through **precise shadow layering and strategic use of background color shifts**, not through blur or glassmorphism. Level 1 (Base) is the white surface (#ffffff) with no shadow. Level 2 (Standard Card) introduces a subtle shadow: box-shadow: 0 8px 12px rgba(0, 15, 30, 0.08), paired with a light gray background (#f8f8f8) to create gentle separation. Level 3 (Elevated/Modal) uses a stronger shadow: box-shadow: 0 8px 16px rgba(0, 15, 30, 0.15), with a white background and a 1px border at rgba(0, 15, 30, 0.1) to define the edge. Focus states on interactive e

## Shapes

Red Bull employs a **Geometric-Athletic** shape philosophy: sharp, purposeful corners that convey speed and precision, paired with full-radius pill buttons that soften the interface and invite interaction. Buttons use rounded.full (9999px border-radius) to create a distinctive pill shape, reinforcing the brand's approachable yet energetic personality. Cards and containers use rounded.lg (16px) for a modern, slightly softened corner that avoids the sterility of sharp 90° angles. Input fields and smaller UI elements use rounded.DEFAULT (8px) for a balanced middle ground. The rationale: full-radi

## Components

### Action Elements
Buttons are the primary interaction mechanism and use the full-radius pill shape (border-radius: 9999px) to create a distinctive, clickable appearance. The primary button (button-primary) uses the signature red (#db0a40) background with white text, padding 12px 24px, and height 48px for comfortable touch targets. On hover, the background transitions to #c2073a (150ms cubic-bezier(0.35, 0, 0, 1)) without shadow change, maintaining visual clarity. On active/pressed state, the background darkens further to #a80530. Secondary buttons (button-secondary) use a transparent background with a 2px solid border in the primary red, allowing them to sit quietly until needed. Ghost buttons (button-ghost) use a subtle background (rgba(0, 15, 30, 0.1)) for tertiary actions, transitioni

## Do's and Don'ts

**Do**
- Do use the primary red (#db0a40) exclusively on CTAs and high-priority interactive elements—it's the brand's signature and must remain distinctive.
- Do apply the full-radius pill shape (9999px) to all primary buttons; it's instantly recognizable and reinforces the athletic, forward-moving brand personality.
- Do maintain generous white-space (lg spacing: 40px) between major content sections to allow the eye to rest and emphasize key information.
- Do use Bull (weight 700–800) for all headlines and display text; its geometric, condensed proportions are core to the brand's visual identity.
- Do apply the dual-ring focus indicator (inset 0 0 0 2px #1b6aee, 0 0 0 2px #ffffff) on all interactive elements for accessibility and visual clarity.
- Do transition button backgrounds on hover/active states using 150ms cubic-bezier(0.35, 0, 0, 1) for snappy, responsive feedback.

**Don't**
- Don't use the primary red (#db0a40) on non-interactive elements or backgrounds—it must remain reserved for CTAs to maintain visual hierarchy.
- Don't apply rounded corners sharper than 8px (rounded.DEFAULT) on any UI component; the brand requires a minimum of softness to feel approachable.
- Don't use shadows deeper than 0 8px 16px rgba(0, 15, 30, 0.15) or blur effects; Red Bull's aesthetic is crisp and athletic, not soft or ethereal.
- Don't mix Bull and Bull Text weights arbitrarily; use Bull (700–800) for headlines only and Bull Text (400–700) for body copy and UI labels.
- Don't center-align body text in multi-line paragraphs; left-aligned text improves scannability and reinforces the forward-moving, athletic aesthetic.
- Don't add decorative elements, gradients, or textures to the white surface; the brand's power comes from bold typography and high-contrast color, not ornamentation.
