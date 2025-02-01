# Git & Github<a name="git--github"></a>
>[Back to index](../README.md)
## Resources

- [youtube](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [git-scm](https://git-scm.com/doc)
- [Github training manual](training_manual.pdf)
- [Cheat sheet](github-git-cheat-sheet.pdf)
- [Cheat sheet(Chinese)](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
## index
- [Git \& Github](#git--github)
  - [Resources](#resources)
  - [index](#index)
- [What is git](#what-is-git)
- [How to start using git](#how-to-start-using-git)
  - [Create a new repository](#create-a-new-repository)
  - [Configure git](#configure-git)
  - [The .gitignore file](#the-gitignore-file)
  - [Git common commands](#git-common-commands)
    - [Make changes](#make-changes)
    - [Redo commits](#redo-commits)
- [What is GitHub](#what-is-github)
- [The usage of GitHub](#the-usage-of-github)
  - [Before start](#before-start)
  - [Common commands](#common-commands)

# What is git
Git is a distributed version control system that helps developers track changes in their codebase, __collaborate with others__, and __manage different versions of their projects__.

# How to start using git

## Create a new repository
A new repository can be created locally, or an existing one can be cloned. When a repository is initialized locally, you must push it to GitHub afterward.
>[!NOTE]
    Before initialization, the terminal should cd to the folder.
```
$ git init
```
The git init command turns an existing directory into a new Git repository inside the folder you are running this command. After using the git init command, link the local repository to an empty GitHub repository using the following command:
```
$ git remote add origin [url]
```
Specifies the remote repository for your local repository. The URL points to a repository on GitHub.
```
$ git clone [url]
```
Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits

## Configure git<a name="configure-git"></a>
Configure user information for all local repositories

```
$ git config --global user.name "[name]"
```

Sets the name you want attached to your commit transactions

```
$ git config --global user.email "[email address]"
```

Sets the email you want attached to your commit transactions

$ git config --global color.ui auto

Enables helpful colorization of the command line output


## The .gitignore file
Sometimes, it may be a good idea to **exclude files** from being tracked with Git. This is typically done in a special file named .gitignore. You can find helpful templates for .gitignore files at github.com/github/gitignore.
Here are some common file patterns to ignore:

- `*.log`: Ignore all files with the .log extension
- `build/`: Ignore all files in the build directory
- `temp*/`: Ignore any directory that starts with temp
- `**/*.tmp`: Ignore .tmp files in any directory
- `.env`: Ignore environment configuration files
- `node_modules/`: Ignore Node.js dependencies
- `.DS_Store`: Ignore Mac system files
- `*.class`: Ignore Java compiled files
- `*.pyc`: Ignore Python compiled files
- `__pycache__/`: Ignore Python cache directories
- `.vscode/`: Ignore VS Code configuration files
- `.idea/`: Ignore IntelliJ IDEA configuration files

You can create a .gitignore file in your repository's root directory and add these patterns. Each pattern should be on a new line. For example:



## Git common commands
### Make changes
Browse and inspect the evolution of project files.
```
$ git log
```
Lists version history for the current branch
```
$ git log --follow [file]
```
Lists version history for a file beyond renames (works only for a single file)
```
$ git diff [first-branch]...[second-branch]
```
Shows content differences between the two branches
```
$ git show [commit]
```
Outputs metadata and content changes of the specified commit
```
$ git add [file]
```
Snapshots of the file in preparation for versioning
```
$ git commit -m "[descriptive message]"
```
Records file snapshots permanently in version history.

### Redo commits
Erase mistakes and craft replacement history
```
$ git reset [commit]
```
Undoes all commits after [commit], preserving changes locally
```
$ git reset --hard [commit]
```
Discards all history and changes back to the specified commit

# What is GitHub
GitHub is a web-based hosting service for Git repositories. It provides a platform for developers to store, manage, track and control changes to their code. It adds many of its own features to Git, including:

- A web-based graphical interface
- Access control and collaboration features such as bug tracking, feature requests, task management
- Wikis for documentation
- Social networking aspects like followers and activity feeds
- Integration with many popular platforms and services

Key features of GitHub:

1. **Repository Hosting**: Store your Git repositories in the cloud
2. **Collaboration**: Multiple people can work on projects together
3. **Pull Requests**: Propose changes, review code, and merge changes
4. **Issues**: Track bugs and feature requests
5. **Actions**: Automate workflows and CI/CD
6. **Security**: Protect your code with features like dependency scanning
7. **Project Management**: Organize and track work with project boards
# The usage of GitHub
## Before start
Before using GitHub, you need to set up your connection to GitHub. Here's how:

1. **Create a GitHub Account**
   - Go to [GitHub.com](https://github.com) and sign up for an account
   - Choose a username, email, and password

2. **[Configure Git Locally](#configure-git)**

3. **Set Up SSH Key Authentication**
   - Generate an SSH key pair:
     ```
     $ ssh-keygen -t ed25519 -C "your.email@example.com"
     ```
   - Start the SSH agent:
     ```
     $ eval "$(ssh-agent -s)"
     ```
   - Add your SSH private key to the agent:
     ```
     $ ssh-add ~/.ssh/id_ed25519
     ```
   - Copy your public key:
     ```
     $ cat ~/.ssh/id_ed25519.pub
     ```
   - Add the SSH key to GitHub:
     - Go to GitHub Settings → SSH and GPG keys
     - Click "New SSH key"
     - Paste your public key and give it a title
     - Click "Add SSH key"

4. **Test Your SSH Connection**
   ```
   $ ssh -T git@github.com
   ```
   You should see a message confirming successful authentication.

5. **Connect Your Repository**
   >[!NOTE]
   make sure you are using ssh link to connect to github
   ```
   $ git clone git@github.com:username/repository.git
   $ git remote add origin(define by yourself) git@github.com:username/repository.git(replace with your repository path)
   ```
   Replace 'username/repository' with your actual repository path.

## Common commands
Synchronize changes
Synchronize your local repository with the remote repository on GitHub.com
```
$ git fetch
```
Downloads all history from the remote tracking branches
```
$ git merge
```
Combines remote tracking branches into current local branch
```
$ git push
```
Uploads all local branch commits to GitHub
>[!NOTE]
Make sure loacal branch is up to date with remote branch,before push.
```
$ git pull
```
>= git fetch + git merge

Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. git pull is a combination of git fetch and git merge

>[Back to top](#git--github)