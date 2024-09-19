/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'getcracked'
export const siteDescription = 'Built with Svelte and love by fybalaban.'
export const siteURL = 'getcracked.wiki'
export const siteLink = 'https://getcracked.wiki/'
export const siteAuthor = 'fybalaban and tpot community'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

export const navItems = [
	{
		title: 'Articles',
		route: '/articles'
	},
  {
    title: 'Tags',
    route: '/tags'
  },
  {
		title: 'Authors',
		route: '/authors'
	},
]

export const contributeLink = 'https://github.com/fybx/getcracked'
