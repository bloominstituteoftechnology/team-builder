import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const Success = () => (
  <Form>
    <Message
      success
      header='Form Completed'
      content="Thank you for your information!"
    />
    <Button>Submit</Button>
  </Form>
)

export default Success