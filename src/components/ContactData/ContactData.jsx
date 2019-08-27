import React, { Component } from 'react';
// import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
// import axios from '../../../axios-orders';
// import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                name:'username',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 15
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                name: 'phone',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 11,
                    maxLength: 11
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 8
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 9
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            // deliveryMethod: {
            //     elementType: 'select',
            //     elementConfig: {
            //         options: [
            //             { value: 'fastest', displayValue: 'Fastest' },
            //             { value: 'cheapest', displayValue: 'Cheapest' }
            //         ]
            //     },
            //     value: '',
            //     validation: {},
            //     valid: true
            // }
        },
        loading: false,
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    onHandleSubmit = (e) => {
        const userdetail = {
            password: this.state.password,
            username: this.state.username,
            phoneNumber: this.state.phoneNumber
        }
        alert("You Have Successfully Registered")
        axios.post("/users", userdetail).then(resp => { console.log(resp) }).catch(e => console.log(e));

        this.props.history.push("/")
    }

    checkValidity(value, rules) {
        let isValid = true;
        // if(!rules){
        //     return true
        // }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }
  
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <input type="submit" onClick={this.onHandleSubmit} className="btnRegister" value="Register" />
            </form>
        );
        // let form = (
        //     <form>
        //         <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        //         <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
        //         <Input inputtype="input" type="text" name="street" placeholder="Street" />
        //         <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
        //         <Button btnType="Success" clicked={this.orderHandle}>ORDER</Button>
        //     </form>
        // );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
