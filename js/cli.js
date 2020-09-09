/* global $, localStorage, Shell */

const errors = {
  invalidDirectory: 'Error: not a valid directory',
  noWriteAccess: 'Error: you do not have write access to this directory',
  fileNotFound: 'Error: file not found in current directory',
  fileNotSpecified: 'Error: you did not specify a file'
}

const struct = {
  root: ['about', 'resume', 'contact'],
  projects: ['habitfree', 'mixxer'],
  skills: ['proficient', 'familiar', 'learning']
}

const commands = {}
let systemData = {}
const rootPath = 'users/zolboo1024/root'

const getDirectory = () => localStorage.directory
const setDirectory = (dir) => { localStorage.directory = dir }

// turn on fullscreen
const registerFullscreenToggle = () => {
  $('.button.green').click(() => {
    $('.terminal-window').toggleClass('fullscreen')
  })
}

// create new directory in current directory
commands.mkdir = () => errors.noWriteAccess

// create new directory in current directory
commands.touch = () => errors.noWriteAccess

// remove file from current directory
commands.rm = () => errors.noWriteAccess

// view contents of specified directory
commands.ls = (directory) => {
  if (directory === '..' || directory === '~') {
    return systemData['root']
  }
  return systemData[getDirectory()]
}

// view list of possible commands
commands.help = () => systemData.help

// display current path
commands.path = () => {
  const dir = getDirectory()
  return dir === 'root' ? rootPath : `${rootPath}/${dir}`
}

// see command history
commands.history = () => {
  let history = localStorage.history
  history = history ? Object.values(JSON.parse(history)) : []
  return `<p>${history.join('<br>')}</p>`
}

// move into specified directory
commands.cd = (newDirectory) => {
  const currDir = getDirectory()
  const dirs = Object.keys(struct)
  const newDir = newDirectory ? newDirectory.trim() : ''

  if (dirs.includes(newDir) && currDir !== newDir) {
    setDirectory(newDir)
  } else if (newDir === '' || newDir === '~' || (newDir === '..' && dirs.includes(currDir))) {
    setDirectory('root')
  } else if (newDir !== '.') {
    return errors.invalidDirectory
  }
  return null
}

// display contents of specified file
commands.cat = (filename) => {
  if (!filename) return errors.fileNotSpecified

  const dir = getDirectory()
  const fileKey = filename.split('.')[0]

  if (fileKey in systemData && struct[dir].includes(fileKey)) {
    return systemData[fileKey]
  }

  return errors.fileNotFound
}

// initialize cli
$(() => {
  registerFullscreenToggle()
  const cmd = document.getElementById('terminal')
  const terminal = new Shell(cmd, commands)

  $.ajaxSetup({ cache: false })
  $.get('data/system_data.json', (data) => {
    systemData = data
  })
})
