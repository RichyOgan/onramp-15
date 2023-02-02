git add => add file to staging area
to use git add, `git add <file_name>` , but if you want the current file that is open use `git add .`

to unstage => "git rm --cached <file>..."

git status => it shows the status of working directory and staging area

git commit => commit change to local repo

<!-- create a new repository in github and pushed you code to it-->
To point our local repository to github => 'git remote add origin `https://github.com/RichyOgan/onramp-15.git`

initialize our current base branch to become main: `git push -M main`

git push => push changes to remote repo
to use push command, `git push <remote_name> <branch_name>` or `git push -u origin main` or just `git push`

<!-- whenever you make change to your project, follow this process to push to github -->
`git add .`
`git commit -m 'your commit comment'`
`git push`


