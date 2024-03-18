const CounterComponent = () => {
  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={handleMinus}
          className={`bg-gray-300 px-2 ${minusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setMinusWiggling(false)}
        >
          -
        </button>
        <p>Counter: {}</p>
        <button
          onClick={handlePlus}
          className={`bg-gray-300 px-2 ${plusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setPlusWiggling(false)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
