import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';  // Import Axios

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  // Function to validate the password
  const validatePassword = (value) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    if (value.length < minLength) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!hasNumber.test(value)) {
      setPasswordError('Password must contain at least one number');
    } else if (!hasSpecialChar.test(value)) {
      setPasswordError('Password must contain at least one special character');
    } else if (!hasUpperCase.test(value)) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!hasLowerCase.test(value)) {
      setPasswordError('Password must contain at least one lowercase letter');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  // Function to validate the full name
  const validateFullName = (value) => {
    const nameRegex = /^[A-Za-z\s]*$/;

    if (!nameRegex.test(value)) {
      setFullNameError('Full name must contain only alphabetic letters');
    } else {
      setFullNameError('');
    }

    // Capitalize the first letter of each word
    const formattedName = value.replace(/\b\w/g, (char) => char.toUpperCase());
    setFullName(formattedName);
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    validateFullName(value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordError && !fullNameError) {
      try {
        const response = await axios.post('https://your-backend-api.com/register', {
          fullName,
          password
        });
        console.log('Response from server:', response.data);

        // Handle success (e.g., show success message, redirect)
      } catch (error) {
        console.error('Error sending data to the backend:', error);

        // Handle error (e.g., show error message)
      }
    } else {
      console.log('Please fix validation errors before submitting');
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
      <input type="hidden" name="remember" value="true" />

      
      <div className="relative">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          Full Name:
        </label>
        <input
          className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 ${
            fullNameError && 'border-red-500'
          }`}
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        {fullNameError && <p className="text-red-500 text-sm mt-2">{fullNameError}</p>}
      </div>

      
      <div className="mt-8 relative">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          Password
        </label>
        <input
          className={`w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500 ${
            passwordError && 'border-red-500'
          }`}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
      </div>

      
      <div>
        <button
          type="submit"
          className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
          disabled={passwordError || fullNameError} // Disable submit button if there are errors
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
