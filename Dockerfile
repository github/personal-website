FROM gitpod/workspace-full

USER gitpod
# add your tools here
RUN /home/gitpod/.rvm/bin/rvm install "ruby-2.5.1" && \
    /home/gitpod/.rvm/rubies/ruby-2.5.1/bin/gem install jekyll bundler