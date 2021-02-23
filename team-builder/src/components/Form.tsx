import { useEffect, useState } from 'react'
import { Form as FormComponent, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { CreateTeamMemberModel, TeamMemberModel, TeamRoles } from '../models/TeamMember'

interface FormProps {
    addMember(data: CreateTeamMemberModel): void
    editMember(data: TeamMemberModel): void
    memberToEdit: TeamMemberModel | null
}

const InitialFormValues: CreateTeamMemberModel = {
    name: '',
    email: '',
    role: TeamRoles.FrontEnd
}

const Form: React.FC<FormProps> = ({ addMember, editMember,  memberToEdit }) => {
    const [formValues, setFormValues] = useState<CreateTeamMemberModel>(InitialFormValues)
    useEffect(() => {
        if (memberToEdit) {
            setFormValues(memberToEdit)
        }
    }, [memberToEdit])

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        if (memberToEdit) {
            editMember({
                id: memberToEdit.id,
                ...formValues
            })
        } else {
            addMember(formValues)
        }
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
                <Button type="submit">{memberToEdit ? 'Edit' : 'Add'} Team Member</Button>
            </FormComponent>
        </Container>
    )
}

export default Form