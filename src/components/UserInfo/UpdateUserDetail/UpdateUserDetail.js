import React, {Component} from 'react';
import './UpdateUserDetail.css'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class UpdateUserDetail extends Component {
    constructor(props){
        super(props);
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.saveUserDetail = this.saveUserDetail.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);
        this.state = {
            formValid: true,
            fields:[
                 {
                    elementConfig: {
                        type: "text",
                        placeholder: 'Title'
                    },
                    validationKey:{
                        required: true,
                        regex: ''
                    },
                    value: '',
                    valid: true,
                    touched: false,
                    errorMessage: 'Please enter the title'
                },
                 {
                    elementConfig: {
                        type: "text",
                        placeholder: 'Body'
                    },
                    validationKey:{
                        regex: ''
                    },
                    value: '',
                    valid: true,
                    touched: false,
                    errorMessage: 'Please enter the body'
                }
            ]
        }
    }

    componentDidMount(){
        let inputFields = [...this.state.fields];
        inputFields.forEach((field, index)=>{
            const value = this.props.post[field.elementConfig.placeholder.toLowerCase()];
            let fields = [...this.state.fields];
            fields[index].value = value;
            return this.setState({
                ...this.state,
                fields: [...fields]
            });
        })

    }

    updateUserInfo(event,index){
        let inputFields = [...this.state.fields];
        const val = event.target.value.trimLeft();
        let formValid = Boolean(val.length);
        inputFields[index].value = val;
        inputFields[index].valid = formValid;
        inputFields[index].touched = true
        let isFormValid = [];
        isFormValid = inputFields.reduce((acc,data)=>{
            const val = data.value.trim();
            acc.push(val)
            return acc;
        },[])

        formValid = Boolean(isFormValid.includes(''));
        this.setState({
            ...this.state,
            fields: [...inputFields],
            formValid: !formValid
        });
    }
    
    cancelUpdate() {
        let fields = [...this.state.fields];
        this.setState({formValid: false, fields: [...fields]});
    }

    saveUserDetail(){
        let fields = [...this.state.fields];
        const {id,userId} = this.props.post;
        let updatedFiled = fields.reduce((acc, data)=>{
            const elementName = data.elementConfig.placeholder.toLowerCase();
            const val = data.value.trim();
            acc[elementName] = val;
            return acc;
        },{})
        updatedFiled['id'] = id;
        updatedFiled['userId']= userId;
        let {formValid} = {...this.state}
        if(formValid)this.props.updateUserDetails(updatedFiled)
    }

    render(){
        const inputFields = [...this.state.fields];
        const {formValid} = {...this.state}
        const style = {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            margin:'10px'
        }
        return (
            <div style={style} className="update-user-detail">
                <div>Edit Form</div>
                {
                inputFields.map((field, index) => {
                    return (
                        <div className="user-info-title" key={index}>
                        <div className="user-title">{field.elementConfig.placeholder}:</div>
                        <div className="user-titleText">
                            <Input
                                 elementConfig= {field.elementConfig}
                                 value={field.value} 
                                 valid={field.valid}
                                 touched={field.touched}
                                 onChange={(e) => this.updateUserInfo(e,index)}
                                 errorMessage={field.errorMessage}
                                   />
                        </div>
                    </div>
                    )
                })
            }
            <div className="user-info-buttons">
                <Button bthType="edit" disabled={!formValid} clicked={this.saveUserDetail}>Save</Button>
                <Button btnType="cancel"  clicked={this.props.cancelEdit}>Cancel</Button>
            </div>
            </div>
        );
    }

}



export default UpdateUserDetail;