describe('Checker Game Automation', () => {
    beforeEach(() => {
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
    });
  
    it('Plays checkers with assertions', () => {
      cy.contains('Checkers').should('be.visible');
  
      const moves = [
        { start: 'space62', end: 'space73' },
        { start: 'space42', end: 'space53' },
        { start: 'space22', end: 'space13' },
        { start: 'space71', end: 'space53' },
        { start: 'space31', end: 'space42' }
      ];
  
      function makeMove(start, end) {
        cy.get(`[name="${start}"]`).click();
        cy.get(`[name="${end}"]`).click();
        cy.get('#message').should('contain', 'Make a move.');
        cy.wait(2000);
      }
  
      for (const move of moves) {
        makeMove(move.start, move.end);
      }
  
      cy.contains('Restart...').click();
      cy.wait(2000);
      cy.get('#message').should('contain', 'Select an orange piece to move.');
    });
  });
  