require 'html-proofer'

task :test do
  sh 'bundle exec jekyll build'
  HTMLProofer.check_directories(
    ["./_site"], {
      :check_html => true,
      :assume_extension => true,
      :empty_alt_ignore => false,
    }).run
end

task default: :test
