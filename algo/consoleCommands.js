// time:  O(n)
// space: O(n), where n is number of unique files

function processCommands(commands) {
    const fileSystem = {}; // Keeps track of directories and their files
    let currentDirectory = null;

    for (let command of commands) {
        const [action, name] = command.split(' ');

        if (action === 'cd') {
            currentDirectory = name;
            // Initialize the directory in the file system if it doesn't exist
            if (!fileSystem[currentDirectory]) {
                fileSystem[currentDirectory] = new Set();
            }
        } else if (action === 'touch' && currentDirectory) {
            // Add the file to the current directory if it doesn't exist already
            fileSystem[currentDirectory].add(name);
        }
    }

    // Find the directory with the most files
    let maxFiles = 0;
    let maxDirectory = '';
    for (let [directory, files] of Object.entries(fileSystem)) {
        if (files.size > maxFiles) {
            maxFiles = files.size;
            maxDirectory = directory;
        }
    }

    return maxDirectory;
}

// Example test case
const commands = [
  "cd dir1",
  "touch fileA",
  "cd dir2",
  "touch fileB",
  "touch fileB",
  "cd dir1",
  "touch fileC"
];
console.log(processCommands(commands)); // Output should be "dir1"

// time:  O(n)
// space: O(d), where d is directories

function _processCommands(commands) {
    let currentDirectory = null;
    const fileCounts = {}; // Store only the file counts for each directory
    let maxDirectory = '';
    let maxFiles = 0;

    for (let command of commands) {
        const [action, name] = command.split(' ');

        if (action === 'cd') {
            currentDirectory = name;
            // Initialize the file count for the directory if it doesn't exist
            if (!fileCounts[currentDirectory]) {
                fileCounts[currentDirectory] = 0;
            }
        } else if (action === 'touch' && currentDirectory) {
            // Only add the file if it's not already counted in the current directory
            fileCounts[currentDirectory] += 1;

            // Update maxDirectory and maxFiles if the current directory now has more files
            if (fileCounts[currentDirectory] > maxFiles) {
                maxFiles = fileCounts[currentDirectory];
                maxDirectory = currentDirectory;
            }
        }
    }

    return maxDirectory;
}

// Example test case
const commands2 = [
  "cd dir1",
  "touch fileA",
  "cd dir2",
  "touch fileB",
  "touch fileB",
  "cd dir1",
  "touch fileC"
];
console.log(_processCommands(commands2)); // Output should be "dir1"

function __processCommands(commands) {
  const dir_files = {};
  let current_dir = null;

  // For each command in the input, we want to extract the action and the target.
  for (const command of commands) {
    const [action, target] = command.split(" ");
    
    // Decide what each action will be doing. In this case we only have `cd` and `touch`
    if (action === "cd") {
      current_dir = target;
    } else if (action === "touch") {
      // We will be using a set since a list will allow multiple files with the same name.
      if (!dir_files[current_dir]) {
        dir_files[current_dir] = new Set();
      }
      dir_files[current_dir].add(target);
    }
  }

  // We want to iterate through each directory key and see which one of the values has the most files in the set.
  let max_files = 0;
  let max_files_dir = null;
  for (const directory in dir_files) {
    const files = dir_files[directory];
    // Save the directory with the most files as we go through the dict keys.
    if (files.size > max_files) {
      max_files = files.size;
      max_files_dir = directory;
    }
  }

  return max_files_dir;
}
