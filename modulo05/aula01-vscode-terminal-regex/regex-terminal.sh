# Script for demonstrating regex and terminal commands in JavaScript projects
# Note: These commands are for Unix/Linux shells (bash). On Windows, use Git Bash, WSL or similar.

# Find all test files in the current directory and subdirectories
find . -name "*.test.js"

# Find all test files, excluding those in node_modules directories
find . -name "*.test.js" -not -path "*node_modules*"

# Find all JavaScript files, excluding those in node_modules directories
find . -name "*.js" -not -path "*node_modules*"

# Install ipt globally - ipt is an interactive terminal tool for selecting files
npm i -g ipt

# Find all JavaScript files (excluding node_modules) and pipe to ipt for interactive selection
find . -name "*.js" -not -path "*node_modules*" | ipt

# Go back to the modulo05 folder (assuming we are in a subdirectory)
# Copy to the current directory
cp -r <file> .

# ---------------------------------
# Section: Add 'use strict' to selected JavaScript files

# Define the content to add at the beginning of files
CONTENT="'use strict';"

# Find all JavaScript files (excluding node_modules), pipe to ipt for selection,
# then use xargs to apply sed to each selected file
find . -name "*.js" -not -path "*node_modules*" |\
ipt -o |\
xargs -I '{file}' sed -i "" -e '1s/^/\'$CONTENT'\
/g' {file}

# Explanation of sed command:
# 1s -> operate on the first line
# ^ -> match the beginning of the line
# replace with $CONTENT followed by a newline
# line break added implicitly

# ---------------------------------
# Alternative: Add 'use strict' to all JavaScript files without selection

# Find all JavaScript files (excluding node_modules) and add 'use strict' to each
find . -name "*.js" -not -path "*node_modules*" |\
xargs -I '{file}' sed -i "" -e '1s/^/\'$CONTENT'\
/g' {file}
