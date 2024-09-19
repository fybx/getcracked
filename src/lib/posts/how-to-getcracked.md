---
title: "How to: getcracked.wiki"
date: "2024-09-19"
author: "yigid balaban"
categories:
 - "meta"
 - "markdown"
coverImage: "/images/how-to-getcracked.png"
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates the capabilities of getcracked.wiki.
---

<script>
  import Callout from '$lib/components/Callout.svelte';
</script>

## welcome to getcracked.wiki!

Thanks for checking by, I hope you love the content. getcracked.wiki is a open community of cracked people, writing about what they're best at.

This website is powered by [SvelteKit](), and all content is stored in plain Markdown in [our GitHub repository](). This means two things:

1. you can use almost any text editor (neovim, emacs, obsidian, logseq, etc.) to create articles,
2. the data is not **trapped** anywhere, and is owned by the community.

### what it supports

We support standart Markdown: *italic*, **bold**, ***italic and bold***, <u>underlined using HTML tag</u>.

We have <sub>subscripts</sub> and <sup>superscripts</sup>. ~~Strikethrough~~, too.

> Quotes.
>
> `code in quotes`
>
> E=mc<sup>2</sup>

#### Callouts

<Callout>
An example callout. Find the source code in `$lib/components/Callout.svelte`
</Callout>

<Callout type='warning'>
With types.
</Callout>

<Callout type='caution' title='cool error'>
Even with custom titles!
</Callout>

#### Code blocks

```
Standart monospace code blocks. uses Fira Code.
```

```python
# with syntax highlighting!
print(chr(0x0D9E))
```

#### Links

[Inline links](https://example.org), or [referenced links][1].

[1]: https://example.org "Referenced link"

Also see [the source code of this page](https://github.com/fybx/getcracked/blob/main/src/lib/posts/how-to-getcracked.md).

#### Recap of this page in Markdown

```markdown
---
title: "How to: getcracked.wiki"
date: "2024-09-19"
author: "yigid balaban"
categories:
 - "meta"
 - "markdown"
excerpt: This post demonstrates the capabilities of getcracked.wiki.
---

<script>
  import Callout from '$lib/components/Callout.svelte';
</script>

## welcome to getcracked.wiki!

Thanks for checking by, I hope you love the content. getcracked.wiki is a open community of cracked people, writing about what they're best at.

This website is powered by [SvelteKit](), and all content is stored in plain Markdown in [our GitHub repository](). This means two things:

1. you can use almost any text editor (neovim, emacs, obsidian, logseq, etc.) to create articles,
2. the data is not **trapped** anywhere, and is owned by the community.

### what it supports

We support standart Markdown: *italic*, **bold**, ***italic and bold***, <u>underlined using HTML tag</u>.

We have <sub>subscripts</sub> and <sup>superscripts</sup>. ~~Strikethrough~~, too.

> Quotes.
>
> `code in quotes`
>
> E=mc<sup>2</sup>

#### Callouts

<Callout>
An example callout. Find the source code in `$lib/components/Callout.svelte`
</Callout>

<Callout type='warning'>
With types.
</Callout>

<Callout type='caution' title='cool error'>
Even with custom titles!
</Callout>

#### Code blocks

\`\`\`
Standart monospace code blocks. uses Fira Code.
\`\`\`

\`\`\`python
# with syntax highlighting!
print(chr(0x0D9E))
\`\`\`

#### Links

[Inline links](https://example.org), or [referenced links][1].

[1]: https://example.org "Referenced link"

Also see [the source code of this page](https://github.com/fybx/getcracked/blob/main/src/lib/posts/how-to-getcracked.md).
```

### Summary

Have fun!

— Yigid BALABAN
