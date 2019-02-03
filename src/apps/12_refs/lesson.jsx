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

  handleChange = ({ target: { value } }) => {
    this.setState({
      inputName: this.inputRef.current.value,
      inputText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
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

  componentWillMount() {
    console.log('CWM', this.inputRef)
    console.log('CWM', this.textareaRef)
    console.log('CWM', this.selectRef)
  }

  componentDidMount() {
    console.log('CDM', this.inputRef)
    console.log('CDM', this.textareaRef)
    console.log('CDM', this.selectRef)
  }

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  render() {
    const { inputName, inputText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return(
      <Fragment>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input ref={this.inputRef} type="text" id="name" className="form-control" value={inputName} onChange={this.handleChange} />
              </div>
              <br/>
              <div>
                <label htmlFor="text">Textarea:</label>
                <textarea ref={this.textareaRef} type="text" id="text" className="form-control" value={inputText} onChange={this.handleChange} />
              </div>
              <br/>
              <select ref={this.selectRef} className="form-control" value={selectText} onChange={this.handleChange}>
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