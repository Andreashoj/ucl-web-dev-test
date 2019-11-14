import React, { Component } from "react";
import useSignUpForm from './CustomHooks';

const Form = () => {

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(Form);

  return (
    <form onSubmit={handleSubmit} class="form-vertical">
      <fieldset>
        <h2>Create</h2>
        <div>
          <label for="name">label 1</label>
          <input type="text" name="name" onChange={handleInputChange} value={inputs.firstname} />
        </div>
        <div>
          <label for="company">label 2</label>
          <input type="text" name="company" onChange={handleInputChange} value={inputs.company} />
        </div>
        <div>
          <label for="email">label 3</label>
          <input type="text" name="email" onChange={handleInputChange} value={inputs.email}/>
        </div>
        <div>
          <label for="password">password</label>
          <input type="password" name="password" onChange={handleInputChange} value={inputs.password} />
        </div>
        <button type="submit" class="button" /*value="Create"*/>Create</button>
      </fieldset>
    </form>
  );
};

export default Form;

