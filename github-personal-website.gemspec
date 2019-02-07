# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "github-personal-website"
  spec.version       = "0.1.1"
  spec.authors       = ["Brandon Rosage"]
  spec.email         = ["brandonrosage@github.com"]

  spec.summary       = "Jekyll theme for software developers intered in creating a personal website."
  spec.homepage      = "http://github.dev."
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
