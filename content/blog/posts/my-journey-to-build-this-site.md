---
id: 1600875489466-umJDH2pDh
title: My journey to build this site
excerpt: A little story behind this site development.
date: 2020-09-23T15:38:09.614Z
author: 1599831417602-hY18hTewn
tag:
  - 1600870561511-CX1XIpt44
  - 1600870607753-_tiAcKPsd
  - 1600870516914-KqkzqXCgM
  - 1599831398813-azilg9CmV
featuredImage: uploads/georgie-cobbs-muohbrfgeqy-unsplash.jpg
---
After a lot of trial and error, I finally decided on the right stack for this site. Here's the story.

Initially this site was built in a complicated way. Using multiple APIs as data sources. Even blogs are on separate domains. Here are the details that I attached:

1. Gridsome for Jamstack
2. Buefy for components
3. The profile part is taken from Gravatar
4. Portfolios are drawn from the Laravel backend
5. The blog section is taken from Dev.to and redirected to another domain for the blog

In fact, I don't keep my portfolio and blog sections static because I want real-time data. How ridiculous I was then. The design of this site in those days was not as simple as it is now.

Until in the end I decided to make this site a full Jamstack. Here are the changes:

1. I still use Gridsome, the difference is that now I use Tailwind as the CSS framework.
2. Profiles are still drawn from gravatar.
3. The blog and portfolio sections are made static from NetlifyCMS.

Now the site design is simpler, everything is completely static. Access time is also faster.
I've also worked on some UX basics to make the site everyone-friendly. If you feel something is missing or wrong with this site, please comment below.