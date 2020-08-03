---
title: "Git - Branches Cleanup"
published: true
---

1. Use `git branch -a` to view all local and remote branches.
1. Use `git branch --merged` to view all merged local branches.
1. Use `git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d` to delete all merged branch except branches named as "master" or "dev".[\[1\]][1]
1. Use `git remote prune origin --dry-run` to view all remote branch that will be pruned by the next command.[\[2\]][2]
1. Use ` git remote prune origin` to actually prune those branches.[\[2\]][2]

# Reference
[1: How To Clean Up Git Branches by Schkn][1]

[2: Clean up your local branches after merge and delete in GitHub by Fizer Khan][2]

[1]: https://devconnected.com/how-to-clean-up-git-branches/
[2]: http://www.fizerkhan.com/blog/posts/Clean-up-your-local-branches-after-merge-and-delete-in-GitHub.html#:~:text=Prune%2FCleanup%20the%20local%20references,command%20git%20remote%20prune%20origin%20.
