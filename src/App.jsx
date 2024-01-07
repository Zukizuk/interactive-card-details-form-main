import "./App.scss";
import Logo from "./images/card-logo.svg";

function App() {
  return (
    <>
      <main className="main">
        <div className="cards__container">
          <div className="back__card">
            <span className="cvc__output">000</span>
          </div>
          <div className="front__card">
            <img src={Logo} alt="" className="logo" />
            <span className="card__number-output">0000 0000 0000 0000</span>
            <div className="name__month">
              <span className="name__output">Jane Appleseed</span>
              <span className="month__output">00/00</span>
            </div>
          </div>
        </div>
        <form onSubmit="#" className="form">
          <div className="input__box">
            <label htmlFor="c-name" className="name__label">
              Cardholder Name
            </label>
            <input
              type="text"
              className="card__name"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className="input__box">
            <label className="number__label"> Card Number</label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="card__number"
            />
          </div>
          <div className="input__box">
            <div className="month__box">
              <label>Exp. Date </label>
              <label>(MM/YY)</label>
              <input type="number" placeholder=" MM" className="month" />
              <input type="number" placeholder="YY" className="year" />
            </div>
            <div className="cvc__box">
              <label>CVC</label>
              <input type="number" placeholder="e.g. 123" className="cvc" />
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </main>
    </>
  );
}

export default App;
