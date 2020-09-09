/* global $, localStorage */

class Shell {
  constructor (term, commands) {
    this.commands = commands
    this.setupListeners(term)
    this.term = term

    localStorage.directory = 'root'
    localStorage.history = JSON.stringify('')
    localStorage.historyIndex = -1 // Solves undefined command on refreshing the website
    localStorage.inHistory = false // To prevent down arrow traversal when not required
    $('.input').focus()
  }

  setupListeners (term) {
    $('#terminal').mouseup(() => $('.input').last().focus())

    term.addEventListener('keyup', (evt) => {
      const keyUp = 38
      const keyDown = 40
      const key = evt.keyCode

      if ([keyUp, keyDown].includes(key)) {
        let history = localStorage.history
        history = history ? Object.values(JSON.parse(history)) : []
        if (key === keyUp) {
          if (localStorage.historyIndex >= 0) {
            if (!localStorage.inHistory) {
              localStorage.inHistory = true
            } else {
              // Prevents repetition of last command while traversing history
              if (localStorage.historyIndex === history.length - 1 && history.length !== 1) {
                localStorage.historyIndex -= 1
              }
            }
            $('.input').last().html(`${history[localStorage.historyIndex]}<span class="end"><span>`)
          }
          // Prevents undefined index
          if (localStorage.historyIndex !== 0) localStorage.historyIndex -= 1
        } else if (key === keyDown) {
          if (localStorage.inHistory && localStorage.historyIndex < history.length) {
            let ret
            if (localStorage.historyIndex > 0) {
              ret = `${history[localStorage.historyIndex]}<span class="end"><span>`
              if (localStorage.historyIndex !== history.length - 1) {
                localStorage.historyIndex = Number(localStorage.historyIndex) + 1
              }
            // Prevents repetition of first command while traversing history
            } else if (localStorage.historyIndex === 0 && history.length > 1) {
              ret = `${history[1]}<span class="end"><span>`
              localStorage.historyIndex = history.length !== 2 ? 2 : 1
            }
            $('.input').last().html(ret)
          }
        }
        evt.preventDefault()
        $('.end').focus()
      }
    })

    term.addEventListener('keydown', (evt) => {
      // a tab is pressed
      if (evt.keyCode === 9) {
        evt.preventDefault()
      // escape key is pressed
      } else if (evt.keyCode === 27) {
        $('.terminal-window').toggleClass('fullscreen')
      } else if (evt.keyCode === 8 || evt.keyCode === 46) {
        // backspace or delete key is pressed
        this.resetHistoryIndex()
      }
    })

    term.addEventListener('keypress', (evt) => {
      if (![9, 27, 37, 38, 39, 40].includes(evt.keyCode)) {
        // excluding all these keys as this event is fired in firefox for arrow an tab keys
        // if input keys are pressed then resetHistoryIndex() is called
        this.resetHistoryIndex()
      }
      if (evt.keyCode === 13) {
        const prompt = evt.target
        const input = prompt.textContent.trim().split(' ')
        const cmd = input[0]
        const args = input[1]

        if (cmd === 'clear') {
          this.clearConsole()
        } else if (cmd && cmd in this.commands) {
          this.runCommand(cmd, args)
          this.resetPrompt(term, prompt)
          $('.root').last().html(localStorage.directory)
        } else {
          this.term.innerHTML += cmd ? 'Error: command not recognized' : '';
          this.resetPrompt(term, prompt)
        }
        evt.preventDefault()
      }
    })
  }

  runCommand (cmd, args) {
    const command = args ? `${cmd} ${args}` : cmd
    this.updateHistory(command)

    const output = this.commands[cmd](args)
    if (output) { this.term.innerHTML += output }
  }

  resetPrompt (term, prompt) {
    const newPrompt = prompt.parentNode.cloneNode(true)
    prompt.setAttribute('contenteditable', false)
    if (this.prompt) {
      newPrompt.querySelector('.prompt').textContent = this.prompt
    }
    term.appendChild(newPrompt)
    newPrompt.querySelector('.input').innerHTML = ''
    newPrompt.querySelector('.input').focus()
  }

  resetHistoryIndex () {
    // Resets history Index and sets goingThroughHistory to false
    let history = localStorage.history
    history = history ? Object.values(JSON.parse(history)) : []
    if (localStorage.goingThroughHistory == true) {
      localStorage.goingThroughHistory = false
    }
    if (history.length == 0) { // case when there is no command in history array
      localStorage.historyIndex = -1
    } else {
      localStorage.historyIndex = history.length - 1 > 0 ? history.length - 1 : 0
    }
  }

  updateHistory (command) {
    let history = localStorage.history
    history = history ? Object.values(JSON.parse(history)) : []

    history.push(command)
    localStorage.history = JSON.stringify(history)
    localStorage.historyIndex = history.length - 1
  }

  clearConsole () {
    $('#terminal').html(
      `<p class="hidden">
        <span class="prompt">
          <span class="root">root</span>
          <span class="tick">❯</span>
        </span>
        <span contenteditable="true" class="input"></span>
      </p>`
    )
    $('.input').focus()
  }
}
