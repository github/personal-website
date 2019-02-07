# Personal website starter

This repository gives you the code you'll need to kickstart a personal website that showcases your work as a software developer. And when you manage the code in a GitHub repository, it will automatically render a webpage with the owner's profile information, including a photo, bio, and repositories.

Your personal website is waiting to be personalized, though. It includes space to highlight your specific areas of interest in software development, like languages or industries. And it's standing by to publish your next great blog post.

It's all possible using the combination of [Jekyll](https://jekyllrb.com/docs/) (for building your website), [GitHub Pages](https://pages.github.com/) (for hosting your website), and [GitHub's API](https://developer.github.com/v3/) (for automatically populating your website with content).

## Installation

### Fork the `github/personal-website` repo

You'll be making your own copy of the "personal website starter" repository so you have your own project to customize. A "fork" is a copy of a repository. So select "Fork" atop [the `github/personal-website` repository](https://github.com/github/personal-website).

Once you've found a home for your forked repository, it's yours. You're the owner, so you're ready to publish, if you wish.

### Install in your local development environment

Once you've found a home for your forked repository, [clone it](https://help.github.com/articles/cloning-a-repository/).

#### Install Jekyll

Jekyll is a [Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems) that can be installed on most systems.

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler](/docs/ruby-101/#bundler) [gems](/docs/ruby-101/#gems)
```
gem install jekyll bundler
```
3. Change into your new directory
```
cd personal-website
```
4. Build the site and make it available on a local server
```
bundle exec jekyll serve
```
5. Now browse to [http://localhost:4000](http://localhost:4000)

### Publish

When you host your personal website's code on GitHub, you get the support of free hosting through GitHub Pages.

**The fastest approach** is to rename your repository `username.github.io`, where `username` is your GitHub username (or organization name). Then, the next time you push any changes to your repository's `master` branch, they'll be accessible on the web at your `username.github.io` address.

**If you want to use a custom domain**, however, you'll want to add it to your repository's "Custom domain" settings on github.com. And then register and/or [configure your domain with a DNS provider](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

## Customization

It's your website, and you control the source code. So you can custom everything, if you like. But we've provided a handful of quick customizations for you to consider as you get your website off the ground.

### Quick configuration changes

Most customizations can be done in a matter of seconds, by revising your repository's `_config.yml` file. Just remember to restart your local server each time you save new changes so your Jekyll-powered website rebuilds correctly:

1. Shut down your server by entering the keyboard command <kbd>CTRL</kbd>+<kbd>c</kbd>
2. Restart your server: `jekyll serve`


#### Layout

By default, your website will display in a two-column layout on larger-screen devices, with your photo, name, and basic information displayed in a left-aligned "sidebar." But you can quickly switch to a "stacked" single-column layout by changing the line in your `_config.yml` file that reads `layout: sidebar` to `layout: stacked`.

#### Style

By default, your website appears with a "light" white and gray background, with dark text. But you can quickly switch to a "dark" background with white text by changing the line in your `_config.yml` file that reads `style: light` to `style: dark`.

#### Topics

Your website comes pre-configured with three topics (e.g. "Web design" and "Sass") that appear in a section titled "My Interests." These are also stored in your repository's `_config.yml` file, where you can define each topic's name and two other optional details:

- `web_url`: The web address you'd like to your topic to link to (e.g. `https://github.com/topics/sass`).
- `image_url`: The web address of an (ideally square) image that you'd like to appear with your topic.

### Pages and blog posts



### Content and templates

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
