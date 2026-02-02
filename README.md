# COMP 324 A2 - Signup Form

## 1) What your form is for (one sentence)
  i. This form allows users to create an account by entering their name, email, and password, while providing clear validation feedback to help users correct mistakes.

## 2) List your inputs + validation rules
  i. Name input: required and must be at least 3 characters long.
  ii. Email input: required and must be a valid email format (e.g., name@example.com).
  iii. Password input: required and must be at least 8 characters long.

## 3) How feedback is presented (where do errors/success appear?)
  i. Each input has a dedicated error message displayed directly below the field using a <p> element.
  ii. When a field is invalid, JavaScript marks it as invalid and shows an error message next to the input so screen readers can read the issues.
  iii. When the form submits successfully, a confirmation message is shown in a status element so screen readers announce it.

## 4) One DevTools insight you used (Console/Elements/Styles)
  i. I used the DevTools Console to confirm that the submit handler was running and that errors were being triggered correctly. I used the Elements panel to verify that aria-invalid, aria-describedby, and CSS classes were applied and removed as expected during validation.
