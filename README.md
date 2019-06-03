# Expensify app
## A React practice app that focuses on
- Redux
- Jest
- Git/SSH

### SSH specific commands:
https://help.github.com/en/articles/connecting-to-github-with-ssh
```
# List ssh key
$ ls -a ~/.shh

# Generate ssh key
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Check if ssh agent is running
$ eval "$(ssh-agent -s)"

# Add ssh key to ssh-agent
$ ssh-add ~/.ssh/id_rsa

# Copy id_rsa content to clipboard
$ pbcopy < ~/.ssh/id_rsa.pub

# Add the copied content to GitHub [settings](https://github.com/settings/keys
)

# Validate SSH
ssh -T git@github.com

```

### Git related command
```
# Add remote
$ git remote add origin xxx.git

# Check remote
$ git remote -v

# Push to upstream 
$ git push -u origin master
```