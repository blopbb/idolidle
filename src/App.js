import { click } from "@testing-library/user-event/dist/click";
import "./index.css";
import { useState } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const [clickAmt, setClickAmt] = useState(1);

  function handleAddMoney(amt) {
    setMoney(money + amt);
  }

  function handleAddClickAmount(amt) {
    setClickAmt(clickAmt + amt);
  }

  return (
    <>
      <Left money={money} onAddMoney={handleAddMoney} clickAmt={clickAmt} />
      <Right
        onAddClick={handleAddClickAmount}
        onAddMoney={handleAddMoney}
        money={money}
      />
    </>
  );
}

function Left({ money, onAddMoney, clickAmt }) {
  return (
    <div className="left">
      <img src="shrek.png" alt="Shrek"></img>
      <h1>
        MONEY: {money}, MONEY PER CLICK: {clickAmt}
      </h1>
      <button onClick={() => onAddMoney(clickAmt)}>CLICK</button>
    </div>
  );
}

function Right({ onAddClick, onAddMoney, money }) {
  return (
    <div className="right">
      <Upgrades onAddClick={onAddClick} onAddMoney={onAddMoney} money={money} />
      <div className="rightbottom"></div>
    </div>
  );
}

function Upgrades({ onAddClick, onAddMoney, money }) {
  return (
    <div className="righttop">
      <div className="upgrades">
        <ul>
          <Upgrade
            onAddClick={onAddClick}
            cost={1}
            onAddMoney={onAddMoney}
            money={money}
            gain={1}
          />
          <Upgrade
            onAddClick={onAddClick}
            cost={5}
            onAddMoney={onAddMoney}
            money={money}
            gain={10}
          />
        </ul>
      </div>
    </div>
  );
}

function Upgrade({ onAddClick, cost, onAddMoney, money, gain }) {
  const [price, setPrice] = useState(cost);
  return (
    <li className="upgrade">
      <div className="upgrade">
        <h1>Add {gain} to click money</h1>
        <button
          onClick={() => {
            if (price <= money) {
              onAddClick(gain);
              onAddMoney(-price);
              setPrice(price * 1.4);
            }
          }}
        >
          Cost: {price}
        </button>
      </div>
    </li>
  );
}

export default App;
