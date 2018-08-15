import React, { Component } from 'react';

class Form extends React.Component{
    render(){
        return(
<form>
  <label>
    <input type="text" name="Ciudad" />
    <input type="text" name="Pais" />
  </label>
  <input type="submit" value="Obtener Clima" />
</form>
        )
    }
}

export default Form;