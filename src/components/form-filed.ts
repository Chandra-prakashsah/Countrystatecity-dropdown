type FormField = {
    fields: string,
    name: string;
    placeholder: string;
    rules: Record<string, any>;
};

export const formFields: FormField[] = [
    {
        fields: "text",
        name: 'firstName',
        placeholder: 'First Name',
        rules: { required: 'First Name is required' },
    },
    {
        fields: "text",
        name: 'lastName',
        placeholder: 'Last Name',
        rules: { required: 'Last Name is required' },
    },
    {
        fields: "text",
        name: 'email',
        placeholder: 'Email',
        rules: {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
            },
        },
    },
    {
        fields: "text",
        name: 'password',
        placeholder: 'Password',
        rules: { required: 'Password is required' },
    },
    {
        fields: "text",
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        rules: {
            required: 'Confirm Password is required',
            validate: (value: string, allValues: any) => {
                return value === allValues.password || 'Passwords do not match';
            },
        },
    },
    // {
    //     fields: "select",
    //     name: 'country',
    //     placeholder: '',
    //     rules: {
    //         required: 'Country is required',
    //     },
    // },
    // {
    //     fields: "select",
    //     name: 'state',
    //     placeholder: '',
    //     rules: {
    //         required: 'State is required',
    //     },
    // },
    // {
    //     fields: "select",
    //     name: 'city',
    //     placeholder: '',
    //     rules: {
    //         required: 'City is required',
    //     },
    // },
];
