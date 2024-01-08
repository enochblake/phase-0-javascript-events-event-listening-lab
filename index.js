function addingEventListener() {
    const input = document.getElementById('input');
  
    input.addEventListener('click', function() {
      console.log('Input clicked!');
    });
  }
  
  const sinon = require('sinon');
  const { expect } = require('chai');
  
  describe("index.js", () => {
    let input;
  
    beforeEach(function() {
      input = document.createElement('input');
      input.id = 'input';
      document.body.appendChild(input);
  
      sinon.spy(input, 'addEventListener');
    });
  
    afterEach(function() {
      input.remove();
    });
  
    it("binds an event listener in addingEventListener()", () => {
      addingEventListener();
      expect(input.addEventListener.called).to.be.true;
    });
  });
  