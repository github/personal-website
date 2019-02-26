# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "github-personal-website"
  spec.version       = "0.1.1"
  spec.authors       = ["Temitayo Ogunlolu"]
  spec.email         = ["temitayo094@gmail.com"]

  spec.summary       = "Temitayo Ogunlolu personal website."
  spec.homepage      = "http://temitayo.me."
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 2.0.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
