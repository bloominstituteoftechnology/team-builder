import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required you dingus!')
    .min(3, 'Name has to be 3 chatracters long ya chump!'),
    email: yup 
    .string()
    .email('You gotta be kidding me, enter a valid email!')
    .required('Enter an email ya chump!'),
    role: yup   
    .string()
    .oneOf(['jedi', 'scoundrel', 'general', 'pilot'], 'Role is required!'), 
    terms: yup.boolean(),
})

export default formSchema;