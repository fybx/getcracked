---
title: "A Markdown post with a callout"
date: "2024-09-19"
updated: "2024-09-19"
author: 
 - "yigid balaban"
 - "there is another"
categories:
  - "meta"
  - "markdown"
coverImage: "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
---

<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

This starter includes an `Callout.svelte` component. It's not particularly useful on its own, but here's how you might use it inside of a Markdown post, thanks to mdsvex.

<Callout title="Custom title" type="note">
This is an example of the Callout.svelte component! Find it in <code>src/lib/components/Callout.svelte</code>.
</Callout>

You can inject any Svelte components you want into Markdown! Just import them in a `<script>` tag and then use them wherever you like.

For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown _inside_ Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)

