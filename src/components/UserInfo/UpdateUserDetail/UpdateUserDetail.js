import React, {Component} from 'react';

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class UpdateUserDetail extends Component {
    constructor(props){
        super(props);
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.saveUserDetail = this.saveUserDetail.bind(this);
        
        this.state = {
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
                    valid: false,
                    touched: false
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
                    valid: false,
                    touched: false
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
        inputFields[index].value = event.target.value;
        this.setState({
            ...this.state,
            fields: [...inputFields]
        });
    }

    saveUserDetail(){
        let fields = [...this.state.fields];
        const {id,userId} = this.props.post;
        let updatedFiled = fields.reduce((acc, data)=>{
            const elementName = data.elementConfig.placeholder.toLowerCase();
            acc[elementName] = data.value;
            return acc;
        },{})
        updatedFiled['id'] = id;
        updatedFiled['userId']= userId;
        this.props.updateUserDetails(updatedFiled)
    }

    render(){
        const inputFields = [...this.state.fields];
        const style = {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
        }
        return (
            <div style={style}>
                {
                inputFields.map((field, index) => {
                    return (
                        <div className="userInfo--title" key={index}>
                        <div className="user--title">{field.elementConfig.placeholder}:</div>
                        <div className="user--titleText">
                            <Input
                                 elementConfig= {field.elementConfig}
                                 value={field.value} 
                                 valid={field.valid}
                                 touched={field.touched}
                                 onChange={(e) => this.updateUserInfo(e,index)}
                                   />
                        </div>
                    </div>
                    )
                })
            }
            <div className="userInfo-buttons">
                <Button btnType="cancel" clicked={this.props.cancelEdit}>Cancel</Button>
                <Button bthType="edit" clicked={this.saveUserDetail}>Save</Button>
            </div>
            </div>
        );
    }

}



export default UpdateUserDetail;