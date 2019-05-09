workflow "Add venue information to gig issue" {
  on = "issues"
  resolves = [
    "debug",
    "Add venue information",
  ]
}

action "Not close issue" {
  uses = "actions/bin/filter@master"
  args = "not action closed"
}

action "Has article identifier" {
  uses = "actions/bin/filter@master"
  needs = ["Not close issue"]
  args = ["label", "papers"]
}

action "debug" {
  needs = ["Has article identifier"]
  uses = "actions/bin/debug@master"
}

action "Update Article Information" {
  uses = "docker://uribo/bucky"
  needs = ["Has article identifier"]
  secrets = ["GITHUB_TOKEN"]
}
