import React, { useState } from "react";

const CalculatePage = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult("0으로 나눌 수 없습니다.");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="calculator-container">
      <h2>계산기</h2>
      <input
        type="number"
        placeholder="첫 번째 숫자"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="두 번째 숫자"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>×</button>
        <button onClick={handleDivision}>÷</button>
      </div>
      {result !== null && (
        <div style={{ marginTop: "10px" }}>
          결과: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default CalculatePage;
