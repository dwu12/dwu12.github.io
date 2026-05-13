# Linux and Shell (Bash Command Line)

## File Operations

| Command | Description | Example |
|---------|-------------|---------|
| `touch filename` | Create a new file | `touch script.sh` |
| `cat file` | Print file content to stdout | `cat file.txt` |
| `rm file` | Remove a file | `rm file.txt` |
| `rm -r folder` | Remove a directory recursively | `rm -r mydir` |
| `cp src dest` | Copy file | `cp source.txt dest.txt` |
| `cp -r src dest` | Copy directory | `cp -r dir1 dir2` |
| `mv src dest` | Move/rename file | `mv old.txt new.txt` |
| `ln -s src link` | Create symbolic link | `ln -s /path/to/file link_name` |

## Directory Operations

| Command | Description | Example |
|---------|-------------|---------|
| `ls` | List files in current directory | `ls` |
| `ls -la` | List with details (hidden files) | `ls -la` |
| `mkdir dir` | Create directory | `mkdir mydir` |
| `mkdir -p dir1/dir2/dir3` | Create nested directories | `mkdir -p a/b/c` |
| `cd path` | Change directory | `cd /home/user` |
| `cd ..` | Go to parent directory | `cd ..` |
| `cd ~` or `cd` | Go to home directory | `cd ~` |
| `pwd` | Print working directory | `pwd` |

## System Info

| Command | Description | Example |
|---------|-------------|---------|
| `uname -a` | Show system information | `uname -a` |
| `cal` | Display calendar | `cal` |
| `date` | Show current date and time | `date` |
| `df -h` | Disk usage (human readable) | `df -h` |
| `du -sh path` | Show file/folder size | `du -sh /path` |
| `top` | Task manager (CPU/memory) | `top` |
| `htop` | Enhanced task manager | `htop` |

## Text Processing

| Command | Description | Example |
|---------|-------------|---------|
| `wc -l file` | Count lines in file | `wc -l file.txt` |
| `head -n file` | Show first n lines | `head -20 file.txt` |
| `tail -n file` | Show last n lines | `tail -20 file.txt` |
| `grep pattern file` | Search for pattern | `grep "error" log.txt` |
| `sort file` | Sort lines | `sort file.txt` |
| `uniq file` | Remove duplicate lines | `uniq file.txt` |

## Permissions

| Command | Description | Example |
|---------|-------------|---------|
| `chmod +x file` | Make file executable | `chmod +x script.sh` |
| `chmod 755 file` | Set permission (rwxr-xr-x) | `chmod 755 script.sh` |
| `chown user:group file` | Change ownership | `chown user:group file.txt` |

## Environment & Variables

| Command | Description | Example |
|---------|-------------|---------|
| `export VAR=value` | Set environment variable | `export PATH=/usr/bin` |
| `echo $VAR` | Print variable value | `echo $HOME` |
| `env` | Show all environment variables | `env` |
| `source file` | Execute commands from file | `source ~/.bashrc` |

## Help & Documentation

| Command | Description | Example |
|---------|-------------|---------|
| `man command` | Show command manual | `man ls` |
| `command --help` | Show help for command | `ls --help` |
| `which command` | Find command location | `which python` |
| `type command` | Show command type | `type ls` |

## Creating Bash Scripts

```bash
#!/bin/bash
# Create with: vim script.sh

# Enter insert mode with 'i'
# Save and quit: ESC then :wq

# Make executable: chmod +x script.sh
# Run script: ./script.sh
```

## Useful Tips

- `clear` - Empty terminal screen (Ctrl+L)
- `history` - Show command history
- `Ctrl+C` - Cancel current command
- `Ctrl+Z` - Suspend current command
- `Tab` - Auto-complete filenames/commands
- `↑ / ↓` - Navigate command history