const Input = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="user-rating">How did you like the service?</label>
        <select name="user-rating" id="user-rating" className="border">
          <option value="" selected hidden disabled>
            Choose an option
          </option>
          <option value="">Dissatisfied (0%)</option>
          <option value="">It was okay (5%)</option>
          <option value="">It was good (10%)</option>
          <option value="">Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="friend-rating">
          How did your friend like the Service?
        </label>
        <select name="friend-rating" id="friend-rating" className="border">
          <option value="" selected hidden disabled>
            Choose an option
          </option>
          <option value="">Dissatisfied (0%)</option>
          <option value="">It was okay (5%)</option>
          <option value="">It was good (10%)</option>
          <option value="">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
