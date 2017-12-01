

(function Game() {
    // Elements
    var game = document.getElementById('game');
    var boxes = document.querySelectorAll('li');
    var context = { 
      'player1' : 'x', 
      'player2' : 'o',
    };
    var board = [] 
    var turns;
    var currentContext;
    
    // Constructor
    var init = function() {
        turns = 0;
        
        // Get current context
        currentContext = computeContext();
        
        // Setup 3 x 3 board 
        board[0] = new Array(3);
        board[1] = new Array(3);
        board[2] = new Array(3);
        
        // bind events
        for(var i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', clickHandler, false);
        }
      }
    
    //Keeps track of player's turn
    var computeContext = function() {
        return (turns % 2 == 0) ? context.player1 : context.player2;
    }
    
    // Bind the dom element to the click callback
    var clickHandler = function() {
        this.removeEventListener('click', clickHandler);
        
        this.className = currentContext;
        this.innerHTML = currentContext;
        
        var pos = this.getAttribute('data-pos').split(',');
        board[pos[0]][pos[1]] = computeContext() == 'x' ? 1 : 0;
        
        turns++;
        currentContext = computeContext();
    }
    game && init();
})();
 