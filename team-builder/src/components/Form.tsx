import { useState } from 'react'
import { Form as FormComponent, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { CreateTeamMemberModel, TeamRoles } from '../models/TeamMember'

interface FormProps {
    onSubmit: (data: CreateTeamMemberModel) => void
}

const InitialFormValues: CreateTeamMemberModel = {
    name: '',
    email: '',
    role: TeamRoles.FrontEnd
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [formValues, setFormValues] = useState<CreateTeamMemberModel>(InitialFormValues)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(evt.target.value)
        const { id, value } = evt.target
        if (id in formValues) {
            setFormValues({ 
                ...formValues,
                [id]: value
            })
        }
    }

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        onSubmit(formValues)
        setFormValues(InitialFormValues)
    }

    return (
        <Container style={{
            marginBottom: '1rem'
        }}>    
            <FormComponent onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" id="name" value={formValues.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" value={formValues.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="role">
                        <select name="role" id="role" value={formValues.role} onChange={handleChange}>
                            <option value={TeamRoles.FrontEnd}>{TeamRoles.FrontEnd}</option>
                            <option value={TeamRoles.BackEnd}>{TeamRoles.BackEnd}</option>
                            <option value={TeamRoles.ProjectManager}>{TeamRoles.ProjectManager}</option>
                            <option value={TeamRoles.UIDesign}>{TeamRoles.UIDesign}</option>
                            <option value={TeamRoles.UXDesign}>{TeamRoles.UXDesign}</option>
                        </select>
                    </Label>
                </FormGroup>
                <Button type="submit">Add Team Member</Button>
            </FormComponent>
        </Container>
    )
}

export default Form