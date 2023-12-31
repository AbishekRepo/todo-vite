import React, { ChangeEvent, FormEvent } from "react";

function Form({ form, setForm, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={form}
        onChange={(e) => setForm(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
