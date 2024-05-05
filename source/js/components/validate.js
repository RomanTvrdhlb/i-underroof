import { validateForms } from '../functions/validate-forms';
import vars from '../_vars';
import { modalClickHandler } from '../components/modals'
import { removeClassInArray, addCustomClass, removeCustomClass } from "../functions/customFunctions";


const rules1 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      },
      {
        rule: 'email',
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mess',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill out your message!',
        showErrorMessage: false,
      }
    ]
  },
];

const rules2 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-adress',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your adress!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      },
      {
        rule: 'email',
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mess',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill out your message!',
        showErrorMessage: false,
      }
    ]
  },
];

const rules3 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mess',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill out your message!',
        showErrorMessage: false,
      }
    ]
  },
];

const rules4 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      },
      {
        rule: 'email',
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-adress',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your adress!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-phone2',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-mail2',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      },
      {
        rule: 'email',
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-name2',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-adress2',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your adress!',
        showErrorMessage: false,
      }
    ]
  },
];

const rules5 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field must contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      },
      {
        rule: 'email',
        errorMessage: 'Fill in your mail!',
        showErrorMessage: false,
      }
    ]
  },
];

const rules6 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'Enter the correct phone number',
    showErrorMessage: false,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Remember your phone!',
        showErrorMessage: false,
      },
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'The field can contain at least 3 characters',
        showErrorMessage: false,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in your full name!',
        showErrorMessage: false,
      }
    ]
  },
];


const afterForm = () => {
  modalClickHandler('success');
};

const error = () => {
  console.log('Ошибка отправки')
};

if(document.querySelector('.order-validate')){
  validateForms(document.querySelector('.order-validate'), rules1, afterForm, error);
}

if(document.querySelector('.comand-validate')){
  validateForms(document.querySelector('.comand-validate'), rules2, afterForm, error);
}

if(document.querySelector('.ceo-validate')){
  validateForms(document.querySelector('.ceo-validate'), rules3, afterForm, error);
}
if(document.querySelector('.join__form')){
  validateForms(document.querySelector('.join__form'), rules4, afterForm, error);
}

if(document.querySelector('.bonus-validate')){
  validateForms(document.querySelector('.bonus-validate'), rules5, afterForm, error);
}

if(document.querySelector('.estimate-validate')){
  validateForms(document.querySelector('.estimate-validate'), rules6, afterForm, error);
}


  



















