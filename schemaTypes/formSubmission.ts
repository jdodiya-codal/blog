export default {
  name: 'formSubmission',
  type: 'document',
  title: 'Form Submission',
  fields: [
    {name: 'first_name', type: 'string', title: 'First Name'},
    {name: 'last_name', type: 'string', title: 'Last Name'},
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'country', type: 'string', title: 'Country'},
    {name: 'phone_number', type: 'string', title: 'Phone Number'},
    {name: 'message', type: 'text', title: 'Message'},
    {
      name: 'submittedAt',
      type: 'datetime',
      title: 'Submitted At',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
}
