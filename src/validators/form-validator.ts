
export const validateEmail = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };
  export const validateSignInForm = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
  
    return errors;
  };
  export const validatePassword = (values: any) => {
    const errors: any = {};
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords not match !"
    }
  
    return errors;
  };
  export const validateSignUpForm = (values: any) => {
    const errors: any = {};
    if (!values.fullname) {
      errors.fullname = 'Required';
    } else if (values.fullname.length > 15) {
      errors.fullname = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords not match !"
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };