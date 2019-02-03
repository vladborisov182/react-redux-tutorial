import React, {Component, Fragment} from 'react';

const options = [
  {
    id: 'carry',
    value: 'Carry',
    title: 'Carry'
  },
  {
    id: 'leader',
    value: 'Leader',
    title: 'Leader'
  },
  {
    id: 'support',
    value: 'Support',
    title: 'Support'
  },
];

class Form extends Component {
  state = {
    inputName: '',
    inputText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    },
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputName: value,
    })
  }

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    })
  }

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value,
    })
  }

  handleShow = (e) => {
    e.preventDefault();
    const { inputName, inputText, selectText } = this.state;
    this.setState({
      inputName: '',
      inputText: '',
      selectText: '',
      showData: {
        name: inputName,
        text: inputText,
        position: selectText,
      },
    })
  }

  render() {
    const { inputName, inputText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return(
      <Fragment>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div>
                <label for="name">Name:</label>
                <input type="text" id="name" className="form-control" value={inputName} onChange={this.handleInputChange} />
              </div>
              <br/>
              <div>
                <label for="text">Textarea:</label>
                <textarea type="text" id="text" className="form-control" value={inputText} onChange={this.handleTextareaChange} />
              </div>
              <br/>
              <select class="form-control" value={selectText} onChange={this.handleSelectChange}>
                {options.map(({ id, value, title }) => (
                  <option key={id} value={value}>{title}</option>
                ))}
              </select>
              <br/>
              <button onClick={this.handleShow} className="btn btn-primary">Submit</button>
            </form>
            <h1>{name}</h1>
            <p>{text}</p>
            <h3>{position}</h3>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Form;