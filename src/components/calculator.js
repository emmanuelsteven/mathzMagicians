const Calculator = () => (
  <div className="calApp">
    <div className="renderResult">
      <div className="result">0</div>
    </div>
    <div className="calInputs">
      <div className="inputs">
        <input type="button" value="AC" />
        <input type="button" value="+/-" />
        <input type="button" value="%" />
        <input type="button" className="mathSigns" value="/" />
      </div>
      <div className="inputs">
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" className="mathSigns" value="x" />
      </div>
      <div className="inputs">
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" className="mathSigns" value="-" />
      </div>
      <div className="inputs">
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" className="mathSigns" value="+" />
      </div>
      <div className="inputs secondgrid">
        <input type="button" value="0" />
        <input type="button" value="." />
        <input type="button" className="mathSigns" value="=" />
      </div>
    </div>
  </div>

);

export default Calculator;
