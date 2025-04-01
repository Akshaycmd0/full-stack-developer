import React from "react";

const InputForm = () => {
  return (
    <form>
      <label>
        Text:
        <input type="text" name="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <label>
        Number:
        <input type="number" name="number" />
      </label>
      <br />
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <br />
      <label>
        File:
        <input type="file" name="file" />
      </label>
      <br />
      <label>
        Checkbox:
        <input type="checkbox" name="checkbox" />
      </label>
      <br />
      <label>
        Radio:
        <input type="radio" name="radio" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
